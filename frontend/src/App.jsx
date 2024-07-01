import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Page/Home/Home'
import AboutUs from './Page/AboutUs/AboutUs';
import ContactUs from './Page/ContactUs/ContactUs';
import FAQ from './Page/FAQ/FAQ';
import Team from './components/Team/Team';
import CycleInfo from './Page/CycleInfo/CycleInfo';
import Login from '../src/Page/auth/Login';
import Signup from '../src/Page/auth/SignUp';
import ProtectRouter from './components/ProtectedRoute/ProtectedRoute';
import Layout from './Page/Layout/Layout';
const App = () => {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/team' element={<Team />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path="/cycle/:id" element={<ProtectRouter element={<CycleInfo />} />} />
      </Routes>
      </Layout>
    </Router>
  )
}

export default App
