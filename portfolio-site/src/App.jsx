import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
  <div className='bg-[#000000e8] h-auto w-full overflow-hidden ' >
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default App