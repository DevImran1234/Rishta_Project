import { motion } from 'framer-motion';
import './Card.css';
import img from '../../images/img9.png';
import img2 from '../../images/img10.png';
import img3 from '../../images/img11.png';

const Cards = () => {
  return (
    <>
      <motion.div 
        className="card_button" 
        whileHover={{ scale: 1.05 }} 
        transition={{ type: 'spring', stiffness: 300 }}
      >
        SHADI trademark notice
      </motion.div>
      <div className="card-wrapper">
        <motion.div 
          className="card-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <div className="cards_container">
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={img} alt="" className="img" />
            <p>Millions of people register on Shadi.com looking for someone special. This site is for serious singles looking for long-lasting relationships.</p>
          </motion.div>
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img src={img2} alt="" style={{ height: '70px', marginBottom: '30px' }} />
            <p>80% of our members are highly educated. Most of them are successful professionals in their selected fields.</p>
          </motion.div>
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img src={img3} alt="" className="img" />
            <p>Shadi.com uses a smart matchmaking system. We present you matches based on current location, education level, and lifestyle choices.</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Cards;