import { useContext } from "react";
import { FaRegMoon } from "react-icons/fa";
import { HabitContext } from "../context/HabitContext";

export default function GreetingHeader({ user = "muzaffar" }) {
  const { bedtime, setBedtime, getTimeUntilBedtime } = useContext(HabitContext);

  const handleSetBedtime = () => {
    const input = prompt("Enter your bedtime (HH:MM)", bedtime || "22:30");
    if (input) setBedtime(input);
  };

  const timeLeft = getTimeUntilBedtime();

  return (
    <header className="mb-4">
      <h1 className="text-3xl md:text-4xl font-semibold">
        Good afternoon, <span className="capitalize">{user}</span>
      </h1>

      <button
        onClick={handleSetBedtime}
        className="mt-2 flex items-center gap-2 text-blue-600 hover:underline"
      >
        <FaRegMoon className="text-lg" />
        {bedtime
          ? `Time left: ${timeLeft?.hours ?? "--"}h ${timeLeft?.minutes ?? "--"}m`
          : "Add Your Bedtime"}
      </button>
      
    </header>
  );
}
