import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Page/Home/Home'
import AboutUs from './Page/AboutUs/AboutUs';
import ContactUs from './Page/ContactUs/ContactUs';
import FAQ from './Page/FAQ/FAQ';
import Team from './components/Team/Team';
import CycleInfo from './Page/CycleInfo/CycleInfo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/team' element={<Team />} />
        <Route path='/login' element={<h1>Login</h1>} />
        <Route path='/register' element={<h1>Register</h1>} />
        <Route path='/cycle/:id' element={<CycleInfo />} />
      </Routes>
    </Router>
  )
}

export default App
