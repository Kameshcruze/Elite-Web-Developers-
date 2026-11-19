import React from 'react';
import {
  PAGE_SEO,
  buildOrganizationSchema,
  buildWebSiteSchema,
} from '../seo';
import { SeoHead } from '../components/SeoHead';
import { Hero } from '../components/Hero';
import { CapabilityStrip } from '../components/CapabilityStrip';
import { Work } from '../components/Work';
import { WhatWeBuild } from '../components/WhatWeBuild';
import { HowWeWork } from '../components/HowWeWork';
import { Toolkit } from '../components/Toolkit';
import { ContactCTA } from '../components/ContactCTA';
import { Footer } from '../components/Footer';

interface HomePageProps {
  onOpenContact: (service?: string) => void;
  onOpenIntroVideo: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenContact,
  onOpenIntroVideo,
}) => {
  const seo = PAGE_SEO['/'];

  return (
    <>
      <SeoHead
        title={seo.title}
        description={seo.description}
        path="/"
        preloadImage={{ href: '/hero-circle.webp', type: 'image/webp' }}
        schemas={[buildOrganizationSchema(), buildWebSiteSchema()]}
      />

      {/* Hero Section with Live Screenshot Carousel and Cutout */}
      <Hero onOpenIntroVideo={onOpenIntroVideo} />

      {/* Infinite Capability Strip Marquee */}
      <CapabilityStrip />

      {/* Selected Work Section (Home shows 3 featured works) */}
      <Work />

      {/* What We Build (Full-bleed light section, id="services") */}
      <WhatWeBuild onSelectService={(service) => onOpenContact(service)} />

      {/* How We Work (Process steps, id="process") */}
      <HowWeWork />

      {/* Our Toolkit (Tech stack chips, id="stack") */}
      <Toolkit />

      {/* Contact CTA Block (id="contact") */}
      <ContactCTA onOpenContactModal={() => onOpenContact()} />

      {/* Footer */}
      <Footer />
    </>
  );
};
