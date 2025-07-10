
const getHeaders = (viewMode) => {
  switch (viewMode) {
    case "week":
      return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    case "month":
      return Array.from({ length: 31 }, (_, i) => `${i + 1}`);
    case "year":
      return [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
    case "all":
      return ["2021", "2022", "2023", "2024", "2025"];
    default:
      return [];
  }
};

const HabitGrid = ( {habits,viewMode})=>{
  const headers=getHeaders(viewMode)
  return (
    <div className="mt-4">
      <div className={`grid grid-cols-${headers.length+1} text-sm text-gray-400`}>
        <div></div>
       {headers.map((header,idx)=>(
 <div key={idx} className="text-center whitespace-nowrap">
            {header}
          </div>
       ))}
      </div>

      {habits.map(habit => (
       
        <div key={habit.name} className={`grid grid-cols-${headers.length+1} items-center py-2`}>
           <span className={`${habit.color} w-5 h-5 rounded-2xl`}></span>
          <div className="font-medium text-gray-700">{habit.name}</div>
          {headers.map((_,idx)=>{
             <div key={idx} className="flex justify-center">
              <div
                className={`w-4 h-4 rounded-full ${
                  habit.progress[idx] ? habit.color : "bg-gray-100"
                }`}
              ></div>
            </div>
          })}
        </div>
      ))}
    </div>
  );
};

export default HabitGrid;
