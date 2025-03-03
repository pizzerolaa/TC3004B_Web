import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Default from './pages/Default'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <Router>
      <div className='App'>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='*' element={<Default/>}/>
      </Routes>
    </Router>
  )
}

export default App
