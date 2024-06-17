import React from 'react';
import About from '../../assets/AboutUsImage.jpeg';
import { FaFacebook, FaWhatsapp, FaInstagramSquare, FaRegCopyright } from 'react-icons/fa';
import { BiSolidContact } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import '../../Styles/BookningVisit.css'

const BookVisit = () => {
  const navigate = useNavigate();

  // Function to handle navigation to /working
  const handleNavigateToWorking = () => {
    navigate('/login');
  };

  return (
    <div className="book">
      <div className="image-page">
        <img src={About} alt="background image" />
        <h2>ISAAC</h2>
        <h3>BARBERSHOP</h3>
        <h2>CUTS, SHAVES AND ROCK'N'ROLL</h2>
      </div>
      <div className="menu-list">
        <a href="#" className="item">
          <FaFacebook className="icon" />
          Facebook
        </a>
        <a href="#" className="item">
          <FaWhatsapp className="icon" />
          Whatsapp
        </a>
        <a href="#" className="item">
          <FaInstagramSquare className="icon" />
          Instagram
        </a>
        <a href="#" className="item">
          <BiSolidContact className="icon" />
          Contact
        </a>
      </div>
      <div className="openin-time">
        <hr />
        <h1 className="opening-hours">Opening hours</h1>
      </div>
      <div className="opening">
        <span className="opening-item">Monday-Friday: 9:30 a.m - 7p.m.</span>
      </div>
      <div className="opening">
        <span className="opening-item">Saturday: 10 a.m - 7p.m.</span>
      </div>
      <div className="opening">
        <span className="time">Sunday Closed</span>
      </div>
      <div className="book-app">
        <hr />
        {/* Updated link to navigate to /working */}
        <a href="#" onClick={handleNavigateToWorking}>
          Book An Appointment
        </a>
      </div>
      <div className="hint">
        <hr />
        <div className="hint-info">
          <div className="hint-header">
            <h2>Please arrive 5 minutes before appointment!</h2>
          </div>
          <div className="hint-details">
            <p>Booked appointments are binding.</p>
            <p>Cancellation is only possible up to 24 hours in advance ONLY via cancellation link or by phone respectively.</p>
            <p>We reserve the right to charge you for appointments that are not cancelled in time!</p>
            <p>Thanks</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <footer>
          <p>
            COPYRIGHT<FaRegCopyright /> ISAAC 2024
          </p>
        </footer>
      </div>
    </div>
  );
};

export default BookVisit;
