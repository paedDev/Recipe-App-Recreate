import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Favorites from "./pages/favorites/Favorites"
const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Favorites' element={<Favorites />} />
        <Route path='/recipe-item/:id' element={<Home />} />
      </Routes>

    </div>
  )
}

export default App