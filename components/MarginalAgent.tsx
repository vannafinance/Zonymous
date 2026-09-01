'use client';

import { useMarginalAgent } from '@/lib/hooks/useMarginalAgent';

export default function MarginalAgent() {
  useMarginalAgent();

  return (
    <section style={{ padding: "88px 40px", background: "#f4f2ed" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <div
          data-reveal=""
          style={{ opacity: "0", transform: "translateY(18px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", textAlign: "center", maxWidth: "740px", margin: "0 auto 34px" }}
        >
          <div
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "#5b50e6" }}
          >
            Unit economics
          </div>
          <h2
            style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "clamp(30px,3.6vw,44px)", letterSpacing: "-.03em", lineHeight: "1.08", margin: "14px 0 12px" }}
          >
            Human ops scale with volume. Agent ops scale toward the gas fee.
          </h2>
          <p
            style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#56524a", margin: "0" }}
          >
            Humans cost the same per task forever — a flat line. An agent is the opposite shape: expensive to build, then almost free to run, its cost-per-task collapsing toward the settlement fee as volume grows. Drag your own numbers and read what it's worth.
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
                viewBox="0 0 720 340"
                style={{ width: "100%", height: "auto", display: "block" }}
                fontFamily="'JetBrains Mono',monospace"
              >
                <line x1="60" y1="30" x2="60" y2="300" stroke="rgba(22,20,15,.18)" strokeWidth="1" />
                <line x1="60" y1="300" x2="690" y2="300" stroke="rgba(22,20,15,.18)" strokeWidth="1" />
                {/* savings region */}
                <path id="margSave" d="" fill="rgba(31,157,99,.16)" stroke="none" />
                {/* human flat line */}
                <line id="margHuman" x1="60" y1="140" x2="690" y2="140" stroke="#a4660f" strokeWidth="2.2" />
                {/* floor */}
                <line
                  id="margFloor"
                  x1="60"
                  y1="296"
                  x2="690"
                  y2="296"
                  stroke="rgba(22,20,15,.3)"
                  strokeWidth="1"
                  strokeDasharray="4 5"
                 />
                <text id="margFloorLbl" x="686" y="290" fontSize="9.5" fill="#8c8679" textAnchor="end">
                  $0.04 floor — the settlement fee
                </text>
                {/* agent curve */}
                <path id="margAgent" d="" fill="none" stroke="#5b50e6" strokeWidth="2.4" strokeLinecap="round" />
                {/* breakeven */}
                <line
                  id="margBE"
                  x1="300"
                  y1="30"
                  x2="300"
                  y2="300"
                  stroke="rgba(22,20,15,.3)"
                  strokeWidth="1"
                  strokeDasharray="2 4"
                 />
                <circle id="margBERing" cx="300" cy="140" r="6" fill="none" stroke="#16140f" strokeWidth="1.6" />
                <text id="margBELbl" x="300" y="24" fontSize="9.5" fill="#56524a" textAnchor="middle">
                  breakeven
                </text>
                {/* volume marker */}
                <line
                  id="margVLine"
                  x1="430"
                  y1="30"
                  x2="430"
                  y2="300"
                  stroke="rgba(91,80,230,.4)"
                  strokeWidth="1"
                 />
                <circle id="margDot" cx="430" cy="160" r="5" fill="#5b50e6" stroke="#f5f4f1" strokeWidth="1.5" />
                {/* x labels */}
                <text x="60" y="318" fontSize="10" fill="#8c8679" textAnchor="middle">
                  10
                </text>
                <text x="186" y="318" fontSize="10" fill="#8c8679" textAnchor="middle">
                  100
                </text>
                <text x="312" y="318" fontSize="10" fill="#8c8679" textAnchor="middle">
                  1k
                </text>
                <text x="438" y="318" fontSize="10" fill="#8c8679" textAnchor="middle">
                  10k
                </text>
                <text x="564" y="318" fontSize="10" fill="#8c8679" textAnchor="middle">
                  100k
                </text>
                <text x="690" y="318" fontSize="10" fill="#8c8679" textAnchor="middle">
                  1M
                </text>
                <text x="375" y="334" fontSize="10" fill="#56524a" textAnchor="middle" letterSpacing="1">
                  MONTHLY TASK VOLUME (log)
                </text>
                <text
                  x="20"
                  y="170"
                  fontSize="10"
                  fill="#56524a"
                  textAnchor="middle"
                  transform="rotate(-90 20 170)"
                  letterSpacing="1"
                >
                  COST / TASK
                </text>
                <g fontSize="11">
                  <circle cx="86" cy="48" r="4" fill="#a4660f" />
                  <text x="96" y="52" fill="#56524a">
                    human
                  </text>
                  <circle cx="170" cy="48" r="4" fill="#5b50e6" />
                  <text x="180" y="52" fill="#56524a">
                    agent
                  </text>
                </g>
                <rect
                  id="margOverlay"
                  data-overlay=""
                  x="60"
                  y="30"
                  width="630"
                  height="270"
                  fill="transparent"
                 />
              </svg>
            </div>
            <div style={{ padding: "24px 26px", display: "flex", flexDirection: "column", gap: "18px" }}>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", marginBottom: "9px" }}
                >
                  <span style={{ color: "#56524a" }}>
                    monthly volume
                  </span>
                  <span id="margVVal" style={{ color: "#5b50e6", fontWeight: "600" }}>
                    20,000
                  </span>
                </div>
                <input
                  id="margV"
                  type="range"
                  min="1"
                  max="6"
                  step="0.02"
                  style={{ width: "100%", accentColor: "#5b50e6" }}
                 />
              </div>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", marginBottom: "9px" }}
                >
                  <span style={{ color: "#56524a" }}>
                    human $/task
                  </span>
                  <span id="margChVal" style={{ color: "#5b50e6", fontWeight: "600" }}>
                    $4.20
                  </span>
                </div>
                <input
                  id="margCh"
                  type="range"
                  min="1"
                  max="15"
                  step="0.1"
                  style={{ width: "100%", accentColor: "#5b50e6" }}
                 />
              </div>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", marginBottom: "9px" }}
                >
                  <span style={{ color: "#56524a" }}>
                    build cost
                  </span>
                  <span id="margFVal" style={{ color: "#5b50e6", fontWeight: "600" }}>
                    $60k
                  </span>
                </div>
                <input
                  id="margF"
                  type="range"
                  min="10000"
                  max="250000"
                  step="1000"
                  style={{ width: "100%", accentColor: "#5b50e6" }}
                 />
              </div>
              <div
                style={{ borderTop: "1px solid rgba(22,20,15,.1)", paddingTop: "16px", display: "flex", flexDirection: "column", gap: "12px" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#8c8679" }}>
                    agent $/task
                  </span>
                  <span
                    id="margPer"
                    style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "20px", color: "#16140f" }}
                  >
                    —
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#8c8679" }}>
                    breakeven
                  </span>
                  <span
                    id="margBEv"
                    style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "20px", color: "#16140f" }}
                  >
                    —
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#8c8679" }}>
                    monthly saving
                  </span>
                  <span
                    id="margSaveV"
                    style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "22px", color: "#1f9d63" }}
                  >
                    —
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#8c8679" }}>
                    payback
                  </span>
                  <span
                    id="margPay"
                    style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "20px", color: "#16140f" }}
                  >
                    —
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ textAlign: "center", marginTop: "16px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", color: "#8c8679" }}
        >
          agent(V) = F / V + m · floor m = $0.04 · breakeven V* = F / (c_h − m)
        </div>
      </div>
    </section>
  );
}
