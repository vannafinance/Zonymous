'use client';

import { useAttention } from '@/lib/hooks/useAttention';

export default function Attention() {
  useAttention();

  return (
    <section style={{ padding: "88px 40px", background: "#ece8e0" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <div
          data-reveal=""
          style={{ opacity: "0", transform: "translateY(18px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", textAlign: "center", maxWidth: "740px", margin: "0 auto 34px" }}
        >
          <div
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "#5b50e6" }}
          >
            Self-attention
          </div>
          <h2
            style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "clamp(30px,3.6vw,44px)", letterSpacing: "-.03em", lineHeight: "1.08", margin: "14px 0 12px" }}
          >
            Not every word matters equally.
          </h2>
          <p
            style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#56524a", margin: "0" }}
          >
            The mechanism behind every transformer: for each word, the model scores how much every other word matters, runs those scores through a softmax so they sum to one, and blends accordingly. Watch the focus move along the sentence — thicker links and hotter cells mean more attention.
          </p>
        </div>
        <div
          style={{ background: "rgba(255,255,255,.45)", borderRadius: "18px", padding: "14px 24px 6px" }}
        >
          <svg
            id="atSvg"
            viewBox="0 0 980 280"
            style={{ width: "100%", height: "auto", display: "block" }}
            fontFamily="'JetBrains Mono',monospace"
          >
            <text x="58" y="40" fontSize="10.5" fill="#8c8679" letterSpacing="1">
              FOCUS TOKEN ATTENDS TO THE SENTENCE — thicker link = more weight
            </text>
            <g id="atTok0">
              <rect
                x="84"
                y="104"
                width="92"
                height="32"
                rx="8"
                fill="#fff"
                stroke="rgba(91,80,230,.35)"
                strokeWidth="1.4"
               />
              <text x="130" y="125" fontSize="11.5" fill="#16140f" textAnchor="middle">
                The
              </text>
            </g>
            <g id="atTok1">
              <rect
                x="196"
                y="104"
                width="92"
                height="32"
                rx="8"
                fill="#fff"
                stroke="rgba(91,80,230,.35)"
                strokeWidth="1.4"
               />
              <text x="242" y="125" fontSize="11.5" fill="#16140f" textAnchor="middle">
                agent
              </text>
            </g>
            <g id="atTok2">
              <rect
                x="308"
                y="104"
                width="92"
                height="32"
                rx="8"
                fill="#fff"
                stroke="rgba(91,80,230,.35)"
                strokeWidth="1.4"
               />
              <text x="354" y="125" fontSize="11.5" fill="#16140f" textAnchor="middle">
                signed
              </text>
            </g>
            <g id="atTok3">
              <rect
                x="420"
                y="104"
                width="92"
                height="32"
                rx="8"
                fill="#fff"
                stroke="rgba(91,80,230,.35)"
                strokeWidth="1.4"
               />
              <text x="466" y="125" fontSize="11.5" fill="#16140f" textAnchor="middle">
                the
              </text>
            </g>
            <g id="atTok4">
              <rect
                x="532"
                y="104"
                width="92"
                height="32"
                rx="8"
                fill="#fff"
                stroke="rgba(91,80,230,.35)"
                strokeWidth="1.4"
               />
              <text x="578" y="125" fontSize="11.5" fill="#16140f" textAnchor="middle">
                tx
              </text>
            </g>
            <g id="atTok5">
              <rect
                x="644"
                y="104"
                width="92"
                height="32"
                rx="8"
                fill="#fff"
                stroke="rgba(91,80,230,.35)"
                strokeWidth="1.4"
               />
              <text x="690" y="125" fontSize="11" fill="#16140f" textAnchor="middle">
                on-chain
              </text>
            </g>
            <g id="atTok6">
              <rect
                x="756"
                y="104"
                width="92"
                height="32"
                rx="8"
                fill="#fff"
                stroke="rgba(91,80,230,.35)"
                strokeWidth="1.4"
               />
              <text x="802" y="125" fontSize="11.5" fill="#16140f" textAnchor="middle">
                ledger
              </text>
            </g>
            <text x="58" y="194" fontSize="10" fill="#8c8679">
              attention weights · softmax → Σ = 1.00
            </text>
            <rect
              id="atCell0"
              x="100"
              y="202"
              width="60"
              height="22"
              rx="5"
              fill="#5b50e6"
              fillOpacity="0.1"
              stroke="rgba(91,80,230,.2)"
             />
            <text id="atPct0" x="130" y="241" fontSize="9.5" fill="#56524a" textAnchor="middle" />
            <rect
              id="atCell1"
              x="212"
              y="202"
              width="60"
              height="22"
              rx="5"
              fill="#5b50e6"
              fillOpacity="0.1"
              stroke="rgba(91,80,230,.2)"
             />
            <text id="atPct1" x="242" y="241" fontSize="9.5" fill="#56524a" textAnchor="middle" />
            <rect
              id="atCell2"
              x="324"
              y="202"
              width="60"
              height="22"
              rx="5"
              fill="#5b50e6"
              fillOpacity="0.1"
              stroke="rgba(91,80,230,.2)"
             />
            <text id="atPct2" x="354" y="241" fontSize="9.5" fill="#56524a" textAnchor="middle" />
            <rect
              id="atCell3"
              x="436"
              y="202"
              width="60"
              height="22"
              rx="5"
              fill="#5b50e6"
              fillOpacity="0.1"
              stroke="rgba(91,80,230,.2)"
             />
            <text id="atPct3" x="466" y="241" fontSize="9.5" fill="#56524a" textAnchor="middle" />
            <rect
              id="atCell4"
              x="548"
              y="202"
              width="60"
              height="22"
              rx="5"
              fill="#5b50e6"
              fillOpacity="0.1"
              stroke="rgba(91,80,230,.2)"
             />
            <text id="atPct4" x="578" y="241" fontSize="9.5" fill="#56524a" textAnchor="middle" />
            <rect
              id="atCell5"
              x="660"
              y="202"
              width="60"
              height="22"
              rx="5"
              fill="#5b50e6"
              fillOpacity="0.1"
              stroke="rgba(91,80,230,.2)"
             />
            <text id="atPct5" x="690" y="241" fontSize="9.5" fill="#56524a" textAnchor="middle" />
            <rect
              id="atCell6"
              x="772"
              y="202"
              width="60"
              height="22"
              rx="5"
              fill="#5b50e6"
              fillOpacity="0.1"
              stroke="rgba(91,80,230,.2)"
             />
            <text id="atPct6" x="802" y="241" fontSize="9.5" fill="#56524a" textAnchor="middle" />
          </svg>
        </div>
        <div
          style={{ display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center", marginTop: "18px", fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#56524a" }}
        >
          <span>
            focus:{' '}
            <span id="atFocus" style={{ color: "#5b50e6", fontWeight: "600" }}>
              —
            </span>
          </span>
          <span>
            <span style={{ color: "#5b50e6" }}>
              ▸
            </span>
            {' '}weights always sum to 1
          </span>
          <span style={{ color: "#8c8679" }}>
            the operation inside every transformer
          </span>
        </div>
      </div>
    </section>
  );
}
