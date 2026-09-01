'use client';

import { useReliability } from '@/lib/hooks/useReliability';

export default function ReliabilityCliff() {
  useReliability();

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
            Reliability compounding
          </div>
          <h2
            style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "clamp(30px,3.6vw,44px)", letterSpacing: "-.03em", lineHeight: "1.08", margin: "14px 0 12px" }}
          >
            Why agent reliability collapses on long tasks.
          </h2>
          <p
            style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#56524a", margin: "0" }}
          >
            A long task is a chain of steps. If each step is independent, end-to-end success is{' '}
            <span style={{ fontFamily: "'JetBrains Mono',monospace", color: "#16140f" }}>
              p
              <sup>
                N
              </sup>
            </span>
            {' '}— it decays{' '}
            <em>
              exponentially
            </em>
            . You don't fix that by waiting for a smarter model; you fix it with architecture: a verifier that catches a bad step and a bounded retry. On-chain, the contract{' '}
            <em>
              is
            </em>
            {' '}that verifier.
          </p>
        </div>
        <div
          style={{ border: "1px solid rgba(22,20,15,.1)", borderRadius: "18px", overflow: "hidden", background: "#fff", boxShadow: "0 14px 44px -32px rgba(22,20,15,.35)" }}
        >
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 290px", gap: "0", alignItems: "stretch", borderTop: "1px solid rgba(22,20,15,.08)", marginTop: "22px" }}
          >
            <div style={{ padding: "24px 20px 24px 28px", borderRight: "1px solid rgba(22,20,15,.08)" }}>
              <svg
                className="zsvg"
                viewBox="0 0 720 360"
                style={{ width: "100%", height: "auto", display: "block" }}
                fontFamily="'JetBrains Mono',monospace"
              >
                {/* gridlines */}
                <line x1="60" y1="30" x2="690" y2="30" stroke="rgba(22,20,15,.06)" strokeWidth="1" />
                <line x1="60" y1="102.5" x2="690" y2="102.5" stroke="rgba(22,20,15,.06)" strokeWidth="1" />
                <line
                  x1="60"
                  y1="175"
                  x2="690"
                  y2="175"
                  stroke="rgba(22,20,15,.22)"
                  strokeWidth="1"
                  strokeDasharray="4 5"
                 />
                <line x1="60" y1="247.5" x2="690" y2="247.5" stroke="rgba(22,20,15,.06)" strokeWidth="1" />
                <line x1="60" y1="320" x2="690" y2="320" stroke="rgba(22,20,15,.18)" strokeWidth="1" />
                <text x="52" y="34" fontSize="10" fill="#8c8679" textAnchor="end">
                  100%
                </text>
                <text x="52" y="106" fontSize="10" fill="#8c8679" textAnchor="end">
                  75%
                </text>
                <text x="52" y="179" fontSize="10" fill="#a4660f" textAnchor="end">
                  50%
                </text>
                <text x="52" y="251" fontSize="10" fill="#8c8679" textAnchor="end">
                  25%
                </text>
                <text x="52" y="320" fontSize="10" fill="#8c8679" textAnchor="end">
                  0%
                </text>
                <text x="372" y="179" fontSize="9" fill="#a4660f" textAnchor="middle" dy="-3" opacity=".8">
                  coin flip
                </text>
                {/* x labels */}
                <text x="60" y="338" fontSize="10" fill="#8c8679" textAnchor="middle">
                  0
                </text>
                <text x="186" y="338" fontSize="10" fill="#8c8679" textAnchor="middle">
                  10
                </text>
                <text x="312" y="338" fontSize="10" fill="#8c8679" textAnchor="middle">
                  20
                </text>
                <text x="438" y="338" fontSize="10" fill="#8c8679" textAnchor="middle">
                  30
                </text>
                <text x="564" y="338" fontSize="10" fill="#8c8679" textAnchor="middle">
                  40
                </text>
                <text x="690" y="338" fontSize="10" fill="#8c8679" textAnchor="middle">
                  50
                </text>
                <text x="375" y="354" fontSize="10" fill="#56524a" textAnchor="middle" letterSpacing="1">
                  STEPS IN THE TASK (N)
                </text>
                {/* curves */}
                <path id="relNaive" d="" fill="none" stroke="#d8472b" strokeWidth="2.4" strokeLinecap="round" />
                <path id="relBound" d="" fill="none" stroke="#5b50e6" strokeWidth="2.4" strokeLinecap="round" />
                {/* marker */}
                <line
                  id="relMarkLine"
                  x1="312"
                  y1="30"
                  x2="312"
                  y2="320"
                  stroke="rgba(22,20,15,.35)"
                  strokeWidth="1"
                 />
                <circle id="relDotN" cx="312" cy="0" r="5" fill="#d8472b" stroke="#f5f4f1" strokeWidth="1.5" />
                <circle id="relDotB" cx="312" cy="0" r="5" fill="#5b50e6" stroke="#f5f4f1" strokeWidth="1.5" />
                {/* legend */}
                <g fontSize="11">
                  <circle cx="78" cy="50" r="4" fill="#d8472b" />
                  <text x="88" y="54" fill="#56524a">
                    naive agent · pⁿ
                  </text>
                  <circle cx="220" cy="50" r="4" fill="#5b50e6" />
                  <text x="230" y="54" fill="#56524a">
                    bounded · verify + retry
                  </text>
                </g>
                <rect
                  id="relOverlay"
                  data-overlay=""
                  x="60"
                  y="30"
                  width="630"
                  height="290"
                  fill="transparent"
                 />
              </svg>
            </div>
            {/* controls */}
            <div style={{ padding: "24px 26px", display: "flex", flexDirection: "column", gap: "22px" }}>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", marginBottom: "9px" }}
                >
                  <span style={{ color: "#56524a" }}>
                    per-step reliability&nbsp;
                    <span style={{ color: "#16140f" }}>
                      p
                    </span>
                  </span>
                  <span id="relPVal" style={{ color: "#5b50e6", fontWeight: "600" }}>
                    0.95
                  </span>
                </div>
                <input
                  id="relP"
                  type="range"
                  min="0.80"
                  max="0.99"
                  step="0.005"
                  style={{ width: "100%", accentColor: "#5b50e6" }}
                 />
              </div>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", marginBottom: "9px" }}
                >
                  <span style={{ color: "#56524a" }}>
                    verify + retries&nbsp;
                    <span style={{ color: "#16140f" }}>
                      k
                    </span>
                  </span>
                  <span id="relKVal" style={{ color: "#5b50e6", fontWeight: "600" }}>
                    3
                  </span>
                </div>
                <input
                  id="relK"
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  style={{ width: "100%", accentColor: "#5b50e6" }}
                 />
              </div>
              <div style={{ borderTop: "1px solid rgba(22,20,15,.1)", paddingTop: "18px" }}>
                <div
                  style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", color: "#8c8679", marginBottom: "12px" }}
                >
                  AT{' '}
                  <span id="relAtN" style={{ color: "#16140f" }}>
                    20
                  </span>
                  {' '}STEPS
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div>
                    <div
                      style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "26px", color: "#d8472b", lineHeight: "1" }}
                      id="relNaivePct"
                    >
                      35.8%
                    </div>
                    <div
                      style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", color: "#8c8679", marginTop: "2px" }}
                    >
                      naive agent succeeds
                    </div>
                  </div>
                  <div>
                    <div
                      style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "26px", color: "#5b50e6", lineHeight: "1" }}
                      id="relBoundPct"
                    >
                      99.8%
                    </div>
                    <div
                      style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", color: "#8c8679", marginTop: "2px" }}
                    >
                      bounded agent succeeds
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", color: "#56524a", lineHeight: "1.7", borderTop: "1px solid rgba(22,20,15,.1)", paddingTop: "14px" }}
              >
                <div>
                  coin-flip at N ={' '}
                  <span id="relCoin" style={{ color: "#a4660f" }}>
                    14
                  </span>
                </div>
                <div>
                  90%-horizon:{' '}
                  <span id="relHorN" style={{ color: "#d8472b" }}>
                    2
                  </span>
                  {' '}→{' '}
                  <span id="relHorB" style={{ color: "#5b50e6" }}>
                    800+
                  </span>
                  {' '}steps
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ textAlign: "center", marginTop: "16px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", color: "#8c8679" }}
        >
          naive = pᴺ · bounded = (1 − (1−p)ᵏ)ᴺ · the gap is the value of verification
        </div>
      </div>
    </section>
  );
}
