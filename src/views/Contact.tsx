import { Button } from '@heroui/button';
import images from '../assets/img/index';

const Contact = () => {
  const { githubIcon, linkedinIcon, mailIcon } = images;
  return (
    <>
      <section id='contact-section' className='contactContainer'>
        <h2 style={{ marginBottom: '0' }}>Contacto</h2>
        <label>
          ¿Te gustaría que trabajemos juntos? ¡házmelo saber y contáctame!
        </label>
        <div className='contact'>
          <a href='https://github.com/jedt89' target='_blank'>
            <img className='width-50' src={githubIcon} alt='GitHub icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/jonathan-diaz-tobar-241572186'
            target='_blank'
          >
            <img className='width-50' src={linkedinIcon} alt='Linkedin icon' />
          </a>

          <a href='mailto:jedt_89@gmail.com' target='_blank'>
            <img className='width-50' src={mailIcon} alt='Mail icon' />
          </a>
        </div>
        <Button style={{marginTop: '2rem'}} color='success' variant='ghost' radius='full' size='lg'>
          Descarga mi CV
        </Button>
      </section>
      <div className='divider'></div>
    </>
  );
};

export default Contact;
