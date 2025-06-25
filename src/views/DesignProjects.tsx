import GraphicProjects from '../components/designProjects/GraphicsProjects';
import MockupsProjects from '../components/designProjects/MockupsProjects';

const DesignProjects = () => {
  return (
    <div className='projects'>
      <div className='sliderContainer'>
        <GraphicProjects />
      </div>
      <div className='projectsContainer'>
        <MockupsProjects />
      </div>
    </div>
  );
};

export default DesignProjects;
