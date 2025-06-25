import workerTrackHead from '../../../projects/softwareDevelopmentProjectsData/fullStack/workerTrack/workerTrackHead.png';
import workerTrack00 from '../../../projects/softwareDevelopmentProjectsData/fullStack/workerTrack/workerTrack00.png';
import workerTrack01 from '../../../projects/softwareDevelopmentProjectsData/fullStack/workerTrack/workerTrack01.png';
import workerTrack02 from '../../../projects/softwareDevelopmentProjectsData/fullStack/workerTrack/workerTrack02.png';
import workerTrack03 from '../../../projects/softwareDevelopmentProjectsData/fullStack/workerTrack/workerTrack03.png';
import workerTrack04 from '../../../projects/softwareDevelopmentProjectsData/fullStack/workerTrack/workerTrack04.png';
import inventariusProhead from '../../../projects/softwareDevelopmentProjectsData/fullStack/inventariusPro/inventariusProHead.png';
import inventariusPro00 from '../../../projects/softwareDevelopmentProjectsData/fullStack/inventariusPro/inventariusPro00.png';
import inventariusPro01 from '../../../projects/softwareDevelopmentProjectsData/fullStack/inventariusPro/inventariusPro01.png';
import inventariusPro02 from '../../../projects/softwareDevelopmentProjectsData/fullStack/inventariusPro/inventariusPro02.png';
import inventariusPro03 from '../../../projects/softwareDevelopmentProjectsData/fullStack/inventariusPro/inventariusPro03.png';
import inventariusPro04 from '../../../projects/softwareDevelopmentProjectsData/fullStack/inventariusPro/inventariusPro04.png';
import marketTechHeaad from '../../../projects/softwareDevelopmentProjectsData/fullStack/marketTech/marketTechHead.png';
import marketTech00 from '../../../projects/softwareDevelopmentProjectsData/fullStack/marketTech/marketTech00.png';
import marketTech01 from '../../../projects/softwareDevelopmentProjectsData/fullStack/marketTech/marketTech01.png';
import marketTech02 from '../../../projects/softwareDevelopmentProjectsData/fullStack/marketTech/marketTech02.png';
import marketTech03 from '../../../projects/softwareDevelopmentProjectsData/fullStack/marketTech/marketTech03.png';
import marketTech04 from '../../../projects/softwareDevelopmentProjectsData/fullStack/marketTech/marketTech04.png';
import axiosIcon from '../../../assets/img/tech/axios_icon.png';
import javascriptIcon2 from '../../../assets/img/tech/javascript_icon.png';
import reactIcon2 from '../../../assets/img/tech/react_icon.png';
import reactBootstrapIconIcon from '../../../assets/img/tech/reactBootstrap_icon.png';
import sassIcon from '../../../assets/img/tech/sass_icon.png';
import tailwindIcon from '../../../assets/img/tech/tailwind_icon.png';
import nodeIcon from '../../../assets/img/tech/node_icon.png';
import expressIcon from '../../../assets/img/tech/express_icon.png';
import postgresqlIcon from '../../../assets/img/tech/postgre_icon.png';
import dotEnvIcon from '../../../assets/img/tech/dotEnv_icon.png';

const fullstackProjects = {
  workerTrack: {
    image: workerTrackHead,
    headDescription:
      'Aplicación web para registro e inforamción de trabajadores.',
    description:
      'Aplicación web que permite registrar, editar y eliminar inforamción de trabajadores de una empresa, comunidad o colectivo.',
    title: 'Worker-Track',
    tech: [
      // Frontend
      ['React', reactIcon2],
      ['JavaScript', javascriptIcon2],
      ['Axios', axiosIcon],
      ['Tailwind CSS', tailwindIcon],
      ['Sass', sassIcon],
      // Backend
      ['Node.js', nodeIcon],
      ['Express.js', expressIcon],
      ['PostgreSQL', postgresqlIcon],
      ['Dotenv', dotEnvIcon]
    ],
    imgList: { workerTrack00, workerTrack01, workerTrack02, workerTrack03, workerTrack04 },
    source: 'https://github.com/jedt89/WorkerTrack'
  },

  marketTech: {
    image: marketTechHeaad,
    headDescription:
      'Aplicación web tipo "Marketplace" para venta de artículos tecnológicos.',
    description:
      'Aplicación web que permite registrar, editar, eliminar y comercializar productos enfocados al área de hardware informático.',
    title: 'Market-Tech',
    tech: [
      // Frontend
      ['React', reactIcon2],
      ['JavaScript', javascriptIcon2],
      ['Axios', axiosIcon],
      ['React Bootstrap', reactBootstrapIconIcon],
      ['Sass', sassIcon],
      // Backend
      ['Node.js', nodeIcon],
      ['Express.js', expressIcon],
      ['PostgreSQL', postgresqlIcon],
      ['Dotenv', dotEnvIcon]
    ],
    imgList: {
      marketTech00,
      marketTech01,
      marketTech02,
      marketTech03,
      marketTech04
    },
    source: 'https://github.com/jedt89/MarketTech'
  },

  inventariusPro: {
    image: inventariusProhead,
    headDescription:
      'Aplicación web para registro e inforamción de productos e inventario.',
    description:
      'Aplicación web que permite registrar, editar y eliminar inforamción de productos, sus precios, cantidades e inventario.',
    title: 'Inventarius pro',
    tech: [
      // Frontend
      ['React', reactIcon2],
      ['JavaScript', javascriptIcon2],
      ['Axios', axiosIcon],
      ['Tailwind CSS', tailwindIcon],
      ['Sass', sassIcon],
      // Backend
      ['Node.js', nodeIcon],
      ['Express.js', expressIcon],
      ['PostgreSQL', postgresqlIcon],
      ['Dotenv', dotEnvIcon]
    ],
    imgList: {
      inventariusPro00,
      inventariusPro01,
      inventariusPro02,
      inventariusPro03,
      inventariusPro04
    },
    source: 'https://github.com/jedt89/InventariusPro'
  }
};

export default fullstackProjects;
