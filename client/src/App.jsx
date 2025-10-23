import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import BuyCredit from './pages/BuyCredit.jsx'
import Result from './pages/Result.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <Routes>
        <Route path='/' element={<div>Home</div>} />
        <Route path='/buy' element={<div>BuyCredit</div>} />
        <Route path='/result' element={<div>Result</div>} />
      </Routes>
    </div>
  )
}

export default App