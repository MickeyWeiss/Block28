import { useState } from 'react'
import './App.css'
import './index.css'
import { Routes, Route, Link } from 'react-router-dom'
import Blue from './components/Blue.jsx'
import Red from './components/Red.jsx'
import Home from './components/Home.jsx'

function App() {

  return (
    <>
      <div id="container">
      <h1></h1>
      <div id="navbar">
        <Link to={"/home"}>Home</Link>
        <Link to={"/blue"}>Blue</Link>
        <Link to={"/red"}>Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/blue" element={<Blue/>}/>
          <Route path="/red" element={<Red/>}/>
      </Routes>
      </div>
    </div>
    </>
  )
}

export default App
