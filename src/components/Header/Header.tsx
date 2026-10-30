import styles from './Header.module.css';
import PillNav from '../PillNav/PillNav';
import { useScrollActive } from '../../hooks/useScrollActive';
import { useScrollDirection } from '../../hooks/useScrollDirection';

const NAV_ITEMS = [
  { href: '#home', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#project', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const SECTION_IDS = ['home', 'experience', 'project', 'tools', 'skills', 'contact'];

export default function Header() {
  const { activeSection } = useScrollActive(SECTION_IDS);
  const hidden = useScrollDirection();

  return (
    <header className={`${styles.header} ${hidden ? styles.hidden : ''}`}>
      <PillNav
        logo={<span>S</span>}
        logoAlt="Home"
        logoHref="#home"
        items={NAV_ITEMS}
        activeHref={`#${activeSection}`}
        itemStyle="pill"
        hoverEffect="fill"
        indicator="pill"
        bounce={0.53}
        stretch={0.25}
        collapse="auto"
        highlightColor="#a78bfa"
        highlightTextColor="#0f0f0f"
      />
    </header>
  );
}