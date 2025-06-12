import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Map from "./components/Map"
import Home from './pages/Home'
import Panel from './components/Panel'
import Footer from './components/Footer'


function App() {

  return (
    <div className="relative w-full min-h-screen">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
      </Routes>
      <Panel />
      <Footer />
    </div>
  )
}

export default App
