import React from 'react';
import ewdLogo from '../assets/images/ewd-logo.png';

interface LogoProps {
  className?: string;
  isMobile?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  isMobile = false,
  href = '#/',
  onClick,
}) => {
  return (
    <a 
      href={href}
      onClick={onClick}
      className={`inline-flex items-center focus:outline-none transition-opacity hover:opacity-95 ${className}`}
      aria-label="Elite Web Developers - Home"
    >
      <img
        src={ewdLogo}
        alt="Elite Web Developers"
        className={`object-contain block ${
          isMobile ? 'h-[34px] sm:h-[38px] w-auto' : 'h-[44px] lg:h-[50px] w-auto'
        }`}
      />
    </a>
  );
};
