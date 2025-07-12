// File: src/components/WeekComponent.jsx
import React, { useContext, useState } from "react";
import { HabitContext } from "../context/HabitContext";
import DateRangeNav from "./DateRangeNav";
import getLocalIsoDate from "../utils/getLocalIsoDate";

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

  const isoDates = weekDates.map((d) => getLocalIsoDate(d));
  const dayLabels = weekDates.map((d) =>
    d.toLocaleDateString("en-US", { weekday: "short" })
  );

  const prevWeek = () =>
    setWeekStart((d) => new Date(d.setDate(d.getDate() - 7)));
  const nextWeek = () =>
    setWeekStart((d) => new Date(d.setDate(d.getDate() + 7)));

  const weekStartTimestamp = weekDates[0].setHours(0, 0, 0, 0);
  const weekEndTimestamp = weekDates[6].setHours(23, 59, 59, 999);
  const habitsThisWeek = habits.filter(
    (h) => h.createdAt >= weekStartTimestamp && h.createdAt <= weekEndTimestamp
  );

  return (
    <>
      {habitsThisWeek.length === 0 && (
        <p className="text-gray-500 text-sm">No habits in this week range.</p>
      )}

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

      {/* 🔹 Table layout for md+ screens */}
      <div className="hidden md:block mt-4 ring-1 ring-gray-200 rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-white">
            <tr className="[&>th]:py-2 [&>th]:px-3 [&>th]:font-medium text-xs sm:text-sm">
              <th></th>
              {dayLabels.map((lbl) => (
                <th key={lbl} className="text-center">
                  {lbl}
                </th>
              ))}
              <th className="text-center">Streak 🔥</th>
            </tr>
          </thead>

          <tbody>
            {habitsThisWeek.map((h) => (
              <tr key={h.id} className="[&>td]:py-2 [&>td]:px-3 odd:bg-gray-50">
                <td className="flex items-center gap-2 text-sm">
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

                <td className="text-center text-gray-700 font-semibold">
                  {h.streak ?? 0}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔸 Mobile-friendly card layout */}
      <div className="mt-4 space-y-4 md:hidden">
        {habitsThisWeek.map((h) => (
          <div
            key={h.id}
            className="rounded-lg border shadow-sm p-4 bg-white"
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="h-3 w-3 rounded-full inline-block"
                style={{ backgroundColor: h.color }}
              />
              <span className="text-sm font-medium text-gray-900">
                {h.title}
              </span>
              <span className="ml-auto text-xs text-orange-600 font-semibold">
                🔥 {h.streak ?? 0}
              </span>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-700">
              {isoDates.map((date, idx) => {
                const done = h.progress?.[date] === true;
                return (
                  <div key={date} className="flex flex-col items-center">
                    <span className="text-[11px] font-medium">
                      {dayLabels[idx]}
                    </span>
                    <span
                      className={`h-4 w-4 rounded-sm mt-1 ${
                        done ? "bg-blue-600" : "bg-gray-300 opacity-60"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
