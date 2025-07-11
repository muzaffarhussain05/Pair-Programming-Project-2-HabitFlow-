// File: src/components/HabitSidebar.jsx
import { useContext } from "react";
import BedtimeButton from "./BedtimeButton";
import { FaCheck, FaUndoAlt } from "react-icons/fa";
import { HabitContext } from "../context/HabitContext";

const HabitSidebar = () => {
  const { habits, toggleHabit } = useContext(HabitContext);

  const today = new Date().toISOString().slice(0, 10);

  const getProgressPercent = () => {
    const total = habits.length || 1;
    const completed = habits.filter(
      (habit) => habit.progress[today] === true
    ).length;
    return Math.round((completed / total) * 100);
  };

  const toggleCompletion = (habitId) => {
    toggleHabit(habitId, today);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl w-full lg:w-80">
      <h3 className="font-semibold mb-4 text-gray-800">
        {new Date().toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </h3>

      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className={`bg-blue-600 h-full transition-all duration-300 ease-in-out`}
          style={{ width: `${getProgressPercent()}%` }}
        ></div>
      </div>

      <div className="text-sm text-gray-500 mb-6">
        {getProgressPercent()}% of daily goal achieved
      </div>

      <BedtimeButton />

      <div className="space-y-4 text-white mt-6">
        {habits.map((habit) => {
          const isDone = habit.progress[today] === true;
          return (
            <div
              key={habit.id}
              className={`p-3 rounded-lg shadow flex items-center justify-between border text-white`}
              style={{ backgroundColor: habit.color }}
            >
              <div>
                <p className="font-medium text-xl mb-4">{habit.title}</p>
                <button
                  onClick={() => toggleCompletion(habit.id)}
                  className={`text-sm mt-1 font-bold text-white`}
                >
                  {isDone ? (
                    <div className="flex items-center gap-1 bg-wh text-xs">
                      <FaUndoAlt /> Undo
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 hover:underline text-xs">
                      <FaCheck /> Mark Completed
                    </div>
                  )}
                </button>
              </div>
              <span
                className="w-2 h-10 rounded-full"
                style={{ backgroundColor: habit.color }}
              ></span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HabitSidebar;