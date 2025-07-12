import { useContext, useState, useMemo } from "react";
import { HabitContext } from "../context/HabitContext";
import DateRangeNav from "./DateRangeNav";

export default function YearComponent() {
  const { habits } = useContext(HabitContext);
  const [viewYear, setViewYear] = useState(new Date().getFullYear());

  const prevYear = () => setViewYear((y) => y - 1);
  const nextYear = () => setViewYear((y) => y + 1);

  const filteredAndSorted = useMemo(() => {
    const start = new Date(viewYear, 0, 1).getTime();
    const end = new Date(viewYear + 1, 0, 1).getTime();

    return [...habits]
      .filter((h) => h.createdAt >= start && h.createdAt < end)
      .sort((a, b) => (b.streak ?? 0) - (a.streak ?? 0));
  }, [habits, viewYear]);

  return (
    <div className="space-y-6">
      {/* Always show navigation */}
      <DateRangeNav
        start={`${viewYear}`}
        end=""
        onPrev={prevYear}
        onNext={nextYear}
      />

      {/* Conditional habit list or message */}
      {filteredAndSorted.length === 0 ? (
        <p className="text-gray-500">No habits created in {viewYear}.</p>
      ) : (
        filteredAndSorted.map((habit) => (
          <div
            key={habit.id}
            className="flex items-center gap-3 p-4 rounded-lg shadow border"
          >
            <span
              className="inline-block h-4 w-4 rounded-full"
              style={{ backgroundColor: habit.color }}
            />
            <span className="flex-1 text-gray-800 font-medium">
              {habit.title}
            </span>
            <span className="text-sm font-bold text-orange-600">
              {habit.streak ?? 0}&nbsp;🔥
            </span>
          </div>
        ))
      )}
    </div>
  );
}
