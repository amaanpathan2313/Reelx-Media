import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Stats from './components/Stats/Stats'
import BeforeAfter from './components/BeforeAfter/BeforeAfter'
import PhotoResults from './components/PhotoResults/PhotoResults'
import About from './components/About/About'
import Services from './components/Services/Services'
import HowWeWork from './components/HowWeWork/HowWeWork'
import Results from './components/Results/Results'
import Portfolio from './components/Portfolio/Portfolio'
import Brands from './components/Brands/Brands'
import Testimonials from './components/Testimonials/Testimonials'
import CtaBanner from './components/CtaBanner/CtaBanner'
import Footer from './components/Footer/Footer'
import ParticleBackground from './components/ParticleBackground/ParticleBackground'

function App() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <BeforeAfter />
        <PhotoResults />
        <Testimonials />
        <Portfolio />
        <Services />
        <HowWeWork />
        {/* <Results /> */}
        <Brands />
        <About />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}

export default App
