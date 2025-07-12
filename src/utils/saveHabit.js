// src/utils/saveHabit.js
import { db, auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export const saveHabitForUser = async (habit) => {
  const user = auth.currentUser;
  if (!user) {
    console.error("No user logged in");
    return;
  }

  try {
    const habitRef = collection(db, "users", user.uid, "habits");
    await addDoc(habitRef, {
      ...habit,
      createdAt: new Date().toISOString(),
    });
    console.log("Habit saved for:", user.email);
  } catch (err) {
    console.error("Failed to save habit:", err);
  }
};
