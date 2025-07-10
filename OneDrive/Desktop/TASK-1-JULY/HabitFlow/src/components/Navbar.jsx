import React from 'react'
import { FaMoon } from "react-icons/fa";
const Navbar = () => {
  return (
  <>
  <nav className="flex items-center justify-between px-6 md:px-16 py-4 border-b">
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Habitflow Logo" className="w-6 h-6" />
            <span className="text-xl font-semibold">Habitflow</span>
          </div>
  
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-md border hover:bg-gray-100">
              <FaMoon />
            </button>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md">
              Login
            </button>
          </div>
        </nav> 
        </>
  )
}

export default Navbar