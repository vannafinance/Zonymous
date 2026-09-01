'use client';

import { useEffect } from 'react';

const ACCENTS = ['#5b50e6', '#5b50e6', '#cf8a2c', '#cf8a2c'];

/** Auto-advancing highlight across the four convergence-principle cards. */
export function useSteps() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-step]'));
    if (!cards.length) return;

    let active = 0;
    let paused = false;

    const apply = () => {
      cards.forEach((c, idx) => {
        const on = idx === active;
        const ac = ACCENTS[idx];
        const warm = idx >= 2;
        c.style.borderColor = on
          ? warm
            ? 'rgba(207,138,44,.5)'
            : 'rgba(91,80,230,.45)'
          : 'rgba(22,20,15,.09)';
        c.style.background = on ? '#fff' : '#fbfaf8';
        c.style.boxShadow = on
          ? `0 16px 36px -20px ${warm ? 'rgba(207,138,44,.5)' : 'rgba(91,80,230,.5)'}`
          : 'none';
        c.style.transform = on ? 'translateY(-3px)' : 'none';

        const num = c.querySelector<HTMLElement>('[data-num]');
        if (num) {
          num.style.background = on ? ac : '#fff';
          num.style.color = on ? '#fff' : ac;
          num.style.borderColor = on
            ? ac
            : warm
              ? 'rgba(207,138,44,.45)'
              : 'rgba(91,80,230,.4)';
        }
      });
    };

    const enter = () => {
      paused = true;
    };
    const leave = () => {
      paused = false;
    };
    cards.forEach((c) => {
      c.style.cursor = 'default';
      c.addEventListener('mouseenter', enter);
      c.addEventListener('mouseleave', leave);
    });

    apply();
    const iv = setInterval(() => {
      if (paused) return;
      active = (active + 1) % cards.length;
      apply();
    }, 2000);

    return () => {
      clearInterval(iv);
      cards.forEach((c) => {
        c.removeEventListener('mouseenter', enter);
        c.removeEventListener('mouseleave', leave);
      });
    };
  }, []);
}
