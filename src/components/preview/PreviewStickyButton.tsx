import { usePreview } from "./PreviewContext";

const PreviewStickyButton = () => {
  const { openPopup } = usePreview();

  return (
    <button
      onClick={openPopup}
      className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-[90] flex-col items-center gap-1.5 px-3 py-5 rounded-l-md rounded-r-none shadow-2xl bg-[hsl(0,0%,12%)] text-white hover:opacity-90 transition-opacity cursor-pointer"
      style={{
        width: "44px",
        borderRadius: "6px 0 0 6px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      }}
    >
      <span
        className="text-[10px] font-bold tracking-widest uppercase"
        style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
      >
        Activate Now
      </span>
    </button>
  );
};

export default PreviewStickyButton;
