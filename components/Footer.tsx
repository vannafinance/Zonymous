export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(22,20,15,.08)", padding: "48px 40px 36px" }}>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: "32px" }}
      >
        <div>
          <div
            style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "18px", letterSpacing: "-.015em" }}
          >
            <svg width="24" height="24" viewBox="0 0 28 28">
              <line x1="6.5" y1="7" x2="21.5" y2="7" stroke="#5b50e6" strokeWidth="3" strokeLinecap="round" />
              <line
                x1="21.5"
                y1="7"
                x2="6.5"
                y2="21"
                stroke="url(#navSeam)"
                strokeWidth="3"
                strokeLinecap="round"
               />
              <line
                x1="6.5"
                y1="21"
                x2="21.5"
                y2="21"
                stroke="#cf8a2c"
                strokeWidth="3"
                strokeLinecap="round"
               />
            </svg>
            Zonymous Labs
          </div>
          <p
            style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "13.5px", lineHeight: "1.55", color: "#56524a", margin: "14px 0 0", maxWidth: "32ch" }}
          >
            Where intelligence meets value. AI automation & on-chain engineering for founders and enterprises worldwide.
          </p>
        </div>
        <div>
          <div
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "#9a948a", marginBottom: "14px" }}
          >
            Build
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "9px", fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "13.5px", color: "#56524a" }}
          >
            <a href="#capabilities">
              AI Automation
            </a>
            <a href="#capabilities">
              On-Chain Engineering
            </a>
            <a href="#work-it">
              The convergence
            </a>
            <a href="#work">
              Selected work
            </a>
          </div>
        </div>
        <div>
          <div
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "#9a948a", marginBottom: "14px" }}
          >
            Company
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "9px", fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "13.5px", color: "#56524a" }}
          >
            <a href="#writing">
              Writing
            </a>
            <a href="#contact">
              Contact
            </a>
            <a href="https://vanna.finance" target="_blank">
              Vanna Protocol ↗
            </a>
          </div>
        </div>
        <div>
          <div
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "#9a948a", marginBottom: "14px" }}
          >
            Reach us
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "9px", fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "13.5px", color: "#56524a" }}
          >
            <a href="mailto:hello@zonymous.com">
              hello@zonymous.com
            </a>
            <span>
              India · Canada
            </span>
          </div>
        </div>
      </div>
      <div
        style={{ maxWidth: "1200px", margin: "36px auto 0", borderTop: "1px solid rgba(22,20,15,.08)", paddingTop: "20px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#9a948a" }}
      >
        <span>
          © 2026 Zonymous Labs. All rights reserved.
        </span>
        <span>
          Zonymous Labs Pvt Ltd (India) · Aconomy Labs Inc. (Canada) — operating as the Zonymous Labs brand.
        </span>
      </div>
    </footer>
  );
}
