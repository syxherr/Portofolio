import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright © 2025 Shaskia Putri Devi | All rights reserved</p>
      <a href="#home" className={styles.upBtn} aria-label="Back to top">
        <i className="bx bx-up-arrow-alt" />
      </a>
    </footer>
  );
}
