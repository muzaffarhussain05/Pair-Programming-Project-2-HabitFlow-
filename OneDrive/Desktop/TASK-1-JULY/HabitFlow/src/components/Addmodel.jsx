import React, { useState } from "react";

const AddHabitModal = ({addHabit} )=>{
  const [isOpen, setIsOpen] = useState(false);
  const [habitName, setHabitName] = useState("");
  const [frequency, setFrequency] = useState("daily");
  const [habitColor, setHabitColor] = useState("bg-orange-400");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!habitName) return;
    addHabit({ name: habitName, color:habitColor, frequency:frequency }); // you can randomize color
    setHabitName("");
    setFrequency("daily");
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-white text-blue-600 px-5 py-3 font-semibold rounded-full shadow-lg hover:scale-105 transition"
      >
        + Add Habit
      </button>

      {isOpen && (
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
<div className="flex gap-2 mb-6">
  {[
    "bg-orange-400",
    "bg-purple-500",
    "bg-cyan-400",
    "bg-blue-500",
    "bg-green-500",
    "bg-pink-500",
  ].map((color) => (
    <button
      key={color}
      type="button"
      onClick={() => setHabitColor(color)}
      className={`w-6 h-6 rounded-full border-2 ${
        habitColor === color ? "border-black" : "border-transparent"
      } ${color}`}
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
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-gray-600 hover:underline"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddHabitModal;
