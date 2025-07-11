// File: src/components/YearComponent.jsx
import { useContext, useState, useMemo } from "react";
import { HabitContext } from "../context/HabitContext";
import DateRangeNav from "./DateRangeNav";

export default function YearComponent() {
  const { habits } = useContext(HabitContext);
  const [viewYear, setViewYear] = useState(new Date().getFullYear());

  const prevYear = () => setViewYear((y) => y - 1);
  const nextYear = () => setViewYear((y) => y + 1);

  const filteredHabits = useMemo(() => {
    return habits.map((habit) => {
      const entries = Object.entries(habit.progress || {}).filter(([date]) =>
        date.startsWith(viewYear.toString())
      );
      const completed = entries.filter(([, done]) => done === true).length;
      const total = entries.length;
      return { ...habit, completed, total };
    });
  }, [habits, viewYear]);

  if (!habits || habits.length === 0)
    return <p className="text-gray-500">No habits yet.</p>;

  return (
    <div className="space-y-6">
      {/* Year nav */}
      <DateRangeNav
        start={`${viewYear}`}
        end=""
        onPrev={prevYear}
        onNext={nextYear}
      />

      {/* Habit list */}
      {filteredHabits.map((habit) => (
        <div
          key={habit.id}
          className="flex items-center gap-3 p-4 rounded-lg shadow border"
        >
          <span
            className="inline-block h-4 w-4 rounded-full"
            style={{ backgroundColor: habit.color }}
          ></span>
          <span className="text-gray-800 font-medium text-base flex-1">
            {habit.title}
          </span>
          <span className="text-gray-700 font-semibold text-sm">
            {habit.completed}/{habit.total}
          </span>
        </div>
      ))}
    </div>
  );
}
