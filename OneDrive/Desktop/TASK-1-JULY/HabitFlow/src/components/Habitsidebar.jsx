
import { useState } from "react";

const HabitSidebar = ({habits})=>{
  const [completedHabits, setCompletedHabits] = useState({});
const getProgressPercent = () => {
  const total = habits.length || 1; // prevent divide-by-zero
  const completed = Object.values(completedHabits).filter(Boolean).length;
  return Math.round((completed / total) * 100);
};

  const toggleCompletion = (habitName) => {
    setCompletedHabits((prev) => ({
      ...prev,
      [habitName]: !prev[habitName], // toggle true/false
    }));
  };
  return (
    <div className="bg-gray-50 p-6 rounded-xl w-full lg:w-80">
      <h3 className="font-semibold mb-4 text-gray-800">  {new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  })} </h3>
  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        className={`bg-blue-600 h-full  transition-all duration-300 ease-in-out  `}
        style={{width:`${getProgressPercent}%`}}
      ></div>
    </div>
      <div className="text-sm text-gray-500 mb-6"> {getProgressPercent()}% of daily goal achieved</div>

      <div className="space-y-4">
        {habits.map(habit => (
          <div key={habit.name} className="p-3 bg-white rounded-lg shadow flex items-center justify-between border">
            <div>
              <p className="font-medium text-gray-800">{habit.name}</p>
              <button onClick={()=>toggleCompletion(habit.name)} className={`text-sm mt-1 ${
                completedHabits[habit.name] ? 'text-gray-500' : 'text-blue-500'
              }`}>
                {completedHabits[habit.name] ? 'Undo' : 'Mark Complete'}
              </button>
            </div>
            <span className={`w-2 h-10 rounded-full ${habit.color}`}></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitSidebar;
