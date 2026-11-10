import React from 'react';
import { FOOTER_CONTENT } from '../content';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[rgba(245,243,239,0.14)] bg-[#08090B] py-[22px] pb-[30px] lg:py-[34px] px-5 sm:px-12 lg:px-[96px]">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11.5px] lg:text-[14px] text-[rgba(245,243,239,0.68)] leading-[1.8]">
        <div>{FOOTER_CONTENT.copyright}</div>
        <div>{FOOTER_CONTENT.subtext}</div>
      </div>
    </footer>
  );
};
