import { AnimatePresence, animate, motion } from 'motion/react';
import { useEffect, useState, type MouseEvent } from 'react';
import LiquidGlass from '../LiquidGlass/LiquidGlass';
import { useScrollActive } from '../../hooks/useScrollActive';
import styles from './Header.module.css';

const NAV_ITEMS = [
  { id: 'home', label: 'About', href: '#home' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'project', label: 'Projects', href: '#project' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

const SECTION_IDS = NAV_ITEMS.map((n) => n.id);
const pill = { type: 'spring', stiffness: 420, damping: 34, mass: 0.8 } as const;

let scrollControls: { stop: () => void } | null = null;

/** Klik link section: scroll halus ke sana, bukan lompat. */
function goTo(e: MouseEvent<HTMLAnchorElement>, href: string) {
  const el = document.getElementById(href.slice(1));
  if (!el) return;
  e.preventDefault();

  scrollControls?.stop();
  const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  const target = Math.max(0, Math.round(el.getBoundingClientRect().top + window.scrollY - margin));
  history.replaceState(null, '', href);

  // Kalau user scroll sendiri di tengah animasi, animasinya berhenti.
  function cleanup() {
    window.removeEventListener('wheel', stop);
    window.removeEventListener('touchstart', stop);
  }
  function stop() {
    scrollControls?.stop();
    cleanup();
  }
  window.addEventListener('wheel', stop, { passive: true });
  window.addEventListener('touchstart', stop, { passive: true });

  scrollControls = animate(window.scrollY, target, {
    duration: 0.9,
    ease: [0.65, 0, 0.35, 1],
    onUpdate: (y) => window.scrollTo({ top: y, behavior: 'instant' }),
    onComplete: cleanup,
  });
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { activeSection } = useScrollActive(SECTION_IDS);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <LiquidGlass radius={28} className={styles.bar}>
          <a href="#home" onClick={(e) => goTo(e, '#home')} className={styles.brand} aria-label="Shaskia — home">
            <span className={styles.mark}>S</span>
          </a>

          <nav aria-label="Primary" className={styles.links}>
            <ul>
              {NAV_ITEMS.map((item) => {
                const on = item.id === activeSection;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => goTo(e, item.href)}
                      aria-current={on ? 'true' : undefined}
                      className={`${styles.link} ${on ? styles.linkActive : ''}`}
                    >
                      {on && <motion.span layoutId="nav-pill" transition={pill} className={styles.pill} />}
                      <span className={styles.linkText}>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            className={styles.burger}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <motion.line x1="5" x2="19" initial={false} animate={open ? { y1: 5, y2: 19 } : { y1: 9, y2: 9 }} />
              <motion.line x1="5" x2="19" initial={false} animate={open ? { y1: 19, y2: 5 } : { y1: 15, y2: 15 }} />
            </svg>
          </button>
        </LiquidGlass>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className={styles.mobileMenu}
            >
              <LiquidGlass radius={24}>
                <ul className={styles.mobileList}>
                  {NAV_ITEMS.map((item, i) => {
                    const on = item.id === activeSection;
                    return (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 * i + 0.05 }}
                      >
                        <a
                          href={item.href}
                          onClick={(e) => {
                            setOpen(false);
                            goTo(e, item.href);
                          }}
                          className={`${styles.mobileLink} ${on ? styles.mobileLinkActive : ''}`}
                        >
                          {item.label}
                          <span className={styles.mobileIndex}>0{i + 1}</span>
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </LiquidGlass>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}