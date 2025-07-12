import React, { useContext, useState } from "react";
import WeekComponent from "./WeekComponent";
import MonthlyCalendar from "./MonthlyCalendar";
import YearComponent from "./YearComponent";
import AddHabit from "./AddHabit";
import { HabitContext } from "../context/HabitContext"; // adjust path

const HabitGrid = () => {
  const { habits } = useContext(HabitContext); // 👈 Use context here
  const [viewMode, setViewMode] = useState("week");

  return (
    <div>
      {/* Tabs */}
      <div className="flex md:flex-row  flex-col gap-2 md:gap-7 mb-6 items-center">
        <div>
          {["week", "month", "year"].map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-4 py-2 rounded font-semibold border ${
                viewMode === mode
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600"
              }`}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </div>
        <div className="md:order-2 order-1">
          <AddHabit />
        </div>
      </div>

      {viewMode === "week" && <WeekComponent habits={habits} />}
      {viewMode === "month" && <MonthlyCalendar habits={habits} />}
      {viewMode === "year" && <YearComponent habits={habits} />}
    </div>
  );
};

export default HabitGrid;
