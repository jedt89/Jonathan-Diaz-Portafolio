import { useContext } from 'react';
import { ModalContext } from './context/ModalContext';
import MainContainer from './components/MainContainer';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './views/Skills';
import DevProjects from './views/DevProjects';
import Footer from './views/Footer';
import DesignProjects from './views/DesignProjects';
import ProjectModal from './components/ProjectModal';
import AudiovisualProjects from './views/AudiovisualProjects';
import ParticlesBackground from './components/ParticlesBackground';
import Education from './components/Education';
import './App.scss';
import Contact from './views/Contact';

function App() {
  const { projectModalIsOpen } = useContext(ModalContext);

  return (
    <div className='app-container'>
      <ParticlesBackground />
      <NavigationBar />
      <MainContainer>
        <Header />
        <AboutMe />
        <Skills />
        <DevProjects />
        <DesignProjects />
        <AudiovisualProjects />
        <Education />
        <Contact />

        {projectModalIsOpen && <ProjectModal />}
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;
