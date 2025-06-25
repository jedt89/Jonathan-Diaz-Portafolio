import { motion } from 'framer-motion';
import images from '../assets/img/index';

const Education = () => {
  const { programmingIcon, androidIcon, mascarasDeTeatro } = images;
  return (
    <>
      <section id='education-section'>
        <h2>Formación</h2>
        <div className='aboutMe-item'>
          <motion.div
            className='ed-item'
            initial={{ opacity: 0, x: -100, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <img
              className='width-70'
              src={programmingIcon}
              alt='Logo de tecnología'
            />
            <div>
              <label>Desarrollo FullStack</label>
              <p>Desarrollo Fullstack, Academia Desafío Latam. Año 2025</p>
            </div>
          </motion.div>
          <motion.div
            className='ed-item'
            initial={{ opacity: 0, x: -100, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <img
              className='width-70'
              src={androidIcon}
              alt='Logo de tecnología'
            />
            <div>
              <label>Desarrollo Android</label>
              <p>
                Desarrollo Android, Programa 'Talento Digital para Chile'. Año
                2020
              </p>
            </div>
          </motion.div>
          <motion.div
            className='ed-item'
            initial={{ opacity: 0, x: -100, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <img
              className='width-70'
              src={mascarasDeTeatro}
              alt='Logo de tecnología'
            />
            <div>
              <label>Arte escénico Profesional</label>
              <p>
                Arte Escénico Profesional. Universidad Santo Tomás. Año 2011
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <div className='divider'></div>
    </>
  );
};

export default Education;
