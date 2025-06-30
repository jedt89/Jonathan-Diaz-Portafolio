import jewelHead from '../backend/myPrecious/jewelHead.png';
import jewel00 from '../backend/myPrecious/jewel00.png';
import jewel01 from '../backend/myPrecious/jewel01.png';
import jewel02 from '../backend/myPrecious/jewel02.png';
import jewel03 from '../backend/myPrecious/jewel03.png';
import softJobsHead from '../backend/softJobs/softJobsHead.png';
import softJobs00 from '../backend/softJobs/softJobs00.png';
import softJobs01 from '../backend/softJobs/softJobs01.png';
import softJobs02 from '../backend/softJobs/softJobs02.png';
import nanacaoHead from '../backend/nanacao/nanacaoHead.png';
import nanacao00 from '../backend/nanacao/nanacao00.png';
import nodeIcon from '../../../assets/img/tech/node_icon.png';
import expressIcon from '../../../assets/img/tech/express_icon.png';
import postgresqlIcon from '../../../assets/img/tech/postgre_icon.png';
import dotEnvIcon from '../../../assets/img/tech/dotEnv_icon.png';

const backendProjects = {
  myPrecious: {
    image: jewelHead,
    headDescription:
      'API RESTful construida Node.js y Express que gestiona productos para la tienda de joyas "My precious".',
    description:
      'API RESTful construida con Node.js y Express para una tienda ficticia de joyas llamada "My Precious". Gestiona productos y ofrece endpoints con filtrado, ordenamiento, paginación y formato HATEOAS. Con conexión a base de datos PostgreSQL y manejo de variables de entorno con dotenv.',
    title: 'My Precious',
    tech: [
      ['Node.js', nodeIcon],
      ['Express.js', expressIcon],
      ['PostgreSQL', postgresqlIcon],
      ['Dotenv', dotEnvIcon]
    ],
    imgList: { jewel00, jewel01, jewel02, jewel03 },
    source: 'https://github.com/jedt89/My-precious'
  },

  softJobsLogin: {
    image: softJobsHead,
    headDescription:
      'API RESTful para autenticación y autorización de usuarios en la plataforma SoftJobs.',
    description:
      'API RESTful desarrollada para la plataforma SoftJobs, centrada en la autenticación y autorización de usuarios utilizando JSON Web Tokens (JWT). Permite el registro de usuarios, inicio de sesión seguro y consulta de información protegida. Construida sobre Node.js y Express, con PostgreSQL como base de datos relacional.',
    title: 'SoftJobs Login',
    tech: [
      ['Node.js', nodeIcon],
      ['Express.js', expressIcon],
      ['PostgreSQL', postgresqlIcon],
      ['Dotenv', dotEnvIcon]
    ],
    imgList: { softJobs00, softJobs01, softJobs02 },
    source: 'https://github.com/jedt89/SoftJobs-login'
  },

  nanacao: {
    image: nanacaoHead,
    headDescription: 'API RESTful para ventas en una cafetería.',
    description:
      'API RESTful desarrollada en Node.js para gestionar operaciones CRUD relacionadas con una cafetería. La aplicación permite realizar operaciones como crear, leer, actualizar y eliminar información de productos, todo ello respaldado por una suite de pruebas automatizadas que garantizan la calidad y estabilidad del código.',
    title: 'Cafetería Nanacao',
    tech: [
      ['Node.js', nodeIcon],
      ['Express.js', expressIcon],
      ['PostgreSQL', postgresqlIcon],
      ['Dotenv', dotEnvIcon]
    ],
    imgList: { nanacao00 },
    source: 'https://github.com/jedt89/cafeteria_Nanacao'
  }
};

export default backendProjects;
