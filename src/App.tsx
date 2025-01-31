import { useState } from 'react'

import './App.css'
import React from 'react'
import Login from './components/Login'
import ListView from './components/List/ListView'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className=''>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/create' element={<ListView />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
