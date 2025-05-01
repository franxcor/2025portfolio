import { useState, useEffect } from 'react'
import About from '../components/About.jsx'
import '../styles/App.css'
import Wrapper from '../components/Wrapper.jsx'

function NotFound() {
  const [mode, setMode] = useState(false);
  const [clicked, setClicked] = useState(false)
  const switchMode = () => {
    if (mode) {
      setMode(false);
    } else {
      setMode(true)
    }
    console.log(mode);
  }

  
  const handleClick = () => {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  }

  return (
      <Wrapper mode={mode}>
        <h1>404</h1>
        <h4> error this page was not found </h4>
      </Wrapper>
     
  )
}

export default NotFound;
