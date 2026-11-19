import React from 'react';
import { Link } from 'react-router';
import { CONTACT_INFO, FOOTER_CONTENT } from '../content';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`;

  return (
    <footer className="w-full border-t border-[rgba(245,243,239,0.14)] bg-[#08090B] pt-12 lg:pt-16 pb-[30px] lg:pb-[34px] px-5 sm:px-12 lg:px-[96px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Multi-column navigation grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 lg:gap-12 pb-10 lg:pb-12 border-b border-[rgba(245,243,239,0.12)]">
          {/* Brand & Direct Contact */}
          <div>
            <Logo isMobile={false} to="/" className="mb-4" />
            <p className="text-[13.5px] lg:text-[14px] text-[rgba(245,243,239,0.68)] leading-[1.7] max-w-xs mb-5">
              Fast, reliable websites, online stores, and custom web apps for businesses across Bangalore, Karur, and Tamil Nadu.
            </p>
            <div className="space-y-1.5 text-[13px] lg:text-[13.5px] text-[rgba(245,243,239,0.72)]">
              <div>
                <span className="text-[rgba(245,243,239,0.48)] mr-1.5">WhatsApp:</span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFC900] transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div>
                <span className="text-[rgba(245,243,239,0.48)] mr-1.5">Email:</span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-[#FFC900] transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="text-[rgba(245,243,239,0.58)]">
                {CONTACT_INFO.location}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[12px] font-medium uppercase tracking-[2.5px] text-[#FFC900] mb-4">
              Quick links
            </h3>
            <ul className="space-y-2.5 text-[13.5px] lg:text-[14px] text-[rgba(245,243,239,0.72)]">
              <li>
                <Link to="/" className="hover:text-[#FFC900] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/works" className="hover:text-[#FFC900] transition-colors">
                  Works
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FFC900] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-[#FFC900] transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FFC900] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#FFC900] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FFC900] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[12px] font-medium uppercase tracking-[2.5px] text-[#FFC900] mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-[13.5px] lg:text-[14px] text-[rgba(245,243,239,0.72)]">
              <li>
                <Link to="/services/business-websites" className="hover:text-[#FFC900] transition-colors">
                  Business websites
                </Link>
              </li>
              <li>
                <Link to="/services/online-stores" className="hover:text-[#FFC900] transition-colors">
                  Online stores
                </Link>
              </li>
              <li>
                <Link to="/services/web-apps-and-dashboards" className="hover:text-[#FFC900] transition-colors">
                  Web apps &amp; dashboards
                </Link>
              </li>
              <li>
                <Link to="/services/care-and-support" className="hover:text-[#FFC900] transition-colors">
                  Care &amp; support
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations & Legal */}
          <div>
            <h3 className="text-[12px] font-medium uppercase tracking-[2.5px] text-[#FFC900] mb-4">
              Locations &amp; legal
            </h3>
            <ul className="space-y-2.5 text-[13.5px] lg:text-[14px] text-[rgba(245,243,239,0.72)]">
              <li>
                <Link to="/web-development-bangalore" className="hover:text-[#FFC900] transition-colors">
                  Web development Bangalore
                </Link>
              </li>
              <li>
                <Link to="/web-development-karur" className="hover:text-[#FFC900] transition-colors">
                  Web development Karur
                </Link>
              </li>
              <li className="pt-2 border-t border-[rgba(245,243,239,0.1)]">
                <Link to="/privacy-policy" className="hover:text-[#FFC900] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-[#FFC900] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Service-Area Bar (preserved) */}
        <div className="pt-6 lg:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11.5px] lg:text-[14px] text-[rgba(245,243,239,0.68)] leading-[1.8]">
          <div>{FOOTER_CONTENT.copyright}</div>
          <div>{FOOTER_CONTENT.subtext}</div>
        </div>
      </div>
    </footer>
  );
};
