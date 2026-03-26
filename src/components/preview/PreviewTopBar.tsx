import { usePreview } from "./PreviewContext";

const PreviewTopBar = () => {
  const { openPopup } = usePreview();

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-[hsl(0,0%,12%)] text-white h-10 flex items-center justify-center px-4">
      <span className="text-xs sm:text-sm tracking-wide font-medium">
        This preview is valid for 72 hours
      </span>
      <button
        onClick={openPopup}
        className="absolute right-4 bg-[hsl(40,58%,71%)] text-[hsl(0,0%,12%)] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-sm hover:opacity-90 transition-opacity"
      >
        Activate Now
      </button>
    </div>
  );
};

export default PreviewTopBar;
