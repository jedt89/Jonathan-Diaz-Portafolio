import FrontEndProjects from '../components/devProjects/FrontEndProjects';
import BackendProjects from '../components/devProjects/BackendProjects';
import FullStackProjects from '../components/devProjects/FullStackProjects';

const DevProjects = () => {
  return (
    <>
      <section className='projects'>
        <h2 id='experience-section'>Desarrollo de Software</h2>
        <FrontEndProjects />
        <BackendProjects />
        <FullStackProjects />
      </section>
      <div className='divider'></div>
    </>
  );
};

export default DevProjects;
