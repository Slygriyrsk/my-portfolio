// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './FooterStyles.module.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; {year} Saharsh Kumar. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;