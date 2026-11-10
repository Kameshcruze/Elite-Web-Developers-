import React, { useState, useEffect, useRef } from 'react';
import { CONTACT_INFO, validateContactForm, ValidationErrors } from '../content';

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

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
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
              Message received<span className="text-[#FFC900]">.</span>
            </h3>
            <p className="text-[15px] text-[rgba(245,243,239,0.68)] leading-[1.7] max-w-md mx-auto mb-8">
              Thank you for reaching out. We will review your project details and get in touch with you shortly.
            </p>
            <button
              onClick={onClose}
              className="px-[26px] py-[14px] bg-[#FFC900] text-[#08090B] font-medium text-[15px] rounded-full inline-flex items-center gap-[10px] hover:translate-y-[-2px] transition-transform"
            >
              Back to site →
            </button>
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
                  className="w-full py-[14px] px-[26px] bg-[#FFC900] text-[#08090B] font-medium text-[15px] rounded-full inline-flex items-center justify-center gap-[10px] hover:translate-y-[-2px] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending inquiry...' : 'Submit project inquiry →'}
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
