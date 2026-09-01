'use client';

import { hoverHandlers } from '@/lib/hoverHandlers';

export default function Nav() {
  const { ctaHover, ctaLeave, navHover, navLeave } = hoverHandlers;

  return (
    <nav
      style={{ position: "sticky", top: "0", zIndex: "50", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 40px", background: "rgba(244,242,237,.82)", backdropFilter: "saturate(140%) blur(12px)", borderBottom: "1px solid rgba(22,20,15,.07)" }}
    >
      <a
        href="#top"
        style={{ display: "flex", alignItems: "center", gap: "11px", fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "19px", letterSpacing: "-.015em", color: "#16140f" }}
      >
        <svg width="26" height="26" viewBox="0 0 28 28">
          <line x1="6.5" y1="7" x2="21.5" y2="7" stroke="#5b50e6" strokeWidth="3" strokeLinecap="round" />
          <line
            x1="21.5"
            y1="7"
            x2="6.5"
            y2="21"
            stroke="url(#navSeam)"
            strokeWidth="3"
            strokeLinecap="round"
           />
          <line
            x1="6.5"
            y1="21"
            x2="21.5"
            y2="21"
            stroke="#cf8a2c"
            strokeWidth="3"
            strokeLinecap="round"
           />
          <defs>
            <linearGradient id="navSeam" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#5b50e6" />
              <stop offset="1" stopColor="#cf8a2c" />
            </linearGradient>
          </defs>
        </svg>
        Zonymous Labs
      </a>
      <div
        style={{ display: "flex", alignItems: "center", gap: "30px", fontFamily: "'JetBrains Mono',monospace", fontSize: "12.5px", color: "#56524a" }}
      >
        <a
          href="#work-it"
          style={{ transition: "color .2s" }}
          onMouseEnter={navHover}
          onMouseLeave={navLeave}
        >
          See it work
        </a>
        <a
          href="#automation"
          style={{ transition: "color .2s" }}
          onMouseEnter={navHover}
          onMouseLeave={navLeave}
        >
          Automation
        </a>
        <a
          href="#capabilities"
          style={{ transition: "color .2s" }}
          onMouseEnter={navHover}
          onMouseLeave={navLeave}
        >
          Capabilities
        </a>
        <a
          href="#work"
          style={{ transition: "color .2s" }}
          onMouseEnter={navHover}
          onMouseLeave={navLeave}
        >
          Work
        </a>
        <a
          href="#writing"
          style={{ transition: "color .2s" }}
          onMouseEnter={navHover}
          onMouseLeave={navLeave}
        >
          Writing
        </a>
      </div>
      <a
        href="#contact"
        style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12.5px", background: "#16140f", color: "#f4f2ed", padding: "10px 17px", borderRadius: "9px", transition: "transform .2s" }}
        onMouseEnter={ctaHover}
        onMouseLeave={ctaLeave}
      >
        Book a call →
      </a>
    </nav>
  );
}
