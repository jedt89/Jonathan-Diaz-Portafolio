import { motion } from 'framer-motion';
import images from '../../assets/img/index';

const DevSkills = () => {
  const {
    htmlImg,
    cssImg,
    javascriptIcon,
    typescriptIcon,
    logoBootstrap,
    angularIcon,
    reactIcon
  } = images;
  return (
    <motion.div
      className='skillSection'
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <h4>Desarrollo de Software</h4>
      <div className='skills'>
        <div className='skill'>
          <img className='width-70' src={htmlImg} alt='Logo de tecnología' />
          <label>HTML 5</label>
        </div>
        <div className='skill'>
          <img className='width-70' src={cssImg} alt='Logo de tecnología' />
          <label>CSS 3</label>
        </div>
        <div className='skill'>
          <img
            className='width-70'
            src={javascriptIcon}
            alt='Logo de tecnología'
          />
          <label>Javascript</label>
        </div>
        <div className='skill'>
          <img
            className='width-70'
            src={typescriptIcon}
            alt='Logo de tecnología'
          />
          <label>Typescript</label>
        </div>
        <div className='skill'>
          <img
            className='width-70'
            src={logoBootstrap}
            alt='Logo de tecnología'
          />
          <label>Bootstrap</label>
        </div>
        <div className='skill'>
          <img
            className='width-70'
            src={angularIcon}
            alt='Logo de tecnología'
          />
          <label>Angular</label>
        </div>
        <div className='skill'>
          <img className='width-70' src={reactIcon} alt='Logo de tecnología' />
          <label>React</label>
        </div>
      </div>
    </motion.div>
  );
};

export default DevSkills;
