import React from 'react';
import styles from './SkillList.module.css'; // Ensure this path is correct

function SkillList({ icon, skill, colorClass }) {
  return (
    <div className={`${styles.skillItem} ${styles[colorClass]}`}>
      <i className={`bx ${icon}`}></i>
      <span>{skill}</span>
    </div>
  );
}

export default SkillList;