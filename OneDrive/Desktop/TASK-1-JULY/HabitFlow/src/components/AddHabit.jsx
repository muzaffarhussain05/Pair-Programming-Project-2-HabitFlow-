// File: src/components/AddHabit.jsx
import { useState } from "react";
import AddHabitModal from "./AddHabitModal";

export default function AddHabit() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="mt-4 mb-2 bg-blue-800 text-white px-2 md:px-10 py-2 hover:bg-blue-700 rounded shadow hover:scale-105 transition all"
      >
        + Add Habit
      </button>

      <AddHabitModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
