import Calendar from "./Components/Calendar/Calendar"
import Dashboard from "./Pages/Dashboard/Index"
import Login from './Pages//SignupLogin/Login'
import Signup from "./Pages/SignupLogin/Signup"
import Home from "./Pages/Home"
import Booking from "./Pages/Dashboard/BookVisit"
import About from "./Pages/Dashboard/About"
import Form from "./Components/Calendar/Form"
import Navbar from "./Components/Navbar"
import Styles from "./Pages/Dashboard/Styles"
import Services from "./Pages/Dashboard/Services"
import Working from "./Pages/Dashboard/Booking"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppointmentDetails from "./Pages/Dashboard/AppointmentDetails"




const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/dashboard" Component={Dashboard}/>
            <Route path="/login" Component={Login}/>
            <Route path="/signup" Component={Signup}/>
            <Route path="/about" Component={About} />
            <Route path="/calendar" Component={Calendar} />
            <Route path="/bookVisit" Component={Booking} />
            <Route path="/styles" Component={Styles}/>
            <Route path="/services" Component={Services} />
            <Route path="/form" Component={Form}/>
            <Route path="/working" Component={Working} />
            <Route path="/appointmentDetails" Component={AppointmentDetails}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

