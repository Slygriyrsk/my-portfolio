// ProjectCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ src, link, h3, p, className }) => (
  <a href={link} className={`${styles.card} ${className}`} style={{ width: '250px', height: '250px' }}>
    <img src={src} alt={h3} className={styles.image} />
    <h3>{h3}</h3>
    <p>{p}</p>
  </a>
);

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ProjectCard;
