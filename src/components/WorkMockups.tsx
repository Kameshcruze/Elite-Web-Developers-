import React, { useState } from 'react';

/**
 * Bespoke CSS/SVG mockups for concepts without a public live URL.
 * Includes data-replace="screenshot" slots for screenshot drop-ins.
 */



export const VirukshaaMockup: React.FC = () => {
  return (
    <div
      data-replace="screenshot"
      data-project="virukshaa"
      className="relative w-full h-full bg-[#08090B] rounded-[14px] lg:rounded-[18px] p-3 lg:p-5 overflow-hidden flex border border-[#FFC900]/50 shadow-inner select-none"
    >
      {/* Left mini sidebar (90px wide) */}
      <div className="w-[70px] lg:w-[90px] flex-shrink-0 border-r border-[rgba(245,243,239,0.14)] pr-3 lg:pr-4 flex flex-col gap-2.5 pt-1">
        <div className="w-full h-[14px] lg:h-[18px] rounded-[4px] bg-[#FFC900]" />
        <div className="w-[80%] h-[10px] lg:h-[12px] rounded-[3px] bg-[#F5F3EF]/30" />
        <div className="w-[90%] h-[10px] lg:h-[12px] rounded-[3px] bg-[#F5F3EF]/30" />
        <div className="w-[70%] h-[10px] lg:h-[12px] rounded-[3px] bg-[#F5F3EF]/30" />
        <div className="mt-auto w-full pt-4 border-t border-[rgba(245,243,239,0.1)] flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-[#FFC900]" />
          <div className="w-8 h-2 rounded bg-[#F5F3EF]/40" />
        </div>
      </div>

      {/* Main area */}
      <div className="flex-1 pl-3 lg:pl-5 flex flex-col justify-between">
        {/* Yellow card (110px) with "Workers dashboard" */}
        <div className="rounded-[12px] bg-[#FFC900] text-[#08090B] p-3 lg:p-4 min-h-[85px] lg:min-h-[110px] flex flex-col justify-between mb-3 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-[15px] lg:text-[18px] font-semibold tracking-[-0.5px]">
              Workers dashboard
            </span>
            <span className="text-[10px] lg:text-[11px] font-semibold bg-[#08090B] text-[#FFC900] px-2 py-0.5 rounded-full">
              LIVE STAFF
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] lg:text-[12px] font-medium text-[#08090B]/80">
            <span>● 14 Active shifts</span>
            <span>● Stage crew roster</span>
          </div>
        </div>

        {/* Three tiles: #1B1C21, #F5F3EF, #1B1C21 (130px tall) */}
        <div className="grid grid-cols-3 gap-2 lg:gap-3 h-[75px] sm:h-[100px] lg:h-[130px]">
          <div className="rounded-[10px] lg:rounded-[12px] bg-[#1B1C21] border border-[rgba(245,243,239,0.08)] p-2.5 flex flex-col justify-between">
            <div className="w-10 h-2 bg-[#F5F3EF]/30 rounded" />
            <div className="w-6 h-6 rounded bg-[#FFC900]/20 flex items-center justify-center text-[#FFC900] text-[10px] font-bold">
              42
            </div>
          </div>
          <div className="rounded-[10px] lg:rounded-[12px] bg-[#F5F3EF] p-2.5 flex flex-col justify-between text-[#08090B]">
            <div className="w-12 h-2 bg-[#08090B]/30 rounded" />
            <div className="text-[13px] font-semibold text-[#08090B]">Venues</div>
          </div>
          <div className="rounded-[10px] lg:rounded-[12px] bg-[#1B1C21] border border-[rgba(245,243,239,0.08)] p-2.5 flex flex-col justify-between">
            <div className="w-8 h-2 bg-[#F5F3EF]/30 rounded" />
            <div className="w-6 h-6 rounded bg-[#F5F3EF]/20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const MurthiMachinMockup: React.FC = () => {
  return (
    <div
      data-replace="screenshot"
      data-project="murthi-machin"
      className="relative w-full h-full bg-[#111111] rounded-[14px] lg:rounded-[18px] p-5 lg:p-6 overflow-hidden flex flex-col justify-between border border-[rgba(241,225,148,0.25)] select-none"
    >
      <div>
        {/* Brand label in Golden Sand #F1E194 */}
        <div className="text-[10px] lg:text-[12px] uppercase tracking-[3px] text-[#F1E194] font-medium mb-3">
          MURTHI MACHIN WORKS
        </div>

        {/* Headline: "Precision machining, built to last." (36px/600, warm white #FAF8F2) */}
        <h4 className="text-[20px] sm:text-[26px] lg:text-[32px] font-semibold text-[#FAF8F2] leading-[1.15] tracking-[-1px] max-w-sm mb-4">
          Precision machining, built to last<span className="text-[#F1E194]">.</span>
        </h4>

        {/* Two square-cornered buttons: "Get a quote" in sand, "Our machines" in burgundy */}
        <div className="flex items-center gap-3">
          <div className="bg-[#F1E194] text-[#111111] font-semibold text-[11px] lg:text-[13px] px-3.5 py-2">
            Get a quote
          </div>
          <div className="bg-[#5B0E14] text-[#FAF8F2] font-semibold text-[11px] lg:text-[13px] px-3.5 py-2 border border-[#F1E194]/20">
            Our machines
          </div>
        </div>
      </div>

      {/* Decorative concentric circles and CNC machine silhouette at bottom right */}
      <div className="relative flex items-end justify-between mt-4">
        {/* Machine silhouette SVG */}
        <div className="opacity-80">
          <svg width="74" height="40" viewBox="0 0 100 50" fill="none">
            <path d="M5 45H95V35H75L65 15H35L25 35H5V45Z" stroke="#F1E194" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="50" cy="30" r="12" stroke="#5B0E14" strokeWidth="4" />
            <circle cx="50" cy="30" r="4" fill="#F1E194" />
          </svg>
        </div>

        {/* Concentric circles: sand outline ring at 50% opacity and solid burgundy circle */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          <div className="absolute w-24 h-24 rounded-full border border-[#F1E194]/50" />
          <div className="absolute w-16 h-16 rounded-full border border-[#F1E194]/30" />
          <div className="w-12 h-12 rounded-full bg-[#5B0E14] shadow-lg flex items-center justify-center text-[#F1E194] text-[10px] font-bold">
            CNC
          </div>
        </div>
      </div>
    </div>
  );
};

export const VoiceOfLoguMockup: React.FC = () => {
  return (
    <div
      data-replace="screenshot"
      data-project="voice-of-logu"
      className="relative w-full h-full bg-[#F5F3EF] text-[#08090B] rounded-[14px] lg:rounded-[18px] p-5 lg:p-6 overflow-hidden flex flex-col justify-between border border-[rgba(8,9,11,0.1)] select-none"
    >
      {/* Top profile: 54px black circle avatar with text */}
      <div className="flex items-center gap-3.5">
        <div className="w-[46px] h-[46px] lg:w-[54px] lg:h-[54px] rounded-full bg-[#08090B] flex-shrink-0 flex items-center justify-center text-[#FFC900] font-semibold text-[17px] shadow-sm">
          VL
        </div>
        <div>
          <h4 className="text-[17px] lg:text-[20px] font-semibold leading-tight text-[#08090B]">
            Voice of Logu
          </h4>
          <p className="text-[11px] lg:text-[12px] text-[#08090B]/60 mt-0.5">
            Singer · Content creator · Erode
          </p>
        </div>
      </div>

      {/* Two tiles (yellow and black, 120px tall) */}
      <div className="grid grid-cols-2 gap-3 my-3">
        <div className="h-[90px] lg:h-[120px] rounded-[12px] bg-[#FFC900] p-3 flex flex-col justify-between shadow-sm">
          <div className="flex items-center gap-1.5 text-[#08090B]">
            <span className="w-2 h-2 rounded-full bg-[#08090B]" />
            <span className="text-[10px] font-semibold tracking-wider uppercase">LATEST TRACK</span>
          </div>
          <div className="text-[13px] lg:text-[14px] font-semibold text-[#08090B]">
            Tamil Acoustic Soul
          </div>
        </div>

        <div className="h-[90px] lg:h-[120px] rounded-[12px] bg-[#08090B] text-[#F5F3EF] p-3 flex flex-col justify-between shadow-sm">
          <div className="flex items-center gap-1.5 text-[#FFC900]">
            <span className="w-2 h-2 rounded-full bg-[#FFC900]" />
            <span className="text-[10px] font-semibold tracking-wider uppercase">CONNECT</span>
          </div>
          <div className="text-[12px] lg:text-[13px] text-[#F5F3EF]/90">
            Booking &amp; Collaborations
          </div>
        </div>
      </div>

      {/* Two grey text bars */}
      <div className="flex flex-col gap-1.5 pt-1">
        <div className="w-full h-[7px] lg:h-[9px] rounded-full bg-[#08090B]/15" />
        <div className="w-[60%] h-[7px] lg:h-[9px] rounded-full bg-[#08090B]/10" />
      </div>
    </div>
  );
};

export const LeadHuntMockup: React.FC = () => {
  return (
    <div
      data-replace="screenshot"
      data-project="leadhunt"
      className="relative w-full h-full bg-[#14151A] rounded-[14px] lg:rounded-[18px] p-5 lg:p-6 overflow-hidden flex flex-col justify-between border border-[#FFC900]/40 select-none"
    >
      {/* Header: "Lead" in white + "Hunt" in yellow (22px/600) + small yellow pill button "Find leads" */}
      <div className="flex items-center justify-between pb-3 border-b border-[rgba(245,243,239,0.12)]">
        <div className="text-[20px] lg:text-[22px] font-semibold">
          <span className="text-white">Lead</span>
          <span className="text-[#FFC900]">Hunt</span>
        </div>
        <div className="bg-[#FFC900] text-[#08090B] font-medium text-[11px] lg:text-[12px] px-3.5 py-1.5 rounded-full shadow-sm">
          Find leads
        </div>
      </div>

      {/* Three list rows (bg #1B1C21, radius 12px, 13px text) */}
      <div className="flex flex-col gap-2.5 my-2">
        <div className="bg-[#1B1C21] rounded-[12px] p-3 flex items-center justify-between text-[12px] lg:text-[13px] border border-[rgba(245,243,239,0.06)]">
          <div className="text-[#F5F3EF]/90">Event management · Tamil Nadu</div>
          <div className="text-[#FFC900] font-medium text-[11px] lg:text-[12px] bg-[#FFC900]/10 px-2 py-0.5 rounded-full border border-[#FFC900]/30">
            No website
          </div>
        </div>

        <div className="bg-[#1B1C21] rounded-[12px] p-3 flex items-center justify-between text-[12px] lg:text-[13px] border border-[rgba(245,243,239,0.06)]">
          <div className="text-[#F5F3EF]/90">Local business · Coimbatore</div>
          <div className="text-[#FFC900] font-medium text-[11px] lg:text-[12px] bg-[#FFC900]/10 px-2 py-0.5 rounded-full border border-[#FFC900]/30">
            No website
          </div>
        </div>

        <div className="bg-[#1B1C21] rounded-[12px] p-3 flex items-center justify-between text-[12px] lg:text-[13px] border border-[rgba(245,243,239,0.06)]">
          <div className="text-[#F5F3EF]/90">Instagram handle found</div>
          <div className="text-[#FFC900] font-medium text-[11px] lg:text-[12px] underline cursor-pointer">
            Contact
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-[rgba(245,243,239,0.4)]">
        <span>Verified business directory</span>
        <span>Coimbatore Radar</span>
      </div>
    </div>
  );
};

export const ProposalMockup: React.FC = () => {
  const [answered, setAnswered] = useState<'yes' | 'maybe' | null>(null);

  return (
    <div
      data-replace="screenshot"
      data-project="proposal"
      className="relative w-full h-full bg-[#08090B] rounded-[14px] lg:rounded-[18px] p-5 lg:p-6 overflow-hidden flex flex-col items-center justify-center border border-[rgba(245,243,239,0.2)] select-none text-center"
    >
      {/* 90px yellow circle */}
      <div className="w-[74px] h-[74px] lg:w-[90px] lg:h-[90px] rounded-full bg-[#FFC900] flex items-center justify-center text-[#08090B] font-bold text-[28px] mb-3 shadow-[0_0_30px_rgba(255,201,0,0.3)] animate-pulse">
        ♥
      </div>

      {/* "Will you?" (34px/600, yellow question mark) */}
      <h4 className="text-[26px] lg:text-[34px] font-semibold text-[#F5F3EF] tracking-[-1px] mb-4">
        Will you<span className="text-[#FFC900]">?</span>
      </h4>

      {/* Two pills "Yes" (yellow) and "Maybe" (outlined) */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setAnswered('yes')}
          className={`px-5 py-2 rounded-full font-medium text-[13px] lg:text-[14px] transition-transform ${
            answered === 'yes'
              ? 'bg-[#FFC900] text-[#08090B] scale-110 shadow-lg'
              : 'bg-[#FFC900] text-[#08090B] hover:scale-105'
          }`}
        >
          Yes
        </button>
        <button
          onClick={() => setAnswered('maybe')}
          className={`px-5 py-2 rounded-full font-medium text-[13px] lg:text-[14px] border border-[rgba(245,243,239,0.4)] text-[#F5F3EF] transition-transform ${
            answered === 'maybe' ? 'bg-white/10' : 'hover:border-white'
          }`}
        >
          Maybe
        </button>
      </div>

      {answered && (
        <p className="text-[12px] text-[#FFC900] mt-3 animate-fadeIn">
          {answered === 'yes' ? 'She said Yes! 🎉' : 'Take your time ✨'}
        </p>
      )}
    </div>
  );
};
