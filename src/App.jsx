import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Error404 from './components/Error404/Error404'
import './App.css'
import { MouseSmooth } from 'react-mouse-smooth';

function App() {
  MouseSmooth ({});

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={
            <>
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
            </>
          } />
          <Route path="/politicas-de-privacidade" element={<Error404 />} />
          <Route path="/termos-de-uso" element={<Error404 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App
