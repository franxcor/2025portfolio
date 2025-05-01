import { useState, useEffect } from 'react'
import About from '../components/About.jsx'
import '../styles/App.css'
import Wrapper from '../components/Wrapper.jsx'

function AboutPage() {
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
        <About></About>
        <button onClick = {handleClick}>{clicked ? "checked" : "unchecked"}</button>
      </Wrapper>
     
  )
}

export default AboutPage;

const appStyle = {
  profileCards : {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '400px',
  }
}