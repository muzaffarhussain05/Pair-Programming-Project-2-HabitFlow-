
import { Routes, Route } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/Navbar";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<>  <HeroSection /></> } />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
