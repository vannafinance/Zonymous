'use client';

import { useEffect } from 'react';
import { el, mk, need, timers } from '@/lib/diagram';

const NC = 32;

const CLUSTERS = [
  { name: 'PAYMENTS', c: '#5b50e6', cx: 112, cy: 102, items: ['refund policy', 'chargeback', 'wire transfer', 'card decline'] },
  { name: 'LOGISTICS', c: '#cf8a2c', cx: 350, cy: 100, items: ['EU shipping', 'customs form', 'tracking ID', 'warehouse'] },
  { name: 'COMPLIANCE', c: '#1f9d63', cx: 230, cy: 238, items: ['KYC check', 'fraud alert', 'audit log', 'sanctions'] },
];

const QUERIES = [
  { text: '"chargeback dispute"', toks: ['charge', 'back', 'dispute'], tgt: { x: 118, y: 118 } },
  { text: '"lost parcel in transit"', toks: ['lost', 'parcel', 'transit'], tgt: { x: 350, y: 116 } },
  { text: '"verify customer identity"', toks: ['verify', 'customer', 'id'], tgt: { x: 230, y: 232 } },
  { text: '"suspicious wire transfer"', toks: ['suspic', 'wire', 'transfer'], tgt: { x: 178, y: 176 } },
];

const cellColor = (v: number) =>
  `${v >= 0 ? 'rgba(207,138,44,' : 'rgba(91,80,230,'}${(0.32 + 0.68 * Math.abs(v)).toFixed(2)})`;

type CorpusPoint = { x: number; y: number; c: string; label: string; dot: SVGElement; t: SVGElement };

