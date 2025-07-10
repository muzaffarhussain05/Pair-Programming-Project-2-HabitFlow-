import React from "react";
import TimeTabs from "./Timetabs"
import HabitGrid from "./Habitgrid"
import HabitSidebar from "./Habitsidebar"

const HabitDashboard = ( {habits}  )=>{
  return (
    <div className="bg-white rounded-2xl shadow-xl max-w-7xl mx-auto p-6 md:p-10 flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <h2 className="text-2xl font-semibold">quote </h2>
        <p className="text-sm text-gray-500 mb-6">5 hrs 42 mins till bedtime</p>

        <TimeTabs />

        <div className="mt-4 text-green-500 text-sm">↑ Up 23% from week before</div>
        <HabitGrid   habits={habits}/>
      </div>

      <HabitSidebar habits={habits}/>
    </div>
  );
};

export default HabitDashboard;
