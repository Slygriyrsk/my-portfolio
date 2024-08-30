import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './ProjectsStyles.module.css';
import blog from '../../assets/blog.jpg';
import apple from '../../assets/apple.png';
import keeper from '../../assets/keeper.png';
import sabot from '../../assets/sabot.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  useEffect(() => {
    gsap.from('.projectCard', {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.2,
      ease: 'power2.out'
    });

    // Hover animations
    const hoverAnimation = gsap.fromTo('.projectCard', 
      { scale: 1, y: 0 }, 
      { 
        scale: 1.05, 
        y: -10, 
        duration: 0.3, 
        ease: 'power2.out', 
        paused: true 
      }
    );

    document.querySelectorAll('.projectCard').forEach(card => {
      card.addEventListener('mouseenter', () => hoverAnimation.play());
      card.addEventListener('mouseleave', () => hoverAnimation.reverse());
    });

    return () => {
      document.querySelectorAll('.projectCard').forEach(card => {
        card.removeEventListener('mouseenter', () => hoverAnimation.play());
        card.removeEventListener('mouseleave', () => hoverAnimation.reverse());
      });
    };
  }, []);

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          className="projectCard"
          src={sabot}
          link="https://github.com/Slygriyrsk/sabot-gpt"
          h3="SABOT-AI"
          p="ChatGPT"
        />
        <ProjectCard
          className="projectCard"
          src={blog}
          link="https://github.com/Slygriyrsk/Blog-mern"
          h3="Blogger"
          p="Bloggin Website"
        />
        <ProjectCard
          className="projectCard"
          src={keeper}
          link="https://github.com/Slygriyrsk/keeper-app-react"
          h3="Keeper-APP"
          p="Keep Your Notes"
        />
        <ProjectCard
          className="projectCard"
          src={apple}
          link="https://github.com/Slygriyrsk/apple-web-clone"
          h3="Apple-Website"
          p="Apple Phone 3D"
        />
      </div>
    </section>
  );
}

export default Projects;
