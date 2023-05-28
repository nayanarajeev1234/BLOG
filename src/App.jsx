import React from 'react'
import Nav from './Units/Nav';
import Home from './Pages/Home';
import AddBlog from './Pages/Addblog';

import { Routes, Route } from "react-router-dom"


export default function App() {
  return (
    <div>
        
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Addblog.jsx" element={<AddBlog />} />
      </Routes>
    </div>
  )
}