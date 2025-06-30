import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import audiovisualProjects from '../projects/audiovisualProjectsData/index';

const AudiovisualProjects = () => {
  const projects = Object.values(audiovisualProjects);
  const MotionProjectCard = motion(ProjectCard);

  return (
    <>
      <section className='projects'>
        <h2>Proyectos audiovisuales</h2>
        <div className='projectsContainer'>
          {projects.map((project, index) => {
            const initialX = index % 2 === 0 ? -50 : 50;

            return (
              <MotionProjectCard
                key={index}
                projectImg={project.image}
                description={project.description}
                headDescription={project.headDescription}
                title={project.title}
                imgList={project.imgList}
                tech={project.tech}
                source={project.source}
                code={false}
                audiovisual={true}
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

export default AudiovisualProjects;
