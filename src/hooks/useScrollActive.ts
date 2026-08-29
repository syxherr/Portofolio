import { useEffect, useState } from 'react';

export function useScrollActive(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const offset = el.offsetTop - 150;
        const height = el.offsetHeight;
        if (scrollY >= offset && scrollY < offset + height) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return { activeSection, isScrolled };
}