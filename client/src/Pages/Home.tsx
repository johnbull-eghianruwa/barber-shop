import { useNavigate } from 'react-router-dom';
import BookImage from '../assets/HeroImage01.jpg';
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagramSquare,
  FaRegCopyright,
} from 'react-icons/fa';
import { BiSolidContact } from 'react-icons/bi';
import { useState } from 'react';

import '../Styles/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [makeAnAppointment, setMakeAnAppointment] = useState(false);

  const handleBookAppointment = () => {
    // Set state to true and navigate to /login
    setMakeAnAppointment(true);
    navigate('/login');
  };

  return (
    <>
      {/* ========= HERO SECTION ======= */}
      <section className='hero'>
        <div className='hero-section'>
          <div className='container'>
            {/* ======= HERO CONTENT ======= */}
            <div className='sub-heading'>
              <h1 className='text'>We make people's hair beautiful</h1>
              {/* Correct conditional rendering */}
              {makeAnAppointment && (
                <p className='text-para'>
                  We make people's hair beautiful, unique, and full of life. Our
                  skilled team of hairstylists is dedicated to creating stunning
                  hairstyles that reflect each individual's personality and
                  enhance their natural beauty. Whether you're looking for a
                  trendy haircut, a vibrant color transformation, or a special
                  occasion updo, we have the expertise and creativity to bring
                  your vision to life. With the latest techniques and
                  high-quality products, we ensure that every client leaves our
                  salon feeling confident and absolutely satisfied. Trust us to
                  make your hair a true reflection of your style and let us help
                  you shine with beautiful, unique hair.
                </p>
              )}
              <button className='btn-request' onClick={handleBookAppointment}>
                Book an appointment
              </button>
            </div>
            <div className='hero-flex'>
              <div>
                <img src={BookImage} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======== HERO SECTION END ==== */}
      <section>
        <div className='container'>
          <div className='mainContainer'>
            <h2 className='heading'>Providing the best haircut services</h2>
            <p className='para'>
              World-class care for everyone. Our salon system offers unmatched,
              expert barbing salon
            </p>
            <hr/>
          </div>
        </div>
        <div className='menu-list'>
          <a href='#' className='item'>
            <FaFacebook className='icon' />
            Facebook
          </a>
          <a href='#' className='item'>
            <FaWhatsapp className='icon' />
            Whatsapp
          </a>
          <a href='#' className='item'>
            <FaInstagramSquare className='icon' />
            Instagram
          </a>
          <a href='#' className='item'>
            <BiSolidContact className='icon' />
            Contact
          </a>
        </div>
        <div className='openin-time'>
          <hr />
          <h1 className='opening-hours'>Opening hours</h1>
        </div>
        <div className='opening'>
          <span className='opening-item'>Monday-Friday: 9:30 a.m - 7p.m.</span>
        </div>
        <div className='opening'>
          <span className='opening-item'>Saturday: 10 a.m - 7p.m.</span>
        </div>
        <div className='opening'>
          <span className='time'>Sunday Closed</span>
        </div>
        <div className='book-app'>
          <hr />
          {/* Updated link to navigate to /login */}
          <a href='#' onClick={handleBookAppointment}>
            Book An Appointment
          </a>
        </div>
        <div className='hint'>
          <hr />
          <div className='hint-info'>
            <div className='hint-header'>
              <h2>Please arrive 5 minutes before appointment!</h2>
            </div>
            <div className='hint-details'>
              <p>Booked appointments are binding.</p>
              <p>
                Cancellation is only possible up to 24 hours in advance ONLY via
                cancellation link or by phone respectively.
              </p>
              <p>
                We reserve the right to charge you for appointments that are not
                cancelled in time!
              </p>
              <p>Thanks</p>
            </div>
          </div>
        </div>
        <div className='footer'>
          <footer>
            <p>
              COPYRIGHT<FaRegCopyright /> ISAAC 2024
            </p>
          </footer>
        </div>
      </section>
    </>
  );
};

export default Home;
