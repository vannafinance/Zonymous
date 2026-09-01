// Shared helpers for the six interactive SVG diagrams. These were methods on the
// original dc-canvas `DCLogic` subclass ($, T, mk, linePath, vbX, drag).
//
// The diagrams address nodes by id because that is how the hand-authored SVG is
// written; threading a ref to each of ~90 nodes would add noise without buying
// anything on a single-page document where the ids are unique.

const NS = 'http://www.w3.org/2000/svg';

/** getElementById lies about SVG nodes. Both branches carry setAttribute/style/textContent. */
type AnyEl = HTMLElement & SVGElement;

export const el = (id: string) => document.getElementById(id) as AnyEl | null;
/** Use only after a guard has established the diagram is mounted. */
export const need = (id: string) => document.getElementById(id) as AnyEl;
export const input = (id: string) => document.getElementById(id) as HTMLInputElement | null;

export function mk(tag: string, attrs: Record<string, string | number>): SVGElement {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) e.setAttribute(k, String(attrs[k]));
  return e;
}

export type Pt = [number, number];

export const linePath = (pts: Pt[]) =>
  pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');

/** Client x -> viewBox x, so drag maths works regardless of rendered SVG size. */
export function vbX(svg: SVGSVGElement, clientX: number) {
  const r = svg.getBoundingClientRect();
  const vb = svg.viewBox.baseVal;
  return vb.x + ((clientX - r.left) / r.width) * vb.width;
}

/**
 * Collects timeouts so a hook can clear every pending one on unmount.
 * Self-pruning: the looping diagrams schedule a few hundred timers per cycle,
 * and the original kept every id forever.
 */
export function timers() {
  const ids = new Set<ReturnType<typeof setTimeout>>();
  return {
    after(fn: () => void, ms: number) {
      const id = setTimeout(() => {
        ids.delete(id);
        fn();
      }, ms);
      ids.add(id);
      return id;
    },
    clear() {
      ids.forEach(clearTimeout);
      ids.clear();
    },
  };
}

/**
 * Pointer-drag along an SVG overlay rect. Returns a teardown.
 * The original only removed the window listeners; the overlay's own
 * mousedown/touchstart leaked. Both are removed here.
 */
export function makeDrag(overlay: Element, cb: (vbx: number) => void): () => void {
  const svg = (overlay as SVGGraphicsElement).ownerSVGElement;
  if (!svg) return () => {};

  const clientX = (e: MouseEvent | TouchEvent) =>
    'touches' in e ? e.touches[0].clientX : e.clientX;

  let dragging = false;
  const move = (e: MouseEvent | TouchEvent) => {
    if (!dragging) return;
    cb(vbX(svg, clientX(e)));
  };
  const down = (e: MouseEvent | TouchEvent) => {
    dragging = true;
    cb(vbX(svg, clientX(e)));
    e.preventDefault();
  };
  const up = () => {
    dragging = false;
  };

  overlay.addEventListener('mousedown', down as EventListener);
  overlay.addEventListener('touchstart', down as EventListener, { passive: false });
  window.addEventListener('mousemove', move as EventListener);
  window.addEventListener('touchmove', move as EventListener, { passive: false });
  window.addEventListener('mouseup', up);
  window.addEventListener('touchend', up);

  return () => {
    overlay.removeEventListener('mousedown', down as EventListener);
    overlay.removeEventListener('touchstart', down as EventListener);
    window.removeEventListener('mousemove', move as EventListener);
    window.removeEventListener('touchmove', move as EventListener);
    window.removeEventListener('mouseup', up);
    window.removeEventListener('touchend', up);
  };
}
