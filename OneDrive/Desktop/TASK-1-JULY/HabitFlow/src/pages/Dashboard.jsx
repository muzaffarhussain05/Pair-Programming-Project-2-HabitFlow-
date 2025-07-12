// File: src/pages/Dashboard.jsx
import HabitDashboard from "../components/Habitdashboard";
import AddHabitModal from "../components/AddHabitModal";

export default function Dashboard() {
  return (
    <div className="px-4 py-6">
      <HabitDashboard />
      <AddHabitModal />
    </div>
  );
}
