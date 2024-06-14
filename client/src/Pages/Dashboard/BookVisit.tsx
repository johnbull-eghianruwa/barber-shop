import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookImage from '../../assets/BookImage.jpeg';
import '../../Styles/BookningVisit.css';

interface Appointment {
  id: number;
  service: string;
  date: string;
  time: string;
}

const BookVisit: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const navigate = useNavigate();

  const bookAppointment = (serviceType: string) => {
    const newAppointment: Appointment = {
      id: Date.now(),
      service: serviceType,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    setAppointments([...appointments, newAppointment]);
    alert('Appointment booked successfully!');
    setTimeout(() => {
      navigate('/calendar');
    }, 500); // Add a slight delay to allow users to read the alert
  };

  return (
    <>
      <section className="visit" id="visit">
        <div className="row">
          <h3>PRICES & DATES</h3>
          <div className="image">
            <img src={BookImage} alt="Book Appointment" />
          </div>
        </div>
      </section>
      <section className="main-section">
        <div className="main-styles">
          <div className="h-heading">
            <h1>HAIR</h1>
            <h3 className="styles-iprice">
              HAIRCUT ..................<i className="fa-solid fa-euro-sign">45</i>
            </h3>
            <p>
              <span>Duration: 45 minutes</span> - relaxing hair wash, neck and<br /> shoulder massage with hot compress, haircut using <br />various cutting techniques, styling with modern and<br /> traditional styling products, contour wet shave and <br />final treatment
            </p>
            <button className="btn-book" onClick={() => bookAppointment('Haircut')}>BOOK AN APPOINTMENT ONLINE</button>
          </div>
        </div>
        <div className="h-heading">
          <h1>BEARD & SHAVE</h1>
          <h3 className="styles-price">
            BEARD TRIM WITH CONTOUR SHAVING ..................<i className="fa-solid fa-euro-sign">35</i>
          </h3>
          <p>
            <span>Duration: 30 minutes -</span> clean your beard, shape your beard with scissors and<br /> clippers, facial massage and hot compress, perfect your beard contours <br />with wet shaving, followed by beard care with balm and oil
          </p>
          <button className="btn-book" onClick={() => bookAppointment('Beard Trim with Contour Shaving')}>BOOK AN APPOINTMENT ONLINE</button>
        </div>
        <div className="h-heading">
          <h1>PACKAGES & CARE</h1>
          <h3 className="styles-price">
            CAREFREE PACKAGE ..................<i className="fa-solid fa-euro-sign">55</i>
          </h3>
          <p>
            <span>Duration: 75 minutes -</span> haircut + <br />beard trim with contour shaving
          </p>
          <button className="btn-book" onClick={() => bookAppointment('Carefree Package')}>BOOK AN APPOINTMENT ONLINE</button>
        </div>
      </section>
      <section className="appointment-list">
        <h3>Booked Appointments</h3>
        <ul>
          {appointments.map(appointment => (
            <li key={appointment.id}>
              {appointment.service} - {appointment.date} - {appointment.time}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default BookVisit;
