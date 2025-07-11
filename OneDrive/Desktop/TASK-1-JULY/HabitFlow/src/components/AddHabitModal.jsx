// File: src/components/AddHabitModal.jsx
import React, { useState, useContext, useEffect } from "react";
import { HabitContext } from "../context/HabitContext";

export default function AddHabitModal({ isOpen, onClose }) {
  const { addHabit } = useContext(HabitContext);
  const [habitName, setHabitName] = useState("");
  const [frequency, setFrequency] = useState("daily");
  const [habitColor, setHabitColor] = useState("#FB923C");

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setHabitName("");
      setFrequency("daily");
      setHabitColor("#FB923C");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!habitName.trim()) return;

    const newHabit = {
      id: Date.now().toString(),
      title: habitName.trim(),
      frequency,
      color: habitColor,
      createdAt: new Date().toISOString().slice(0, 10),
      progress: {},
    };

    addHabit(newHabit);
    onClose(); // close modal
  };

  const colorOptions = [
    { name: "Orange", value: "#FB923C" },
    { name: "Purple", value: "#A855F7" },
    { name: "Cyan", value: "#22D3EE" },
    { name: "Blue", value: "#3B82F6" },
    { name: "Green", value: "#22C55E" },
    { name: "Pink", value: "#EC4899" },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-xl font-semibold mb-4">Add New Habit</h2>

        <label className="block mb-2 text-sm font-medium">Habit Name</label>
        <input
          type="text"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-md"
          placeholder="e.g. Read, Workout"
          required
        />

        <label className="block mb-2 text-sm font-medium">Color</label>
        <div className="flex gap-2 mb-4">
          {colorOptions.map((color) => (
            <button
              key={color.value}
              type="button"
              onClick={() => setHabitColor(color.value)}
              className={`w-6 h-6 rounded-full border-2 ${
                habitColor === color.value ? "border-black" : "border-transparent"
              }`}
              style={{ backgroundColor: color.value }}
            />
          ))}
        </div>

        <label className="block mb-2 text-sm font-medium">Frequency</label>
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          className="w-full px-4 py-2 mb-6 border rounded-md"
        >
          <option value="daily">Daily</option>
        </select>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:underline"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
