import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { useScrollActive } from '../../hooks/useScrollActive';
import { useScrollDirection } from '../../hooks/useScrollDirection';

const NAV_LINKS = [
  { href: '#home', label: 'About' },
  { href: '#experience', label: 'Experience' },
  // { href: '#organization', label: 'Organization' },
  { href: '#project', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const SECTION_IDS = ['home', 'experience', 'project', 'tools', 'skills', 'contact'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { activeSection, isScrolled } = useScrollActive(SECTION_IDS);
  const hidden = useScrollDirection();

  const handleNavClick = () => setMenuOpen(false);

  // tutup menu kalau resize ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Overlay gelap saat menu open */}
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
        />
      )}

      <header className={`${styles.header} ${isScrolled ? styles.sticky : ''} ${hidden ? styles.hidden : ''}`}>
        <span className={styles.logo}>Portofolio</span>

        {/* Hamburger button */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`} />
        </button>

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
    </>
  );
}