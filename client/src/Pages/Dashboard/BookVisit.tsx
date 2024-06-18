import React, { useState } from 'react';
import { FaEuroSign } from "react-icons/fa";
import BookImage from '../../assets/BookImage.jpeg'
//mport { GrStatusGood } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import Product from './Product';
import {FaRegCopyright,} from 'react-icons/fa';

import '../../Styles/BookningVisit.css'

const BookVisit: React.FC = () => {
  const [basket, setBasket] = useState<any[]>([]);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: 'Gentlemens grooming: Big Beard',
      description: 'Perfect for bearded types: washing/cutting/blow-drying, beard trimming incl shaving.  50 minutes',
      price: 45,
      duration: 50,
    },
    {
      id: 2,
      title: 'Gentlemens grooming: Fresh Face',
      description: 'Oriental Big Beard Washing/cutting/blow-drying, beard trimming incl. shaving and waxing Complete incl. eyebrow Correction with thread.  50 minutes',
      price: 55,
      duration: 50,
    },
  ];

  const addProductToBasket = (product: any) => {
    setBasket([...basket, product]);
  };

  const removeProductFromBasket = (id: number) => {
    setBasket(basket.filter(product => product.id !== id));
  };

  const totalDuration = basket.reduce((sum, product) => sum + product.duration, 0);

  const handleBookAppointment = () => {
    navigate('/calendar', { state: { basket, totalItems: basket.length, totalDuration } });
  };

  return (
    <main className="main">
      <span>Fulbutellstr, 39 40000 Haburg</span>
      <span>Phone number</span>
      <div className="image-page">
        <img
          src={BookImage} alt="Inside store image"
        />
        <p>Agreed appointments are binding for the customer. Appointments must therefore be cancelled at least 24 hours in advance.<br/> Otherwise, we reserve the right to
             invoice the loss for earning in accordance with §642 (1) BGB. By booking an appointment,<br/>
              you agree to this regulation.</p>
      </div>
      <section className='booking-content'>
        <div className="main-content">
          <div className="hair-types">
            <h1>HAIR</h1>
            {products.map(product => (
              <React.Fragment key={product.id}>
                <Product 
                  id={product.id}
                  title={product.title} 
                  description={product.description} 
                  price={product.price} 
                  duration={product.duration}
                  onAdd={addProductToBasket} 
                  onRemove={removeProductFromBasket}
                />
                <hr />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="basket">
          <h2>Shopping Basket</h2>
          {basket.map(item => (
            <div key={item.id}>
              <p>{item.title} <FaEuroSign />{item.price}</p>
              <button onClick={() => removeProductFromBasket(item.id)}>Remove</button>
            </div>
          ))}
          <p>Total duration: {totalDuration} minutes</p>
          <p>Total items: {basket.length}</p>
          <button onClick={handleBookAppointment} className="btn btn-primary">Book an Appointment</button>
        </div><br/><br/>
        <div className='opening-time'>
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
        </div>
      </section>

      <section className='hint-section'>
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
      </section>
        <footer>
          <p>
            COPYRIGHT<FaRegCopyright /> ISAAC 2024
          </p>
        </footer>

    </main>
  );
}

export default BookVisit;
