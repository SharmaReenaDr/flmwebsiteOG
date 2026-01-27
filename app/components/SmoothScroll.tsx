'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Lerp (linear interpolation) smooth scroll
    let current = 0;
    let target = 0;
    const ease = 0.075;

    const updateScroll = () => {
      target = window.scrollY;
      current += (target - current) * ease;
      
      if (Math.abs(target - current) > 0.5) {
        requestAnimationFrame(updateScroll);
      } else {
        current = target;
      }
    };

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax') || '0.5');
        const yPos = -(scrolled * speed);
        (el as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return null;
}
