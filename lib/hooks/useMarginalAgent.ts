'use client';

import { useEffect } from 'react';
import { input, linePath, makeDrag, need, type Pt } from '@/lib/diagram';

const X0 = 60;
const X1 = 690;
const Y0 = 300;
const Y1 = 30;
/** Marginal inference cost per task — the floor an agent can never go below. */
const FLOOR = 0.04;

/** x maps log10(volume) over 10 … 1e6 */
const xV = (v: number) => X0 + ((Math.log10(v) - 1) / 5) * (X1 - X0);

const fmtV = (v: number) =>
  v >= 1e6
    ? `${(v / 1e6).toFixed(1).replace(/\.0$/, '')}M`
    : v >= 1000
      ? `${Math.round(v / 1000)}k`
      : String(Math.round(v));

const fmtMoney = (x: number) => {
  if (x >= 1000) return `$${(x / 1000).toFixed(x >= 10000 ? 0 : 1).replace(/\.0$/, '')}k`;
  if (x >= 10) return `$${Math.round(x).toLocaleString()}`;
  if (x >= 1) return `$${x.toFixed(2)}`;
  return `$${x.toFixed(3)}`;
};

/**
 * Marginal cost per task: a flat human rate against an agent's
 * fixed build cost amortised over volume, plus the inference floor.
 */
export function useMarginalAgent() {
  useEffect(() => {
    const vS = input('margV');
    const chS = input('margCh');
    const fS = input('margF');
    const overlay = need('margOverlay');
    if (!vS || !chS || !fS || !overlay) return;

    vS.value = String(Math.log10(20000));
    chS.value = '4.20';
    fS.value = '60000';

    const draw = () => {
      const V = 10 ** +vS.value;
      const ch = +chS.value;
      const F = +fS.value;
      const ymax = Math.max(ch * 1.55, 6);
      const yC = (c: number) => Y0 - (Math.min(c, ymax) / ymax) * (Y0 - Y1);

      const yh = yC(ch);
      const human = need('margHuman');
      human.setAttribute('y1', String(yh));
      human.setAttribute('y2', String(yh));

      const yf = yC(FLOOR);
      const floor = need('margFloor');
      floor.setAttribute('y1', String(yf));
      floor.setAttribute('y2', String(yf));
      need('margFloorLbl').setAttribute('y', String(yf - 6));

      const pts: Pt[] = [];
      for (let t = 1; t <= 6.0001; t += 0.04) {
        const v = 10 ** t;
        pts.push([xV(v), yC(F / v + FLOOR)]);
      }
      need('margAgent').setAttribute('d', linePath(pts));

      const Vstar = F / (ch - FLOOR);
      const bex = Vstar >= 10 && Vstar <= 1e6 ? xV(Vstar) : Vstar < 10 ? X0 : X1;
      const be = need('margBE');
      be.setAttribute('x1', String(bex));
      be.setAttribute('x2', String(bex));
      need('margBELbl').setAttribute('x', String(Math.max(X0 + 30, Math.min(X1 - 30, bex))));
      const ring = need('margBERing');
      ring.setAttribute('cx', String(bex));
      ring.setAttribute('cy', String(yh));

      // savings region: between the human line and the agent curve, past breakeven
      const sv: Pt[] = [];
      const startV = Math.max(10, Math.min(1e6, Vstar));
      sv.push([xV(startV), yh]);
      for (let t = Math.log10(startV); t <= 6.0001; t += 0.04) sv.push([xV(10 ** t), yh]);
      for (let t = 6; t >= Math.log10(startV); t -= 0.04) {
        const v = 10 ** t;
        sv.push([xV(v), yC(F / v + FLOOR)]);
      }
      need('margSave').setAttribute('d', `${linePath(sv)} Z`);

      const vx = xV(V);
      const aCost = F / V + FLOOR;
      const vline = need('margVLine');
      vline.setAttribute('x1', String(vx));
      vline.setAttribute('x2', String(vx));
      const dot = need('margDot');
      dot.setAttribute('cx', String(vx));
      dot.setAttribute('cy', String(yC(aCost)));

      need('margVVal').textContent = fmtV(V);
      need('margChVal').textContent = `$${ch.toFixed(2)}`;
      need('margFVal').textContent = fmtMoney(F);
      need('margPer').textContent = fmtMoney(aCost);
      need('margBEv').textContent = `${fmtV(Vstar)}/mo`;

      const saving = (ch - aCost) * V;
      const sEl = need('margSaveV');
      sEl.textContent = `${saving >= 0 ? '' : '−'}${fmtMoney(Math.abs(saving))}/mo`;
      sEl.style.color = saving >= 0 ? '#1f9d63' : '#d8472b';

      const payback = F / ((ch - FLOOR) * V);
      need('margPay').textContent =
        V < Vstar
          ? 'below breakeven'
          : payback < 1
            ? `${(payback * 30).toFixed(0)} days`
            : `${payback.toFixed(1)} mo`;
    };

    const sliders = [vS, chS, fS];
    sliders.forEach((s) => s.addEventListener('input', draw));
    const stopDrag = makeDrag(overlay, (vbx) => {
      const t = Math.max(1, Math.min(6, 1 + ((vbx - X0) / (X1 - X0)) * 5));
      vS.value = t.toFixed(2);
      draw();
    });
    draw();

    return () => {
      sliders.forEach((s) => s.removeEventListener('input', draw));
      stopDrag();
    };
  }, []);
}
