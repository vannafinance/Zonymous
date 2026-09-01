export default function Automation() {
  return (
    <section id="automation" style={{ padding: "84px 40px", maxWidth: "1200px", margin: "0 auto" }}>
      <div
        data-reveal=""
        style={{ opacity: "0", transform: "translateY(18px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", maxWidth: "720px", margin: "0 auto 46px", textAlign: "center" }}
      >
        <div
          style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "#5b50e6" }}
        >
          Automation · by industry
        </div>
        <h2
          style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "clamp(32px,3.8vw,46px)", letterSpacing: "-.03em", lineHeight: "1.08", margin: "16px 0 14px" }}
        >
          The back office, run by agents.
        </h2>
        <p
          style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "17px", lineHeight: "1.6", color: "#56524a", margin: "0" }}
        >
          From a single workflow to a supervised fleet — the same engineering rigor we bring on-chain, applied to the work that actually runs a business. A few of the places it fits:
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }}>
        {/* Manufacturing */}
        <div
          data-reveal=""
          style={{ opacity: "0", transform: "translateY(20px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", border: "1px solid rgba(22,20,15,.1)", borderRadius: "18px", background: "#fff", padding: "28px 26px", display: "flex", flexDirection: "column", boxShadow: "0 10px 36px -26px rgba(22,20,15,.3)" }}
        >
          <span
            style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(91,80,230,.09)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="13" width="6" height="7" rx="1" stroke="#5b50e6" strokeWidth="1.6" />
              <rect x="11" y="9" width="6" height="11" rx="1" stroke="#5b50e6" strokeWidth="1.6" />
              <path
                d="M4 13l4.5-4.5M17 9l3-3"
                stroke="#5b50e6"
                strokeWidth="1.6"
                strokeLinecap="round"
                opacity=".55"
               />
            </svg>
          </span>
          <div
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "#8c8679", marginBottom: "7px" }}
          >
            Manufacturing · procurement & QA
          </div>
          <h3
            style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "20px", letterSpacing: "-.015em", margin: "0 0 9px", color: "#16140f" }}
          >
            Keep the plant moving
          </h3>
          <p
            style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "14px", lineHeight: "1.58", color: "#56524a", margin: "0 0 18px", flex: "1" }}
          >
            Agents read ERP and sensor data, flag quality anomalies, draft purchase orders, and chase approvals — the loop that keeps procurement and the line in sync.
          </p>
          <a
            href="#contact"
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#5b50e6", borderBottom: "1px solid rgba(91,80,230,.3)", paddingBottom: "2px", alignSelf: "flex-start" }}
          >
            Explore use case →
          </a>
        </div>
        {/* Accounting */}
        <div
          data-reveal=""
          data-delay="80"
          style={{ opacity: "0", transform: "translateY(20px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", border: "1px solid rgba(22,20,15,.1)", borderRadius: "18px", background: "#fff", padding: "28px 26px", display: "flex", flexDirection: "column", boxShadow: "0 10px 36px -26px rgba(22,20,15,.3)" }}
        >
          <span
            style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(91,80,230,.09)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="5" width="16" height="14" rx="2" stroke="#5b50e6" strokeWidth="1.6" />
              <path d="M8 9h8M8 12h8M8 15h5" stroke="#5b50e6" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          <div
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "#8c8679", marginBottom: "7px" }}
          >
            Accounting · close & reconciliation
          </div>
          <h3
            style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "20px", letterSpacing: "-.015em", margin: "0 0 9px", color: "#16140f" }}
          >
            Surface only the exceptions
          </h3>
          <p
            style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "14px", lineHeight: "1.58", color: "#56524a", margin: "0 0 18px", flex: "1" }}
          >
            Month-end close, ledger reconciliation, and audit-prep agents pull from the books and hand a human only the line items that genuinely need judgment.
          </p>
          <a
            href="#contact"
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#5b50e6", borderBottom: "1px solid rgba(91,80,230,.3)", paddingBottom: "2px", alignSelf: "flex-start" }}
          >
            Explore use case →
          </a>
        </div>
        {/* Legal */}
        <div
          data-reveal=""
          data-delay="160"
          style={{ opacity: "0", transform: "translateY(20px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", border: "1px solid rgba(22,20,15,.1)", borderRadius: "18px", background: "#fff", padding: "28px 26px", display: "flex", flexDirection: "column", boxShadow: "0 10px 36px -26px rgba(22,20,15,.3)" }}
        >
          <span
            style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(91,80,230,.09)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M7 4h7l4 4v12H7z" stroke="#5b50e6" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M13 4v5h5" stroke="#5b50e6" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M10 13h5M10 16h3" stroke="#5b50e6" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          <div
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "#8c8679", marginBottom: "7px" }}
          >
            Legal · contracts & intake
          </div>
          <h3
            style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "20px", letterSpacing: "-.015em", margin: "0 0 9px", color: "#16140f" }}
          >
            Redline, summarize, route
          </h3>
          <p
            style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "14px", lineHeight: "1.58", color: "#56524a", margin: "0 0 18px", flex: "1" }}
          >
            Contract review, client intake, and discovery agents that draft and triage at volume — with a lawyer on every final call and a full audit trail.
          </p>
          <a
            href="#contact"
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#5b50e6", borderBottom: "1px solid rgba(91,80,230,.3)", paddingBottom: "2px", alignSelf: "flex-start" }}
          >
            Explore use case →
          </a>
        </div>
        {/* Marketing & SEO */}
        <div
          data-reveal=""
          style={{ opacity: "0", transform: "translateY(20px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", border: "1px solid rgba(22,20,15,.1)", borderRadius: "18px", background: "#fff", padding: "28px 26px", display: "flex", flexDirection: "column", boxShadow: "0 10px 36px -26px rgba(22,20,15,.3)" }}
        >
          <span
            style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(91,80,230,.09)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="6" stroke="#5b50e6" strokeWidth="1.6" />
              <path d="M15.5 15.5L20 20" stroke="#5b50e6" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          <div
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "#8c8679", marginBottom: "7px" }}
          >
            Marketing · content & SEO
          </div>
          <h3
            style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "20px", letterSpacing: "-.015em", margin: "0 0 9px", color: "#16140f" }}
          >
            Hand the busywork to agents
          </h3>
          <p
            style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "14px", lineHeight: "1.58", color: "#56524a", margin: "0 0 18px", flex: "1" }}
          >
            Research, briefs, content production, and performance reporting run by agents — so the team spends its hours on strategy, not the grind.
          </p>
          <a
            href="#contact"
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#5b50e6", borderBottom: "1px solid rgba(91,80,230,.3)", paddingBottom: "2px", alignSelf: "flex-start" }}
          >
            Explore use case →
          </a>
        </div>
        {/* Customer Ops */}
        <div
          data-reveal=""
          data-delay="80"
          style={{ opacity: "0", transform: "translateY(20px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", border: "1px solid rgba(22,20,15,.1)", borderRadius: "18px", background: "#fff", padding: "28px 26px", display: "flex", flexDirection: "column", boxShadow: "0 10px 36px -26px rgba(22,20,15,.3)" }}
        >
          <span
            style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(91,80,230,.09)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 6h14v9H9l-4 4V6z" stroke="#5b50e6" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M9 10h6M9 12.5h4" stroke="#5b50e6" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          <div
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "#8c8679", marginBottom: "7px" }}
          >
            Customer ops · support & triage
          </div>
          <h3
            style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "20px", letterSpacing: "-.015em", margin: "0 0 9px", color: "#16140f" }}
          >
            Resolve routine, escalate the rest
          </h3>
          <p
            style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "14px", lineHeight: "1.58", color: "#56524a", margin: "0 0 18px", flex: "1" }}
          >
            Ticket triage, response drafting, and knowledge agents that close the routine cases around the clock and route the hard ones to a person.
          </p>
          <a
            href="#contact"
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#5b50e6", borderBottom: "1px solid rgba(91,80,230,.3)", paddingBottom: "2px", alignSelf: "flex-start" }}
          >
            Explore use case →
          </a>
        </div>
        {/* Back office */}
        <div
          data-reveal=""
          data-delay="160"
          style={{ opacity: "0", transform: "translateY(20px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", border: "1px solid rgba(22,20,15,.1)", borderRadius: "18px", background: "#fff", padding: "28px 26px", display: "flex", flexDirection: "column", boxShadow: "0 10px 36px -26px rgba(22,20,15,.3)" }}
        >
          <span
            style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(91,80,230,.09)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="5" y="4" width="11" height="14" rx="1.5" stroke="#5b50e6" strokeWidth="1.6" />
              <path d="M8 6h13v14H10" stroke="#5b50e6" strokeWidth="1.6" strokeLinejoin="round" opacity=".5" />
            </svg>
          </span>
          <div
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "#8c8679", marginBottom: "7px" }}
          >
            Back office · documents & data
          </div>
          <h3
            style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "20px", letterSpacing: "-.015em", margin: "0 0 9px", color: "#16140f" }}
          >
            Fewer handoffs, fewer errors
          </h3>
          <p
            style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "14px", lineHeight: "1.58", color: "#56524a", margin: "0 0 18px", flex: "1" }}
          >
            Invoice processing, data entry, and document workflows automated end to end — extraction, validation, and routing without the copy-paste.
          </p>
          <a
            href="#contact"
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#5b50e6", borderBottom: "1px solid rgba(91,80,230,.3)", paddingBottom: "2px", alignSelf: "flex-start" }}
          >
            Explore use case →
          </a>
        </div>
      </div>
      <div
        data-reveal=""
        style={{ opacity: "0", transform: "translateY(14px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", textAlign: "center", marginTop: "30px", fontFamily: "'JetBrains Mono',monospace", fontSize: "12.5px", color: "#8c8679" }}
      >
        …and dozens more. If it's repetitive, rule-bound, and high-volume, an agent can probably run it.
      </div>
    </section>
  );
}
