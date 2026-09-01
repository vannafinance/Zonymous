'use client';

import { useEffect } from 'react';
import { el } from '@/lib/diagram';

const LINES = [
  { h: 'planner ▸', c: '#8b7bff', t: ' decompose goal · observe → sign → enforce → settle' },
  { h: 'agent ▸', c: '#8b7bff', t: ' read on-chain state · healthFactor 1.84 · feeds ok' },
  { h: 'agent ▸', c: '#8b7bff', t: ' plan · rebalance 12,400 USDC → yield vault' },
  { h: 'sign ▸', c: '#8b7bff', t: ' EIP-712 signed · nonce 41 · 0x9f3c…a17' },
  { h: 'enforce ▸', c: '#e0a64d', t: ' on-chain checks · hf≥1 ✓ · slippage≤0.5% ✓ · cap ✓' },
  { h: 'settle ▸', c: '#e0a64d', t: ' block 21,403,118 · final in 1.2s · fee $0.004' },
  { h: '✓ done', c: '#5bd6a8', t: ' value moved — strictly within bounds · run complete' },
];

/** Replaying agent-run transcript in the "See it work" band. */
export function useTerminal() {
  useEffect(() => {
    const host = el('z-term');
    if (!host) return;
    const statusEl = el('z-run-status');
    const finalBox = el('z-final');

    let i = 0;
    let t: ReturnType<typeof setTimeout>;

    const run = () => {
      if (i === 0) {
        host.innerHTML = '';
        if (statusEl) {
          statusEl.textContent = 'running…';
          statusEl.style.color = '#e0a64d';
        }
        if (finalBox) finalBox.style.opacity = '.35';
      }

      const ln = LINES[i];
      const div = document.createElement('div');
      div.style.cssText =
        'white-space:pre-wrap;margin-bottom:4px;opacity:0;transform:translateX(-4px);transition:opacity .3s,transform .3s';
      const head = document.createElement('span');
      head.style.cssText = `color:${ln.c};font-weight:600`;
      head.textContent = ln.h;
      div.append(head, ln.t);
      host.appendChild(div);
      requestAnimationFrame(() => {
        div.style.opacity = '1';
        div.style.transform = 'none';
      });

      i++;
      if (i < LINES.length) {
        t = setTimeout(run, 760);
      } else {
        if (statusEl) {
          statusEl.textContent = '✓ settled';
          statusEl.style.color = '#5bd6a8';
        }
        if (finalBox) finalBox.style.opacity = '1';
        i = 0;
        t = setTimeout(run, 4600);
      }
    };

    run();
    return () => clearTimeout(t);
  }, []);
}
