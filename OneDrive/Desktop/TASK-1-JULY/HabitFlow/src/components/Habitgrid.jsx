

const HabitGrid = ( {habits})=>{
  return (
    <div className="mt-4">
      <div className="grid grid-cols-8 text-sm text-gray-400">
        <div></div>
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
          <div key={day} className="text-center">{day}</div>
        ))}
      </div>

      {habits.map(habit => (
        <div key={habit.name} className="grid grid-cols-8 items-center py-2">
          <div className="font-medium text-gray-700">{habit.name}</div>
          {habit.progress.map((done, idx) => (
            <div key={idx} className="flex justify-center">
              <div className={`w-4 h-4 rounded-full ${done ? habit.color : 'bg-gray-100'}`}></div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HabitGrid;
