// File: src/components/MonthlyCalendar.jsx
import { useContext, useState, useMemo } from "react";
import { HabitContext } from "../context/HabitContext";
import DateRangeNav from "./DateRangeNav";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Get Monday-based index: Mon 0 … Sun 6
const weekdayIdx = (date) => (date.getDay() + 6) % 7;

export default function MonthlyCalendar() {
  const { habits } = useContext(HabitContext);

  // Track which month/year we’re viewing
  const [viewDate, setViewDate] = useState(() => {
    const d = new Date();
    d.setDate(1); // first of current month
    d.setHours(0, 0, 0, 0);
    return d;
  });

  // Memo so calendar regenerates only when viewDate or habits change
  const { cells, year, monthLabel } = useMemo(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth(); // 0-11

    const firstOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const offset = weekdayIdx(firstOfMonth); // leading blank cells

    // Build progressData map
    const progressData = {};
    for (let day = 1; day <= daysInMonth; day++) {
      const iso = new Date(year, month, day)
        .toISOString()
        .slice(0, 10); // YYYY-MM-DD
      const total = habits.length || 1;
      const completed = habits.filter((h) => h.progress?.[iso]).length;
      progressData[iso] = `${Math.round((completed / total) * 100)}%`;
    }

    // Build calendar cell objects
    const cells = [];
    for (let i = 0; i < offset; i++) cells.push(null);
    for (let day = 1; day <= daysInMonth; day++) {
      const iso = new Date(year, month, day).toISOString().slice(0, 10);
      cells.push({ day, iso, progress: progressData[iso] });
    }

    const monthLabel = viewDate.toLocaleDateString("en-US", {
      month: "long",
    });

    return { cells, year, monthLabel };
  }, [viewDate, habits]);

  const todayIso = new Date().toISOString().slice(0, 10);

  const prevMonth = () => {
    const d = new Date(viewDate);
    d.setMonth(d.getMonth() - 1);
    setViewDate(d);
  };
  const nextMonth = () => {
    const d = new Date(viewDate);
    d.setMonth(d.getMonth() + 1);
    setViewDate(d);
  };

  return (
    <div>
      {/* Month navigation */}
      <DateRangeNav
        start={`${monthLabel} ${year}`}
        end={""}
        onPrev={prevMonth}
        onNext={nextMonth}
      />

      <div className="grid grid-cols-7 gap-px border border-blue-100 text-center text-sm text-blue-600 select-none mt-4">
        {/* Headers */}
        {daysOfWeek.map((d) => (
          <div key={d} className="py-2 font-semibold border border-blue-100">
            {d}
          </div>
        ))}

        {/* Date cells */}
        {cells.map((cell, idx) => (
          <div
            key={idx}
            className={`aspect-square border border-blue-100 flex items-center justify-center ${
              cell?.iso === todayIso ? "bg-green-500 text-black" : "text-gray-400"
            }`}
          >
            {cell ? (
              <div className="flex flex-col items-center justify-between h-full py-1">
                <div>{cell.day}</div>
                <div className="text-xs font-semibold text-blue-600 mt-auto">
                  {cell.progress}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
