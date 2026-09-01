export default function SelectedWork() {
  return (
    <section id="work" style={{ background: "#0b0c0e", color: "#e8eaee", padding: "84px 40px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          data-reveal=""
          style={{ opacity: "0", transform: "translateY(18px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginBottom: "42px" }}
        >
          <div>
            <div
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "#8b7bff" }}
            >
              Selected work
            </div>
            <h2
              style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "clamp(32px,3.8vw,46px)", letterSpacing: "-.03em", lineHeight: "1.08", margin: "14px 0 0", color: "#f4f5f7", maxWidth: "18ch" }}
            >
              Systems that move real value.
            </h2>
          </div>
          <div
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#6f7787", maxWidth: "34ch" }}
          >
            In-house protocols and confidential client work. Some names are under wraps.
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "18px" }}>
          {/* Vanna feature */}
          <a
            href="https://vanna.finance"
            target="_blank"
            data-reveal=""
            style={{ opacity: "0", transform: "translateY(20px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", gridRow: "span 2", border: "1px solid #1c2029", borderRadius: "20px", background: "linear-gradient(160deg,#101319,#0c0e11)", overflow: "hidden", display: "flex", flexDirection: "column" }}
          >
            <div
              style={{ position: "relative", height: "200px", background: "repeating-linear-gradient(135deg,rgba(139,123,255,.06) 0 12px,transparent 12px 24px)", borderBottom: "1px solid #1c2029", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}
            >
              <div
                style={{ position: "absolute", width: "200px", height: "200px", border: "1px solid rgba(224,166,77,.2)", borderRadius: "50%", animation: "zorbit 22s linear infinite" }}
               />
              <div
                style={{ position: "absolute", width: "300px", height: "300px", border: "1px solid rgba(139,123,255,.14)", borderRadius: "50%", animation: "zorbit 30s linear infinite reverse" }}
               />
              <div
                style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "800", fontSize: "40px", letterSpacing: "-.02em", background: "linear-gradient(100deg,#8b7bff,#e0a64d)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", position: "relative" }}
              >
                Vanna
              </div>
            </div>
            <div style={{ padding: "26px 28px", flex: "1" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <span
                  style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#5bd6a8", background: "rgba(91,214,168,.1)", border: "1px solid rgba(91,214,168,.25)", borderRadius: "30px", padding: "4px 10px" }}
                >
                  In-house protocol
                </span>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#6f7787" }}>
                  vanna.finance ↗
                </span>
              </div>
              <h3
                style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "24px", letterSpacing: "-.02em", margin: "0 0 10px", color: "#f4f5f7" }}
              >
                Vanna Protocol
              </h3>
              <p
                style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "14.5px", lineHeight: "1.6", color: "#9aa3b2", margin: "0" }}
              >
                A capital-efficient DeFi protocol with on-chain risk controls and agent-ready execution — our reference implementation of the convergence thesis.
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "18px" }}>
                <span
                  style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#9aa3b2", border: "1px solid #1f2530", borderRadius: "6px", padding: "4px 9px" }}
                >
                  Lending
                </span>
                <span
                  style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#9aa3b2", border: "1px solid #1f2530", borderRadius: "6px", padding: "4px 9px" }}
                >
                  Risk engine
                </span>
                <span
                  style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#9aa3b2", border: "1px solid #1f2530", borderRadius: "6px", padding: "4px 9px" }}
                >
                  Multi-chain
                </span>
              </div>
            </div>
          </a>
          {/* Auri */}
          <div
            data-reveal=""
            data-delay="100"
            style={{ opacity: "0", transform: "translateY(20px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", border: "1px solid #1c2029", borderRadius: "20px", background: "#0c0e11", padding: "26px 28px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <span
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#e0a64d", background: "rgba(224,166,77,.1)", border: "1px solid rgba(224,166,77,.25)", borderRadius: "30px", padding: "4px 10px" }}
              >
                Building · name tentative
              </span>
            </div>
            <h3
              style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-.02em", margin: "0 0 10px", color: "#f4f5f7" }}
            >
              Auri
            </h3>
            <p
              style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "14px", lineHeight: "1.6", color: "#9aa3b2", margin: "0" }}
            >
              A tokenized-gold protocol bringing a real-world asset on-chain with verifiable reserves and transparent settlement.
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "18px" }}>
              <span
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#9aa3b2", border: "1px solid #1f2530", borderRadius: "6px", padding: "4px 9px" }}
              >
                RWA
              </span>
              <span
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#9aa3b2", border: "1px solid #1f2530", borderRadius: "6px", padding: "4px 9px" }}
              >
                Proof of reserves
              </span>
            </div>
          </div>
          {/* Enterprise anon */}
          <div
            data-reveal=""
            data-delay="180"
            style={{ opacity: "0", transform: "translateY(20px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", border: "1px solid #1c2029", borderRadius: "20px", background: "#0c0e11", padding: "26px 28px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <span
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#8b7bff", background: "rgba(139,123,255,.1)", border: "1px solid rgba(139,123,255,.25)", borderRadius: "30px", padding: "4px 10px" }}
              >
                Confidential · enterprise
              </span>
            </div>
            <h3
              style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "22px", letterSpacing: "-.02em", margin: "0 0 10px", color: "#f4f5f7" }}
            >
              Agentic ops for a leading manufacturer
            </h3>
            <p
              style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "14px", lineHeight: "1.6", color: "#9aa3b2", margin: "0" }}
            >
              Multi-agent automation across procurement and quality operations for a top Indian manufacturing group.
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "18px" }}>
              <span
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#9aa3b2", border: "1px solid #1f2530", borderRadius: "6px", padding: "4px 9px" }}
              >
                Enterprise agents
              </span>
              <span
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#9aa3b2", border: "1px solid #1f2530", borderRadius: "6px", padding: "4px 9px" }}
              >
                Ops automation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
