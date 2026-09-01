'use client';

import { useEmbeddings } from '@/lib/hooks/useEmbeddings';

export default function Embeddings() {
  useEmbeddings();

  return (
    <section style={{ padding: "88px 40px", background: "#ece8e0" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <div
          data-reveal=""
          style={{ opacity: "0", transform: "translateY(18px)", transition: "opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)", textAlign: "center", maxWidth: "740px", margin: "0 auto 34px" }}
        >
          <div
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "#5b50e6" }}
          >
            Embeddings & semantic search
          </div>
          <h2
            style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: "700", fontSize: "clamp(30px,3.6vw,44px)", letterSpacing: "-.03em", lineHeight: "1.08", margin: "14px 0 12px" }}
          >
            How AI turns text into searchable meaning.
          </h2>
          <p
            style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#56524a", margin: "0" }}
          >
            An embedding model turns text into a long vector of numbers, so that{' '}
            <em>
              meaning becomes distance
            </em>
            : related ideas land near each other. Search stops being keyword-matching and becomes geometry — find the nearest neighbors. It's the retrieval step behind{' '}
            <em>
              RAG
            </em>
            {' '}(retrieval-augmented generation) — how an agent pulls the right context before it answers, matched by cosine similarity.
          </p>
        </div>
        <div
          id="emWrap"
          style={{ border: "1px solid rgba(22,20,15,.1)", borderRadius: "18px", background: "#fff", overflow: "hidden", boxShadow: "0 16px 48px -34px rgba(22,20,15,.4)", display: "grid", gridTemplateColumns: "296px 1fr 312px" }}
        >
          <div
            style={{ padding: "26px 24px", borderRight: "1px solid rgba(22,20,15,.08)", display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "4px" }}>
              <span
                style={{ width: "20px", height: "20px", borderRadius: "6px", background: "#5b50e614", color: "#5b50e6", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600" }}
              >
                1
              </span>
              <span
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#5b50e6" }}
              >
                Encode
              </span>
            </div>
            <div>
              <div
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: ".1em", textTransform: "uppercase", color: "#8c8679", marginBottom: "8px" }}
              >
                input
              </div>
              <div
                id="emInput"
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", color: "#16140f", background: "#faf9f7", border: "1px solid rgba(22,20,15,.1)", borderRadius: "9px", padding: "10px 12px" }}
              >
                "chargeback dispute"
              </div>
            </div>
            <div>
              <div
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: ".1em", textTransform: "uppercase", color: "#8c8679", marginBottom: "8px" }}
              >
                sub-tokens
              </div>
              <div id="emTokens" style={{ display: "flex", flexWrap: "wrap", gap: "6px" }} />
            </div>
            <div>
              <div
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: ".1em", textTransform: "uppercase", color: "#8c8679", marginBottom: "9px" }}
              >
                embedding vector · ℝ¹⁵³⁶
              </div>
              <div
                id="emCellWrap"
                style={{ display: "grid", gridTemplateColumns: "repeat(16,1fr)", gridAutoRows: "15px", gap: "2px" }}
               />
              <div
                id="emNorm"
                style={{ fontFamily: "'JetBrains Mono',monospace", marginTop: "9px", textTransform: "none", letterSpacing: "0", fontSize: "10.5px", color: "#8c8679" }}
              >
                ‖v‖ = 1.00
              </div>
            </div>
          </div>
          <div
            style={{ padding: "26px 26px 22px", borderRight: "1px solid rgba(22,20,15,.08)", display: "flex", flexDirection: "column" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "4px" }}>
              <span
                style={{ width: "20px", height: "20px", borderRadius: "6px", background: "#16140f14", color: "#16140f", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600" }}
              >
                2
              </span>
              <span
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#16140f" }}
              >
                Place
              </span>
            </div>
            <div
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", letterSpacing: ".1em", textTransform: "uppercase", color: "#8c8679", marginBottom: "6px" }}
            >
              1,536-d projected to 2-D · near = similar meaning
            </div>
            <svg
              id="emPlot"
              viewBox="0 0 460 320"
              style={{ width: "100%", height: "auto", display: "block", margin: "auto 0" }}
              fontFamily="'JetBrains Mono',monospace"
             />
          </div>
          <div style={{ padding: "26px 24px", display: "flex", flexDirection: "column", gap: "13px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "4px" }}>
              <span
                style={{ width: "20px", height: "20px", borderRadius: "6px", background: "#cf8a2c14", color: "#cf8a2c", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600" }}
              >
                3
              </span>
              <span
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#cf8a2c" }}
              >
                Retrieve
              </span>
            </div>
            <div
              id="emQueryLabel"
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#8c8679" }}
            >
              query —
            </div>
            <div
              id="emRanks"
              style={{ display: "flex", flexDirection: "column", gap: "12px", flex: "1" }}
             />
            <div
              style={{ borderTop: "1px solid rgba(22,20,15,.08)", paddingTop: "13px", display: "flex", alignItems: "center", gap: "11px" }}
            >
              <svg id="emCosArc" width="40" height="34" viewBox="0 0 40 34" />
              <span
                id="emCos"
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "#56524a" }}
              >
                —
              </span>
            </div>
          </div>
        </div>
        <div
          style={{ textAlign: "center", marginTop: "16px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", color: "#8c8679" }}
        >
          cosine(a, b) = (a · b) / (‖a‖ ‖b‖) · retrieve the k nearest neighbors
        </div>
      </div>
    </section>
  );
}
