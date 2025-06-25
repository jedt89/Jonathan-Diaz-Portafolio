import graphicsProjects from '../../projects/designProjectsData/index';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const GraphicsProjects = () => {
  const settings = {
    className: '',
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      }
    ]
  };

  return (
    <>
      <section className='projects'>
        <h2>Proyectos gráficos</h2>
        <motion.div
          className='mockupSliderContainer'
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1
          }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Slider {...settings}>
            {Object.values(graphicsProjects).map((project) => {
              return (
                <div className='p-4' style={{ height: '70vh !important', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                  <img
                    className='sliderImg'
                    style={{
                      placeSelf: 'center',
                      height: '70vh',
                      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                      borderRadius: '0.5rem'
                    }}
                    src={project}
                  />
                </div>
              );
            })}
          </Slider>
        </motion.div>
      </section>
      <div className='divider'></div>
    </>
  );
};

export default GraphicsProjects;
