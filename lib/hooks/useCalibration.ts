'use client';

import { useEffect } from 'react';
import { input, linePath, makeDrag, need, type Pt } from '@/lib/diagram';

const X0 = 60;
const X1 = 690;
const BASE = 244;
const TOP = 40;
const BINS = 60;
const PLOT = BASE - TOP;

/** Dollar weights behind the "optimal threshold" readout. */
const COST_ERROR = 20;
const COST_ESCALATE = 2;

const betaish = (c: number, al: number, be: number) => c ** (al - 1) * (1 - c) ** (be - 1);
const xC = (c: number) => X0 + c * (X1 - X0);

/**
 * Calibration gate: confidence distributions for correct vs wrong answers,
 * with a draggable auto-approve threshold and the cost-optimal threshold.
 */
export function useCalibration() {
  useEffect(() => {
    const aS = input('calA');
    const tS = input('calT');
    const overlay = need('calOverlay');
    if (!aS || !tS || !overlay) return;

    aS.value = '0.85';
    tS.value = '0.70';

    // unnormalized beta-like densities, then normalized so each sums to 1
    const fc: number[] = [];
    const fw: number[] = [];
    let sc = 0;
    let sw = 0;
    for (let i = 0; i < BINS; i++) {
      const c = (i + 0.5) / BINS;
      const a = betaish(c, 8, 2.2); // correct: confident, skewed high
      const w = betaish(c, 2.2, 3.2); // wrong: lower, broad
      fc.push(a);
      fw.push(w);
      sc += a;
      sw += w;
    }
    for (let i = 0; i < BINS; i++) {
      fc[i] /= sc;
      fw[i] /= sw;
    }
    const maxF = Math.max(...fc, ...fw);

    const areaPath = (arr: number[], weight: number) => {
      const pts: Pt[] = [[xC(0), BASE]];
      for (let i = 0; i < BINS; i++) {
        const c = (i + 0.5) / BINS;
        pts.push([xC(c), BASE - (arr[i] * weight / maxF) * PLOT]);
      }
      pts.push([xC(1), BASE]);
      return `${linePath(pts)} Z`;
    };

    const cost = (a: number, tau: number) => {
      let wrongAuto = 0;
      let esc = 0;
      for (let i = 0; i < BINS; i++) {
        const c = (i + 0.5) / BINS;
        if (c >= tau) wrongAuto += (1 - a) * fw[i];
        else esc += a * fc[i] + (1 - a) * fw[i];
      }
      return COST_ERROR * wrongAuto + COST_ESCALATE * esc;
    };

    const draw = () => {
      const a = +aS.value;
      const tau = +tS.value;
      need('calCorrect').setAttribute('d', areaPath(fc, a));
      need('calWrong').setAttribute('d', areaPath(fw, 1 - a));
      need('calAVal').textContent = `${Math.round(a * 100)}%`;
      need('calTVal').textContent = tau.toFixed(2);

      const tx = xC(tau);
      const tauLine = need('calTau');
      tauLine.setAttribute('x1', String(tx));
      tauLine.setAttribute('x2', String(tx));
      need('calTauHandle').setAttribute('transform', `translate(${tx - 438},0)`);
      need('calDim').setAttribute('width', String(Math.max(0, tx - X0)));

      let autoCorrect = 0;
      let autoWrong = 0;
      let esc = 0;
      for (let i = 0; i < BINS; i++) {
        const c = (i + 0.5) / BINS;
        if (c >= tau) {
          autoCorrect += a * fc[i];
          autoWrong += (1 - a) * fw[i];
        } else {
          esc += a * fc[i] + (1 - a) * fw[i];
        }
      }
      need('calAuto').textContent = `${Math.round((autoCorrect + autoWrong) * 100)}%`;
      need('calErr').textContent = `${(autoWrong * 100).toFixed(1)}%`;
      need('calHuman').textContent = `${Math.round(esc * 100)}%`;

      let best = Infinity;
      let bestT = 0;
      for (let t = 0.02; t <= 0.98; t += 0.01) {
        const c = cost(a, t);
        if (c < best) {
          best = c;
          bestT = t;
        }
      }
      need('calOpt').textContent = bestT.toFixed(2);
      need('calOptHint').textContent = `(at $${COST_ERROR}/error, $${COST_ESCALATE}/review)`;
    };

    aS.addEventListener('input', draw);
    tS.addEventListener('input', draw);
    const stopDrag = makeDrag(overlay, (vbx) => {
      const c = Math.max(0.02, Math.min(0.98, (vbx - X0) / (X1 - X0)));
      tS.value = c.toFixed(2);
      draw();
    });
    draw();

    return () => {
      aS.removeEventListener('input', draw);
      tS.removeEventListener('input', draw);
      stopDrag();
    };
  }, []);
}