/** Semantic-search walkthrough: tokenize → embed → nearest neighbours → cosine. */
export function useEmbeddings() {
  useEffect(() => {
    const wrap = el('emPlot');
    const cellWrap = el('emCellWrap');
    if (!wrap || !cellWrap) return;

    const T = timers();

    // Everything this effect injects, so a StrictMode remount cannot double it.
    const added: Element[] = [];
    const add = <E extends Element>(parent: Element, node: E) => {
      parent.appendChild(node);
      added.push(node);
      return node;
    };

    const cells: HTMLDivElement[] = [];
    for (let i = 0; i < NC; i++) {
      const d = document.createElement('div');
      d.style.cssText = 'border-radius:2px;background:#ece8e0;transition:background .25s';
      add(cellWrap, d);
      cells.push(d);
    }

    const corpus: CorpusPoint[] = [];
    CLUSTERS.forEach((cl) => {
      add(wrap, mk('rect', {
        x: cl.cx - 72, y: cl.cy - 56, width: 144, height: 112, rx: 14,
        fill: cl.c, opacity: 0.05, stroke: cl.c, 'stroke-opacity': 0.16,
      }));
      const tag = mk('text', {
        x: cl.cx - 64, y: cl.cy - 42, 'font-size': 8.5,
        fill: cl.c, 'letter-spacing': 1, 'font-weight': 600,
      });
      tag.textContent = cl.name;
      add(wrap, tag);

      const left = cl.cx > 250;
      cl.items.forEach((label, i) => {
        const ang = i * 1.9 + cl.cx;
        const rad = 16 + i * 8.5;
        const x = cl.cx + Math.cos(ang) * rad;
        const y = cl.cy + Math.sin(ang) * rad * 0.8;

        const dot = mk('circle', { cx: x, cy: y, r: 3.6, fill: cl.c, opacity: 0 });
        dot.style.transition = 'r .25s, opacity .3s';
        const t = mk('text', {
          x: left ? x - 6 : x + 6, y: y + 3, 'font-size': 8,
          fill: '#56524a', 'text-anchor': left ? 'end' : 'start', opacity: 0,
        });
        t.style.transition = 'opacity .3s';
        t.textContent = label;

        add(wrap, dot);
        add(wrap, t);
        corpus.push({ x, y, c: cl.c, label, dot, t });
      });
    });

    corpus.forEach((p, i) =>
      T.after(() => {
        p.dot.setAttribute('opacity', '0.9');
        p.t.setAttribute('opacity', '0.62');
      }, 150 + i * 45),
    );

    let qi = 0;
    const loop = () => {
      const q = QUERIES[qi % QUERIES.length];
      qi++;

      need('emInput').textContent = q.text;
      need('emQueryLabel').innerHTML =
        `query &nbsp;<span style="color:#16140f">${q.text}</span>`;
      need('emRanks').innerHTML = '';
      need('emCos').textContent = 'embedding…';
      need('emCosArc').innerHTML = '';
      wrap.querySelectorAll('[data-em]').forEach((e) => e.remove());

      corpus.forEach((p) => {
        p.dot.setAttribute('r', '3.6');
        p.dot.setAttribute('opacity', '0.9');
        p.t.setAttribute('opacity', '0.62');
        p.t.setAttribute('font-weight', '400');
      });

      const tw = need('emTokens');
      tw.innerHTML = '';
      q.toks.forEach((tk, i) => {
        const s = document.createElement('span');
        s.textContent = tk;
        s.style.cssText =
          'font-family:JetBrains Mono,monospace;font-size:10px;color:#56524a;background:#f1efe9;border:1px solid rgba(22,20,15,.1);border-radius:6px;padding:3px 8px;opacity:0;transition:opacity .25s';
        tw.appendChild(s);
        T.after(() => {
          s.style.opacity = '1';
        }, 130 + i * 90);
      });

      const vec: number[] = [];
      for (let i = 0; i < NC; i++) {
        vec.push(Math.sin(i * 1.27 + qi * 1.9) * (0.5 + 0.5 * Math.abs(Math.sin(i * 3.1 + qi))));
      }
      cells.forEach((c, i) =>
        T.after(() => {
          c.style.background = cellColor(vec[i]);
        }, 480 + i * 13),
      );
      T.after(() => {
        need('emNorm').textContent = '‖v‖ = 1.00 (normalized)';
      }, 480);

      const g = mk('g', { 'data-em': 1, opacity: 0 });
      g.style.transition = 'opacity .3s';
      g.appendChild(mk('circle', { cx: q.tgt.x, cy: q.tgt.y, r: 5.5, fill: 'none', stroke: '#16140f', 'stroke-width': 1, opacity: 0.4 }));
      g.appendChild(mk('circle', { cx: q.tgt.x, cy: q.tgt.y, r: 5.5, fill: '#16140f' }));
      add(wrap, g);
      T.after(() => g.setAttribute('opacity', '1'), 1300);

      T.after(() => {
        const scored = corpus
          .map((p) => ({ p, sim: Math.exp(-((Math.hypot(p.x - q.tgt.x, p.y - q.tgt.y) / 72) ** 2)) }))
          .sort((a, b) => b.sim - a.sim);
        const top = scored.slice(0, 5);

        top.slice(0, 3).forEach((nb, k) => {
          const ln = mk('line', {
            x1: q.tgt.x, y1: q.tgt.y, x2: nb.p.x, y2: nb.p.y,
            stroke: nb.p.c, 'stroke-width': 1.4, opacity: 0, 'data-em': 1,
          });
          ln.style.transition = 'opacity .3s';
          add(wrap, ln);
          T.after(() => ln.setAttribute('opacity', '0.5'), k * 110);
          nb.p.dot.setAttribute('r', '5.5');
          nb.p.t.setAttribute('opacity', '1');
          nb.p.t.setAttribute('font-weight', '700');
        });

        const rw = need('emRanks');
        top.forEach((nb, r) => {
          const row = document.createElement('div');
          row.style.cssText = 'display:flex;align-items:center;gap:10px;opacity:0;transition:opacity .3s';
          row.innerHTML =
            `<span style="font-family:JetBrains Mono,monospace;font-size:10px;color:#9a948a;width:12px">${r + 1}</span>` +
            `<span style="font-family:JetBrains Mono,monospace;font-size:11.5px;color:#16140f;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${nb.p.label}</span>` +
            `<span style="position:relative;width:66px;height:6px;border-radius:3px;background:#ece8e0;overflow:hidden">` +
            `<span class="bar" style="position:absolute;left:0;top:0;bottom:0;width:0;border-radius:3px;background:${nb.p.c};transition:width .6s cubic-bezier(.4,0,.2,1)"></span></span>` +
            `<span style="font-family:JetBrains Mono,monospace;font-size:11px;color:#16140f;width:30px;text-align:right">${nb.sim.toFixed(2)}</span>`;
          rw.appendChild(row);
          T.after(() => {
            row.style.opacity = '1';
            const b = row.querySelector<HTMLElement>('.bar');
            if (b) b.style.width = `${66 * nb.sim}px`;
          }, r * 90);
        });

        const theta = Math.acos(Math.min(1, top[0].sim));
        const deg = Math.round((theta * 180) / Math.PI);
        need('emCos').innerHTML =
          `cos θ = <span style="color:#16140f;font-weight:600">${top[0].sim.toFixed(2)}</span> · θ ${deg}°`;

        const arc = need('emCosArc');
        const gx = 18, gy = 24, gr = 15;
        arc.appendChild(mk('path', { d: `M${gx},${gy} L${gx + gr},${gy}`, stroke: '#cf8a2c', 'stroke-width': 2, 'stroke-linecap': 'round' }));
        arc.appendChild(mk('path', {
          d: `M${gx},${gy} L${(gx + gr * Math.cos(-theta)).toFixed(1)},${(gy + gr * Math.sin(-theta)).toFixed(1)}`,
          stroke: '#5b50e6', 'stroke-width': 2, 'stroke-linecap': 'round',
        }));
      }, 1700);

      T.after(loop, 5200);
    };

    T.after(loop, corpus.length * 45 + 400);
    return () => {
      T.clear();
      added.forEach((n) => n.remove());
      wrap.querySelectorAll('[data-em]').forEach((n) => n.remove());
      need('emRanks').innerHTML = '';
      need('emTokens').innerHTML = '';
      need('emCosArc').innerHTML = '';
    };
  }, []);
}
