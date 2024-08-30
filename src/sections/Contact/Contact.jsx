import React, { useRef, useState } from 'react';
import styles from './ContactStyles.module.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setStatus('Your message has been sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('There was a problem sending your message.');
        }
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.formGroup}>
          <label htmlFor="from_name"></label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            placeholder="Name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="from_email"></label>
          <input
            type="email"
            name="from_email"
            id="from_email"
            placeholder="Email"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message"></label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className={`${styles.btn} ${styles.hover}`} type="submit" value="Send" />
        {status && <p className={styles.statusMessage}>{status}</p>}
      </form>
    </section>
  );
}

export default Contact;
