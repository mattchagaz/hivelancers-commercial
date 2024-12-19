import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Process from './components/Process/Process'
import PrincipalAreas from './components/PrincipalAreas/PrincipalAreas'
import Faq from './components/Faq/Faq'
import Advantages from './components/Advantages/Advantages'
import Footer from './components/Footer/Footer'
import Cases from './components/Cases/Cases'
import Reviews from './components/Reviews/Reviews'
import Timer from './components/Timer/Timer'
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
        <Timer />
        <Reviews />
        <Advantages />
        <Faq />
        <Footer />
      </div>
    </>
  )
}

export default App
