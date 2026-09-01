'use client';

import { hoverHandlers } from '@/lib/hoverHandlers';

export default function ContactCta() {
  const { ctaHover, ctaLeave } = hoverHandlers;

  return (
    <section id="contact" style={{ padding: "40px 40px 96px", maxWidth: "1200px", margin: "0 auto" }}>
      <div
        data-reveal=""
        style={{ opacity: "0", transform: "translateY(20px)", transition: "opacity .8s cubic-bezier(.2,.7,.2,1),transform .8s cubic-bezier(.2,.7,.2,1)", position: "relative", borderRadius: "28px", overflow: "hidden", background: "#0b0c0e", padding: "72px 48px", textAlign: "center" }}
      >
        <div
          style={{ position: "absolute", inset: "0", background: "radial-gradient(40% 60% at 18% 10%,rgba(139,123,255,.22),transparent 60%),radial-gradient(40% 60% at 84% 90%,rgba(224,166,77,.18),transparent 60%)", pointerEvents: "none" }}
         />
        <div style={{ position: "relative" }}>
          <h2
            style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "clamp(32px,4.4vw,54px)", letterSpacing: "-.035em", lineHeight: "1.05", margin: "0 auto 18px", color: "#f4f5f7", maxWidth: "18ch" }}
          >
            Have something at the seam of AI and value?
          </h2>
          <p
            style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "18px", lineHeight: "1.6", color: "#9aa3b2", maxWidth: "560px", margin: "0 auto 32px" }}
          >
            Tell us what you're building. We'll tell you, honestly, whether we're the right team — and how we'd start.
          </p>
          <div style={{ display: "flex", gap: "13px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:hello@zonymous.com"
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "14px", background: "#f4f2ed", color: "#0b0c0e", padding: "15px 26px", borderRadius: "11px", fontWeight: "600", transition: "transform .2s" }}
              onMouseEnter={ctaHover}
              onMouseLeave={ctaLeave}
            >
              Book a discovery call →
            </a>
            <a
              href="mailto:hello@zonymous.com"
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "14px", border: "1px solid rgba(255,255,255,.18)", color: "#e8eaee", padding: "15px 26px", borderRadius: "11px" }}
            >
              hello@zonymous.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
