import ChooseImage1 from '../../assets/ChooseImage1.png';
import BusinessImage from '../../assets/BusinessImage.jpeg';
import EveningImage from '../../assets/EveningImage.jpg';
import PartyImage from '../../assets/PartyImage.jpg';

import '../../Styles/Styles.css';

const Styles = () => {
  return (
    <section className="styles" id="styles">
        <h1 className="heading">choose your styles</h1>
        <div className="box-container">
            <div className="box">
                <div className="image">
                    <img src={ChooseImage1} alt="" />
                </div>
                <div className="content">
                <h3 className='title'>Wedding hairstyle</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, facere?</p>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src={PartyImage} alt="" />
                </div>
                <div className="content">
                    <h3 className='title'>party hairstyle</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, facere?</p>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src={EveningImage} alt="" />
                </div>
                <div className="content">
                    <h3 className='title'>evening hairstyle</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, facere?</p>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src={BusinessImage} alt="" />
                </div>
                <div className="content">
                    <h3 className='title'>business hairstyle</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, facere?</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Styles
