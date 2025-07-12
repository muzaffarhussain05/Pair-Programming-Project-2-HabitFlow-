import React from "react";

import HabitGrid from "./Habitgrid"
import HabitSidebar from "./Habitsidebar"
import { useState } from "react";
import GreetingHeader from "./GreetingHeader";


const HabitDashboard = ( {habits}  )=>{
   const [viewMode, setViewMode] = useState("week");
  return (
    <div className="bg-white rounded-2xl shadow-xl max-w-7xl mx-auto p-6 md:p-10 flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <GreetingHeader/>
        <HabitGrid   habits={habits} viewMode={viewMode}/>
      </div>
      <HabitSidebar habits={habits}/>
    </div>
  );
};

export default HabitDashboard;
