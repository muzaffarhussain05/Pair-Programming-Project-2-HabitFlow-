// File: src/components/BedtimeButton.jsx
import { useState, useContext } from "react";
import { FaRegMoon } from "react-icons/fa";
import { HabitContext } from "../context/HabitContext";
import BedtimeModal from "./BedtimeModal";

export default function BedtimeButton() {
  const { bedtime, updateBedtime, getTimeUntilBedtime } = useContext(HabitContext);
  const [modalOpen, setModalOpen] = useState(false);
  const timeLeft = getTimeUntilBedtime();

  return (
    <div className="mb-10">
      <button
        onClick={() => setModalOpen(true)}
        className={`flex items-center justify-center gap-3 py-4 w-full rounded-lg text-white font-semibold shadow transition 
          ${bedtime ? "bg-yellow-500 hover:bg-yellow-400" : "bg-indigo-600 hover:bg-indigo-500"}`}
      >
        <FaRegMoon className="text-2xl" />
        {bedtime ? `Change Bedtime: ${bedtime}` : "Add Your Bedtime"}
      </button>

      {bedtime && timeLeft && (
        <div className="text-sm text-gray-700 text-center mt-2">
          Time left: {timeLeft.hours}h {timeLeft.minutes}m
        </div>
      )}

      <BedtimeModal
        isOpen={modalOpen}
        initialValue={bedtime || "22:30"}
        onClose={() => setModalOpen(false)}
        onSave={updateBedtime}
      />
    </div>
  );
}
