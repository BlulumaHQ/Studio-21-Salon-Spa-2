import { useEffect } from "react";
import { PreviewProvider, usePreview } from "./PreviewContext";
import PreviewTopBar from "./PreviewTopBar";
import PreviewStickyButton from "./PreviewStickyButton";
import PreviewPopup from "./PreviewPopup";

const InternalPageLock = () => {
  const { isHomepage, openPopup, isPopupOpen } = usePreview();

  useEffect(() => {
    if (!isHomepage) {
      openPopup();
    }
  }, [isHomepage, openPopup]);

  if (isHomepage) return null;

  return (
    <>
      {/* Blur overlay on main content only - injected via CSS */}
      <style>{`
        main.preview-blur > * {
          filter: blur(3px);
          pointer-events: ${isPopupOpen ? "none" : "auto"};
          transition: filter 0.3s ease;
        }
      `}</style>
    </>
  );
};

const PreviewSystemInner = ({ children }: { children: React.ReactNode }) => {
  const { isHomepage } = usePreview();

  return (
    <>
      <PreviewTopBar />
      <div style={{ paddingTop: "40px" }}>
        {children}
      </div>
      <PreviewStickyButton />
      <InternalPageLock />
      <PreviewPopup />
    </>
  );
};

const PreviewSystem = ({ children }: { children: React.ReactNode }) => {
  return (
    <PreviewProvider>
      <PreviewSystemInner>{children}</PreviewSystemInner>
    </PreviewProvider>
  );
};

export default PreviewSystem;
