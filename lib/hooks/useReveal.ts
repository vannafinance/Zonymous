'use client';

import { useEffect } from 'react';

/**
 * Scroll-reveal for every `[data-reveal]` node on the page.
 * Elements ship at opacity:0; this lifts them as they enter the viewport.
 * `prefers-reduced-motion` and missing IntersectionObserver both short-circuit
 * to "everything visible" rather than degrading to a blank page.
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!els.length) return;

    const show = (e: HTMLElement) => {
      const d = parseFloat(e.getAttribute('data-delay') || '0');
      e.style.transitionDelay = `${d}ms`;
      e.style.opacity = '1';
      e.style.transform = 'none';
    };

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach((e) => {
        e.style.opacity = '1';
        e.style.transform = 'none';
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          show(en.target as HTMLElement);
          io.unobserve(en.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    );
    els.forEach((e) => io.observe(e));

    // Fail-safe: if the observer never fires (scaled/embedded preview harnesses
    // where the scroll container isn't the window), force everything visible.
    const fallback = setTimeout(() => {
      els.forEach((e) => {
        if (getComputedStyle(e).opacity === '0') show(e);
      });
    }, 1600);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);
}
