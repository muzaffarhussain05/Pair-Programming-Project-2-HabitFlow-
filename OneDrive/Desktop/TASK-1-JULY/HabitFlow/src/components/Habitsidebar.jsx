

const HabitSidebar = ({habits})=>{
  return (
    <div className="bg-gray-50 p-6 rounded-xl w-full lg:w-80">
      <h3 className="font-semibold mb-4 text-gray-800">  {new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  })} </h3>
      <div className="text-sm text-gray-500 mb-6">33% of daily goal achieved</div>

      <div className="space-y-4">
        {habits.map(habit => (
          <div key={habit.name} className="p-3 bg-white rounded-lg shadow flex items-center justify-between border">
            <div>
              <p className="font-medium text-gray-800">{habit.name}</p>
              <button className={`text-sm mt-1 ${
                habit.completed ? 'text-blue-500' : 'text-gray-500'
              }`}>
                {habit.completed ? 'Undo' : 'Mark Complete'}
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
