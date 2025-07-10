import React, { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "./pages/Home"
import Addhabits from './pages/Addhabits'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
   
<Navbar />

  <Routes>
    <Route path="/" element={<Home/>} />
   <Route path='/Addhabits' element={<Addhabits/>}/>
  </Routes>
  
  </>
  )
}

export default App;
