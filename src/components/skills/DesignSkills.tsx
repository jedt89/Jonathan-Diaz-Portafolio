import { motion } from 'framer-motion';
import images from '../../assets/img/index';

const DesignSkills = () => {
  const { photoshop, premiere, afterEffects, illustrator, audition } = images;
  return (
    <motion.div
      className='skillSection'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <h4>Diseño gráfico</h4>
      <div className='skills'>
        <div className='skill'>
          <img className='width-70' src={photoshop} alt='Logo de tecnología' />
          <label>Photoshop</label>
        </div>
        <div className='skill'>
          <img className='width-70' src={premiere} alt='Logo de tecnología' />
          <label>Premiere</label>
        </div>
        <div className='skill'>
          <img
            className='width-70'
            src={afterEffects}
            alt='Logo de tecnología'
          />
          <label>After effects</label>
        </div>
        <div className='skill'>
          <img
            className='width-70'
            src={illustrator}
            alt='Logo de tecnología'
          />
          <label>Illustrator</label>
        </div>
        <div className='skill'>
          <img className='width-70' src={audition} alt='Logo de tecnología' />
          <label>Audition</label>
        </div>
      </div>
    </motion.div>
  );
};

export default DesignSkills;
