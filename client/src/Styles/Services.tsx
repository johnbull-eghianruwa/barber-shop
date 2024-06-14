import './Services.css';
import StylingImaage1 from '../assets/StylingImage1.jpg';
import MainlyImaage2 from '../assets/MainlyImage2.jpg';
import BeardImage3 from '../assets/BeardImage3.jpg';

const Services = () => {
  return (
    <section className="services" id="services">
        <h1 className="heading">Premium services</h1>
      
      <div className="box-container">
        <div className="box">
            <img src={StylingImaage1} alt="" />
            <div className="content">
                <h3>hair styling</h3>
            </div>
        </div>
        
        <div className="box">
            <img src={MainlyImaage2} alt="" />
            <div className="content">
                <h3>mainly haircut</h3>
            </div>
        </div>
        <div className="box">
            <img src={BeardImage3} alt="" />
            <div className="content">
                <h3>beard trimming</h3>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Services
