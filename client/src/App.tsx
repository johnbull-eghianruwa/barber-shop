import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Calendar from "./Components/Calendar/Calendar";
import Dashboard from "./Pages/Dashboard/Index";
import Login from './Pages/SignupLogin/Login';
import Signup from "./Pages/SignupLogin/Signup";
import Home from "./Pages/Home";
import Booking from "./Pages/Dashboard/BookVisit";
import About from "./Pages/Dashboard/About";
import Form from "./Components/Calendar/Form";
import Navbar from "./Components/Navbar";
import Styles from "./Pages/Dashboard/Styles";
import Services from "./Pages/Dashboard/Services";
import BookVisit from "./Pages/Dashboard/BookVisit";
import AppointmentDetails from "./Pages/Dashboard/AppointmentDetails";

import './App.css';

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/bookVisit" element={<Booking />} />
        <Route path="/styles" element={<Styles />} />
        <Route path="/services" element={<Services />} />
        <Route path="/form" element={<Form />} />
        <Route path="/appointmentDetails" element={<AppointmentDetails />} />
        <Route path='bookVisit' Component={BookVisit} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
