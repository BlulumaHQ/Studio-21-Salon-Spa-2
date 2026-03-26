import { usePreview } from "./PreviewContext";

const PreviewStickyButton = () => {
  const { openPopup } = usePreview();

  return (
    <button
      onClick={openPopup}
      className="hidden lg:flex"
      style={{
        position: "fixed",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 90,
        width: "56px",
        height: "180px",
        backgroundColor: "hsl(0,0%,12%)",
        color: "#fff",
        border: "none",
        borderRadius: "6px 0 0 6px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px 0",
      }}
    >
      <span
        style={{
          writingMode: "vertical-lr",
          transform: "rotate(180deg)",
          fontSize: "10px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
        }}
      >
        Activate Now
      </span>
    </button>
  );
};

export default PreviewStickyButton;
