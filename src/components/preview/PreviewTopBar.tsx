import { usePreview } from "./PreviewContext";

const PreviewTopBar = () => {
  const { openPopup } = usePreview();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-center px-4"
      style={{
        height: "40px",
        backgroundColor: "hsl(0,0%,12%)",
        color: "#fff",
      }}
    >
      <span style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.03em" }}>
        This preview is valid for 72 hours
      </span>
      <button
        onClick={openPopup}
        style={{
          position: "absolute",
          right: "16px",
          backgroundColor: "hsl(40,58%,71%)",
          color: "hsl(0,0%,12%)",
          fontSize: "11px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          padding: "6px 16px",
          borderRadius: "2px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Activate Now
      </button>
    </div>
  );
};

export default PreviewTopBar;
