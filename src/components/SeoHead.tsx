import React, { createContext, useContext, useEffect } from 'react';
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  toAbsoluteUrl,
} from '../seo';

export interface CollectedHead {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType: 'website' | 'article';
  ogImage: string;
  noindex?: boolean;
  preloadImage?: { href: string; type?: string };
  schemas: Record<string, unknown>[];
}

export interface HeadCollector {
  current: CollectedHead | null;
}

const HeadContext = createContext<HeadCollector | null>(null);

export const HeadProvider: React.FC<{
  collector?: HeadCollector;
  children: React.ReactNode;
}> = ({ collector, children }) => {
  return (
    <HeadContext.Provider value={collector ?? null}>
      {children}
    </HeadContext.Provider>
  );
};

export interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  noindex?: boolean;
  preloadImage?: { href: string; type?: string };
  schemas?: Record<string, unknown>[];
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string): void {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertCanonical(href: string): void {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  path,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
  preloadImage,
  schemas = [],
}) => {
  const collector = useContext(HeadContext);
  const canonicalUrl = toAbsoluteUrl(path);
  const absoluteOgImage = toAbsoluteUrl(ogImage);

  // During SSR, synchronously record the active route's head metadata
  if (collector) {
    collector.current = {
      title,
      description,
      canonicalUrl,
      ogType,
      ogImage: absoluteOgImage,
      noindex,
      preloadImage,
      schemas,
    };
  }

  const schemasKey = JSON.stringify(schemas);

  useEffect(() => {
    document.title = title;
    upsertMeta('name', 'description', description);
    upsertCanonical(canonicalUrl);

    if (noindex) {
      upsertMeta('name', 'robots', 'noindex, nofollow');
    } else {
      const existingRobots = document.head.querySelector('meta[name="robots"]');
      if (existingRobots) {
        existingRobots.remove();
      }
    }

    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:locale', 'en_IN');
    upsertMeta('property', 'og:type', ogType);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', absoluteOgImage);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', absoluteOgImage);

    // Replace route-specific JSON-LD scripts cleanly
    document.head
      .querySelectorAll('script[type="application/ld+json"][data-seo-ld="true"]')
      .forEach((node) => node.remove());

    for (const schema of schemas) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-ld', 'true');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, canonicalUrl, ogType, absoluteOgImage, noindex, schemasKey]);

  return null;
};

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtmlText(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function renderHeadTags(head: CollectedHead): string {
  const lines: string[] = [
    `<title>${escapeHtmlText(head.title)}</title>`,
    `<meta name="description" content="${escapeHtmlAttr(head.description)}" />`,
    `<link rel="canonical" href="${escapeHtmlAttr(head.canonicalUrl)}" />`,
  ];

  if (head.noindex) {
    lines.push(`<meta name="robots" content="noindex, nofollow" />`);
  }

  if (head.preloadImage) {
    const typeAttr = head.preloadImage.type
      ? ` type="${escapeHtmlAttr(head.preloadImage.type)}"`
      : '';
    lines.push(
      `<link rel="preload" as="image" href="${escapeHtmlAttr(head.preloadImage.href)}"${typeAttr} fetchpriority="high" />`
    );
  }

  lines.push(
    `<meta property="og:site_name" content="${escapeHtmlAttr(SITE_NAME)}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:type" content="${escapeHtmlAttr(head.ogType)}" />`,
    `<meta property="og:title" content="${escapeHtmlAttr(head.title)}" />`,
    `<meta property="og:description" content="${escapeHtmlAttr(head.description)}" />`,
    `<meta property="og:url" content="${escapeHtmlAttr(head.canonicalUrl)}" />`,
    `<meta property="og:image" content="${escapeHtmlAttr(head.ogImage)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtmlAttr(head.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtmlAttr(head.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtmlAttr(head.ogImage)}" />`
  );

  for (const schema of head.schemas) {
    const safeJson = JSON.stringify(schema).replace(/</g, '\\u003c');
    lines.push(
      `<script type="application/ld+json" data-seo-ld="true">${safeJson}</script>`
    );
  }

  return lines.join('\n    ');
}
