import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type PreviewVersion = "a" | "b";

interface PreviewContextType {
  isPopupOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
  version: PreviewVersion;
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
  const version = detectVersion();

  const openPopup = useCallback(() => setIsPopupOpen(true), []);
  const closePopup = useCallback(() => setIsPopupOpen(false), []);

  return (
    <PreviewContext.Provider value={{ isPopupOpen, openPopup, closePopup, version }}>
      {children}
    </PreviewContext.Provider>
  );
};