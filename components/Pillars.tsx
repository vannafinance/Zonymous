export default function Pillars() {
  return (
    <section style={{ padding: "84px 40px", maxWidth: "1200px", margin: "0 auto" }}>
      <div
        data-reveal=""
        style={{ opacity: "0", transform: "translateY(18px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", textAlign: "center", maxWidth: "680px", margin: "0 auto 48px" }}
      >
        <div
          style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "#8c8679" }}
        >
          Two disciplines · one team
        </div>
        <h2
          style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "clamp(32px,3.8vw,46px)", letterSpacing: "-.03em", lineHeight: "1.08", margin: "16px 0 0" }}
        >
          Most teams pick a side. We engineer both.
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
        {/* AI pillar */}
        <div
          data-reveal=""
          style={{ opacity: "0", transform: "translateY(20px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", border: "1px solid rgba(22,20,15,.1)", borderRadius: "20px", background: "#fff", padding: "34px 32px", boxShadow: "0 12px 40px -28px rgba(22,20,15,.3)" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "11px", marginBottom: "18px" }}>
            <span
              style={{ width: "38px", height: "38px", borderRadius: "11px", background: "rgba(91,80,230,.1)", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3.4" fill="#5b50e6" />
                <circle cx="5" cy="6" r="2" fill="#5b50e6" opacity=".5" />
                <circle cx="19" cy="6" r="2" fill="#5b50e6" opacity=".5" />
                <circle cx="5" cy="18" r="2" fill="#5b50e6" opacity=".5" />
                <circle cx="19" cy="18" r="2" fill="#5b50e6" opacity=".5" />
                <path
                  d="M12 12L5 6M12 12l7-6M12 12l-7 6M12 12l7 6"
                  stroke="#5b50e6"
                  strokeWidth="1.2"
                  opacity=".5"
                 />
              </svg>
            </span>
            <span
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", letterSpacing: ".12em", textTransform: "uppercase", color: "#5b50e6" }}
            >
              01 · Intelligence
            </span>
          </div>
          <h3
            style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "27px", letterSpacing: "-.02em", margin: "0 0 12px", color: "#16140f" }}
          >
            AI & Agentic Automation
          </h3>
          <p
            style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "15.5px", lineHeight: "1.62", color: "#56524a", margin: "0 0 22px" }}
          >
            From a single automated workflow to large-scale, multi-agent systems that plan, call tools, and act under supervision. We ship for enterprises and prototype fast for startup teams.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
            <div style={{ display: "flex", gap: "11px", alignItems: "flex-start" }}>
              <span
                style={{ color: "#5b50e6", fontFamily: "'JetBrains Mono',monospace", fontSize: "13px", marginTop: "1px" }}
              >
                ▸
              </span>
              <span style={{ fontSize: "14.5px", color: "#16140f" }}>
                <strong style={{ fontWeight: "600" }}>
                  Enterprise agentic systems
                </strong>
                {' '}— orchestration, tools, memory, evals & observability.
              </span>
            </div>
            <div style={{ display: "flex", gap: "11px", alignItems: "flex-start" }}>
              <span
                style={{ color: "#5b50e6", fontFamily: "'JetBrains Mono',monospace", fontSize: "13px", marginTop: "1px" }}
              >
                ▸
              </span>
              <span style={{ fontSize: "14.5px", color: "#16140f" }}>
                <strong style={{ fontWeight: "600" }}>
                  Domain automation
                </strong>
                {' '}— for manufacturing, accounting, and legal operations.
              </span>
            </div>
            <div style={{ display: "flex", gap: "11px", alignItems: "flex-start" }}>
              <span
                style={{ color: "#5b50e6", fontFamily: "'JetBrains Mono',monospace", fontSize: "13px", marginTop: "1px" }}
              >
                ▸
              </span>
              <span style={{ fontSize: "14.5px", color: "#16140f" }}>
                <strong style={{ fontWeight: "600" }}>
                  Product prototypes
                </strong>
                {' '}— zero-to-one agent products for founding teams.
              </span>
            </div>
            <div style={{ display: "flex", gap: "11px", alignItems: "flex-start" }}>
              <span
                style={{ color: "#5b50e6", fontFamily: "'JetBrains Mono',monospace", fontSize: "13px", marginTop: "1px" }}
              >
                ▸
              </span>
              <span style={{ fontSize: "14.5px", color: "#16140f" }}>
                <strong style={{ fontWeight: "600" }}>
                  Guardrails & safety
                </strong>
                {' '}— bounded autonomy, human-in-the-loop, audit trails.
              </span>
            </div>
          </div>
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginTop: "22px", borderTop: "1px solid rgba(22,20,15,.08)", paddingTop: "18px" }}
          >
            <span
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", color: "#5b50e6", background: "rgba(91,80,230,.08)", borderRadius: "30px", padding: "5px 11px" }}
            >
              LangGraph
            </span>
            <span
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", color: "#5b50e6", background: "rgba(91,80,230,.08)", borderRadius: "30px", padding: "5px 11px" }}
            >
              Temporal
            </span>
            <span
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", color: "#5b50e6", background: "rgba(91,80,230,.08)", borderRadius: "30px", padding: "5px 11px" }}
            >
              MCP
            </span>
            <span
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", color: "#5b50e6", background: "rgba(91,80,230,.08)", borderRadius: "30px", padding: "5px 11px" }}
            >
              Claude
            </span>
            <span
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", color: "#5b50e6", background: "rgba(91,80,230,.08)", borderRadius: "30px", padding: "5px 11px" }}
            >
              open models
            </span>
          </div>
        </div>
        {/* On-chain pillar */}
        <div
          data-reveal=""
          data-delay="120"
          style={{ opacity: "0", transform: "translateY(20px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", border: "1px solid rgba(22,20,15,.1)", borderRadius: "20px", background: "#fff", padding: "34px 32px", boxShadow: "0 12px 40px -28px rgba(22,20,15,.3)" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "11px", marginBottom: "18px" }}>
            <span
              style={{ width: "38px", height: "38px", borderRadius: "11px", background: "rgba(207,138,44,.12)", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="9" width="16" height="11" rx="2" stroke="#a4660f" strokeWidth="1.6" />
                <path d="M7 9V6.5A5 5 0 0117 6.5V9" stroke="#cf8a2c" strokeWidth="1.6" />
                <circle cx="12" cy="14.5" r="1.6" fill="#a4660f" />
              </svg>
            </span>
            <span
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", letterSpacing: ".12em", textTransform: "uppercase", color: "#a4660f" }}
            >
              02 · Value
            </span>
          </div>
          <h3
            style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "27px", letterSpacing: "-.02em", margin: "0 0 12px", color: "#16140f" }}
          >
            On-Chain & DeFi Engineering
          </h3>
          <p
            style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "15.5px", lineHeight: "1.62", color: "#56524a", margin: "0 0 22px" }}
          >
            Core protocol work — not generic dApp glue. We design and ship value-bearing systems where the economics and the security have to be right the first time.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
            <div style={{ display: "flex", gap: "11px", alignItems: "flex-start" }}>
              <span
                style={{ color: "#cf8a2c", fontFamily: "'JetBrains Mono',monospace", fontSize: "13px", marginTop: "1px" }}
              >
                ▸
              </span>
              <span style={{ fontSize: "14.5px", color: "#16140f" }}>
                <strong style={{ fontWeight: "600" }}>
                  Lending & money markets
                </strong>
                {' '}— collateral, liquidations, rate models.
              </span>
            </div>
            <div style={{ display: "flex", gap: "11px", alignItems: "flex-start" }}>
              <span
                style={{ color: "#cf8a2c", fontFamily: "'JetBrains Mono',monospace", fontSize: "13px", marginTop: "1px" }}
              >
                ▸
              </span>
              <span style={{ fontSize: "14.5px", color: "#16140f" }}>
                <strong style={{ fontWeight: "600" }}>
                  DEXs & derivatives
                </strong>
                {' '}— AMMs, order books, and perps/futures venues.
              </span>
            </div>
            <div style={{ display: "flex", gap: "11px", alignItems: "flex-start" }}>
              <span
                style={{ color: "#cf8a2c", fontFamily: "'JetBrains Mono',monospace", fontSize: "13px", marginTop: "1px" }}
              >
                ▸
              </span>
              <span style={{ fontSize: "14.5px", color: "#16140f" }}>
                <strong style={{ fontWeight: "600" }}>
                  Yield & RWA protocols
                </strong>
                {' '}— vaults, strategies, tokenized real assets.
              </span>
            </div>
            <div style={{ display: "flex", gap: "11px", alignItems: "flex-start" }}>
              <span
                style={{ color: "#cf8a2c", fontFamily: "'JetBrains Mono',monospace", fontSize: "13px", marginTop: "1px" }}
              >
                ▸
              </span>
              <span style={{ fontSize: "14.5px", color: "#16140f" }}>
                <strong style={{ fontWeight: "600" }}>
                  Economic risk dashboards
                </strong>
                {' '}— stress testing, monitoring, assessment.
              </span>
            </div>
          </div>
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginTop: "22px", borderTop: "1px solid rgba(22,20,15,.08)", paddingTop: "18px" }}
          >
            <span
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", color: "#a4660f", background: "rgba(207,138,44,.1)", borderRadius: "30px", padding: "5px 11px" }}
            >
              Solidity
            </span>
            <span
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", color: "#a4660f", background: "rgba(207,138,44,.1)", borderRadius: "30px", padding: "5px 11px" }}
            >
              Rust
            </span>
            <span
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", color: "#a4660f", background: "rgba(207,138,44,.1)", borderRadius: "30px", padding: "5px 11px" }}
            >
              Soroban
            </span>
            <span
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", color: "#a4660f", background: "rgba(207,138,44,.1)", borderRadius: "30px", padding: "5px 11px" }}
            >
              Move
            </span>
            <span
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", color: "#a4660f", background: "rgba(207,138,44,.1)", borderRadius: "30px", padding: "5px 11px" }}
            >
              EVM · Solana · Stellar
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
