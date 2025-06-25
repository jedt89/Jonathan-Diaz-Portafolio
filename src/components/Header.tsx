import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header id='header-section' className='header-container'>
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            delay: 1
          }}
          viewport={{ once: true, amount: 0.1 }}
        >
          Jonathan Díaz
        </motion.h1>
        <motion.div
          className='header-image'
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            delay: 1
          }}
          viewport={{ once: true, amount: 0.1 }}
        ></motion.div>
      </div>
    </header>
  );
};

export default Header;
