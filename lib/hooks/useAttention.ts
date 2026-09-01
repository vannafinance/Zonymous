'use client';

import { useEffect } from 'react';
import { el, mk, need } from '@/lib/diagram';

const TOKENS = ['The', 'agent', 'signed', 'the', 'tx', 'on-chain', 'ledger'];
const X0 = 130;
const GAP = 112;

/** Hand-picked logits; softmaxed per row to give the attention weights. */
const SCORES = [
  [4, 1, 0, 2, 0, 0, 0],
  [1, 4, 2, 0, 1, 0, 1],
  [1, 3, 4, 0, 3, 1, 1],
  [2, 0, 0, 4, 1, 0, 1],
  [0, 2, 3, 0, 4, 1, 2],
  [0, 1, 2, 0, 2, 4, 2],
  [0, 1, 1, 1, 2, 2, 4],
];

const softmax = (row: number[]) => {
  const m = Math.max(...row);
  const ex = row.map((v) => Math.exp(v - m));
  const s = ex.reduce((a, b) => a + b, 0);
  return ex.map((v) => v / s);
};

const tx = (i: number) => X0 + i * GAP;

/** Self-attention: one query token at a time, arcs weighted by softmax. */
export function useAttention() {
  useEffect(() => {
    const svg = el('atSvg');
    if (!svg) return;

    const n = TOKENS.length;
    let f = 0;

    const focus = () => {
      const w = softmax(SCORES[f]);
      svg.querySelectorAll('[data-at]').forEach((e) => e.remove());
      need('atFocus').textContent = TOKENS[f];

      for (let j = 0; j < n; j++) {
        el(`atTok${j}`)?.setAttribute('opacity', j === f ? '1' : '0.45');
        el(`atCell${j}`)?.setAttribute('fill-opacity', (0.08 + 0.9 * w[j]).toFixed(2));
        const pct = el(`atPct${j}`);
        if (pct) pct.textContent = `${Math.round(w[j] * 100)}%`;
      }

      for (let j = 0; j < n; j++) {
        if (j === f) continue;
        const wt = w[j];
        const fx = tx(f);
        const jx = tx(j);
        const midx = (fx + jx) / 2;
        const arc = 104 - (28 + Math.abs(j - f) * 15);
        svg.appendChild(
          mk('path', {
            d: `M${fx},104 Q${midx},${arc} ${jx},104`,
            fill: 'none',
            stroke: '#5b50e6',
            'stroke-width': (0.6 + 6.5 * wt).toFixed(2),
            opacity: (0.12 + 0.82 * wt).toFixed(2),
            'stroke-linecap': 'round',
            'data-at': 1,
          }),
        );
      }

      f = (f + 1) % n;
    };

    focus();
    const iv = setInterval(focus, 1700);
    return () => {
      clearInterval(iv);
      svg.querySelectorAll('[data-at]').forEach((e) => e.remove());
    };
  }, []);
}
