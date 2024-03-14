import { useState } from 'react'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Home /> 
      <About />
      <Services />
    </>
  )
}

export default App
