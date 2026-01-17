import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import TrustedBy from './Components/TrustedBy'
import Services from './Components/Services'
import OurWork from './Components/OurWork'
import Teams from './Components/Teams'
import ContactUs from './Components/ContactUs'

function App() {
  const [theme, settheme] = useState(localStorage.getItem('theme')? localStorage.getItem('theme'): 'light')

  return (
    <div className='dark:bg-black relative'>
    <Navbar theme={theme} settheme={settheme}/>
    <Hero/>
    <TrustedBy/>
    <Services/>
    <OurWork/>
    <Teams/>
    <ContactUs/>
    </div>
  )
}

export default App
