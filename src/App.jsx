import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Filtration from './components/Filtration'
import Demo from './components/Demo'
import Team from './components/Team'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Filtration />
      <Demo />
      <Team />
      <Footer />
    </div>
  )
}

export default App
