import { motion } from 'framer-motion';
import './Card.css';


const Cards = () => {
  return (
    <>
      <motion.div 
        className="card_button" 
        whileHover={{ scale: 1.05 }} 
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Rishta trademark notice
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
            <img src={"https://res.cloudinary.com/dh32zavox/image/upload/v1735119589/rishta%20images/gpufnrf8zaayc6yax8db.png"} alt="" className="img" />
            <p>Millions of people register on Rishtaappoffical.com looking for someone special. This site is for serious singles looking for long-lasting relationships.</p>
          </motion.div>
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img src={"https://res.cloudinary.com/dh32zavox/image/upload/v1735120961/rishta%20images/ow4nwemupd9anqufgycy.png"} alt="" style={{ height: '70px', marginBottom: '30px' }} />
            <p>80% of our members are highly educated. Most of them are successful professionals in their selected fields.</p>
          </motion.div>
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img src={"https://res.cloudinary.com/dh32zavox/image/upload/v1735119590/rishta%20images/tf361wodu0lrz2qstrd5.png"} alt="" className="img" />
            <p>Rishtaappoffical.com uses a smart matchmaking system. We present you matches based on current location, education level, and lifestyle choices.</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Cards;
