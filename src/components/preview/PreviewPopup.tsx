import { usePreview } from "./PreviewContext";
import { X, Check, ArrowRight } from "lucide-react";

const PREVIEW_A_URL = "PREVIEW_A_URL";
const PREVIEW_B_URL = "PREVIEW_B_URL";

const PreviewPopup = () => {
  const { isPopupOpen, closePopup, version } = usePreview();

  if (!isPopupOpen) return null;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 10000, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div onClick={closePopup} style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }} />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.3)",
          width: "94vw",
          maxWidth: "940px",
          maxHeight: "92vh",
          overflow: "hidden",
          padding: "clamp(24px, 3vw, 40px)",
        }}
      >
        <button onClick={closePopup} style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", cursor: "pointer", color: "#999" }}>
          <X style={{ width: "20px", height: "20px" }} />
        </button>

        <h2 style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1.1, color: "#111", textAlign: "center", margin: "0 0 6px" }}>
          This Website Preview is Ready.
        </h2>
        <p style={{ fontSize: "18px", fontWeight: 400, lineHeight: 1.5, color: "#777", textAlign: "center", margin: "0 0 20px" }}>
          Activate your website anytime — everything is already built and ready to go.
        </p>

        <div style={{ backgroundColor: "#f8f8f8", borderRadius: "6px", padding: "16px 20px", marginBottom: "20px", fontSize: "16px", lineHeight: 1.7, color: "#444" }}>
          <p style={{ margin: 0 }}>You've already seen the result. Everything is ready.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "20px" }}>
          {[
            { step: "1", title: "Payment Confirmed", desc: "Secure checkout via Stripe" },
            { step: "2", title: "Submit Your Revisions", desc: "We'll send you a simple revision form" },
            { step: "3", title: "Launch Your Website", desc: "We finalize and deploy your site" },
          ].map((item, i) => (
            <div key={i} style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "14px 8px", backgroundColor: "#f8f8f8", borderRadius: "6px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "hsl(0,0%,12%)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, marginBottom: "8px" }}>
                {item.step}
              </div>
              <h4 style={{ fontSize: "16px", fontWeight: 700, color: "#111", margin: "0 0 4px" }}>{item.title}</h4>
              <p style={{ fontSize: "14px", fontWeight: 400, color: "#777", margin: 0 }}>{item.desc}</p>
              {i < 2 && (
                <ArrowRight style={{ position: "absolute", right: "-10px", top: "50%", transform: "translateY(-50%)", width: "16px", height: "16px", color: "#ccc", zIndex: 10 }} className="hidden sm:block" />
              )}
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 16px", marginBottom: "16px" }}>
          {["Multi-page ready", "Mobile optimized", "SEO-ready", "Hosting included"].map((b) => (
            <div key={b} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#444" }}>
              <Check style={{ width: "16px", height: "16px", color: "#16a34a", flexShrink: 0 }} />
              {b}
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", fontSize: "13px", color: "#999", marginBottom: "16px" }}>
          You've already seen exactly what you'll get — no risk.
        </p>

        {version === "a" ? (
          <div style={{ marginBottom: "16px" }}>
            <a href="STRIPE_499" style={{ display: "block", width: "100%", textAlign: "center", padding: "0 24px", height: "64px", lineHeight: "64px", backgroundColor: "hsl(0,0%,12%)", color: "#fff", fontWeight: 700, fontSize: "18px", textTransform: "uppercase", letterSpacing: "0.06em", borderRadius: "2px", textDecoration: "none", boxSizing: "border-box" }}>
              Activate with Revisions – $499
            </a>
            <p style={{ textAlign: "center", fontSize: "13px", color: "#999", margin: "8px 0" }}>
              Includes guided revisions, content updates, and final polish.
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
              <a href="STRIPE_299" style={{ fontSize: "15px", color: "#666", textDecoration: "underline" }}>
                Or launch as-is – $299
              </a>
            </div>
          </div>
        ) : (
          <div style={{ marginBottom: "16px" }}>
            <a href="STRIPE_799" style={{ display: "block", width: "100%", textAlign: "center", padding: "0 24px", height: "64px", lineHeight: "64px", backgroundColor: "hsl(0,0%,12%)", color: "#fff", fontWeight: 700, fontSize: "18px", textTransform: "uppercase", letterSpacing: "0.06em", borderRadius: "2px", textDecoration: "none", boxSizing: "border-box" }}>
              Activate Your Website – $799
            </a>
            <p style={{ textAlign: "center", fontSize: "13px", color: "#999", margin: "8px 0" }}>
              Includes guided revisions, content updates, and full optimization.
            </p>
          </div>
        )}

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "12px" }}>
          <button
            onClick={() => { if (version !== "a") window.location.href = PREVIEW_A_URL; }}
            disabled={version === "a"}
            style={{
              height: "48px", padding: "0 24px", fontSize: "16px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", borderRadius: "2px", border: "2px solid",
              cursor: version === "a" ? "default" : "pointer",
              backgroundColor: version === "a" ? "hsl(0,0%,12%)" : "#fff",
              color: version === "a" ? "#fff" : "#555",
              borderColor: version === "a" ? "hsl(0,0%,12%)" : "#ccc",
            }}
          >
            View Version A
          </button>
          <button
            onClick={() => { if (version !== "b") window.location.href = PREVIEW_B_URL; }}
            disabled={version === "b"}
            style={{
              height: "48px", padding: "0 24px", fontSize: "16px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", borderRadius: "2px", border: "2px solid",
              cursor: version === "b" ? "default" : "pointer",
              backgroundColor: version === "b" ? "hsl(0,0%,12%)" : "#fff",
              color: version === "b" ? "#fff" : "#555",
              borderColor: version === "b" ? "hsl(0,0%,12%)" : "#ccc",
            }}
          >
            View Version B
          </button>
        </div>

        <p style={{ textAlign: "center", fontSize: "10px", color: "#bbb" }}>
          Secure checkout powered by Stripe
        </p>
      </div>
    </div>
  );
};

export default PreviewPopup;