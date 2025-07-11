import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HabitProvider from './context/HabitContext';

// import { ContextProvider } from './context/Context.jsx'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
 
  <HabitProvider>
    <BrowserRouter>

    <App />
   
   </BrowserRouter>
  </HabitProvider>,
  
)
