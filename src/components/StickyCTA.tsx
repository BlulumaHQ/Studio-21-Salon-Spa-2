import { Phone } from "lucide-react";

const StickyCTA = () => {
  return (
    <>
      {/* Desktop - Fixed right side */}
      <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <a
          href="tel:847-647-0002"
          className="btn-sticky flex flex-col items-center gap-1.5 px-3 py-5 rounded-l-md rounded-r-none shadow-2xl"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] tracking-widest [writing-mode:vertical-lr] rotate-180">
            CALL NOW
          </span>
        </a>
      </div>

      {/* Mobile - Fixed bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-cta-sticky shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <a
          href="tel:847-647-0002"
          className="flex items-center justify-center gap-2 py-3.5 text-cta-sticky-foreground font-heading font-bold text-sm uppercase tracking-widest"
        >
          <Phone className="w-4 h-4" />
          Call Now — 847-647-0002
        </a>
      </div>
    </>
  );
};

export default StickyCTA;
