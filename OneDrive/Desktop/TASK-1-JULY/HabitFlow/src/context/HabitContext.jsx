// File: src/context/HabitContext.jsx
import { createContext, useState, useEffect } from "react";

export const HabitContext = createContext();

const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const [bedtime, setBedtime] = useState(null); // e.g. "22:30"
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("habits")) || [];
    setHabits(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habit) => setHabits((prev) => [...prev, habit]);

  const toggleHabit = (habitId, date) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === habitId
          ? {
              ...habit,
              progress: {
                ...habit.progress,
                [date]: !habit.progress[date],
              },
            }
          : habit
      )
    );
  };
  const getTimeUntilBedtime = () => {
    if (!bedtime) return null;
    const [hours, minutes] = bedtime.split(":").map(Number);
    const now = new Date();
    const target = new Date();
    target.setHours(hours, minutes, 0, 0);
    if (target < now) target.setDate(target.getDate() + 1); // for next day
    const diff = target - now;
    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff / (1000 * 60)) % 60);
    return { hours: h, minutes: m };
  };

  return (
    <HabitContext.Provider
      value={{
        habits,
        addHabit,
        toggleHabit,
        getTimeUntilBedtime,
        bedtime,
        setBedtime,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export default HabitProvider;
