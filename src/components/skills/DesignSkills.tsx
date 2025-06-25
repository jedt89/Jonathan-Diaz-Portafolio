import { motion } from 'framer-motion';

const DesignSkills = () => {
  return (
    <motion.div
      className='skillSection'
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <h4>Diseño gráfico</h4>
      <div className='skills'>
        <div className='skill'>
          <img
            className='width-70'
            src='./src/assets/img/photoshop.png'
            alt='Logo de tecnología'
          />
          <label>Photoshop</label>
        </div>
        <div className='skill'>
          <img
            className='width-70'
            src='./src/assets/img/premiere.png'
            alt='Logo de tecnología'
          />
          <label>Premiere</label>
        </div>
        <div className='skill'>
          <img
            className='width-70'
            src='./src/assets/img/after-effects.png'
            alt='Logo de tecnología'
          />
          <label>After effects</label>
        </div>
        <div className='skill'>
          <img
            className='width-70'
            src='./src/assets/img/illustrator.png'
            alt='Logo de tecnología'
          />
          <label>Illustrator</label>
        </div>
        <div className='skill'>
          <img
            className='width-70'
            src='./src/assets/img/audition.png'
            alt='Logo de tecnología'
          />
          <label>Audition</label>
        </div>
      </div>
    </motion.div>
  );
};

export default DesignSkills;
