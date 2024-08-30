import React from 'react';
import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();

  const icons = {
    HTML: 'bx bxl-html5',
    CSS: 'bx bxl-css3',
    JavaScript: 'bx bxl-javascript',
    Node: 'bx bxl-nodejs',
    MongoDB: 'bx bxl-mongodb',
    React: 'bx bxl-react',
    CPlusPlus: 'bx bxl-c-plus-plus',
    Python: 'bx bxl-python',
    TailwindCSS: 'bx bxl-tailwind-css',
    SQL: 'bx bxl-postgresql',
    Networking: 'bx-network-chart',
    Git: 'bx bxl-git',
    Vite: 'bx bxl-vite',
    Bootstrap: 'bx bxl-bootstrap'
  };

  const colorClasses = {
    HTML: 'html',
    CSS: 'css',
    JavaScript: 'javascript',
    Node: 'nodejs',
    MongoDB: 'mongodb',
    React: 'react',
    CPlusPlus: 'cplusplus',
    Python: 'python',
    TailwindCSS: 'tailwindcss',
    SQL: 'sql',
    Networking: 'networking',
    Git: 'git',
    Vite: 'vite',
    Bootstrap: 'bootstrap'
  };

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList icon={icons.HTML} skill="HTML" colorClass={colorClasses.HTML} />
        <SkillList icon={icons.CSS} skill="CSS" colorClass={colorClasses.CSS} />
        <SkillList icon={icons.JavaScript} skill="JavaScript" colorClass={colorClasses.JavaScript} />
        <SkillList icon={icons.MongoDB} skill="MongoDB" colorClass={colorClasses.MongoDB} />
        <SkillList icon={icons.Node} skill="Node" colorClass={colorClasses.Node} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList icon={icons.React} skill="React" colorClass={colorClasses.React} />
        <SkillList icon={icons.CPlusPlus} skill="C++" colorClass={colorClasses.CPlusPlus} />
        <SkillList icon={icons.Python} skill="Python" colorClass={colorClasses.Python} />
        <SkillList icon={icons.TailwindCSS} skill="Tailwind CSS" colorClass={colorClasses.TailwindCSS} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList icon={icons.SQL} skill="Postgre SQL" colorClass={colorClasses.SQL} />
        <SkillList icon={icons.Networking} skill="Networking" colorClass={colorClasses.Networking} />
        <SkillList icon={icons.Git} skill="Git" colorClass={colorClasses.Git} />
        <SkillList icon={icons.Vite} skill="Vite" colorClass={colorClasses.Vite} />
        <SkillList icon={icons.Bootstrap} skill="Bootstrap" colorClass={colorClasses.Bootstrap} />
      </div>
    </section>
  );
}

export default Skills;