import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ResumePage from './pages/ResumePage';

import {HashRouter, Routes, Route} from "react-router";

function App() {

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/About" element={<AboutPage/>} />
          <Route path="/Resume" element={<ResumePage/>} />
        </Routes>
      </HashRouter>
    </div>
    
  )
}

export default App