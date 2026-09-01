'use client';

import { useTerminal } from '@/lib/hooks/useTerminal';

export default function SeeItWork() {
  useTerminal();

  return (
    <section
      id="work-it"
      style={{ background: "#0b0c0e", color: "#e8eaee", padding: "84px 40px", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{ position: "absolute", inset: "0", background: "radial-gradient(38% 50% at 12% 0%,rgba(139,123,255,.14),transparent 60%),radial-gradient(38% 50% at 90% 8%,rgba(224,166,77,.1),transparent 60%)", pointerEvents: "none" }}
       />
      <div style={{ position: "relative", maxWidth: "1140px", margin: "0 auto" }}>
        <div
          data-reveal=""
          style={{ opacity: "0", transform: "translateY(18px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", textAlign: "center", maxWidth: "720px", margin: "0 auto 44px" }}
        >
          <div
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "#8b7bff", display: "inline-flex", alignItems: "center", gap: "9px" }}
          >
            <span
              style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#5bd6a8", boxShadow: "0 0 8px #5bd6a8", animation: "zblink 1.6s infinite" }}
             />
            see it work
          </div>
          <h2
            style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "clamp(32px,3.8vw,48px)", letterSpacing: "-.03em", lineHeight: "1.06", margin: "18px 0 14px", color: "#f4f5f7" }}
          >
            An agent decides. The chain enforces. Value moves.
          </h2>
          <p
            style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "17px", lineHeight: "1.6", color: "#9aa3b2", margin: "0" }}
          >
            The hard part isn't getting a model to suggest an action — it's letting it move real money without giving it the keys. Here's a live run: the agent reasons off-chain, the smart contract enforces the rules on-chain, and nothing settles outside the bounds we wrote in code.
          </p>
        </div>
        <div
          data-reveal=""
          data-delay="120"
          style={{ opacity: "0", transform: "translateY(18px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", border: "1px solid #1c2029", borderRadius: "18px", background: "#0c0e11", overflow: "hidden", boxShadow: "0 30px 70px -36px rgba(0,0,0,.9)" }}
        >
          <div
            style={{ display: "flex", alignItems: "center", gap: "12px", padding: "13px 20px", borderBottom: "1px solid #16191f", background: "#0e1014", fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", color: "#6f7787" }}
          >
            <span style={{ display: "flex", gap: "6px" }}>
              <i
                style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#2a2f38", display: "inline-block" }}
               />
              <i
                style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#2a2f38", display: "inline-block" }}
               />
              <i
                style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#2a2f38", display: "inline-block" }}
               />
            </span>
            <span style={{ marginLeft: "6px" }}>
              agent-run ·{' '}
              <span style={{ color: "#cdd3dc" }}>
                treasury-rebalance.flow
              </span>
            </span>
            <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "6px" }}>
              <i
                style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#5bd6a8", boxShadow: "0 0 7px #5bd6a8", animation: "zblink 1.5s infinite", display: "inline-block" }}
               />
              <span id="z-run-status" style={{ color: "#e0a64d" }}>
                running…
              </span>
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 70px 1fr" }}>
            {/* AI reason */}
            <div style={{ padding: "22px 24px", borderRight: "1px solid #16191f" }}>
              <div
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: ".16em", color: "#8b7bff", marginBottom: "14px" }}
              >
                ◣ OFF-CHAIN · AGENT REASONS
              </div>
              <div
                id="z-term"
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12.5px", lineHeight: "1.85", color: "#9aa3b2", minHeight: "218px" }}
               />
            </div>
            {/* seam */}
            <div
              style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <svg
                viewBox="0 0 70 260"
                preserveAspectRatio="none"
                style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}
              >
                <line
                  x1="35"
                  y1="16"
                  x2="35"
                  y2="244"
                  stroke="url(#vseam)"
                  strokeWidth="1.4"
                  strokeDasharray="3 6"
                  opacity=".55"
                 />
                <defs>
                  <linearGradient id="vseam" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#8b7bff" />
                    <stop offset="1" stopColor="#e0a64d" />
                  </linearGradient>
                </defs>
                <circle r="3.6" fill="#8b7bff">
                  <animateMotion dur="2.4s" repeatCount="indefinite" path="M35,16 L35,244" />
                </circle>
                <circle r="3" fill="#e0a64d">
                  <animateMotion dur="2.4s" begin="1.2s" repeatCount="indefinite" path="M35,16 L35,244" />
                </circle>
              </svg>
              <span
                style={{ position: "absolute", bottom: "10px", fontFamily: "'JetBrains Mono',monospace", fontSize: "9px", letterSpacing: ".08em", color: "#6f7787", background: "#0c0e11", padding: "3px 5px", borderRadius: "4px" }}
              >
                the seam
              </span>
            </div>
            {/* on-chain enforce */}
            <div style={{ padding: "22px 24px" }}>
              <div
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: ".16em", color: "#e0a64d", marginBottom: "14px" }}
              >
                ON-CHAIN · CONTRACT ENFORCES ◢
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                <div
                  style={{ border: "1px solid #1f2530", borderRadius: "11px", padding: "14px", background: "#0e1116" }}
                >
                  <div
                    style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#e0a64d", marginBottom: "7px" }}
                  >
                    require(...) — or revert
                  </div>
                  <div
                    style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", color: "#8b93a1", lineHeight: "1.8" }}
                  >
                    healthFactor ≥ 1.0{' '}
                    <span style={{ color: "#5bd6a8" }}>
                      ✓
                    </span>
                    <br />
                    slippage ≤ 0.5%{' '}
                    <span style={{ color: "#5bd6a8" }}>
                      ✓
                    </span>
                    <br />
                    perTxCap ≤ 25,000 USDC{' '}
                    <span style={{ color: "#5bd6a8" }}>
                      ✓
                    </span>
                  </div>
                </div>
                <div
                  style={{ border: "1px solid #1f2530", borderRadius: "11px", padding: "14px", background: "#0e1116" }}
                >
                  <div
                    style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#cdd3dc", marginBottom: "5px" }}
                  >
                    tx 0x9f3c…a17
                  </div>
                  <div
                    style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", color: "#8b93a1", lineHeight: "1.8" }}
                  >
                    rebalance 12,400 USDC → vault
                    <br />
                    block 21,403,118 · 1.2s · $0.004
                  </div>
                </div>
                <div
                  id="z-final"
                  style={{ border: "1px solid rgba(91,214,168,.32)", borderRadius: "11px", padding: "13px 14px", background: "rgba(91,214,168,.06)", fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", color: "#5bd6a8", opacity: ".35", transition: "opacity .5s" }}
                >
                  ✓ value moved — strictly within on-chain bounds
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-reveal=""
          data-delay="200"
          style={{ opacity: "0", transform: "translateY(18px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center", marginTop: "30px", fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#6f7787" }}
        >
          <span>
            <span style={{ color: "#8b7bff" }}>
              ▸
            </span>
            {' '}agent never holds custody
          </span>
          <span>
            <span style={{ color: "#e0a64d" }}>
              ▸
            </span>
            {' '}rules live in the contract, not the prompt
          </span>
          <span>
            <span style={{ color: "#5bd6a8" }}>
              ▸
            </span>
            {' '}every step provable on-chain
          </span>
        </div>
      </div>
    </section>
  );
}
