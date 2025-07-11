// File: src/pages/Addhabits.jsx
import React, { useContext } from "react";
import { HabitContext } from "../context/HabitContext";
import HabitDashboard from "../components/Habitdashboard";
import AddHabitModal from "../components/AddHabitModal";

const Addhabits = () => {
  const { habits, addHabit } = useContext(HabitContext);

  return (
    <div>
      <HabitDashboard habits={habits} />
      <AddHabitModal addHabit={addHabit} />
    </div>
  );
};

export default Addhabits;
