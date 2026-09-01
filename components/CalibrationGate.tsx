'use client';

import { useCalibration } from '@/lib/hooks/useCalibration';

export default function CalibrationGate() {
  useCalibration();

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
            Selective autonomy
          </div>
          <h2
            style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "clamp(30px,3.6vw,44px)", letterSpacing: "-.03em", lineHeight: "1.08", margin: "14px 0 12px" }}
          >
            The agent knows when it doesn't know.
          </h2>
          <p
            style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#56524a", margin: "0" }}
          >
            Every decision carries a confidence. Set a gate{' '}
            <span style={{ fontFamily: "'JetBrains Mono',monospace", color: "#16140f" }}>
              τ
            </span>
            : above it, the agent acts; below it, a human does. Drag the gate and watch the trade — push it right and almost no error ships, but humans review more; push it left for full autonomy and errors slip through. There's a cost-optimal place to stand.
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
                viewBox="0 0 720 300"
                style={{ width: "100%", height: "auto", display: "block" }}
                fontFamily="'JetBrains Mono',monospace"
              >
                <line x1="60" y1="244" x2="690" y2="244" stroke="rgba(22,20,15,.18)" strokeWidth="1" />
                {/* dim escalate region */}
                <rect id="calDim" x="60" y="40" width="378" height="204" fill="rgba(22,20,15,.05)" />
                {/* distributions */}
                <path id="calCorrect" d="" fill="rgba(31,157,99,.32)" stroke="#1f9d63" strokeWidth="1.6" />
                <path id="calWrong" d="" fill="rgba(216,71,43,.34)" stroke="#d8472b" strokeWidth="1.6" />
                {/* threshold */}
                <line id="calTau" x1="438" y1="26" x2="438" y2="244" stroke="#16140f" strokeWidth="1.8" />
                <g id="calTauHandle">
                  <rect x="430" y="18" width="16" height="14" rx="3" fill="#16140f" />
                  <text x="438" y="28" fontSize="9" fill="#fff" textAnchor="middle">
                    τ
                  </text>
                </g>
                {/* region labels */}
                <text x="240" y="58" fontSize="10" fill="#8c8679" textAnchor="middle" letterSpacing="1.5">
                  ◂ ESCALATE TO HUMAN
                </text>
                <text
                  id="calAutoLbl"
                  x="565"
                  y="58"
                  fontSize="10"
                  fill="#5b50e6"
                  textAnchor="middle"
                  letterSpacing="1.5"
                >
                  ACT AUTONOMOUSLY ▸
                </text>
                {/* x labels */}
                <text x="60" y="262" fontSize="10" fill="#8c8679" textAnchor="middle">
                  0
                </text>
                <text x="218" y="262" fontSize="10" fill="#8c8679" textAnchor="middle">
                  .25
                </text>
                <text x="375" y="262" fontSize="10" fill="#8c8679" textAnchor="middle">
                  .50
                </text>
                <text x="532" y="262" fontSize="10" fill="#8c8679" textAnchor="middle">
                  .75
                </text>
                <text x="690" y="262" fontSize="10" fill="#8c8679" textAnchor="middle">
                  1.0
                </text>
                <text x="375" y="280" fontSize="10" fill="#56524a" textAnchor="middle" letterSpacing="1">
                  AGENT CONFIDENCE
                </text>
                <g fontSize="11">
                  <circle cx="78" cy="36" r="4" fill="#1f9d63" />
                  <text x="88" y="40" fill="#56524a">
                    would be right
                  </text>
                  <circle cx="196" cy="36" r="4" fill="#d8472b" />
                  <text x="206" y="40" fill="#56524a">
                    would be wrong
                  </text>
                </g>
                <rect
                  id="calOverlay"
                  data-overlay=""
                  x="60"
                  y="26"
                  width="630"
                  height="218"
                  fill="transparent"
                 />
              </svg>
            </div>
            <div style={{ padding: "24px 26px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", marginBottom: "9px" }}
                >
                  <span style={{ color: "#56524a" }}>
                    base accuracy
                  </span>
                  <span id="calAVal" style={{ color: "#5b50e6", fontWeight: "600" }}>
                    85%
                  </span>
                </div>
                <input
                  id="calA"
                  type="range"
                  min="0.6"
                  max="0.97"
                  step="0.01"
                  style={{ width: "100%", accentColor: "#5b50e6" }}
                 />
              </div>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", marginBottom: "9px" }}
                >
                  <span style={{ color: "#56524a" }}>
                    gate&nbsp;
                    <span style={{ color: "#16140f" }}>
                      τ
                    </span>
                  </span>
                  <span id="calTVal" style={{ color: "#5b50e6", fontWeight: "600" }}>
                    0.70
                  </span>
                </div>
                <input
                  id="calT"
                  type="range"
                  min="0.02"
                  max="0.98"
                  step="0.01"
                  style={{ width: "100%", accentColor: "#5b50e6" }}
                 />
              </div>
              <div
                style={{ borderTop: "1px solid rgba(22,20,15,.1)", paddingTop: "16px", display: "flex", flexDirection: "column", gap: "13px" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#8c8679" }}>
                    automation rate
                  </span>
                  <span
                    id="calAuto"
                    style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "20px", color: "#5b50e6" }}
                  >
                    —
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#8c8679" }}>
                    errors shipped
                  </span>
                  <span
                    id="calErr"
                    style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "20px", color: "#d8472b" }}
                  >
                    —
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#8c8679" }}>
                    human reviews
                  </span>
                  <span
                    id="calHuman"
                    style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "20px", color: "#16140f" }}
                  >
                    —
                  </span>
                </div>
              </div>
              <div
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", color: "#56524a", lineHeight: "1.7", borderTop: "1px solid rgba(22,20,15,.1)", paddingTop: "14px" }}
              >
                cost-optimal gate τ* ={' '}
                <span id="calOpt" style={{ color: "#a4660f" }}>
                  —
                </span>
                <br />
                <span id="calOptHint" style={{ color: "#8c8679" }} />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ textAlign: "center", marginTop: "16px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", color: "#8c8679" }}
        >
          act if confidence ≥ τ, else escalate · cost(τ) = c_err·errors + c_human·reviews
        </div>
      </div>
    </section>
  );
}
