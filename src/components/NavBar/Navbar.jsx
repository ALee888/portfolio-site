import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('header');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      // Add section detection logic here
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setExpanded(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''} ${expanded ? styles.navExpanded : ''}`}>
      <img 
        src='./logos/AL-logo.png' 
        alt='Logo' 
        className={styles.logo}
        onClick={() => handleNavClick('header')}
      />
      
      <button 
        className={styles.menuToggle}
        onClick={() => setExpanded(!expanded)}
      >
        ☰
      </button>
      
      <div className={styles.navItems}>
        {['about', 'experience', 'projects', 'contact'].map((section) => (
          <button
            key={section}
            className={`${styles.button} ${activeSection === section ? styles.buttonActive : ''}`}
            onClick={() => handleNavClick(section)}
          >
            {section}
          </button>
        ))}
      </div>
    </nav>
  );
}
export default Navbar;