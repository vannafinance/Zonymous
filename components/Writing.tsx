export default function Writing() {
  return (
    <section id="writing" style={{ padding: "84px 40px", maxWidth: "1200px", margin: "0 auto" }}>
      <div
        data-reveal=""
        style={{ opacity: "0", transform: "translateY(18px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginBottom: "40px" }}
      >
        <div>
          <div
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "#8c8679" }}
          >
            Writing
          </div>
          <h2
            style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "clamp(30px,3.5vw,42px)", letterSpacing: "-.03em", lineHeight: "1.1", margin: "14px 0 0" }}
          >
            Notes from the seam.
          </h2>
        </div>
        <a
          href="#"
          style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12.5px", color: "#16140f", borderBottom: "1px solid rgba(22,20,15,.3)", paddingBottom: "2px" }}
        >
          All writing →
        </a>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }}>
        <a
          href="#"
          data-reveal=""
          style={{ opacity: "0", transform: "translateY(20px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", border: "1px solid rgba(22,20,15,.1)", borderRadius: "18px", background: "#fff", overflow: "hidden", display: "block" }}
        >
          <div
            style={{ height: "130px", background: "repeating-linear-gradient(135deg,rgba(91,80,230,.07) 0 10px,transparent 10px 20px)", borderBottom: "1px solid rgba(22,20,15,.08)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#9a948a" }}
          >
            cover · AI safety
          </div>
          <div style={{ padding: "22px 22px 24px" }}>
            <div
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#5b50e6", marginBottom: "10px" }}
            >
              AI · 6 min
            </div>
            <h3
              style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "18px", letterSpacing: "-.015em", lineHeight: "1.22", margin: "0 0 8px", color: "#16140f" }}
            >
              Why agents need on-chain guardrails, not bigger context windows
            </h3>
            <p
              style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "13.5px", lineHeight: "1.55", color: "#56524a", margin: "0" }}
            >
              Bounded autonomy beats blind trust — a case for putting limits in the contract.
            </p>
          </div>
        </a>
        <a
          href="#"
          data-reveal=""
          data-delay="100"
          style={{ opacity: "0", transform: "translateY(20px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", border: "1px solid rgba(22,20,15,.1)", borderRadius: "18px", background: "#fff", overflow: "hidden", display: "block" }}
        >
          <div
            style={{ height: "130px", background: "repeating-linear-gradient(135deg,rgba(207,138,44,.08) 0 10px,transparent 10px 20px)", borderBottom: "1px solid rgba(22,20,15,.08)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#9a948a" }}
          >
            cover · DEX design
          </div>
          <div style={{ padding: "22px 22px 24px" }}>
            <div
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#a4660f", marginBottom: "10px" }}
            >
              DeFi · 9 min
            </div>
            <h3
              style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "18px", letterSpacing: "-.015em", lineHeight: "1.22", margin: "0 0 8px", color: "#16140f" }}
            >
              Designing a perps DEX an AI can trade without rugging itself
            </h3>
            <p
              style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "13.5px", lineHeight: "1.55", color: "#56524a", margin: "0" }}
            >
              Risk limits, oracle hygiene, and the invariants that keep automation honest.
            </p>
          </div>
        </a>
        <a
          href="#"
          data-reveal=""
          data-delay="200"
          style={{ opacity: "0", transform: "translateY(20px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", border: "1px solid rgba(22,20,15,.1)", borderRadius: "18px", background: "#fff", overflow: "hidden", display: "block" }}
        >
          <div
            style={{ height: "130px", background: "repeating-linear-gradient(135deg,rgba(91,80,230,.07) 0 10px,transparent 10px 20px)", borderBottom: "1px solid rgba(22,20,15,.08)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#9a948a" }}
          >
            cover · stablecoins
          </div>
          <div style={{ padding: "22px 22px 24px" }}>
            <div
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#5b50e6", marginBottom: "10px" }}
            >
              Stablecoins · 7 min
            </div>
            <h3
              style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "18px", letterSpacing: "-.015em", lineHeight: "1.22", margin: "0 0 8px", color: "#16140f" }}
            >
              Stablecoins in 2026: the settlement layer for agentic commerce
            </h3>
            <p
              style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "13.5px", lineHeight: "1.55", color: "#56524a", margin: "0" }}
            >
              When software pays software, the rails have to be instant, cheap, and final.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
