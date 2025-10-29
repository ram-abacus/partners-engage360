import React, { useState } from 'react';
import { X, Users } from 'lucide-react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(true);
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  });

  if (!isOpen) return null;

  const handleAcceptAll = () => {
    setPreferences({ analytics: true, marketing: true });
    setIsOpen(false);
  };

  const handleRejectAll = () => {
    setPreferences({ analytics: false, marketing: false });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 shadow-2xl">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: Message */}
          <div className="flex items-center gap-3 flex-1">
            <Users size={22} className="text-blue-100 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-white text-sm font-semibold">We use cookies to optimize your partner experience.</p>
                <Link href="privacy-policy" className="underline hover:text-white text-blue-100 text-xs">Privacy Policy</Link>
                {' • '}
                <Link href="cookies-policy" className="underline hover:text-white text-blue-100 text-xs">Cookie Policy</Link>
            </div>
          </div>

          {/* Right: Controls */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleRejectAll}
              className="px-4 py-2 text-xs font-semibold text-blue-100 hover:text-white border border-blue-300 rounded-lg hover:bg-blue-700 transition-all"
            >
              Decline
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-xs font-semibold text-white bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-all"
            >
              Accept
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-blue-100 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}