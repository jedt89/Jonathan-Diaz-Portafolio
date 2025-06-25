import { motion } from "framer-motion";

const DevSkills = () => {
  return (
    <motion.div
      className='skillSection'
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <h4>Desarrollo de Software</h4>
      <div className='skills'>
        <div className='skill'>
          <img
            className='width-70'
            src='./src/assets/img/html-img.png'
            alt='Logo de tecnología'
          />
          <label>HTML 5</label>
        </div>
        <div className='skill'>
          <img
            className='width-70'
            src='./src/assets/img/css-img.png'
            alt='Logo de tecnología'
          />
          <label>CSS 3</label>
        </div>
        <div className='skill'>
          <img
            className='width-70'
            src='./src/assets/img/javascript-icon.png'
            alt='Logo de tecnología'
          />
          <label>Javascript</label>
        </div>
        <div className='skill'>
          <img
            className='width-70'
            src='./src/assets/img/typescript-icon.png'
            alt='Logo de tecnología'
          />
          <label>Typescript</label>
        </div>
        <div className='skill'>
          <img
            className='width-70'
            src='./src/assets/img/logo-bootstrap.png'
            alt='Logo de tecnología'
          />
          <label>Bootstrap</label>
        </div>
        <div className='skill'>
          <img
            className='width-70'
            src='./src/assets/img/angular-icon.png'
            alt='Logo de tecnología'
          />
          <label>Angular</label>
        </div>
        <div className='skill'>
          <img
            className='width-70'
            src='./src/assets/img/react-icon.png'
            alt='Logo de tecnología'
          />
          <label>React</label>
        </div>
      </div>
    </motion.div>
  );
};

export default DevSkills;
