import type { MouseEvent } from 'react';

/** Hover affordances that were `renderVals()` on the original dc-canvas logic class. */
export const hoverHandlers = {
  navHover: (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = '#16140f';
  },
  navLeave: (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = '#56524a';
  },
  ctaHover: (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = 'translateY(-2px)';
  },
  ctaLeave: (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = 'none';
  },
};
