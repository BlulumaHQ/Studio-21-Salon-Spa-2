import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { PreviewProvider, usePreview } from "./PreviewContext";
import PreviewTopBar from "./PreviewTopBar";
import PreviewStickyButton from "./PreviewStickyButton";
import PreviewPopup from "./PreviewPopup";

const InternalPageLock = () => {
  const { openPopup } = usePreview();
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (!isHomepage) {
      timerRef.current = setTimeout(() => {
        openPopup();
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [location.pathname, isHomepage, openPopup]);

  if (isHomepage) return null;

  return (
    <style>{`
      main.preview-blur > * {
        filter: blur(3px);
        pointer-events: none;
        transition: filter 0.3s ease;
      }
    `}</style>
  );
};

const PreviewSystemInner = ({ children }: { children: React.ReactNode }) => {
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

const PreviewSystem = ({ children }: { children: React.ReactNode }) => (
  <PreviewProvider>
    <PreviewSystemInner>{children}</PreviewSystemInner>
  </PreviewProvider>
);

export default PreviewSystem;
