import mammaMiaHead from '../../../projects/softwareProjectsData/frontEnd/mammaMia/mammaMiaHead.png';
import mammaMia00 from '../../../projects/softwareProjectsData/frontEnd/mammaMia/mammaMia00.png';
import mammaMia01 from '../../../projects/softwareProjectsData/frontEnd/mammaMia/mammaMia01.png';
import mammaMia02 from '../../../projects/softwareProjectsData/frontEnd/mammaMia/mammaMia02.png';
import mammaMia03 from '../../../projects/softwareProjectsData/frontEnd/mammaMia/mammaMia03.png';
import mammaMia04 from '../../../projects/softwareProjectsData/frontEnd/mammaMia/mammaMia04.png';
import weatherHead from '../../../projects/softwareProjectsData/frontEnd/speedWeather/weatherHead.png';
import weather00 from '../../../projects/softwareProjectsData/frontEnd/speedWeather/weather00.png';
import weather01 from '../../../projects/softwareProjectsData/frontEnd/speedWeather/weather01.png';
import weather02 from '../../../projects/softwareProjectsData/frontEnd/speedWeather/weather02.png';
import weather03 from '../../../projects/softwareProjectsData/frontEnd/speedWeather/weather03.png';
import weather04 from '../../../projects/softwareProjectsData/frontEnd/speedWeather/weather04.png';
import masterHead from '../../../projects/softwareProjectsData/frontEnd/master_habits_pro/masterHead.png';
import master00 from '../../../projects/softwareProjectsData/frontEnd/master_habits_pro/master00.png';
import master01 from '../../../projects/softwareProjectsData/frontEnd/master_habits_pro/master01.png';
import master02 from '../../../projects/softwareProjectsData/frontEnd/master_habits_pro/master02.png';
import master03 from '../../../projects/softwareProjectsData/frontEnd/master_habits_pro/master03.png';
import master04 from '../../../projects/softwareProjectsData/frontEnd/master_habits_pro/master04.png';
import axiosIcon from '../../../assets/img/tech/axios_icon.png';
import javascriptIcon2 from '../../../assets/img/tech/javascript_icon.png';
import reactIcon2 from '../../../assets/img/tech/react_icon.png';
import reactBootstrapIconIcon from '../../../assets/img/tech/reactBootstrap_icon.png';
import sassIcon from '../../../assets/img/tech/sass_icon.png';
import tailwindIcon from '../../../assets/img/tech/tailwind_icon.png';
import typescriptIcon2 from '../../../assets/img/tech/typescript_icon.png';

const frontEndProjects = {
  mammaMia: {
    image: mammaMiaHead,
    headDescription:
      'Aplicación web para la venta de pizzas, con carrito de compras y gestión de pedidos.',
    description:
      'Aplicación web para la venta de pizzas, con carrito de compras y gestión de pedidos.',
    title: "Pizzería 'Mamma mía'",
    tech: [
      ['React', reactIcon2],
      ['JavaScript', javascriptIcon2],
      ['Axios', axiosIcon],
      ['React Bootstrap', reactBootstrapIconIcon],
      ['Sass', sassIcon]
    ],
    imgList: { mammaMia00, mammaMia01, mammaMia02, mammaMia03, mammaMia04 },
    source: 'https://github.com/jedt89/Pizzeria_mamma_mia_app'
  },

  speedWeather: {
    image: weatherHead,
    headDescription:
      'Aplicación web para visualización y pronóstico del clima.',
    description: 'Aplicación web para visualización y pronóstico del clima',
    title: 'Speed-weather',
    tech: [
      ['React', reactIcon2],
      ['Typescript', typescriptIcon2],
      ['Axios', axiosIcon],
      ['Sass', sassIcon]
    ],
    imgList: { weather00, weather01, weather02, weather03, weather04 },
    source: 'https://github.com/jedt89/speed-weather'
  },

  masterHabits: {
    image: masterHead,
    headDescription:
      'Aplicación web para la gestión de hábitos, seguimiento y estadísticas.',
    description:
      'Aplicación web para la gestión de hábitos, seguimiento y estadísticas.',
    title: 'Master habits pro',
    tech: [
      ['React', reactIcon2],
      ['JavaScript', javascriptIcon2],
      ['Axios', axiosIcon],
      ['Tailwind CSS', tailwindIcon],
      ['Sass', sassIcon]
    ],
    imgList: { master00, master01, master02, master03, master04 },
    source: 'https://github.com/jedt89/master-habits-pro'
  }
};

export default frontEndProjects;
