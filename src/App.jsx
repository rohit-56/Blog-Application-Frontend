import React from 'react'
import './App.css'
import { Route , Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import Base from './components/Base'
import Login from './components/Login'
import Signup from './components/Signup'

const App = () => {
  return (
    
    <Routes>
      <Route path='/' exact element = {<Base/>} />
      <Route path='/login' element ={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/blog/:id' element={<Blog/>} />
      </Routes>

     
      
  )
}

export default App
