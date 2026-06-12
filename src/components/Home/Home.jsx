import { useEffect, useRef } from 'react';
import styles from './Home.module.css';

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Typed.js
    const typed = new window.Typed('.multiple-text', {
      strings: ['Front End Developer', 'UI/UX Designer'],
      typeSpeed: 105,
      backSpeed: 105,
      backDelay: 1075,
      loop: true,
    });

    // ScrollReveal
    if (window.ScrollReveal) {
      const sr = window.ScrollReveal({ distance: '80px', duration: 2000, delay: 200 });
      sr.reveal('.sr-top', { origin: 'top' });
      sr.reveal('.sr-bottom', { origin: 'bottom' });
      sr.reveal('.sr-right', { origin: 'right' });
      sr.reveal('.sr-left', { origin: 'left' });
    }

    return () => typed.destroy();
  }, []);

  return (
    <section className={styles.home} id="home">
      <div className={`${styles.homeContent} sr-bottom`}>
        <h4 className="sr-top">Hi, My Name is</h4>
        <h1 className="sr-right">
          <span>Shas</span>kia Putri Devi
        </h1>
        <h3 className="sr-top">
          And I&apos;m a <span className="multiple-text" />
        </h3>
        <p className="sr-left">
          Welcome to my Portofolio! Fresh graduate in{' '}
          <span>Informatics Engineering</span> from Universitas Teknologi Bandung
          with a strong passion for <span>Technology</span> and <span>Design</span>.
          <br /><br />
          Skilled in UI/UX, and Front-End Development. By
          leveraging my skills, I am ready to contribute and give my best results.
          <br /><br />
          Feel free to explore my portfolio to see more of <span>my work</span>.
        </p>

        <div className={styles.sosmed}>
          <p>Find Me On</p>
          <a href="https://www.instagram.com/shaskiapv/" target="_blank" rel="noreferrer">
            <i className="bx bxl-instagram-alt" />
          </a>
          <a href="https://linkedin.com/in/shaskiapv" target="_blank" rel="noreferrer">
            <i className="bx bxl-linkedin" />
          </a>
          <a href="https://github.com/syxherr" target="_blank" rel="noreferrer">
            <i className="bx bxl-github" />
          </a>
        </div>

        <div className={`${styles.tombol} sr-right`}>
          <a
            href="Shaskia Putri Devi_resume.pdf"
            target="_blank"
            download
            className="btn"
          >
            Download CV
          </a>
          <a href="Portofolio_Shaskai Putri Devi.pdf" target="_blank" className="btn">
            Portofolio PDF
          </a>
        </div>
      </div>

      <div className={`${styles.profileImg} sr-top`}>
        <img src="images/profile2.png" alt="Shaskia Putri Devi" />
      </div>
    </section>
  );
}
