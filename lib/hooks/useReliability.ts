'use client';

import { useEffect } from 'react';
import { input, linePath, makeDrag, need, type Pt } from '@/lib/diagram';

const NMAX = 50;
const X0 = 60;
const X1 = 690;
const Y0 = 320;
const Y1 = 30;

const xN = (n: number) => X0 + (n / NMAX) * (X1 - X0);
const yP = (p: number) => Y0 - p * (Y0 - Y1);

/**
 * Reliability cliff: per-step success p compounded over n steps, against the
 * same chain with k retries (p_eff = 1 - (1-p)^k).
 */
export function useReliability() {
  useEffect(() => {
    const pS = input('relP');
    const kS = input('relK');
    const overlay = need('relOverlay');
    if (!pS || !kS || !overlay) return;

    pS.value = '0.95';
    kS.value = '3';
    let markN = 20;

    const draw = () => {
      const p = +pS.value;
      const k = +kS.value;
      const peff = 1 - (1 - p) ** k;

      const naive: Pt[] = [];
      const bound: Pt[] = [];
      for (let n = 0; n <= NMAX; n += 0.5) {
        naive.push([xN(n), yP(p ** n)]);
        bound.push([xN(n), yP(peff ** n)]);
      }
      need('relNaive').setAttribute('d', linePath(naive));
      need('relBound').setAttribute('d', linePath(bound));
      need('relPVal').textContent = p.toFixed(3);
      need('relKVal').textContent = String(k);

      const pn = p ** markN;
      const pb = peff ** markN;
      const mx = xN(markN);
      const mark = need('relMarkLine');
      mark.setAttribute('x1', String(mx));
      mark.setAttribute('x2', String(mx));
      const dotN = need('relDotN');
      dotN.setAttribute('cx', String(mx));
      dotN.setAttribute('cy', String(yP(pn)));
      const dotB = need('relDotB');
      dotB.setAttribute('cx', String(mx));
      dotB.setAttribute('cy', String(yP(pb)));
      need('relAtN').textContent = String(markN);
      need('relNaivePct').textContent = `${(pn * 100).toFixed(1)}%`;
      need('relBoundPct').textContent = `${(pb * 100).toFixed(1)}%`;

      // horizons: steps until coin-flip, and until 90% still succeeds
      need('relCoin').textContent = String(Math.max(1, Math.round(Math.log(0.5) / Math.log(p))));
      const fmtH = (h: number) => (h > 500 ? '500+' : String(Math.max(1, Math.round(h))));
      need('relHorN').textContent = fmtH(Math.log(0.9) / Math.log(p));
      need('relHorB').textContent = fmtH(Math.log(0.9) / Math.log(peff));
    };

    pS.addEventListener('input', draw);
    kS.addEventListener('input', draw);
    const stopDrag = makeDrag(overlay, (vbx) => {
      markN = Math.max(0, Math.min(NMAX, Math.round(((vbx - X0) / (X1 - X0)) * NMAX)));
      draw();
    });
    draw();

    return () => {
      pS.removeEventListener('input', draw);
      kS.removeEventListener('input', draw);
      stopDrag();
    };
  }, []);
}
