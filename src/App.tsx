import './App.css'
import Navbar from './components/Navbar.tsx'
import Landing from './components/Landing.tsx'
import Contact from './components/Contact.tsx'
import { Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Navbar />
      <Landing />
      <Contact />
    </>
  )
}

export default App
