const NavigationBar = () => {
  const navItems = [
    { id: 1, text: 'Inicio', targetId: 'header-section' },
    { id: 2, text: 'Acerca de mí', targetId: 'aboutMe-section' },
    { id: 3, text: 'Skills', targetId: 'skills-section' },
    { id: 4, text: 'Experiencia', targetId: 'experience-section' },
    { id: 5, text: 'Formación', targetId: 'education-section' },
    { id: 6, text: 'Contacto', targetId: 'contact-section' }
  ];

  const scrollToSection = (id: string, duration = 1500) => {
    const target = document.getElementById(id);
    if (!target) return;

    const startY = window.scrollY;
    const navbarHeight = 80;
    const targetY =
      target.getBoundingClientRect().top + window.scrollY - navbarHeight;
    const distance = targetY - startY;
    const startTime = performance.now();

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

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
  };

  return (
    <nav className='navigationBar'>
      <div className='navLinks'>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.targetId, 1500)}
            className='navButton'
          >
            {item.text}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;
