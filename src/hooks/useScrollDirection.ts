import { useState, useEffect, useRef } from 'react';

export function useScrollDirection() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(window.scrollY);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const diff = currentY - lastY.current;

        if (currentY < 50) {
          setHidden(false);
        } else if (diff > 5) {
          setHidden(true);   // scroll down cukup jauh
        } else if (diff < -5) {
          setHidden(false);  // scroll up cukup jauh
        }

        lastY.current = currentY;
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return hidden;
}