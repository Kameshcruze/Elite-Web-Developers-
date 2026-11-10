import React, { useEffect, useRef } from 'react';

interface IntroVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const IntroVideoModal: React.FC<IntroVideoModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 bg-[#08090B]/90 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="intro-modal-title"
    >
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-[#14151A] border border-[rgba(245,243,239,0.14)] rounded-[28px] p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-[#F5F3EF] hover:text-[#FFC900] border border-[rgba(245,243,239,0.14)] hover:border-[#FFC900] transition-colors"
          aria-label="Close intro video"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Video simulation preview frame */}
        <div className="rounded-[18px] overflow-hidden bg-[#08090B] border border-[rgba(255,255,255,0.12)] p-6 mb-6">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[rgba(245,243,239,0.14)]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFC900]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#F5F3EF]/35" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#F5F3EF]/35" />
            <span className="text-[12px] text-[rgba(245,243,239,0.5)] font-mono ml-2">
              intro_reel_coimbatore.mp4
            </span>
          </div>

          <div className="relative aspect-video rounded-[14px] bg-[#1B1C21] flex flex-col items-center justify-center text-center p-6 border border-[rgba(245,243,239,0.08)]">
            <div className="w-16 h-16 rounded-full bg-[#FFC900] text-[#08090B] flex items-center justify-center mb-4 pl-1 shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
            <h4 className="text-[20px] font-semibold text-[#F5F3EF] mb-2 tracking-[-0.5px]">
              Studio Intro &amp; Craft Overview
            </h4>
            <p className="text-[14px] text-[rgba(245,243,239,0.68)] max-w-sm">
              We design and build fast, reliable websites, WooCommerce stores, and custom dashboards for businesses across Tamil Nadu.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 id="intro-modal-title" className="text-[18px] font-semibold text-[#F5F3EF] tracking-[-0.5px]">
              Elite Web Developers · Bangalore &amp; Karur
            </h3>
            <p className="text-[13px] text-[rgba(245,243,239,0.68)]">
              Local expertise, clean engineering, zero fluff.
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full sm:w-auto px-[26px] py-[12px] bg-[#FFC900] text-[#08090B] font-medium text-[14px] rounded-full inline-flex items-center justify-center gap-[8px] hover:translate-y-[-2px] transition-transform"
          >
            Start your project →
          </button>
        </div>
      </div>
    </div>
  );
};
