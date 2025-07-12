// File: src/context/HabitContext.jsx
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import calculateStreak from "../utils/calculateStreak";
import { createContext, useEffect, useState } from "react";
import { db } from "../components/firebase";
import { useAuth } from "./AuthContext";
import getLocalIsoDate from "../utils/getLocalIsoDate";
import { toast } from "react-toastify";

export const HabitContext = createContext();

const HabitProvider = ({ children }) => {
  const { user, loading: authLoading } = useAuth();

  const [habits, setHabits] = useState([]);
  const [bedtime, setBedtime] = useState(
    () => localStorage.getItem("bedtime") || null
  );
  const [quote, setQuote] = useState("");

  /* ───────────────  Load Habits from Firestore  ─────────────── */
  useEffect(() => {
    if (authLoading || !user) return;

    const q = query(
      collection(db, "users", user.uid, "habits"),
      orderBy("createdAt")
    );

    const unsub = onSnapshot(
      q,
      (snap) => {
        const data = snap.docs.map((doc) => {
          const habit = { id: doc.id, ...doc.data() };
          if (!habit.progress) habit.progress = {};
          habit.streak = calculateStreak(habit.progress);
          return habit;
        });
        setHabits(data);
      },
      (error) => {
        toast.error("Error loading habits: " + error.message);
      }
    );

    return unsub;
  }, [user, authLoading]);

  /* ───────────────  Load Bedtime from Firestore  ─────────────── */
  useEffect(() => {
    if (authLoading || !user) return;

    const userRef = doc(db, "users", user.uid);
    const unsub = onSnapshot(
      userRef,
      (snap) => {
        if (snap.exists()) {
          setBedtime(snap.data().bedtime || null);
        }
      },
      (error) => {
        toast.error("Failed to fetch bedtime: " + error.message);
      }
    );

    return unsub;
  }, [user, authLoading]);

  /* ───────────────  Fetch Motivational Quote  ─────────────── */
  useEffect(() => {
    fetch("https://zenquotes.io/api/random")
      .then((res) => res.json())
      .then((data) => {
        if (data && data[0] && data[0].q && data[0].a) {
          setQuote(`${data[0].q} — ${data[0].a}`);
        }
      })
      .catch(() => setQuote("Stay consistent. You’ve got this!"));
  }, []);

  /* ───────────────  Add Habit  ─────────────── */
  const addHabit = async (habit) => {
    if (!user) {
      toast.warning("Please login to add a habit.");
      return;
    }

    const newHabit = {
      ...habit,
      progress: {},
      streak: 0,
      createdAt: Date.now(),
    };

    try {
      await addDoc(collection(db, "users", user.uid, "habits"), newHabit);
      toast.success("Habit added successfully!");
    } catch (error) {
      toast.error("Failed to add habit: " + error.message);
    }
  };

  /* ───────────────  Toggle Progress  ─────────────── */
  const toggleHabit = async (habitId, rawDate = null) => {
    if (!user) return;

    const date = rawDate || getLocalIsoDate();
    const habit = habits.find((h) => h.id === habitId);
    if (!habit) return;

    const currentlyDone = !!habit.progress?.[date];
    const newValue = !currentlyDone;
    const newProgress = {
      ...habit.progress,
      [date]: newValue,
    };

    const updatedStreak = calculateStreak(newProgress);
    const ref = doc(db, "users", user.uid, "habits", habitId);

    // Optimistic UI update
    setHabits((prev) =>
      prev.map((h) =>
        h.id === habitId
          ? { ...h, progress: newProgress, streak: updatedStreak }
          : h
      )
    );

    try {
      await updateDoc(ref, {
        [`progress.${date}`]: newValue,
        streak: updatedStreak,
      });
      toast.success(newValue ? "Marked as completed." : "Marked as incomplete.");
    } catch (err) {
      try {
        await setDoc(
          ref,
          {
            progress: { [date]: newValue },
            streak: updatedStreak,
          },
          { merge: true }
        );
        toast.success(newValue ? "Marked as completed." : "Marked as incomplete.");
      } catch (error) {
        toast.error("Failed to update habit progress: " + error.message);
      }
    }
  };

  /* ───────────────  Update Bedtime (Local + Firestore)  ─────────────── */
  const updateBedtime = async (time) => {
    setBedtime(time);

    if (user) {
      const userRef = doc(db, "users", user.uid);
      try {
        await updateDoc(userRef, { bedtime: time });
        toast.success("Bedtime updated!");
      } catch {
        try {
          await setDoc(userRef, { bedtime: time }, { merge: true });
          toast.success("Bedtime saved to your profile.");
        } catch (error) {
          toast.error("Failed to save bedtime: " + error.message);
        }
      }
    } else {
      localStorage.setItem("bedtime", time || "");
      toast.info("Bedtime saved locally.");
    }
  };

  /* ───────────────  Persist bedtime for guests only  ─────────────── */
  useEffect(() => {
    if (!user) {
      localStorage.setItem("bedtime", bedtime || "");
    }
  }, [bedtime, user]);

  const getTimeUntilBedtime = () => {
    if (!bedtime) return null;
    const [h, m] = bedtime.split(":" ).map(Number);
    const now = new Date();
    const target = new Date();
    target.setHours(h, m, 0, 0);
    if (target < now) target.setDate(target.getDate() + 1);
    const diff = target - now;
    return {
      hours: Math.floor(diff / 3_600_000),
      minutes: Math.floor((diff / 60_000) % 60),
    };
  };

  return (
    <HabitContext.Provider
      value={{
        habits,
        addHabit,
        toggleHabit,
        bedtime,
        updateBedtime,
        getTimeUntilBedtime,
        quote,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export default HabitProvider;
