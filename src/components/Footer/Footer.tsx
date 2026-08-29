import styles from './Footer.module.css';
import { CornerRightUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright © 2026 Shaskia Putri Devi | All rights reserved</p>
      <a href="#home" className={styles.upBtn} aria-label="Back to top">
         <CornerRightUp />
      </a>
    </footer>
  );
}