// File: src/components/BedtimeModal.jsx
import { useState } from "react";

export default function BedtimeModal({ isOpen, onClose, onSave, initialValue = "22:30" }) {
  const [time, setTime] = useState(initialValue);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg w-full max-w-sm p-6 shadow-xl">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Set Your Bedtime</h2>

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 text-gray-700"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSave(time);
              onClose();
            }}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
