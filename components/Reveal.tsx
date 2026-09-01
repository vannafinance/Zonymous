'use client';

import { useReveal } from '@/lib/hooks/useReveal';

/**
 * Drives scroll-reveal for `[data-reveal]` across every section, including the
 * server-rendered ones. Renders nothing.
 */
export default function Reveal() {
  useReveal();
  return null;
}
