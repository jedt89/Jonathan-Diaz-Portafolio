import photoshopIcon from '../../assets/img/photoshop.png';
import illustratorIcon from '../../assets/img/illustrator.png';
import votoInteligente01 from './votoInteligente/VI_01.png';
import votoInteligente02 from './votoInteligente/VI_02.png';
import votoInteligente03A from './votoInteligente/VI_03A.png';
import votoInteligente03B from './votoInteligente/VI_03B.png';
import votoInteligente03C from './votoInteligente/VI_03C.png';
import votoInteligente04 from './votoInteligente/VI_04.png';
import votoInteligente05 from './votoInteligente/VI_05.png';
import votoInteligente06 from './votoInteligente/VI_06.png';
import mockupPololyte01 from './pololyte/Mockup_pololyte_01.png';
import mockupPololyte02 from './pololyte/Mockup_pololyte_02.png';
import mockupPololyte03 from './pololyte/Mockup_pololyte_03.png';
import mockupPololyte04 from './pololyte/Mockup_pololyte_04.png';
import mockupPololyte05 from './pololyte/Mockup_pololyte_05.png';
import mockupPololyte06 from './pololyte/Mockup_pololyte_06.png';

const mockupsProjects = {
  votoInteligente: {
    image: votoInteligente01,
    headDescription: 'App que automatiza los procesos de votación.',
    description:
      '"Voto Inteligente" es una App que automatiza los procesos de votación, tanto para municipalidades, como para empresas y/o particulares. El proyecto está diseñado en Android Studio con Java, Kotlin, y Retrofit.',
    title: 'Voto Inteligente',
    tech: [
      ['Adobe Photoshop', photoshopIcon],
      ['Adobe Illustrator', illustratorIcon]
    ],
    imgList: {
      votoInteligente01,
      votoInteligente02,
      votoInteligente03A,
      votoInteligente03B,
      votoInteligente03C,
      votoInteligente04,
      votoInteligente05,
      votoInteligente06
    },
    source: null
  },

  pololyte: {
    image: mockupPololyte01,
    headDescription: 'Plataforma que permite ofrecer servicios',
    description:
      '"Pololyte" es una plataforma para que personas cercanaas a una ubicación adquieran servicios de orientados a oficios; (gasfitería, electricidad, pintura, etc). El proyecto está diseñado en Android Studio con Java, Kotlin, y Retrofit.',
    title: 'Pololyte',
    tech: [
      ['Adobe Photoshop', photoshopIcon],
      ['Adobe Illustrator', illustratorIcon]
    ],
    imgList: {
      mockupPololyte01,
      mockupPololyte02,
      mockupPololyte03,
      mockupPololyte04,
      mockupPololyte05,
      mockupPololyte06
    },
    source: null
  }
};

export default mockupsProjects;
