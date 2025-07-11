import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";
import { FaRegMoon } from "react-icons/fa";

export default function BedtimeButton() {
  const { bedtime, setBedtime, getTimeUntilBedtime } = useContext(HabitContext);

  const handleClick = () => {
    const time = prompt("Enter your bedtime (HH:MM)", bedtime || "22:30");
    if (time) setBedtime(time);
  };

  const timeLeft = getTimeUntilBedtime();

  return (
    <div className="mb-10">
      <button
        onClick={handleClick}
        className="flex items-center justify-center gap-3 py-4 w-full rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-500 transition"
      >
        <FaRegMoon className="text-2xl" />
        {bedtime ? `Bedtime: ${bedtime}` : "Add Your Bedtime"}
      </button>

      {bedtime && timeLeft && (
        <div className="text-sm text-gray-700 text-center mt-2">
          Time left: {timeLeft.hours}h {timeLeft.minutes}m
        </div>
      )}
    </div>
  );
}
