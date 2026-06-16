import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { useScrollActive } from '../../hooks/useScrollActive';
import { useScrollDirection } from '../../hooks/useScrollDirection';

const NAV_LINKS = [
  { href: '#home', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#organization', label: 'Organization' },
  { href: '#project', label: 'Projects' },
  // { href: '#tools', label: 'Tools' },
  // { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const SECTION_IDS = ['home', 'education', 'organization', 'project', 'tools', 'skills', 'contact'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { activeSection, isScrolled } = useScrollActive(SECTION_IDS);
  const hidden = useScrollDirection()  // ← tambah ()
  
  useEffect(() => {
  const handleScroll = () => {
    console.log('scrollY:', window.scrollY, 'hidden:', hidden);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [hidden]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.sticky : ''} ${hidden ? styles.hidden : ''}`}>
      <span className={styles.logo}>Portofolio</span>

      <nav className={`${styles.navbar} ${menuOpen ? styles.open : ''}`}>
        {NAV_LINKS.map(({ href, label }) => {
          const id = href.replace('#', '');
          return (
            <a
              key={href}
              href={href}
              className={activeSection === id ? styles.active : ''}
              onClick={handleNavClick}
            >
              {label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
