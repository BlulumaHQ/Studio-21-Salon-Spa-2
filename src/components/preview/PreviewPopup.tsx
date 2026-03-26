import { usePreview } from "./PreviewContext";
import { X, Check, ArrowRight } from "lucide-react";

const PreviewPopup = () => {
  const { isPopupOpen, closePopup, version } = usePreview();

  if (!isPopupOpen) return null;

  const hostname = window.location.hostname;
  const baseSlug = hostname
    .replace("-preview-a", "-preview-{v}")
    .replace("-preview-b", "-preview-{v}")
    .replace(".lovable.app", "");

  const getVersionUrl = (v: "a" | "b") => {
    const newHost = baseSlug.replace("{v}", v) + ".lovable.app";
    return `https://${newHost}${window.location.pathname}`;
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closePopup}
      />

      {/* Popup */}
      <div className="relative z-10 bg-white rounded-lg shadow-2xl w-[94vw] max-w-[720px] max-h-[92vh] overflow-y-auto p-6 sm:p-8 md:p-10">
        {/* Close button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-2">
          This Website Preview is Ready.
        </h2>
        <p className="text-gray-500 text-center text-sm sm:text-base mb-6">
          Activate your website anytime — everything is already built and ready to go.
        </p>

        {/* Sales pitch */}
        <div className="bg-gray-50 rounded-md p-4 sm:p-5 mb-6 text-sm text-gray-700 leading-relaxed">
          <p>
            You've already seen the result. This is a professionally built, conversion-focused website — not a template.
          </p>
          <p className="mt-2">
            Everything is ready. All that's left is activation.
          </p>
        </div>

        {/* 3-Step Process */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {[
            { step: "1", title: "Payment Confirmed", desc: "Secure checkout via Stripe" },
            { step: "2", title: "Submit Your Revisions", desc: "We'll send you a simple revision form" },
            { step: "3", title: "Launch Your Website", desc: "We finalize and deploy your site" },
          ].map((item, i) => (
            <div key={i} className="relative flex flex-col items-center text-center p-4 bg-gray-50 rounded-md">
              <div className="w-8 h-8 rounded-full bg-[hsl(0,0%,12%)] text-white flex items-center justify-center text-xs font-bold mb-2">
                {item.step}
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-xs text-gray-500">{item.desc}</p>
              {i < 2 && (
                <ArrowRight className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 z-10" />
              )}
            </div>
          ))}
        </div>

        {/* Bullet points */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-6">
          {["Multi-page ready", "Mobile optimized", "SEO-ready", "Hosting included"].map((b) => (
            <div key={b} className="flex items-center gap-2 text-sm text-gray-700">
              <Check className="w-4 h-4 text-green-600 shrink-0" />
              {b}
            </div>
          ))}
        </div>

        {/* CTAs */}
        {version === "a" ? (
          <div className="space-y-3 mb-5">
            <a
              href="STRIPE_499"
              className="block w-full text-center py-3.5 bg-[hsl(0,0%,12%)] text-white font-bold text-sm uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity"
            >
              Activate with Revisions – $499
            </a>
            <p className="text-center text-xs text-gray-500">
              Includes guided revisions, content updates, and final polish.
            </p>
            <div className="flex items-center justify-center gap-1.5">
              <a
                href="STRIPE_299"
                className="text-sm text-gray-600 underline hover:text-gray-900 transition-colors"
              >
                Or launch as-is – $299
              </a>
              <div className="relative group">
                <span className="cursor-help text-gray-400 text-xs border border-gray-300 rounded-full w-4 h-4 inline-flex items-center justify-center">?</span>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-gray-900 text-white text-xs rounded-md p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 pointer-events-none">
                  <p className="font-bold mb-1">Preview Access ($299):</p>
                  <p className="mb-2">You get the site exactly as shown. No revisions.</p>
                  <p className="font-bold mb-1">Launch Ready ($499):</p>
                  <p>Includes revisions and final polish.</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3 mb-5">
            <a
              href="STRIPE_799"
              className="block w-full text-center py-3.5 bg-[hsl(0,0%,12%)] text-white font-bold text-sm uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity"
            >
              Activate Your Website – $799
            </a>
            <p className="text-center text-xs text-gray-500">
              Includes guided revisions, content updates, and full optimization.
            </p>
          </div>
        )}

        {/* Risk line */}
        <p className="text-center text-xs text-gray-500 mb-5">
          You've already seen exactly what you'll get — no risk.
        </p>

        {/* A/B Switching */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <button
            onClick={() => {
              if (version !== "a") window.location.href = getVersionUrl("a");
            }}
            className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-sm border-2 transition-all ${
              version === "a"
                ? "bg-[hsl(0,0%,12%)] text-white border-[hsl(0,0%,12%)] cursor-default"
                : "bg-white text-gray-700 border-gray-300 hover:border-gray-500 cursor-pointer"
            }`}
            disabled={version === "a"}
          >
            View Version A
          </button>
          <button
            onClick={() => {
              if (version !== "b") window.location.href = getVersionUrl("b");
            }}
            className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-sm border-2 transition-all ${
              version === "b"
                ? "bg-[hsl(0,0%,12%)] text-white border-[hsl(0,0%,12%)] cursor-default"
                : "bg-white text-gray-700 border-gray-300 hover:border-gray-500 cursor-pointer"
            }`}
            disabled={version === "b"}
          >
            View Version B
          </button>
        </div>

        {/* Stripe note */}
        <p className="text-center text-[10px] text-gray-400">
          Secure checkout powered by Stripe
        </p>
      </div>
    </div>
  );
};

export default PreviewPopup;
