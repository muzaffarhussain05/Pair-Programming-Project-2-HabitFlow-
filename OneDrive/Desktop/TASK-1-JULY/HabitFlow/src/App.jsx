import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import HabitProvider  from "./context/HabitContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <AuthProvider>
      <HabitProvider>
      <ToastContainer position="top-right" autoClose={3000} />
        <Navbar />
        <AppRoutes />
      </HabitProvider>
    </AuthProvider>
  );
}

export default App;
