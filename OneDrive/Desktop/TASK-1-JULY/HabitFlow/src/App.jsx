import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Addhabits from "./pages/Addhabits";
import Navbar from "./components/Navbar";
import HabitProvider from "./context/HabitContext";

const App = () => {
  return (
    <HabitProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Addhabits" element={<Addhabits />} />
      </Routes>
    </HabitProvider>
  );
};

export default App;
