import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Process from './components/Process/Process'
import PrincipalAreas from './components/PrincipalAreas/PrincipalAreas'
import './App.css'

function App() {
  return (
    <>
      <div className='container'>
        <Navbar />
        <Hero />
        <About />
        <Process />
        <PrincipalAreas />
      </div>
    </>
  )
}

export default App
