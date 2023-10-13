import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Ford from './cars/ford'
import Lambo from './cars/lambo'
import Kon from './cars/kon'
import Malibu from './cars/malibu'

const App = () => {
  return (
    <>
      
      
        <BrowserRouter>
        <Routes>


          <Route path='/' element={<Ford />} />
          <Route path='/lambo' element={<Lambo />} />
          <Route path='/kon' element={<Kon />} />
          <Route path='/malibu' element={<Malibu />} />


        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
