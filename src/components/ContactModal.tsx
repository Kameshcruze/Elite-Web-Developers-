import React, { useState, useEffect, useRef } from 'react';
import { CONTACT_INFO, validateContactForm, buildWhatsAppContactUrl, ValidationErrors } from '../content';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || 'Business website',
    message: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstInputRef.current?.focus(), 100);
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
      setErrors({});
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const url = buildWhatsAppContactUrl(CONTACT_INFO.phone, formData);
    setWhatsappLink(url);

    // Open WhatsApp in new tab with the filled details
    window.open(url, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 bg-[#08090B]/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      {/* Backdrop click */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={modalRef}
        className="relative w-full max-w-xl bg-[#14151A] border border-[rgba(245,243,239,0.14)] rounded-[28px] p-6 sm:p-10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center text-[#F5F3EF] hover:text-[#FFC900] border border-[rgba(245,243,239,0.14)] hover:border-[#FFC900] transition-colors"
          aria-label="Close modal"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#FFC900] text-[#08090B] flex items-center justify-center mx-auto mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 className="text-[28px] font-semibold text-[#F5F3EF] tracking-[-1px] mb-3">
              Message sent to WhatsApp<span className="text-[#FFC900]">.</span>
            </h3>
            <p className="text-[15px] text-[rgba(245,243,239,0.68)] leading-[1.7] max-w-md mx-auto mb-6">
              Your inquiry has been formulated with all project details and opened in WhatsApp (+91 95852 62522). If it did not open automatically, click the button below.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {whatsappLink && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-[26px] py-[13px] bg-[#FFC900] text-[#08090B] font-medium text-[15px] rounded-full inline-flex items-center gap-[8px] hover:translate-y-[-2px] transition-transform"
                >
                  <span>Open in WhatsApp</span>
                  <span>↗</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="px-[24px] py-[13px] border border-[rgba(245,243,239,0.3)] text-[#F5F3EF] font-medium text-[14px] rounded-full hover:bg-[#F5F3EF]/10 transition-colors"
              >
                Back to site
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-[11px] uppercase tracking-[3px] text-[#FFC900] font-medium mb-2">
              START A PROJECT
            </div>
            <h2
              id="contact-modal-title"
              className="text-[28px] sm:text-[34px] font-semibold text-[#F5F3EF] tracking-[-1px] leading-[1.1] mb-2"
            >
              Let&apos;s build something great<span className="text-[#FFC900]">.</span>
            </h2>
            <p className="text-[14px] text-[rgba(245,243,239,0.68)] leading-[1.6] mb-6">
              Tell us about your business or project in Tamil Nadu. We typically respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[13px] font-medium text-[#F5F3EF] mb-1.5" htmlFor="contact-name">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  ref={firstInputRef}
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Anand Kumar"
                  className="w-full px-4 py-3 rounded-[12px] bg-[#1B1C21] text-[#F5F3EF] border border-[rgba(245,243,239,0.14)] focus:border-[#FFC900] text-[14px] placeholder-[rgba(245,243,239,0.3)] transition-colors"
                />
                {errors.name && <p className="text-[#FFC900] text-[12px] mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-[#F5F3EF] mb-1.5" htmlFor="contact-email">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-[12px] bg-[#1B1C21] text-[#F5F3EF] border border-[rgba(245,243,239,0.14)] focus:border-[#FFC900] text-[14px] placeholder-[rgba(245,243,239,0.3)] transition-colors"
                  />
                  {errors.email && <p className="text-[#FFC900] text-[12px] mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#F5F3EF] mb-1.5" htmlFor="contact-phone">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 95852 62522"
                    className="w-full px-4 py-3 rounded-[12px] bg-[#1B1C21] text-[#F5F3EF] border border-[rgba(245,243,239,0.14)] focus:border-[#FFC900] text-[14px] placeholder-[rgba(245,243,239,0.3)] transition-colors"
                  />
                  {errors.phone && <p className="text-[#FFC900] text-[12px] mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-[#F5F3EF] mb-1.5" htmlFor="contact-service">
                  Project Type
                </label>
                <select
                  id="contact-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-[12px] bg-[#1B1C21] text-[#F5F3EF] border border-[rgba(245,243,239,0.14)] focus:border-[#FFC900] text-[14px] transition-colors"
                >
                  <option value="Business website">Business Website</option>
                  <option value="Online store">Online Store (WooCommerce / WordPress)</option>
                  <option value="Web apps and dashboards">Custom Web App or Dashboard</option>
                  <option value="Care and support">Care & Speed Tuning</option>
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-[#F5F3EF] mb-1.5" htmlFor="contact-message">
                  Project Brief *
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you're looking to build, timeline, or any specific requirements..."
                  className="w-full px-4 py-3 rounded-[12px] bg-[#1B1C21] text-[#F5F3EF] border border-[rgba(245,243,239,0.14)] focus:border-[#FFC900] text-[14px] placeholder-[rgba(245,243,239,0.3)] transition-colors resize-none"
                />
                {errors.message && <p className="text-[#FFC900] text-[12px] mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-[14px] px-[26px] bg-[#FFC900] text-[#08090B] font-semibold text-[15px] rounded-full inline-flex items-center justify-center gap-[10px] hover:translate-y-[-2px] hover:shadow-[0_10px_25px_rgba(255,201,0,0.35)] transition-all disabled:opacity-50 cursor-pointer active:scale-[0.98] focus:outline-none focus-visible:outline-2 focus-visible:outline-[#FFC900] focus-visible:outline-offset-2"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.14C8.93 7.14 8.64 7.21 8.39 7.48C8.14 7.75 7.44 8.41 7.44 9.75C7.44 11.09 8.42 12.38 8.55 12.56C8.69 12.74 10.47 15.48 13.2 16.66C13.85 16.94 14.36 17.11 14.75 17.24C15.41 17.45 16.01 17.42 16.48 17.35C17.01 17.27 18.1 16.69 18.33 16.05C18.56 15.41 18.56 14.86 18.49 14.75C18.42 14.64 18.24 14.58 17.97 14.44C17.7 14.31 16.38 13.66 16.14 13.57C15.9 13.48 15.73 13.44 15.55 13.71C15.38 13.98 14.88 14.58 14.73 14.75C14.58 14.93 14.44 14.95 14.17 14.81C13.9 14.68 13.03 14.39 12 13.47C11.2 12.76 10.66 11.88 10.51 11.62C10.36 11.36 10.49 11.21 10.63 11.08C10.75 10.96 10.9 10.77 11.04 10.61C11.17 10.45 11.22 10.33 11.31 10.15C11.4 9.97 11.36 9.82 11.29 9.68C11.22 9.55 10.73 8.34 10.52 7.85C10.32 7.37 10.12 7.43 9.97 7.42C9.83 7.41 9.66 7.41 9.48 7.41C9.31 7.41 9.11 7.48 9.11 7.14Z" />
                  </svg>
                  <span>{isSubmitting ? 'Opening WhatsApp...' : 'Submit & Send on WhatsApp →'}</span>
                </button>
              </div>
            </form>

            <div className="mt-6 pt-4 border-t border-[rgba(245,243,239,0.14)] flex flex-wrap items-center justify-between text-[12px] text-[rgba(245,243,239,0.5)]">
              <span>Direct WhatsApp: {CONTACT_INFO.phone}</span>
              <span>Location: {CONTACT_INFO.location}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
