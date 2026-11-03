import styles from './Footer.module.css';
import { CornerRightUp } from 'lucide-react';
import { goTo } from '../Header/Header';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span className={styles.line}>Copyright © 2026 Shaskia Putri Devi</span>
        <span className={styles.sep}> | </span>
        <span className={styles.line}>All rights reserved</span>
      </p>
      <a
        href="#home"
        onClick={(e) => goTo(e, '#home')}
        className={styles.upBtn}
        aria-label="Back to top"
      >
        <CornerRightUp />
      </a>
    </footer>
  );
}