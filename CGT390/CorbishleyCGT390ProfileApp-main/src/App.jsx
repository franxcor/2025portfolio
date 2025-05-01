import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import './styles/App.css'
import Wrapper from './components/Wrapper.jsx'
import HomePage from './pages/HomePage.jsx'
import AddProfile from './pages/AddProfile.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NotFound from './pages/NotFound.jsx'

import {HashRouter, Routes, Route} from "react-router-dom";


function App() {
  const [mode, setMode] = useState(false);

  const switchMode = () => {
    if (mode) {
      setMode(false);
    } else {
      setMode(true)
    }
    console.log(mode);
  }

  return (
    <HashRouter>
      <header>
        <Navbar darkMode={mode} switchMode={switchMode}></Navbar>
      </header>
      <main className={mode=== true ? true : false}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/add-profile" element={<AddProfile/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
      
    </HashRouter>
  )
}

export default App;
