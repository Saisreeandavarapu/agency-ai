import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import TrustedBy from './Components/TrustedBy'
import Services from './Components/Services'
import OurWork from './Components/OurWork'
import Teams from './Components/Teams'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'

function App() {
   const [theme, settheme] = useState(localStorage.getItem('theme')? localStorage.getItem('theme'): 'light')

  const dotRef=useRef(null)
  const outlineRef=useRef(null)


  // refs for custom cursor position tracking
  const mouse =useRef({x:0,y:0})
  const position =useRef({x:0,y:0})
 useEffect(()=>{
  const handleMouseMove=(e)=>{
    mouse.current.x=e.clientX
    mouse.current.y=e.clientY
  }
  document.addEventListener('mousemove',handleMouseMove)
const animate=()=>{
  position.current.x +=(mouse.current.x - position.current.x)* 0.1
  position.current.y +=(mouse.current.y - position.current.y)* 0.1

  if(dotRef.current && outlineRef.current)
  {
    dotRef.current.style.transform =`translate3d(${mouse.current.x - 6}px,${mouse.current.y - 6}px)`
  }


}


 },[])









  return (
    <div className='dark:bg-black relative'>
    <Navbar theme={theme} settheme={settheme}/>
    <Hero/>
    <TrustedBy/>
    <Services/>
    <OurWork/>
    <Teams/>
    <ContactUs/>
    <Footer theme={theme}/>
    {/* custom cursor ring */}

      <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10 rounded-full border
      border-primary pointer-events-none z-[9999]'>

      </div>
      {/* custom cursor dot */}
      <div ref={dotRef} className='fixed top-0 left-0 h-10 w-10 rounded-full bg-primary
    pointer-events-none z-[9999]'>

      </div>
    </div>
  )
}

export default App
