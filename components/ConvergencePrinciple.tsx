'use client';

import { useSteps } from '@/lib/hooks/useSteps';

export default function ConvergencePrinciple() {
  useSteps();

  return (
    <section
      style={{ background: "#ece8e0", padding: "84px 40px", borderTop: "1px solid rgba(22,20,15,.06)", borderBottom: "1px solid rgba(22,20,15,.06)" }}
    >
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        <div
          data-reveal=""
          style={{ opacity: "0", transform: "translateY(18px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", maxWidth: "700px", margin: "0 auto 46px", textAlign: "center" }}
        >
          <div
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "#8c8679" }}
          >
            The convergence principle
          </div>
          <h2
            style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "clamp(32px,3.8vw,46px)", letterSpacing: "-.03em", lineHeight: "1.08", margin: "16px 0 14px" }}
          >
            Bounded by code, not trust.
          </h2>
          <p
            style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "17px", lineHeight: "1.6", color: "#56524a", margin: "0" }}
          >
            Autonomy is only safe when the limits are enforceable. Every system we build at the seam follows the same four moves.
          </p>
        </div>
        <div
          id="z-steps"
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }}
        >
          <div
            data-step=""
            data-num-wrap=""
            style={{ border: "1px solid rgba(22,20,15,.09)", borderRadius: "16px", background: "#fbfaf8", padding: "24px 22px", transition: "border-color .4s,box-shadow .4s,background .4s" }}
          >
            <div
              data-num=""
              style={{ width: "42px", height: "42px", borderRadius: "12px", border: "1.5px solid rgba(91,80,230,.4)", color: "#5b50e6", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono',monospace", fontSize: "15px", fontWeight: "600", transition: "all .4s" }}
            >
              01
            </div>
            <div
              style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "18px", margin: "16px 0 7px", color: "#16140f" }}
            >
              Observe
            </div>
            <div
              style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "13.5px", lineHeight: "1.55", color: "#56524a" }}
            >
              The agent reads on-chain state — prices, positions, health factors — as ground truth.
            </div>
          </div>
          <div
            data-step=""
            style={{ border: "1px solid rgba(22,20,15,.09)", borderRadius: "16px", background: "#fbfaf8", padding: "24px 22px", transition: "border-color .4s,box-shadow .4s,background .4s" }}
          >
            <div
              data-num=""
              style={{ width: "42px", height: "42px", borderRadius: "12px", border: "1.5px solid rgba(91,80,230,.4)", color: "#5b50e6", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono',monospace", fontSize: "15px", fontWeight: "600", transition: "all .4s" }}
            >
              02
            </div>
            <div
              style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "18px", margin: "16px 0 7px", color: "#16140f" }}
            >
              Sign
            </div>
            <div
              style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "13.5px", lineHeight: "1.55", color: "#56524a" }}
            >
              It reasons, then submits a typed, signed action. It proposes — it never takes custody.
            </div>
          </div>
          <div
            data-step=""
            style={{ border: "1px solid rgba(22,20,15,.09)", borderRadius: "16px", background: "#fbfaf8", padding: "24px 22px", transition: "border-color .4s,box-shadow .4s,background .4s" }}
          >
            <div
              data-num=""
              style={{ width: "42px", height: "42px", borderRadius: "12px", border: "1.5px solid rgba(207,138,44,.45)", color: "#a4660f", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono',monospace", fontSize: "15px", fontWeight: "600", transition: "all .4s" }}
            >
              03
            </div>
            <div
              style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "18px", margin: "16px 0 7px", color: "#16140f" }}
            >
              Enforce
            </div>
            <div
              style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "13.5px", lineHeight: "1.55", color: "#56524a" }}
            >
              The contract asserts the rules. Outside the bounds, the transaction simply reverts.
            </div>
          </div>
          <div
            data-step=""
            style={{ border: "1px solid rgba(22,20,15,.09)", borderRadius: "16px", background: "#fbfaf8", padding: "24px 22px", transition: "border-color .4s,box-shadow .4s,background .4s" }}
          >
            <div
              data-num=""
              style={{ width: "42px", height: "42px", borderRadius: "12px", border: "1.5px solid rgba(207,138,44,.45)", color: "#a4660f", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono',monospace", fontSize: "15px", fontWeight: "600", transition: "all .4s" }}
            >
              04
            </div>
            <div
              style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "18px", margin: "16px 0 7px", color: "#16140f" }}
            >
              Settle
            </div>
            <div
              style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "13.5px", lineHeight: "1.55", color: "#56524a" }}
            >
              Value moves and finalizes in seconds — every step transparent and provable.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
