export default function Capabilities() {
  return (
    <section id="capabilities" style={{ padding: "84px 40px", maxWidth: "1200px", margin: "0 auto" }}>
      <div
        data-reveal=""
        style={{ opacity: "0", transform: "translateY(18px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", maxWidth: "700px", margin: "0 auto 46px", textAlign: "center" }}
      >
        <div
          style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "#8c8679" }}
        >
          The stack we go deep on
        </div>
        <h2
          style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "clamp(32px,3.8vw,46px)", letterSpacing: "-.03em", lineHeight: "1.08", margin: "16px 0 0" }}
        >
          We speak the whole stack — fluently.
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }}>
        <div
          data-reveal=""
          style={{ opacity: "0", transform: "translateY(18px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", border: "1px solid rgba(22,20,15,.1)", borderRadius: "16px", background: "#fff", padding: "26px 24px" }}
        >
          <div
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", letterSpacing: ".1em", textTransform: "uppercase", color: "#5b50e6", marginBottom: "16px" }}
          >
            Agentic AI
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "9px", fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "14px", color: "#3a372f" }}
          >
            <span>
              LangGraph orchestration
            </span>
            <span>
              Temporal durable workflows
            </span>
            <span>
              Model Context Protocol
            </span>
            <span>
              Claude & open models
            </span>
            <span>
              Multi-agent planning
            </span>
            <span>
              RAG & tool use
            </span>
            <span>
              Evals & observability
            </span>
          </div>
        </div>
        <div
          data-reveal=""
          data-delay="80"
          style={{ opacity: "0", transform: "translateY(18px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", border: "1px solid rgba(22,20,15,.1)", borderRadius: "16px", background: "#fff", padding: "26px 24px" }}
        >
          <div
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", letterSpacing: ".1em", textTransform: "uppercase", color: "#a4660f", marginBottom: "16px" }}
          >
            Chains
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "9px", fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "14px", color: "#3a372f" }}
          >
            <span>
              Ethereum
            </span>
            <span>
              Base · Arbitrum
            </span>
            <span>
              BNB Chain
            </span>
            <span>
              Solana
            </span>
            <span>
              Stellar
            </span>
            <span>
              Sui
            </span>
            <span>
              Any EVM L2
            </span>
          </div>
        </div>
        <div
          data-reveal=""
          data-delay="160"
          style={{ opacity: "0", transform: "translateY(18px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", border: "1px solid rgba(22,20,15,.1)", borderRadius: "16px", background: "#fff", padding: "26px 24px" }}
        >
          <div
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", letterSpacing: ".1em", textTransform: "uppercase", color: "#a4660f", marginBottom: "16px" }}
          >
            Languages
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "9px", fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "14px", color: "#3a372f" }}
          >
            <span>
              Solidity
            </span>
            <span>
              Rust
            </span>
            <span>
              Soroban (Rust)
            </span>
            <span>
              Move
            </span>
            <span>
              Vyper
            </span>
            <span>
              TypeScript · viem
            </span>
            <span>
              Python
            </span>
          </div>
        </div>
        <div
          data-reveal=""
          data-delay="240"
          style={{ opacity: "0", transform: "translateY(18px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", border: "1px solid rgba(22,20,15,.1)", borderRadius: "16px", background: "#fff", padding: "26px 24px" }}
        >
          <div
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", letterSpacing: ".1em", textTransform: "uppercase", color: "#5b50e6", marginBottom: "16px" }}
          >
            DeFi & Risk
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "9px", fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "14px", color: "#3a372f" }}
          >
            <span>
              AMM & order-book DEXs
            </span>
            <span>
              Perps & futures
            </span>
            <span>
              Lending markets
            </span>
            <span>
              Yield vaults
            </span>
            <span>
              Tokenized RWAs
            </span>
            <span>
              Risk dashboards
            </span>
            <span>
              Audits & formal checks
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
