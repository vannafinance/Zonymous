export default function Engagements() {
  return (
    <section
      style={{ background: "#ece8e0", padding: "84px 40px", borderTop: "1px solid rgba(22,20,15,.06)" }}
    >
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        <div
          data-reveal=""
          style={{ opacity: "0", transform: "translateY(18px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", maxWidth: "680px", margin: "0 auto 44px", textAlign: "center" }}
        >
          <div
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "#8c8679" }}
          >
            How we work
          </div>
          <h2
            style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "clamp(30px,3.5vw,42px)", letterSpacing: "-.03em", lineHeight: "1.1", margin: "16px 0 0" }}
          >
            Three ways to start.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }}>
          <div
            data-reveal=""
            style={{ opacity: "0", transform: "translateY(20px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", background: "#fff", border: "1px solid rgba(22,20,15,.1)", borderRadius: "18px", padding: "28px" }}
          >
            <div
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#5b50e6", marginBottom: "14px" }}
            >
              01 · 2 weeks
            </div>
            <h3
              style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "21px", letterSpacing: "-.02em", margin: "0 0 10px" }}
            >
              Discovery sprint
            </h3>
            <p
              style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "14.5px", lineHeight: "1.6", color: "#56524a", margin: "0" }}
            >
              We map the seam: architecture, threat model, and a costed plan you own — whether or not we build it.
            </p>
          </div>
          <div
            data-reveal=""
            data-delay="100"
            style={{ opacity: "0", transform: "translateY(20px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", background: "#fff", border: "1px solid rgba(22,20,15,.1)", borderRadius: "18px", padding: "28px" }}
          >
            <div
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#5b50e6", marginBottom: "14px" }}
            >
              02 · project
            </div>
            <h3
              style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "21px", letterSpacing: "-.02em", margin: "0 0 10px" }}
            >
              Protocol & agent build
            </h3>
            <p
              style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "14.5px", lineHeight: "1.6", color: "#56524a", margin: "0" }}
            >
              A senior, forward-deployed pod ships your protocol or agentic system to production — audited, monitored, and handed over clean.
            </p>
          </div>
          <div
            data-reveal=""
            data-delay="200"
            style={{ opacity: "0", transform: "translateY(20px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", background: "#fff", border: "1px solid rgba(22,20,15,.1)", borderRadius: "18px", padding: "28px" }}
          >
            <div
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#5b50e6", marginBottom: "14px" }}
            >
              03 · ongoing
            </div>
            <h3
              style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "21px", letterSpacing: "-.02em", margin: "0 0 10px" }}
            >
              Forward-deployed engineers
            </h3>
            <p
              style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "14.5px", lineHeight: "1.6", color: "#56524a", margin: "0" }}
            >
              Senior, forward-deployed engineers working inside your team — to raise the bar on the systems that move value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
