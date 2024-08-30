import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import styles from './Nav.module.css';
import logoDark from '../../assets/logo.png';
import logoLight from '../../assets/logo2.png';
import { useTheme } from '../../common/ThemeContext';
import { gsap } from 'gsap';

function Nav() {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const nameRef = useRef([]);
  const navItemsRef = useRef([]);

  const logo = theme === 'dark' ? logoDark : logoLight;

  useEffect(() => {
    if (nameRef.current.length > 0) {
      gsap.fromTo(
        nameRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1.3,
          y: 0,
          duration: 1,
          ease: 'back.out(1.7)',
          stagger: 0.1,
          repeat: -1,
          repeatDelay: 1,
          yoyo: true,
        }
      );
    }
  }, []);

  useEffect(() => {
    // GSAP rotation animation on hover
    navItemsRef.current.forEach((item) => {
      gsap.set(item, { rotation: 0 });
      item.addEventListener('mouseover', () => {
        gsap.to(item, { rotation: 0, duration: 1, ease: 'power1.inOut' });
      });
      item.addEventListener('mouseout', () => {
        gsap.to(item, { rotation: 0, duration: 1, ease: 'power1.inOut' });
      });
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <span className={styles.logoName}>
          {[...'Saharsh Kumar'].map((char, index) => (
            <span
              key={index}
              ref={(el) => (nameRef.current[index] = el)}
              style={char === 'S' || char === 'K' ? { color: 'rgba(0, 100, 180, 0.85)' } : {}}
            >
              {char}
            </span>
          ))}
        </span>
      </div>
      <div className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu}>
        {/* Hamburger menu icon */}
      </div>
      <ul className={`${styles.navLinks} ${menuOpen ? styles['menu-open'] : ''}`}>
        <li ref={(el) => (navItemsRef.current[0] = el)}>
          <Link to="projects" smooth duration={500} onClick={toggleMenu}>Projects</Link>
        </li>
        <li ref={(el) => (navItemsRef.current[1] = el)}>
          <Link to="skills" smooth duration={500} onClick={toggleMenu}>Skills</Link>
        </li>
        <li ref={(el) => (navItemsRef.current[2] = el)}>
          <Link to="contact" smooth duration={500} onClick={toggleMenu}>Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
