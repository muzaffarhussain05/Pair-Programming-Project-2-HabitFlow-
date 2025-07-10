import HabitDashboard from '../components/Habitdashboard'
import AddHabitModal from '../components/Addmodel'
import React from 'react'
import { useState } from 'react'

const Addhabits = () => {
     const [habits, setHabits] = useState([
  ]);

  const addHabit = (newHabit) => {
    setHabits((prev) => [...prev, { ...newHabit, progress: [] }]);
  };
  return (
 <div>
      <HabitDashboard  habits={habits} />
      <AddHabitModal    addHabit={addHabit}/>
    </div>
  )
}

export default Addhabits;