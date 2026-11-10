/**
 * Elite Web Developers - Single Source of Truth for Works
 * NOTE: The owner can freely edit the categories, descriptions, titles, and bullets below.
 */

export interface WorkProject {
  slug: string;
  title: string;
  url: string;
  /* OWNER NOTE: Edit category name here (e.g. E-commerce, Business, Food and Cafes, Events and Weddings) */
  category: string;
  tags: string[];
  /* OWNER NOTE: Edit project description copy here */
  description: string;
  bullets?: string[];
  featured: boolean;
  defaultTab: 'live' | 'screenshot';
}

export const ALL_WORKS: WorkProject[] = [
  {
    slug: 'bunt-india',
    title: 'BUNT India',
    url: 'https://buntindia.com',
    /* Category editable by owner */
    category: 'E-commerce',
    tags: ['Shopify', 'E-commerce', 'Product pages'],
    /* Description editable by owner */
    description:
      'An online store for a premium pet furniture brand, with a clean product catalogue, brand story pages and a modern, minimal look.',
    bullets: [
      'Product showcase with quick view and add to cart',
      'Brand story and about pages',
      'Free shipping and first-order offer messaging',
      'Separate desktop and mobile hero banners',
    ],
    featured: true,
    defaultTab: 'screenshot',
  },
  {
    slug: 'the-fat-cookie-chef',
    title: 'The Fat Cookie Chef',
    url: 'https://thefatcookiechef.com',
    /* Category editable by owner */
    category: 'E-commerce',
    tags: ['Shopify', 'E-commerce', 'Bundle builder'],
    /* Description editable by owner */
    description:
      'A freshly baked cookie store with best sellers, a full cookie collection and a build-your-own-box flow.',
    bullets: [
      'Best sellers and full cookie collection',
      'Build-your-box bundle flow with a bundle discount',
      'Brand story, FAQ and policy pages',
      'Cart drawer and search',
    ],
    featured: true,
    defaultTab: 'screenshot',
  },
  {
    slug: 'virukshaa-events',
    title: 'Virukshaa Events',
    url: 'https://virukshaaevents.in',
    /* Category editable by owner */
    category: 'Events and Weddings',
    tags: ['Portfolio site', 'Dashboard', 'Access control'],
    /* Description editable by owner */
    description:
      'A portfolio website for an event company, extended with a private workers dashboard for managing their team.',
    bullets: [
      'Portfolio site showcasing past events',
      'Workers dashboard integrated into the site',
      'Access control for staff-only pages',
    ],
    featured: true,
    defaultTab: 'live',
  },
  {
    slug: 'sparrowlook',
    title: 'SPARROWLOOK',
    url: 'https://sparrowlook.com',
    /* Category editable by owner */
    category: 'E-commerce',
    tags: ['WordPress', 'WooCommerce', 'Elementor'],
    /* Description editable by owner */
    description:
      'A WooCommerce store for an oversized t-shirt brand in Chennai, with bundle pricing and a custom size chart.',
    featured: false,
    defaultTab: 'live',
  },
  {
    slug: 'kichun-studio',
    title: 'Kichun Studio',
    url: 'https://kichunstudio.com',
    /* Category editable by owner */
    category: 'Business',
    tags: ['Business website'],
    /* Description editable by owner */
    description: 'A custom-built website for Kichun Studio.',
    featured: false,
    defaultTab: 'live',
  },
  {
    slug: 'bloom-cafes',
    title: 'Bloom Cafes',
    url: 'https://bloomcafes.com',
    /* Category editable by owner */
    category: 'Food and Cafes',
    tags: ['Cafe website'],
    /* Description editable by owner */
    description: 'A custom-built website for Bloom Cafes.',
    featured: false,
    defaultTab: 'live',
  },
  {
    slug: 'ama-legal-solutions',
    title: 'AMA Legal Solutions',
    url: 'https://www.amalegalsolutions.com',
    /* Category editable by owner */
    category: 'Business',
    tags: ['Business website'],
    /* Description editable by owner */
    description: 'A custom-built website for AMA Legal Solutions.',
    featured: false,
    defaultTab: 'live',
  },
  {
    slug: 'foire',
    title: 'Foire',
    url: 'https://foire.in',
    /* Category editable by owner */
    category: 'Business',
    tags: ['Business website'],
    /* Description editable by owner */
    description: 'A custom-built website for Foire.',
    featured: false,
    defaultTab: 'live',
  },
  {
    slug: 'delhi-house-cafe',
    title: 'Delhi House Cafe',
    url: 'https://www.delhihousecafe.com',
    /* Category editable by owner */
    category: 'Food and Cafes',
    tags: ['Cafe website'],
    /* Description editable by owner */
    description: 'A custom-built website for Delhi House Cafe.',
    featured: false,
    defaultTab: 'live',
  },
  {
    slug: 'vivaah-connect',
    title: 'Vivaah Connect',
    url: 'https://www.vivaahaconnect.com',
    /* Category editable by owner */
    category: 'Events and Weddings',
    tags: ['Website'],
    /* Description editable by owner */
    description: 'A custom-built website for Vivaah Connect.',
    featured: false,
    defaultTab: 'live',
  },
  {
    slug: 'cat-zone',
    title: 'Cat Zone',
    url: 'https://www.catzone.in',
    /* Category editable by owner */
    category: 'E-commerce',
    tags: ['Website'],
    /* Description editable by owner */
    description: 'A custom-built website for Cat Zone.',
    featured: false,
    defaultTab: 'live',
  },
];

export const FEATURED_WORKS = ALL_WORKS.filter((w) => w.featured);

export const WORK_CATEGORIES = [
  'All',
  'E-commerce',
  'Food and Cafes',
  'Business',
  'Events and Weddings',
] as const;
