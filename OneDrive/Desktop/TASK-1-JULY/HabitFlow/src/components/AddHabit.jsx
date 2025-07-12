// components/AddHabit.jsx
import { useState } from "react";
import AddHabitModal from "./AddHabitModal";

export default function AddHabit() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="mt-4 mb-2 bg-blue-800 text-white px-6 py-2 rounded shadow
                   hover:scale-105 transition-transform"
      >
        + Add Habit
      </button>

      <AddHabitModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
