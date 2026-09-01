
class Component extends DCLogic {
  componentDidMount() {
    this._timers = []; this.NS = 'http://www.w3.org/2000/svg';
    this.initReveal();
    this.initTerminal();
    this.initSteps();
    this.initEmbed(); this.initAttention();
    this.initRel(); this.initCal(); this.initMarg();
  }
  componentWillUnmount() {
    (this._timers||[]).forEach(t => clearTimeout(t));
    if (this._verify) clearInterval(this._verify);
    if (this._attn) clearInterval(this._attn);
    (this._cleanup||[]).forEach(fn => fn());
    if (this._termT) clearTimeout(this._termT);
    if (this._stepT) clearInterval(this._stepT);
    if (this._revealFallback) clearTimeout(this._revealFallback);
    if (this._io) this._io.disconnect();
  }

  reveal(el) {
    const d = parseFloat(el.getAttribute('data-delay') || '0');
    el.style.transitionDelay = d + 'ms';
    el.style.opacity = 1;
    el.style.transform = 'none';
  }

  initReveal() {
    const els = Array.from(document.querySelectorAll('[data-reveal]'));
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach(e => { e.style.opacity = 1; e.style.transform = 'none'; });
      return;
    }
    this._io = new IntersectionObserver((ents) => {
      ents.forEach(en => {
        if (en.isIntersecting) {
          this.reveal(en.target);
          this._io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
    els.forEach(e => this._io.observe(e));
    // Fail-safe: if the observer never fires (embedded/scaled preview harnesses
    // where the scroll container isn't the window), force everything visible.
    this._revealFallback = setTimeout(() => {
      els.forEach(e => { if (getComputedStyle(e).opacity === '0') this.reveal(e); });
    }, 1600);
  }

  initTerminal() {
    const host = document.getElementById('z-term');
    const statusEl = document.getElementById('z-run-status');
    const finalBox = document.getElementById('z-final');
    if (!host) return;
    const lines = [
      { h: 'planner ▸', c: '#8b7bff', t: ' decompose goal · observe → sign → enforce → settle' },
      { h: 'agent ▸',   c: '#8b7bff', t: ' read on-chain state · healthFactor 1.84 · feeds ok' },
      { h: 'agent ▸',   c: '#8b7bff', t: ' plan · rebalance 12,400 USDC → yield vault' },
      { h: 'sign ▸',    c: '#8b7bff', t: ' EIP-712 signed · nonce 41 · 0x9f3c…a17' },
      { h: 'enforce ▸', c: '#e0a64d', t: ' on-chain checks · hf≥1 ✓ · slippage≤0.5% ✓ · cap ✓' },
      { h: 'settle ▸',  c: '#e0a64d', t: ' block 21,403,118 · final in 1.2s · fee $0.004' },
      { h: '✓ done',    c: '#5bd6a8', t: ' value moved — strictly within bounds · run complete' }
    ];
    let i = 0;
    const run = () => {
      if (i === 0) {
        host.innerHTML = '';
        if (statusEl) { statusEl.textContent = 'running…'; statusEl.style.color = '#e0a64d'; }
        if (finalBox) finalBox.style.opacity = '.35';
      }
      const ln = lines[i];
      const div = document.createElement('div');
      div.style.cssText = 'white-space:pre-wrap;margin-bottom:4px;opacity:0;transform:translateX(-4px);transition:opacity .3s,transform .3s';
      div.innerHTML = '<span style="color:' + ln.c + ';font-weight:600">' + ln.h + '</span>' + ln.t;
      host.appendChild(div);
      requestAnimationFrame(() => { div.style.opacity = 1; div.style.transform = 'none'; });
      i++;
      if (i < lines.length) {
        this._termT = setTimeout(run, 760);
      } else {
        // run completed — show finished state, hold, then replay
        if (statusEl) { statusEl.textContent = '✓ settled'; statusEl.style.color = '#5bd6a8'; }
        if (finalBox) finalBox.style.opacity = '1';
        i = 0;
        this._termT = setTimeout(run, 4600);
      }
    };
    run();
  }

  initSteps() {
    const cards = Array.from(document.querySelectorAll('[data-step]'));
    if (!cards.length) return;
    const accents = ['#5b50e6', '#5b50e6', '#cf8a2c', '#cf8a2c'];
    let active = 0;
    let paused = false;
    const apply = () => {
      cards.forEach((c, idx) => {
        const num = c.querySelector('[data-num]');
        const on = idx === active;
        const ac = accents[idx];
        c.style.borderColor = on ? (idx < 2 ? 'rgba(91,80,230,.45)' : 'rgba(207,138,44,.5)') : 'rgba(22,20,15,.09)';
        c.style.background = on ? '#fff' : '#fbfaf8';
        c.style.boxShadow = on ? '0 16px 36px -20px ' + (idx < 2 ? 'rgba(91,80,230,.5)' : 'rgba(207,138,44,.5)') : 'none';
        c.style.transform = on ? 'translateY(-3px)' : 'none';
        if (num) {
          num.style.background = on ? ac : '#fff';
          num.style.color = on ? '#fff' : ac;
          num.style.borderColor = on ? ac : (idx < 2 ? 'rgba(91,80,230,.4)' : 'rgba(207,138,44,.45)');
        }
      });
    };
    cards.forEach(c => {
      c.style.cursor = 'default';
      c.addEventListener('mouseenter', () => { paused = true; });
      c.addEventListener('mouseleave', () => { paused = false; });
    });
    apply();
    this._stepT = setInterval(() => {
      if (paused) return;
      active = (active + 1) % cards.length;
      apply();
    }, 2000);
  }

  $(id) { return document.getElementById(id); }

  T(fn, ms) { const id = setTimeout(fn, ms); this._timers.push(id); return id; }

  mk(tag, attrs) { const e = document.createElementNS(this.NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); return e; }

  linePath(pts) { return pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' '); }

  vbX(svg, clientX) {
    const r = svg.getBoundingClientRect();
    const vb = svg.viewBox.baseVal;
    return vb.x + (clientX - r.left) / r.width * vb.width;
  }

  drag(overlay, cb) {
    const svg = overlay.ownerSVGElement;
    let on = false;
    const move = (e) => { if (!on) return; const cx = (e.touches ? e.touches[0].clientX : e.clientX); cb(this.vbX(svg, cx)); };
    const down = (e) => { on = true; const cx = (e.touches ? e.touches[0].clientX : e.clientX); cb(this.vbX(svg, cx)); e.preventDefault(); };
    const up = () => { on = false; };
    overlay.addEventListener('mousedown', down);
    overlay.addEventListener('touchstart', down, { passive: false });
    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', move, { passive: false });
    window.addEventListener('mouseup', up);
    window.addEventListener('touchend', up);
    (this._cleanup = this._cleanup || []).push(() => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchend', up);
    });
  }

  initLoop() {
    const svg = this.$('loopSvg'); if (!svg) return;
    const ring = 'M220,170 L470,70 L720,170 L470,270 Z';

    // circulating tokens along the ring (SMIL)
    [0, 1, 2].forEach(k => {
      const c = this.mk('circle', { r: 5.5, fill: '#5b50e6' });
      const am = this.mk('animateMotion', { dur: '6s', repeatCount: 'indefinite', path: ring, begin: (k * 2) + 's', rotate: '0' });
      c.appendChild(am); svg.appendChild(c);
    });
    // tool pulses ACT(470,70) ↔ API(329,17) / DB(589,17)
    [['M470,70 L329,28', '#cf8a2c', '0s'], ['M470,70 L589,28', '#cf8a2c', '1.5s']].forEach(([p, col, b]) => {
      const c = this.mk('circle', { r: 3.5, fill: col });
      const am = this.mk('animateMotion', { dur: '1.4s', repeatCount: 'indefinite', path: p, begin: b, keyPoints: '0;1;0', keyTimes: '0;0.5;1', calcMode: 'linear' });
      am.setAttribute('keyPoints', '0;1;0'); c.appendChild(am); svg.appendChild(c);
    });

    let settled = 0;
    const settleBox = this.$('lpSettleBox');
    const verifyTxt = this.$('lpVerifyTxt');
    const settleEdge = this.$('lpSettleEdge');

    const tick = () => {
      const pass = Math.random() < 0.7;
      if (pass) {
        verifyTxt.textContent = '✓ pass → settle'; verifyTxt.setAttribute('fill', '#1f9d63');
        settleEdge.setAttribute('stroke', 'rgba(207,138,44,.85)');
        // emit settle token VERIFY(470,270) → SETTLE(896,210)
        const g = this.mk('circle', { cx: 470, cy: 270, r: 5, fill: '#cf8a2c' });
        g.style.transition = 'cx .9s ease, cy .9s ease'; svg.appendChild(g);
        this.T(() => { g.setAttribute('cx', 896); g.setAttribute('cy', 210); }, 30);
        this.T(() => {
          settled++; this.$('lpSettled').textContent = settled;
          settleBox.setAttribute('fill', '#2a2520');
          this.T(() => settleBox.setAttribute('fill', '#16140f'), 260);
          g.style.transition = 'opacity .3s'; g.style.opacity = 0; this.T(() => g.remove(), 320);
        }, 960);
        this.T(() => settleEdge.setAttribute('stroke', 'rgba(207,138,44,.3)'), 1100);
      } else {
        verifyTxt.textContent = '✕ fail → re-plan'; verifyTxt.setAttribute('fill', '#d8472b');
        // highlight ring (loop back)
        const ringEl = this.$('lpRing');
        ringEl.setAttribute('stroke', 'rgba(216,71,43,.5)');
        this.T(() => ringEl.setAttribute('stroke', 'rgba(22,20,15,.14)'), 900);
      }
      this.T(() => { verifyTxt.textContent = 'check invariants'; verifyTxt.setAttribute('fill', '#8c8679'); }, 1600);
    };
    this._verify = setInterval(tick, 2400);
    this.T(tick, 600);
  }

  initEmbed() {
    const wrap = this.$('emPlot'); if (!wrap) return;
    const NS = this.NS, mk = (t, a) => { const e = document.createElementNS(NS, t); for (const k in a) e.setAttribute(k, a[k]); return e; };
    const cellWrap = this.$('emCellWrap'), NC = 32, cells = [];
    for (let i = 0; i < NC; i++) { const d = document.createElement('div'); d.style.cssText = 'border-radius:2px;background:#ece8e0;transition:background .25s'; cellWrap.appendChild(d); cells.push(d); }
    const cellColor = v => { const a = (0.32 + 0.68 * Math.abs(v)).toFixed(2); return (v >= 0 ? 'rgba(207,138,44,' : 'rgba(91,80,230,') + a + ')'; };
    const clusters = [
      { name: 'PAYMENTS', c: '#5b50e6', cx: 112, cy: 102, items: ['refund policy', 'chargeback', 'wire transfer', 'card decline'] },
      { name: 'LOGISTICS', c: '#cf8a2c', cx: 350, cy: 100, items: ['EU shipping', 'customs form', 'tracking ID', 'warehouse'] },
      { name: 'COMPLIANCE', c: '#1f9d63', cx: 230, cy: 238, items: ['KYC check', 'fraud alert', 'audit log', 'sanctions'] }
    ];
    const corpus = [];
    clusters.forEach(cl => {
      wrap.appendChild(mk('rect', { x: cl.cx - 72, y: cl.cy - 56, width: 144, height: 112, rx: 14, fill: cl.c, opacity: 0.05, stroke: cl.c, 'stroke-opacity': 0.16 }));
      const tag = mk('text', { x: cl.cx - 64, y: cl.cy - 42, 'font-size': 8.5, fill: cl.c, 'letter-spacing': 1, 'font-weight': 600 }); tag.textContent = cl.name; wrap.appendChild(tag);
      const left = cl.cx > 250;
      cl.items.forEach((label, i) => {
        const ang = i * 1.9 + cl.cx, rad = 16 + i * 8.5; const x = cl.cx + Math.cos(ang) * rad, y = cl.cy + Math.sin(ang) * rad * 0.8;
        const dot = mk('circle', { cx: x, cy: y, r: 3.6, fill: cl.c, opacity: 0 }); dot.style.transition = 'r .25s, opacity .3s';
        const t = mk('text', { x: left ? x - 6 : x + 6, y: y + 3, 'font-size': 8, fill: '#56524a', 'text-anchor': left ? 'end' : 'start', opacity: 0 }); t.style.transition = 'opacity .3s'; t.textContent = label;
        wrap.appendChild(dot); wrap.appendChild(t); corpus.push({ x, y, c: cl.c, label, dot, t });
      });
    });
    corpus.forEach((p, i) => this.T(() => { p.dot.setAttribute('opacity', 0.9); p.t.setAttribute('opacity', 0.62); }, 150 + i * 45));
    const queries = [
      { text: '"chargeback dispute"', toks: ['charge', 'back', 'dispute'], tgt: { x: 118, y: 118 } },
      { text: '"lost parcel in transit"', toks: ['lost', 'parcel', 'transit'], tgt: { x: 350, y: 116 } },
      { text: '"verify customer identity"', toks: ['verify', 'customer', 'id'], tgt: { x: 230, y: 232 } },
      { text: '"suspicious wire transfer"', toks: ['suspic', 'wire', 'transfer'], tgt: { x: 178, y: 176 } }
    ];
    let qi = 0;
    const loop = () => {
      const q = queries[qi % queries.length]; qi++;
      this.$('emInput').textContent = q.text;
      this.$('emQueryLabel').innerHTML = 'query &nbsp;<span style="color:#16140f">' + q.text + '</span>';
      this.$('emRanks').innerHTML = ''; this.$('emCos').textContent = 'embedding…'; this.$('emCosArc').innerHTML = '';
      wrap.querySelectorAll('[data-em]').forEach(e => e.remove());
      corpus.forEach(p => { p.dot.setAttribute('r', 3.6); p.dot.setAttribute('opacity', 0.9); p.t.setAttribute('opacity', 0.62); p.t.setAttribute('font-weight', '400'); });
      const tw = this.$('emTokens'); tw.innerHTML = '';
      q.toks.forEach((tk, i) => { const s = document.createElement('span'); s.textContent = tk; s.style.cssText = 'font-family:JetBrains Mono,monospace;font-size:10px;color:#56524a;background:#f1efe9;border:1px solid rgba(22,20,15,.1);border-radius:6px;padding:3px 8px;opacity:0;transition:opacity .25s'; tw.appendChild(s); this.T(() => s.style.opacity = 1, 130 + i * 90); });
      const vec = []; for (let i = 0; i < NC; i++) vec.push(Math.sin(i * 1.27 + qi * 1.9) * (0.5 + 0.5 * Math.abs(Math.sin(i * 3.1 + qi))));
      cells.forEach((c, i) => this.T(() => { c.style.background = cellColor(vec[i]); }, 480 + i * 13));
      this.T(() => this.$('emNorm').textContent = '‖v‖ = 1.00 (normalized)', 480);
      const g = mk('g', { 'data-em': 1, opacity: 0 }); g.style.transition = 'opacity .3s';
      g.appendChild(mk('circle', { cx: q.tgt.x, cy: q.tgt.y, r: 5.5, fill: 'none', stroke: '#16140f', 'stroke-width': 1, opacity: 0.4 }));
      g.appendChild(mk('circle', { cx: q.tgt.x, cy: q.tgt.y, r: 5.5, fill: '#16140f' }));
      wrap.appendChild(g); this.T(() => g.setAttribute('opacity', 1), 1300);
      this.T(() => {
        const scored = corpus.map(p => { const d = Math.hypot(p.x - q.tgt.x, p.y - q.tgt.y); return { p, sim: Math.exp(-Math.pow(d / 72, 2)) }; }).sort((a, b) => b.sim - a.sim);
        const top = scored.slice(0, 5);
        top.slice(0, 3).forEach((nb, k) => { const ln = mk('line', { x1: q.tgt.x, y1: q.tgt.y, x2: nb.p.x, y2: nb.p.y, stroke: nb.p.c, 'stroke-width': 1.4, opacity: 0, 'data-em': 1 }); ln.style.transition = 'opacity .3s'; wrap.appendChild(ln); this.T(() => ln.setAttribute('opacity', 0.5), k * 110); nb.p.dot.setAttribute('r', 5.5); nb.p.t.setAttribute('opacity', 1); nb.p.t.setAttribute('font-weight', '700'); });
        const rw = this.$('emRanks');
        top.forEach((nb, r) => {
          const row = document.createElement('div'); row.style.cssText = 'display:flex;align-items:center;gap:10px;opacity:0;transition:opacity .3s';
          row.innerHTML = '<span style="font-family:JetBrains Mono,monospace;font-size:10px;color:#9a948a;width:12px">' + (r + 1) + '</span><span style="font-family:JetBrains Mono,monospace;font-size:11.5px;color:#16140f;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + nb.p.label + '</span><span style="position:relative;width:66px;height:6px;border-radius:3px;background:#ece8e0;overflow:hidden"><span class="bar" style="position:absolute;left:0;top:0;bottom:0;width:0;border-radius:3px;background:' + nb.p.c + ';transition:width .6s cubic-bezier(.4,0,.2,1)"></span></span><span style="font-family:JetBrains Mono,monospace;font-size:11px;color:#16140f;width:30px;text-align:right">' + nb.sim.toFixed(2) + '</span>';
          rw.appendChild(row); this.T(() => { row.style.opacity = 1; const b = row.querySelector('.bar'); if (b) b.style.width = (66 * nb.sim) + 'px'; }, r * 90);
        });
        const theta = Math.acos(Math.min(1, top[0].sim)), deg = Math.round(theta * 180 / Math.PI);
        this.$('emCos').innerHTML = 'cos θ = <span style="color:#16140f;font-weight:600">' + top[0].sim.toFixed(2) + '</span> · θ ' + deg + '°';
        const arc = this.$('emCosArc'), gx = 18, gy = 24, gr = 15;
        arc.appendChild(mk('path', { d: 'M' + gx + ',' + gy + ' L' + (gx + gr) + ',' + gy, stroke: '#cf8a2c', 'stroke-width': 2, 'stroke-linecap': 'round' }));
        arc.appendChild(mk('path', { d: 'M' + gx + ',' + gy + ' L' + (gx + gr * Math.cos(-theta)).toFixed(1) + ',' + (gy + gr * Math.sin(-theta)).toFixed(1), stroke: '#5b50e6', 'stroke-width': 2, 'stroke-linecap': 'round' }));
      }, 1700);
      this.T(loop, 5200);
    };
    this.T(loop, corpus.length * 45 + 400);
  }

  initAttention() {
    const svg = this.$('atSvg'); if (!svg) return;
    const toks = ['The', 'agent', 'signed', 'the', 'tx', 'on-chain', 'ledger'];
    const n = toks.length, x0 = 130, gap = 112;
    const tx = i => x0 + i * gap;
    const S = [
      [4, 1, 0, 2, 0, 0, 0],
      [1, 4, 2, 0, 1, 0, 1],
      [1, 3, 4, 0, 3, 1, 1],
      [2, 0, 0, 4, 1, 0, 1],
      [0, 2, 3, 0, 4, 1, 2],
      [0, 1, 2, 0, 2, 4, 2],
      [0, 1, 1, 1, 2, 2, 4]
    ];
    const softmax = row => { const m = Math.max.apply(null, row); const ex = row.map(v => Math.exp(v - m)); const s = ex.reduce((a, b) => a + b, 0); return ex.map(v => v / s); };
    let f = 0;
    const focus = () => {
      const w = softmax(S[f]);
      svg.querySelectorAll('[data-at]').forEach(e => e.remove());
      this.$('atFocus').textContent = toks[f];
      for (let j = 0; j < n; j++) {
        const chip = this.$('atTok' + j); if (chip) chip.setAttribute('opacity', j === f ? 1 : 0.45);
        const cell = this.$('atCell' + j); if (cell) cell.setAttribute('fill-opacity', (0.08 + 0.9 * w[j]).toFixed(2));
        const pct = this.$('atPct' + j); if (pct) pct.textContent = Math.round(w[j] * 100) + '%';
      }
      for (let j = 0; j < n; j++) {
        if (j === f) continue;
        const wt = w[j], fx = tx(f), jx = tx(j), midx = (fx + jx) / 2;
        const arc = 104 - (28 + Math.abs(j - f) * 15);
        const p = this.mk('path', { d: 'M' + fx + ',104 Q' + midx + ',' + arc + ' ' + jx + ',104', fill: 'none', stroke: '#5b50e6', 'stroke-width': (0.6 + 6.5 * wt).toFixed(2), opacity: (0.12 + 0.82 * wt).toFixed(2), 'stroke-linecap': 'round', 'data-at': 1 });
        svg.appendChild(p);
      }
      f = (f + 1) % n;
    };
    this._attn = setInterval(focus, 1700); focus();
  }

  initRel() {
    const NMAX = 50, X0 = 60, X1 = 690, Y0 = 320, Y1 = 30;
    const xN = (n) => X0 + (n / NMAX) * (X1 - X0);
    const yP = (P) => Y0 - P * (Y0 - Y1);
    const pS = this.$('relP'), kS = this.$('relK');
    if (!pS) return;
    pS.value = 0.95; kS.value = 3;
    let markN = 20;

    const draw = () => {
      const p = +pS.value, k = +kS.value;
      const peff = 1 - Math.pow(1 - p, k);
      const naive = [], bound = [];
      for (let n = 0; n <= NMAX; n += 0.5) {
        naive.push([xN(n), yP(Math.pow(p, n))]);
        bound.push([xN(n), yP(Math.pow(peff, n))]);
      }
      this.$('relNaive').setAttribute('d', this.linePath(naive));
      this.$('relBound').setAttribute('d', this.linePath(bound));
      this.$('relPVal').textContent = p.toFixed(3);
      this.$('relKVal').textContent = k;
      // marker
      const pn = Math.pow(p, markN), pb = Math.pow(peff, markN);
      const mx = xN(markN);
      this.$('relMarkLine').setAttribute('x1', mx); this.$('relMarkLine').setAttribute('x2', mx);
      this.$('relDotN').setAttribute('cx', mx); this.$('relDotN').setAttribute('cy', yP(pn));
      this.$('relDotB').setAttribute('cx', mx); this.$('relDotB').setAttribute('cy', yP(pb));
      this.$('relAtN').textContent = markN;
      this.$('relNaivePct').textContent = (pn * 100).toFixed(1) + '%';
      this.$('relBoundPct').textContent = (pb * 100).toFixed(1) + '%';
      // horizons
      const coin = Math.log(0.5) / Math.log(p);
      this.$('relCoin').textContent = Math.max(1, Math.round(coin));
      const horN = Math.log(0.9) / Math.log(p);
      const horB = Math.log(0.9) / Math.log(peff);
      const fmtH = (h) => (h > 500 ? '500+' : Math.max(1, Math.round(h)).toString());
      this.$('relHorN').textContent = fmtH(horN);
      this.$('relHorB').textContent = fmtH(horB);
    };

    pS.addEventListener('input', draw);
    kS.addEventListener('input', draw);
    this.drag(this.$('relOverlay'), (vbx) => {
      let n = Math.round((vbx - X0) / (X1 - X0) * NMAX);
      markN = Math.max(0, Math.min(NMAX, n));
      draw();
    });
    draw();
  }

  initCal() {
    const X0 = 60, X1 = 690, BASE = 244, TOP = 40;
    const aS = this.$('calA'), tS = this.$('calT');
    if (!aS) return;
    aS.value = 0.85; tS.value = 0.70;
    const BINS = 60;
    // unnormalized beta-like densities
    const betaish = (c, al, be) => Math.pow(c, al - 1) * Math.pow(1 - c, be - 1);
    const fc = [], fw = []; let sc = 0, sw = 0;
    for (let i = 0; i < BINS; i++) {
      const c = (i + 0.5) / BINS;
      const a = betaish(c, 8, 2.2);   // correct: confident, skewed high
      const w = betaish(c, 2.2, 3.2); // wrong: lower, broad
      fc.push(a); fw.push(w); sc += a; sw += w;
    }
    for (let i = 0; i < BINS; i++) { fc[i] /= sc; fw[i] /= sw; } // each sums to 1
    const maxF = Math.max.apply(null, fc.concat(fw));
    const xC = (c) => X0 + c * (X1 - X0);
    const PLOT = BASE - TOP;
    const cErr = 20, cEsc = 2;

    const areaPath = (arr, weight) => {
      const pts = [[xC(0), BASE]];
      for (let i = 0; i < BINS; i++) {
        const c = (i + 0.5) / BINS;
        const h = (arr[i] * weight / maxF) * PLOT;
        pts.push([xC(c), BASE - h]);
      }
      pts.push([xC(1), BASE]);
      return this.linePath(pts) + ' Z';
    };
    const cost = (a, tau) => {
      let wrongAuto = 0, esc = 0;
      for (let i = 0; i < BINS; i++) {
        const c = (i + 0.5) / BINS;
        if (c >= tau) { wrongAuto += (1 - a) * fw[i]; }
        else { esc += a * fc[i] + (1 - a) * fw[i]; }
      }
      return { wrongAuto, esc, total: cErr * wrongAuto + cEsc * esc };
    };

    const draw = () => {
      const a = +aS.value, tau = +tS.value;
      this.$('calCorrect').setAttribute('d', areaPath(fc, a));
      this.$('calWrong').setAttribute('d', areaPath(fw, 1 - a));
      this.$('calAVal').textContent = Math.round(a * 100) + '%';
      this.$('calTVal').textContent = tau.toFixed(2);
      const tx = xC(tau);
      this.$('calTau').setAttribute('x1', tx); this.$('calTau').setAttribute('x2', tx);
      this.$('calTauHandle').setAttribute('transform', 'translate(' + (tx - 438) + ',0)');
      this.$('calDim').setAttribute('width', Math.max(0, tx - X0));
      // metrics
      let autoCorrect = 0, autoWrong = 0, esc = 0;
      for (let i = 0; i < BINS; i++) {
        const c = (i + 0.5) / BINS;
        if (c >= tau) { autoCorrect += a * fc[i]; autoWrong += (1 - a) * fw[i]; }
        else { esc += a * fc[i] + (1 - a) * fw[i]; }
      }
      const auto = autoCorrect + autoWrong;
      this.$('calAuto').textContent = Math.round(auto * 100) + '%';
      this.$('calErr').textContent = (autoWrong * 100).toFixed(1) + '%';
      this.$('calHuman').textContent = Math.round(esc * 100) + '%';
      // optimal
      let best = 1e9, bestT = 0;
      for (let t = 0.02; t <= 0.98; t += 0.01) { const c = cost(a, t).total; if (c < best) { best = c; bestT = t; } }
      this.$('calOpt').textContent = bestT.toFixed(2);
      this.$('calOptHint').textContent = '(at $' + cErr + '/error, $' + cEsc + '/review)';
    };

    aS.addEventListener('input', draw);
    tS.addEventListener('input', draw);
    this.drag(this.$('calOverlay'), (vbx) => {
      let c = (vbx - X0) / (X1 - X0);
      c = Math.max(0.02, Math.min(0.98, c));
      tS.value = c.toFixed(2);
      draw();
    });
    draw();
  }

  initMarg() {
    const X0 = 60, X1 = 690, Y0 = 300, Y1 = 30, M = 0.04;
    const vS = this.$('margV'), chS = this.$('margCh'), fS = this.$('margF');
    if (!vS) return;
    vS.value = Math.log10(20000); chS.value = 4.20; fS.value = 60000;
    const xV = (v) => X0 + (Math.log10(v) - 1) / 5 * (X1 - X0); // v: 10..1e6
    const fmtV = (v) => v >= 1e6 ? (v / 1e6).toFixed(1).replace(/\.0$/, '') + 'M' : v >= 1000 ? Math.round(v / 1000) + 'k' : Math.round(v).toString();
    const fmt$ = (x) => {
      if (x >= 1000) return '$' + (x / 1000).toFixed(x >= 10000 ? 0 : 1).replace(/\.0$/, '') + 'k';
      if (x >= 10) return '$' + Math.round(x).toLocaleString();
      if (x >= 1) return '$' + x.toFixed(2);
      return '$' + x.toFixed(3);
    };

    const draw = () => {
      const V = Math.pow(10, +vS.value), ch = +chS.value, F = +fS.value;
      const ymax = Math.max(ch * 1.55, 6);
      const yC = (c) => Y0 - Math.min(c, ymax) / ymax * (Y0 - Y1);
      // human flat
      const yh = yC(ch);
      this.$('margHuman').setAttribute('y1', yh); this.$('margHuman').setAttribute('y2', yh);
      // floor
      const yf = yC(M);
      this.$('margFloor').setAttribute('y1', yf); this.$('margFloor').setAttribute('y2', yf);
      this.$('margFloorLbl').setAttribute('y', yf - 6);
      // agent curve
      const pts = [];
      for (let t = 1; t <= 6.0001; t += 0.04) { const v = Math.pow(10, t); pts.push([xV(v), yC(F / v + M)]); }
      this.$('margAgent').setAttribute('d', this.linePath(pts));
      // breakeven
      const Vstar = F / (ch - M);
      const bex = (Vstar >= 10 && Vstar <= 1e6) ? xV(Vstar) : (Vstar < 10 ? X0 : X1);
      this.$('margBE').setAttribute('x1', bex); this.$('margBE').setAttribute('x2', bex);
      this.$('margBELbl').setAttribute('x', Math.max(X0 + 30, Math.min(X1 - 30, bex)));
      this.$('margBERing').setAttribute('cx', bex); this.$('margBERing').setAttribute('cy', yh);
      // savings region (between human line and agent curve, from breakeven to 1M)
      const sv = [];
      const startV = Math.max(10, Math.min(1e6, Vstar));
      sv.push([xV(startV), yh]);
      for (let t = Math.log10(startV); t <= 6.0001; t += 0.04) { const v = Math.pow(10, t); sv.push([xV(v), yh]); }
      for (let t = 6; t >= Math.log10(startV); t -= 0.04) { const v = Math.pow(10, t); sv.push([xV(v), yC(F / v + M)]); }
      this.$('margSave').setAttribute('d', this.linePath(sv) + ' Z');
      // volume marker
      const vx = xV(V), aCost = F / V + M;
      this.$('margVLine').setAttribute('x1', vx); this.$('margVLine').setAttribute('x2', vx);
      this.$('margDot').setAttribute('cx', vx); this.$('margDot').setAttribute('cy', yC(aCost));
      // labels
      this.$('margVVal').textContent = fmtV(V);
      this.$('margChVal').textContent = '$' + ch.toFixed(2);
      this.$('margFVal').textContent = fmt$(F);
      this.$('margPer').textContent = fmt$(aCost);
      this.$('margBEv').textContent = fmtV(Vstar) + '/mo';
      const saving = (ch - aCost) * V;
      const sEl = this.$('margSaveV');
      sEl.textContent = (saving >= 0 ? '' : '−') + fmt$(Math.abs(saving)) + '/mo';
      sEl.style.color = saving >= 0 ? '#1f9d63' : '#d8472b';
      const payback = F / ((ch - M) * V);
      this.$('margPay').textContent = V < Vstar ? 'below breakeven' : (payback < 1 ? (payback * 30).toFixed(0) + ' days' : payback.toFixed(1) + ' mo');
    };

    [vS, chS, fS].forEach(s => s.addEventListener('input', draw));
    this.drag(this.$('margOverlay'), (vbx) => {
      let t = 1 + (vbx - X0) / (X1 - X0) * 5;
      t = Math.max(1, Math.min(6, t));
      vS.value = t.toFixed(2);
      draw();
    });
    draw();
  }

  renderVals() {
    return {
      navHover: (e) => { e.currentTarget.style.color = '#16140f'; },
      navLeave: (e) => { e.currentTarget.style.color = '#56524a'; },
      ctaHover: (e) => { e.currentTarget.style.transform = 'translateY(-2px)'; },
      ctaLeave: (e) => { e.currentTarget.style.transform = 'none'; }
    };
  }
}
</script>


</body></html>