"use client";

import { useEffect, useState } from "react";

const ForceExternalBrowser: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ua = navigator.userAgent.toLowerCase();

    const inAppBrowser =
      ua.includes("linkedin") ||
      ua.includes("fbav") ||
      ua.includes("instagram") ||
      ua.includes("indeed");

    if (inAppBrowser) {
      setShowBanner(true);
      setCurrentUrl(window.location.href);
    }
  }, []);

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/90 backdrop-blur-md border border-gray-300 shadow-lg rounded-2xl p-4 z-50 flex flex-col items-center">
      <div className="flex items-start justify-between w-full">
        <p className="text-gray-800 font-medium text-center flex-1 text-sm sm:text-base">
          ⚠️ For full functionality (file uploads & preview), please open this
          page in your browser.
        </p>
        <button
          onClick={() => setShowBanner(false)}
          className="text-gray-500 hover:text-gray-800 ml-3 font-bold"
          aria-label="Dismiss"
        >
          ×
        </button>
      </div>
      <p className="mt-3 text-gray-700 text-sm break-all text-center">
        {currentUrl}
      </p>
      <p className="mt-2 text-sm text-gray-600">
        Copy the link and open it in your device browser.
      </p>
    </div>
  );
};

export default ForceExternalBrowser;
