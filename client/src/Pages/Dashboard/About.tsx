import React, { useState } from 'react';
import AboutUsImage from '../../assets/AboutUsImage.jpeg';
import Image1 from '../../assets/Image1.png';
import Image2 from '../../assets/Image2.png';
import Image3 from '../../assets/Image3.png';
import HairLose from '../../assets/HairLose.jpg';
import SeminarImage from '../../assets/SeminarImage.jpg';
import BuildingImage from '../../assets/BuildingImage.jpg';
import SlideImage1 from '../../assets/SlideImage1.jpg';
import SlideImage2 from '../../assets/SlideImage2.jpg';

import '../../index.css';
import '../../Styles/About.css';

interface SlideProps {
  images: string[];
}

const Slide: React.FC<SlideProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="slide">
      <button onClick={previousSlide} className='slide-prev'>Previous</button>
      <img src={images[currentSlide]} alt="" className="slide-image" />
      <button onClick={nextSlide} className='slide-next'>Next</button>
    </div>
  );
};

const About: React.FC = () => {
  const slideImages = [SlideImage1, SlideImage2];

  return (
    <section className="about" id="about">
      <h1 className="heading">About us</h1>
      <div className="row">
        <img src={AboutUsImage} alt="" className="image" />
      </div>
      <div className="content">
        <h3 className="title">We are group of stylists</h3>
        <p>Since 2017, Isaac Barbier has been one of the top addresses for professional barbers in Hamburg.</p>
        <p>Get professional advice, shave and hairstyle from us. Convince yourself of our high-quality and responsible work.</p>
        <p>We look forward to seeing you!</p>
      </div>
      <div className="icons-container">
        <div className="icons">
          <img src={Image1} alt="" />
          <h3>professional tools</h3>
        </div>
        <div className="icons">
          <img src={Image2} alt="" />
          <h3>quality tools</h3>
        </div>
        <div className="icons">
          <img src={Image3} alt="" />
          <h3>hair washing</h3>
        </div>
      </div>
      <main className="image-container">
        <div className="details-pic">
          <h2>Welcome to hair weaving studio ingo klimmet!</h2>
          <hr />
          <div className="card">
            <img src={HairLose} alt="" />
            <p>
              Do you have problems with your hair? Do you suffer from hair loss? Or do you
              just want a fuller mane? Then you've come to the right place. We at Hair Weaving Studio have been there for you in Hamburg for 30 years. Our team is at your side with many years of experience and at any time with advice and support. After an individual consultation, we will work together to find the best solution for you.
            </p>
          </div>
          <div className="card">
            <hr />
            <img src={SeminarImage} alt="" />
            <p>
              Thanks to seminars and training courses of our employees, you will always find the most fashionable trends and new developments. We always give our best, both professionally and personally. Whether hair extensions, hair thickening, wigs or second hair - we will certainly find the perfect solution for you among the various methods. After a visit to us, your new head of hair will look as if it has always belonged to you.
            </p>
          </div>
          <div className="card">
            <hr />
            <img src={BuildingImage} alt="" />
            <p>
              We have the best equipment and high-quality controls, which is why the implementation results in sustainable and high-quality treatment results. Thanks to our cooperation with very professional partners, such as Hair-Dreams, we always work with only the best products available on the market. We are looking forward to your visit to the Hair Weaving Studio Ingo Klimmet in Hamburg!
            </p>
          </div>
        </div>
      </main>
      <div className="gallery">
        <Slide images={slideImages} />
      </div>
      <div className='infos'>
      <i className="fa-brands fa-facebook"></i>
      </div>
      <div className='infos'>
      <i className="fa-brands fa-square-instagram"></i>
      </div>
      <div className='infos'>
            <i className="fa-brands fa-whatsapp"></i>
      </div>
            <i className="fa-solid fa-phone"></i>
    </section>
  );
};

export default About;