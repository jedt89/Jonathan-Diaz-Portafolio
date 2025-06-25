import { motion } from 'framer-motion';
import mockupsProjects from '../../projects/mockupsProjectsData';
import MockupCard from '../MockupCard';

const MockupsProjects = () => {
  const projects = Object.values(mockupsProjects);
  const MotionMockupCard = motion(MockupCard);

  return (
    <>
      <section className='projects'>
        <h2>Mockups</h2>
        <div className='projectsContainer'>
          {projects.map((project, index) => {
            const initialX = index % 2 === 0 ? -100 : 100;

            return (
              <MotionMockupCard
                key={index}
                projectImg={project.image}
                description={project.description}
                headDescription={project.headDescription}
                title={project.title}
                imgList={project.imgList}
                tech={project.tech}
                source={project.source}
                code={false}
                audiovisual={false}
                initial={{ opacity: 0, x: initialX, y: 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.1 }}
              />
            );
          })}
        </div>
      </section>
      <div className='divider'></div>
    </>
  );
};

export default MockupsProjects;
