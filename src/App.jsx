import { useState } from 'react'
import './App.css'
import { gsap } from 'gsap'
import Homepage from './component/homepage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar'

function App() {

  return (
    <>
    <div className='bg-myblue'>
    <Router>
      <div className='bg-myblue'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          {/* Ajoutez d'autres routes ici pour New, Categories, etc. */}
        </Routes>
      </div>
    </Router>
    

     </div>
    </>
  )
}

export default App
