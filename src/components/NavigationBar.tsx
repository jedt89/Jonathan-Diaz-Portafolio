import { useState, useEffect } from 'react';
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import images from '../assets/img/index';

const NavigationBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navBrand } = images;

  const navItems = [
    { id: 1, text: 'Inicio', targetId: 'header-section', icon: <FaHome />, color: '#FF6B6B' },
    { id: 2, text: 'Acerca de mí', targetId: 'aboutMe-section', icon: <FaUser />, color: '#4ECDC4' },
    { id: 3, text: 'Skills', targetId: 'skills-section', icon: <FaCode />, color: '#45B7D1' },
    { id: 4, text: 'Experiencia', targetId: 'experience-section', icon: <FaBriefcase />, color: '#FFA07A' },
    { id: 5, text: 'Formación', targetId: 'education-section', icon: <FaGraduationCap />, color: '#98D8C8' },
    { id: 6, text: 'Contacto', targetId: 'contact-section', icon: <FaEnvelope />, color: '#D4A5A5' }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id: string, duration = 1500) => {
    const target = document.getElementById(id);
    if (!target) return;

    const startY = window.scrollY;
    const navbarHeight = 100;
    const targetY = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
    const distance = targetY - startY;
    const startTime = performance.now();

    const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutQuad(progress);
      window.scrollTo(0, startY + distance * eased);
      if (elapsed < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleInteractionOutside = (event: MouseEvent | TouchEvent) => {
      const mobileMenu = document.querySelector('.mobile-menu');
      const menuButton = document.querySelector('.mobile-menu-button');

      if (
        mobileMenuOpen &&
        mobileMenu &&
        !mobileMenu.contains(event.target as Node) &&
        menuButton &&
        !menuButton.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleInteractionOutside);
    document.addEventListener('touchstart', handleInteractionOutside);

    return () => {
      document.removeEventListener('mousedown', handleInteractionOutside);
      document.removeEventListener('touchstart', handleInteractionOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className='navigationBar'>
      <div>
        <img src={navBrand} alt='' className='width-30' />
      </div>

      {isMobile ? (
        <div>
          <button
            className='mobile-menu-button'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {mobileMenuOpen && (
            <div className='mobile-menu'>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.targetId, 1500)}
                  className='mobile-navButton'
                >
                  <span className='icon' style={{ color: item.color }}>{item.icon}</span>
                  <span>{item.text}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className='navLinks'>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.targetId, 1500)}
              className='navButton'
            >
              <span className='icon' style={{ color: item.color }}>{item.icon}</span>
              <span>{item.text}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;