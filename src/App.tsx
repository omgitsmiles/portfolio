import './App.css'
import Navbar from './components/Navbar.tsx'
import Landing from './components/Landing.tsx'
import Contact from './components/Contact.tsx'
import Speciality from './components/Speciality.tsx'
import Carousel from './components/Carousel.tsx'
import { Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Navbar />
      <Landing />
      <Speciality />
      <br />
      <Carousel />
      <Contact />
    </>
  )
}

export default App
