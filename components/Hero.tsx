'use client';

import { hoverHandlers } from '@/lib/hoverHandlers';

export default function Hero() {
  const { ctaHover, ctaLeave } = hoverHandlers;

  return (
    <header
      id="top"
      style={{ position: "relative", padding: "88px 40px 56px", textAlign: "center", overflow: "hidden" }}
    >
      <div
        style={{ position: "absolute", inset: "0", background: "radial-gradient(42% 38% at 14% 2%,rgba(91,80,230,.1),transparent 60%),radial-gradient(40% 36% at 88% 6%,rgba(207,138,44,.12),transparent 60%),radial-gradient(circle at 1px 1px,rgba(22,20,15,.045) 1px,transparent 0)", backgroundSize: "auto,auto,38px 38px", WebkitMaskImage: "linear-gradient(180deg,#000 76%,transparent)", maskImage: "linear-gradient(180deg,#000 76%,transparent)", pointerEvents: "none" }}
       />
      <div style={{ position: "relative", maxWidth: "1080px", margin: "0 auto" }}>
        <div
          style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#8c8679", display: "inline-flex", alignItems: "center", gap: "11px" }}
        >
          <span style={{ width: "22px", height: "1px", background: "currentColor", opacity: ".5" }} />
          AI Automation&nbsp;&nbsp;×&nbsp;&nbsp;On-Chain Engineering
          <span style={{ width: "22px", height: "1px", background: "currentColor", opacity: ".5" }} />
        </div>
        <h1
          style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "clamp(48px,6.4vw,82px)", letterSpacing: "-.038em", lineHeight: "1.02", margin: "24px auto 22px", maxWidth: "16ch" }}
        >
          Where intelligence meets{' '}
          <span
            style={{ background: "linear-gradient(100deg,#5b50e6,#9a4fbf 46%,#cf8a2c)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", animation: "zsheen 6s linear infinite alternate" }}
          >
            value
          </span>
          .
        </h1>
        <p
          style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "clamp(17px,1.5vw,20px)", lineHeight: "1.6", color: "#56524a", maxWidth: "640px", margin: "0 auto 34px" }}
        >
          Software that{' '}
          <span style={{ color: "#5b50e6", fontWeight: "600" }}>
            acts on its own
          </span>
          , and money that{' '}
          <span style={{ color: "#a4660f", fontWeight: "600" }}>
            runs on code
          </span>
          . We're a senior, forward-deployed engineering team that builds both — and the secure seam where they connect.
        </p>
        <div style={{ display: "flex", gap: "13px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#contact"
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "13.5px", background: "#16140f", color: "#f4f2ed", padding: "14px 22px", borderRadius: "10px", transition: "transform .2s" }}
            onMouseEnter={ctaHover}
            onMouseLeave={ctaLeave}
          >
            Book a discovery call →
          </a>
          <a
            href="#work-it"
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "13.5px", border: "1px solid rgba(22,20,15,.16)", background: "#fff", color: "#16140f", padding: "14px 22px", borderRadius: "10px", transition: "transform .2s" }}
            onMouseEnter={ctaHover}
            onMouseLeave={ctaLeave}
          >
            See it work ↓
          </a>
        </div>
        <div
          style={{ position: "relative", margin: "54px auto 0", maxWidth: "1000px", background: "rgba(255,255,255,.62)", border: "1px solid rgba(22,20,15,.1)", borderRadius: "20px", padding: "22px 24px 16px", boxShadow: "0 18px 50px -28px rgba(22,20,15,.3)", backdropFilter: "blur(4px)" }}
        >
          <div
            style={{ display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: ".05em", color: "#8c8679", padding: "0 4px 12px" }}
          >
            <span style={{ color: "#5b50e6" }}>
              ◣ INTELLIGENCE
            </span>
            <span>
              the convergence
            </span>
            <span style={{ color: "#a4660f" }}>
              VALUE ◢
            </span>
          </div>
          <svg
            viewBox="0 0 1000 300"
            style={{ width: "100%", height: "auto", display: "block" }}
            role="img"
            aria-label="AI agents and on-chain value converging into Zonymous Labs"
          >
            <defs>
              <linearGradient id="hseam" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#5b50e6" />
                <stop offset="1" stopColor="#cf8a2c" />
              </linearGradient>
              <marker
                id="harw"
                viewBox="0 0 8 8"
                refX="6.2"
                refY="4"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path
                  d="M1,1 L6.5,4 L1,7"
                  fill="none"
                  stroke="#a8a399"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                 />
              </marker>
            </defs>
            <text
              x="200"
              y="34"
              fontSize="11"
              letterSpacing="2"
              fill="#5b50e6"
              textAnchor="middle"
              fontFamily="JetBrains Mono"
            >
              REASON & ACT
            </text>
            <text
              x="800"
              y="34"
              fontSize="11"
              letterSpacing="2"
              fill="#a4660f"
              textAnchor="middle"
              fontFamily="JetBrains Mono"
            >
              MOVE & SETTLE
            </text>
            <path
              d="M276,92 C360,110 380,120 438,138"
              fill="none"
              stroke="rgba(22,20,15,.2)"
              strokeWidth="1.4"
              markerEnd="url(#harw)"
             />
            <path
              d="M276,210 C360,190 380,180 438,162"
              fill="none"
              stroke="rgba(22,20,15,.2)"
              strokeWidth="1.4"
              markerEnd="url(#harw)"
             />
            <path
              d="M724,92 C640,110 620,120 562,138"
              fill="none"
              stroke="rgba(22,20,15,.2)"
              strokeWidth="1.4"
              markerEnd="url(#harw)"
             />
            <path
              d="M724,210 C640,190 620,180 562,162"
              fill="none"
              stroke="rgba(22,20,15,.2)"
              strokeWidth="1.4"
              markerEnd="url(#harw)"
             />
            <g filter="drop-shadow(0 3px 8px rgba(22,20,15,.08))">
              <rect x="126" y="66" width="150" height="50" rx="12" fill="#fff" stroke="rgba(91,80,230,.4)" />
              <text
                x="201"
                y="96"
                fontSize="13"
                fill="#5b50e6"
                textAnchor="middle"
                fontFamily="Bricolage Grotesque"
                fontWeight="700"
              >
                AI AGENTS
              </text>
              <rect x="126" y="184" width="150" height="50" rx="12" fill="#fff" stroke="rgba(91,80,230,.4)" />
              <text
                x="201"
                y="214"
                fontSize="13"
                fill="#5b50e6"
                textAnchor="middle"
                fontFamily="Bricolage Grotesque"
                fontWeight="700"
              >
                AUTOMATION
              </text>
              <rect x="724" y="66" width="150" height="50" rx="12" fill="#fff" stroke="rgba(207,138,44,.45)" />
              <text
                x="799"
                y="96"
                fontSize="13"
                fill="#a4660f"
                textAnchor="middle"
                fontFamily="Bricolage Grotesque"
                fontWeight="700"
              >
                ON-CHAIN
              </text>
              <rect
                x="704"
                y="184"
                width="170"
                height="50"
                rx="12"
                fill="#fff"
                stroke="rgba(207,138,44,.45)"
               />
              <text
                x="789"
                y="214"
                fontSize="12"
                fill="#a4660f"
                textAnchor="middle"
                fontFamily="Bricolage Grotesque"
                fontWeight="700"
              >
                SMART CONTRACTS
              </text>
            </g>
            <circle
              cx="500"
              cy="150"
              r="70"
              fill="none"
              stroke="url(#hseam)"
              strokeWidth="1.2"
              opacity=".35"
            >
              <animate attributeName="r" values="62;76;62" dur="3.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values=".35;.1;.35" dur="3.6s" repeatCount="indefinite" />
            </circle>
            <rect
              x="440"
              y="110"
              width="120"
              height="80"
              rx="17"
              fill="#fff"
              stroke="url(#hseam)"
              strokeWidth="1.8"
             />
            <g transform="translate(479,128) scale(1.5)">
              <line x1="6.5" y1="7" x2="21.5" y2="7" stroke="#5b50e6" strokeWidth="3" strokeLinecap="round" />
              <line
                x1="21.5"
                y1="7"
                x2="6.5"
                y2="21"
                stroke="url(#hseam)"
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
            </g>
            <text
              x="500"
              y="232"
              fontSize="9"
              fill="#8c8679"
              textAnchor="middle"
              fontFamily="JetBrains Mono"
            >
              intelligence × value
            </text>
            <circle r="4" fill="#5b50e6">
              <animateMotion dur="2.3s" repeatCount="indefinite" path="M276,92 C360,110 380,120 438,138" />
            </circle>
            <circle r="4" fill="#5b50e6">
              <animateMotion
                dur="2.3s"
                begin=".55s"
                repeatCount="indefinite"
                path="M276,210 C360,190 380,180 438,162"
               />
            </circle>
            <circle r="4" fill="#cf8a2c">
              <animateMotion dur="2.3s" begin=".28s" repeatCount="indefinite" path="M724,92 C640,110 620,120 562,138" />
            </circle>
            <circle r="4" fill="#cf8a2c">
              <animateMotion
                dur="2.3s"
                begin=".82s"
                repeatCount="indefinite"
                path="M724,210 C640,190 620,180 562,162"
               />
            </circle>
          </svg>
        </div>
        <div
          style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", color: "#8c8679", marginTop: "22px" }}
        >
          Built with LangGraph · Temporal · MCP · Solidity · Rust · Move — across EVM, Solana, Stellar & Sui
        </div>
      </div>
    </header>
  );
}
