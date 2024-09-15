import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home/Home";
import AboutUs from "./Page/AboutUs/AboutUs";
import ContactUs from "./Page/ContactUs/ContactUs";
import FAQ from "./Page/FAQ/FAQ";

import CycleInfo from "./Page/CycleInfo/CycleInfo";
import Login from "../src/Page/auth/Login";
import Signup from "../src/Page/auth/SignUp";
import ProtectRouter from "./components/ProtectedRoute/ProtectedRoute";
import Layout from "./Page/Layout/Layout";
import BicycleForm from "./Page/BicycleInput/BicycleInput";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/bicycle/:_id" element={<CycleInfo />} />
          <Route
            path="/sell"
            element={<ProtectRouter element={BicycleForm} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
