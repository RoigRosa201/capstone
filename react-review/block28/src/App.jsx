import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Red from './components/Red'
import Blue from './components/Blue'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div id="container">
      <Navbar />
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
      <Navbar />
    </div>
  )
}

export default App
