import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/personal2.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import R from '../../assets/R.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    tl.from('.hero', {
      opacity: 0,
      y: -50,
      duration: 1.5,
    })
    .from('.info h1', {
      opacity: 0,
      y: 50,
      scale: 0.8,
      duration: 1.5,
      stagger: 0.2,
    }, "-=0.5")
    .from('.info h2', {
      opacity: 0,
      y: 30,
      scale: 0.8,
      duration: 1.5,
    }, "-=0.5")
    .from('.info p', {
      opacity: 0,
      y: 30,
      scale: 0.8,
      duration: 1.5,
    }, "-=0.5")
    .from('.info span img', {
      opacity: 0,
      scale: 0.5,
      duration: 1.5,
      stagger: 0.3,
    }, "-=0.5")
    .from('.info button', {
      opacity: 0,
      y: 50,
      duration: 1.5,
    }, "-=0.5");

    // GSAP hover effect on icons
    gsap.utils.toArray('.info span img').forEach(icon => {
      gsap.fromTo(icon,
        { border: "2px solid transparent", boxShadow: "0 0 0 rgba(255, 255, 255, 0)" },
        {
          border: "2px solid rgba(255, 255, 255, 0.5)",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
          duration: 0.5,
          paused: true
        }
      );

      // Add hover effect using GSAP
      icon.addEventListener('mouseover', () => {
        gsap.to(icon, { border: "2px solid rgba(255, 255, 255, 0.8)", boxShadow: "0 0 15px rgba(255, 255, 255, 0.8)", duration: 0.3 });
      });

      icon.addEventListener('mouseout', () => {
        gsap.to(icon, { border: "2px solid rgba(255, 255, 255, 0.5)", boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)", duration: 0.3 });
      });
    });

    gsap.fromTo('.info h1',
      { color: "rgba(255, 255, 255, 0)", rotation: -15 },
      { color: "rgba(255, 255, 255, 1)", rotation: 0, duration: 1.5, stagger: 0.2 }
    );

    gsap.from('.info p', {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotation: 5,
      duration: 1.5,
    });

  }, []);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Saharsh Kumar"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Saharsh
          <br />
          Kumar
        </h1>
        <h2 style={{color: 'royalblue'}}>FullStack Developer</h2>
        <span>
          <a href="https://x.com/repatriation_23?t=Ypik-7PGgkKGkZfMTAEqjA&s=09" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/Slygriyrsk" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/saharsh-kumar-9768a8264/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern websites with animations and DSA in C/C++.
        </p>
        <a href={R} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;