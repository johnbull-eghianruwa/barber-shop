import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaEuroSign } from "react-icons/fa";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: number;
}

interface LocationState {
  basket: ProductProps[];
  totalItems: number;
  totalDuration: number;
  date: Date;
}

const AppointmentDetails: React.FC = () => {
  const location = useLocation();
  const { basket, totalItems, totalDuration, date } = location.state as LocationState;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Appointment submitted successfully!');
    // Here you can add logic to save the appointment details
  };

  return (
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
          <select required>
            <option value="">Select...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Name</label>
          <input type="text" required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" required />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="tel" required />
        </div>
        <div>
          <label>Message</label>
          <textarea rows={4} />
        </div>
        <button type="submit">Submit Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentDetails;
