import images from '../assets/img/index';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const { androidIcon, webDesignIcon, programmingIcon } = images;
  return (
    <>
      <motion.section
        id='aboutMe-section'
        className='aboutMe'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className='aboutMeDescription'>
          <div className='aboutMeInfo'>
            <img src='./src/assets/img/profile_photo.jpg' alt='Profile photo' />
            <div className='aboutMeText'>
              <h4>Acerca de mí</h4>
              <p>
                Desarrollador FullStack y actor. Autodidacta, apasionado y
                proactivo, manejo diferentes tipos de herramientas, tanto en el
                ámbito tecnológico (diseño gráfico y programación), como en el
                comunicacional (relatoría, capacitación), enfocado al arte, la
                creatividad y el desarrollo de habilidades interpersonales.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      <section className='aboutMeItems'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <img className='width-100' src={programmingIcon} alt='Programming' />
          <label>Desarrollo FullStack</label>
          <p>
            Desarrollo e implementación de sitios web a nivel empresa, y
            productos. Aplicaciones web utilizando HTML - CSS - JS - TS - React
            js - Angular js - Node js.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <img className='width-100' src={androidIcon} alt='Android' />
          <label>Desarrollo Android</label>
          <p>
            Desarrollo e implementación de aplicaciones Android a nivel empresa,
            y productos. Aplicaciones Mobile utilizando JAVA - KOTLIN - RETROFIT
            - SQL.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <img className='width-100' src={webDesignIcon} alt='Graphic design' />
          <label>Diseño gráfico</label>
          <p>
            Diseño gráfico de brands y afiches para productoras artísticas
            utilizando Photoshop & Illustrator.
          </p>
        </motion.div>
      </section>
      <div className='divider'></div>
    </>
  );
};

export default AboutMe;
