import ProjectCard from '../ProjectCard';
import backendProjects from '../../projects/softwareProjectsData/backend';
import { motion } from 'framer-motion';

const BackendProjects = () => {
  const projects = Object.values(backendProjects);
  const MotionProjectCard = motion(ProjectCard);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h5>Proyectos Backend</h5>
      <div className='projectsContainer'>
        {projects.map((project, index) => (
          <MotionProjectCard
            key={index}
            projectImg={project.image}
            description={project.description}
            headDescription={project.headDescription}
            title={project.title}
            imgList={project.imgList}
            tech={project.tech}
            source={project.source}
            code={true}
            audiovisual={false}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: index * 0.4
            }}
            viewport={{ once: false, amount: 0.1 }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackendProjects;
