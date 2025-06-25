import { motion } from 'framer-motion';
import images from '../../assets/img/index';

const MobileSkills = () => {
  const { java, kotlin, retrofitIcon, roomIcon } = images;
  return (
    <motion.div
      className='skillSection'
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <h4>Mobile</h4>
      <div className='skills'>
        <div className='skill'>
          <img className='width-70' src={java} alt='Logo de tecnología' />
          <label>Java</label>
        </div>
        <div className='skill'>
          <img className='width-70' src={kotlin} alt='Logo de tecnología' />
          <label>Kotlin</label>
        </div>
        <div className='skill'>
          <img
            className='width-70'
            src={retrofitIcon}
            alt='Logo de tecnología'
          />
          <label>Retrofit</label>
        </div>
        <div className='skill'>
          <img className='width-70' src={roomIcon} alt='Logo de tecnología' />
          <label>Room</label>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileSkills;
