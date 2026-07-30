import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Navbar from './components/Navbar'


const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
  } , [])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App