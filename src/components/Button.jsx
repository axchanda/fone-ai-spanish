/* ================= CTA BUTTON ================= */
export default function CTAButton({ text = "Claim My AI Voice Launch Demo", onClick }) {
  const base = {
  fontFamily: "Poppins,",
  fontSize: "18px",
  fontWeight: 700,
  color: "#ffffff",
  letterSpacing: "0.2px",
  padding: "16px 44px",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  whiteSpace: "nowrap",
  background: "linear-gradient(180deg, #3B8DFF 0%, #1E73FF 100%)",
  boxShadow:
    "0 0 22px rgba(42,133,255,0.75), 0 0 48px rgba(42,133,255,0.45), inset 0 1px 0 rgba(255,255,255,0.25)",
  transition: "transform 0.15s ease, box-shadow 0.2s ease",
};
  const glowHover =
    "0 0 30px rgba(42,133,255,0.95), 0 0 64px rgba(42,133,255,0.55), inset 0 1px 0 rgba(255,255,255,0.3)";

  return (
    <button
      onClick={onClick}
      style={base}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-1px)";
        e.currentTarget.style.boxShadow = glowHover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = base.boxShadow;
      }}
    >
      {text}
    </button>
  );
}

