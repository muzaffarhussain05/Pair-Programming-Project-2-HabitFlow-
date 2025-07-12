// src/utils/getHabits.js
import { db, auth } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const getHabitsForUser = async () => {
  const user = auth.currentUser;
  if (!user) return [];

  const habitsRef = collection(db, "users", user.uid, "habits");
  const snapshot = await getDocs(habitsRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
