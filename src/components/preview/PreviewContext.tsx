import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { useLocation } from "react-router-dom";

type PreviewVersion = "a" | "b";

interface PreviewContextType {
  isPopupOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
  version: PreviewVersion;
  isHomepage: boolean;
}

const PreviewContext = createContext<PreviewContextType | null>(null);

export const usePreview = () => {
  const ctx = useContext(PreviewContext);
  if (!ctx) throw new Error("usePreview must be used within PreviewProvider");
  return ctx;
};

function detectVersion(): PreviewVersion {
  const hostname = window.location.hostname;
  if (hostname.includes("-preview-b")) return "b";
  return "a";
}

export const PreviewProvider = ({ children }: { children: ReactNode }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();
  const version = detectVersion();
  const isHomepage = location.pathname === "/";

  const openPopup = useCallback(() => {
    setIsPopupOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsPopupOpen(false);
  }, []);

  return (
    <PreviewContext.Provider value={{ isPopupOpen, openPopup, closePopup, version, isHomepage }}>
      {children}
    </PreviewContext.Provider>
  );
};
