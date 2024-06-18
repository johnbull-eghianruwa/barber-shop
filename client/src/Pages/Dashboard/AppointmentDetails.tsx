import React, { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaEuroSign } from "react-icons/fa";

import '../../Styles/Appointment.css';

interface AppointmentDetailsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: number;
}

interface LocationState {
  basket: AppointmentDetailsProps[];
  totalItems: number;
  totalDuration: number;
  date: string;  // Ensure this is a string or convert to Date where used
  gender: string;
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const AppointmentDetails: FC = () => {
  const location = useLocation();
  const {
    basket,
    totalItems,
    totalDuration,
    date,
    gender: initialGender,
    name: initialName,
    email: initialEmail,
    phoneNumber: initialPhoneNumber,
    message: initialMessage,
  } = location.state as LocationState;

  const [gender, setGender] = useState(initialGender);
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
  const [message, setMessage] = useState(initialMessage);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/v2/appointmentDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          basket,
          totalItems,
          totalDuration,
          date,
          gender,
          name,
          email,
          phoneNumber,
          message
        })
      });

      if (response.ok) {
        alert('You have submitted all the details.');
      } else {
        alert('Failed to submit the appointment details.');
      }
    } catch (error) {
      console.error(error.message);
      alert('An error occurred while submitting the appointment details.');
    }
  };

  return (
    <main className='main'>
      <section className='appointment-section'>
        <div className="appointment-details">
          <h2>Appointment Details</h2>
          <p>Date: {new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'short' }).format(new Date(date))}</p>
          <p>Total items: {totalItems}</p>
          <p>Total duration: {totalDuration} minutes</p>
          <ul>
            {basket.map((item, index) => (
              <li key={index}>
                {item.title} - {item.description} - <FaEuroSign />{item.price}
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Gender</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="">Select...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label>Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label>Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label>Phone Number</label>
              <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            </div>
            <div>
              <label>Message</label>
              <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <button type="submit">Submit Appointment</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AppointmentDetails;
