import React from 'react'
import './App.css'
import { Route , Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import Base from './components/Base'

const App = () => {
  return (
    
    <Routes>
      <Route path='/' exact element = {<Base/>} />
      <Route path='/blog/:id' element={<Blog/>} />
      </Routes>

     
      
  )
}

export default App
