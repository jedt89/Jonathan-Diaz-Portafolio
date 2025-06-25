import DesignSkills from '../components/skills/DesignSkills';
import DevSkills from '../components/skills/DevSkills';
import MobileSkills from '../components/skills/MobileSkills';

const Skills = () => {
  return (
    <>
      <section id='skills-section' className='skills-component'>
        <h2>Skills</h2>
        <div className='skills-container'>
          <DevSkills />
          <MobileSkills />
          <DesignSkills />
        </div>
      </section>
      <div className='divider'></div>
    </>
  );
};

export default Skills;
