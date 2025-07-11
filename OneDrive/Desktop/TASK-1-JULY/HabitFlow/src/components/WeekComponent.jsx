// File: src/components/WeekComponent.jsx
import React, { useContext, useState } from "react";
import { HabitContext } from "../context/HabitContext";
import DateRangeNav from "./DateRangeNav";

export default function WeekComponent() {
  const { habits } = useContext(HabitContext);

  const [weekStart, setWeekStart] = useState(() => {
    const today = new Date();
    const dayIdx = (today.getDay() + 6) % 7;
    today.setDate(today.getDate() - dayIdx);
    today.setHours(0, 0, 0, 0);
    return today;
  });

  

  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    return d;
  });

  const isoDates = weekDates.map((d) => d.toISOString().slice(0, 10));
  const dayLabels = weekDates.map((d) =>
    d.toLocaleDateString("en-US", { weekday: "short" })
  );

  const prevWeek = () => {
    const prev = new Date(weekStart);
    prev.setDate(prev.getDate() - 7);
    setWeekStart(prev);
  };

  const nextWeek = () => {
    const next = new Date(weekStart);
    next.setDate(next.getDate() + 7);
    setWeekStart(next);
  };

  return (
    <>
  { !habits || habits.length === 0 ? (<p className="text-gray-500">No habits yet.</p>):""}
      {/* DateRangeNav outside box */}
      <DateRangeNav
        start={weekDates[0].toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
        end={weekDates[6].toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
        onPrev={prevWeek}
        onNext={nextWeek}
      />

      {/* Table inside styled box */}
      <div className="ring-1 ring-gray-200 rounded-lg overflow-x-auto mt-4">
        <table className="min-w-full text-sm">
          <thead className="bg-white">
            <tr className="[&>th]:py-3 [&>th]:px-4 [&>th]:font-medium">
              <th></th>
              {dayLabels.map((lbl) => (
                <th key={lbl}>{lbl}</th>
              ))}
              <th>Streak</th>
            </tr>
          </thead>
          <tbody>
            {habits.map((h) => {
              const completedCount = isoDates.filter((date) => h.progress?.[date])
                .length;
              return (
                <tr key={h.id} className="[&>td]:py-3 [&>td]:px-4 odd:bg-gray-50">
                  <td className="flex items-center gap-2">
                    <span
                      className="h-3 w-3 rounded-full inline-block"
                      style={{ backgroundColor: h.color }}
                    />
                    {h.title}
                  </td>
                  {isoDates.map((date) => {
                    const done = h.progress?.[date] === true;
                    return (
                      <td key={date} className="text-center">
                        <span
                          className={`mx-auto h-4 w-4 inline-block rounded-sm ${
                            done ? "bg-blue-600" : "bg-gray-200 opacity-60"
                          }`}
                        />
                      </td>
                    );
                  })}
                  <td className="text-center text-gray-700 font-medium">
                    {completedCount}/{isoDates.length}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
