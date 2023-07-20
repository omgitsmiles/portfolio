import './App.css'
import Navbar from './components/Navbar.tsx'
import Landing from './components/Landing.tsx'
import Contact from './components/Contact.tsx'
import Speciality from './components/Speciality.tsx'
import Carousel from './components/Carousel.tsx'

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


// <Route exact path='/parker-portfolio-site/' element={<Hero/>}/>
{/* <Route path="/parker-portfolio-site/about" element={<About/>}/>
<Route path="/parker-portfolio-site/projects" element={<Projects/>}/>
<Route path="/parker-portfolio-site/contact" element={<ContactMe/>}/> */}