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
}

export const ALL_WORKS: WorkProject[] = [
  {
    slug: 'bunt-india',
    title: 'BUNT India',
    url: 'https://buntindia.com',
    category: 'E-commerce',
    tags: ['Shopify', 'E-commerce', 'Product pages'],
    description:
      'An online store for a premium pet furniture brand, with a clean product catalogue, brand story pages and a modern, minimal look.',
    bullets: [
      'Product showcase with quick view and add to cart',
      'Brand story and about pages',
      'Free shipping and first-order offer messaging',
      'Separate desktop and mobile hero banners',
    ],
    featured: true,
  },
  {
    slug: 'the-fat-cookie-chef',
    title: 'The Fat Cookie Chef',
    url: 'https://thefatcookiechef.com',
    category: 'E-commerce',
    tags: ['Shopify', 'E-commerce', 'Bundle builder'],
    description:
      'A freshly baked cookie store with best sellers, a full cookie collection and a build-your-own-box flow.',
    bullets: [
      'Best sellers and full cookie collection',
      'Build-your-box bundle flow with a bundle discount',
      'Brand story, FAQ and policy pages',
      'Cart drawer and search',
    ],
    featured: true,
  },
  {
    slug: 'virukshaa-events',
    title: 'Virukshaa Events',
    url: 'https://virukshaaevents.in',
    category: 'Events and Weddings',
    tags: ['Portfolio site', 'Dashboard', 'Access control'],
    description:
      'A portfolio website for an event company, extended with a private workers dashboard for managing their team.',
    bullets: [
      'Portfolio site showcasing past events',
      'Workers dashboard integrated into the site',
      'Access control for staff-only pages',
    ],
    featured: true,
  },
  {
    slug: 'sparrowlook',
    title: 'SPARROWLOOK',
    url: 'https://sparrowlook.com',
    category: 'E-commerce',
    tags: ['WordPress', 'WooCommerce', 'Elementor'],
    description:
      'A WooCommerce store for an oversized t-shirt brand in Chennai, with bundle pricing and a custom size chart.',
    featured: false,
  },
  {
    slug: 'kichun-studio',
    title: 'Kichun Studio',
    url: 'https://kichunstudio.com',
    category: 'Business',
    tags: ['Business website'],
    description: 'A custom-built website for Kichun Studio.',
    featured: false,
  },
  {
    slug: 'bloom-cafes',
    title: 'Bloom Cafes',
    url: 'https://bloomcafes.com',
    category: 'Food and Cafes',
    tags: ['Cafe website'],
    description: 'A custom-built website for Bloom Cafes.',
    featured: false,
  },
  {
    slug: 'ama-legal-solutions',
    title: 'AMA Legal Solutions',
    url: 'https://www.amalegalsolutions.com',
    category: 'Business',
    tags: ['Business website'],
    description: 'A custom-built website for AMA Legal Solutions.',
    featured: false,
  },
  {
    slug: 'foire',
    title: 'Foire',
    url: 'https://foire.in',
    category: 'Business',
    tags: ['Business website'],
    description: 'A custom-built website for Foire.',
    featured: false,
  },
  {
    slug: 'delhi-house-cafe',
    title: 'Delhi House Cafe',
    url: 'https://www.delhihousecafe.com',
    category: 'Food and Cafes',
    tags: ['Cafe website'],
    description: 'A custom-built website for Delhi House Cafe.',
    featured: false,
  },
  {
    slug: 'vivaah-connect',
    title: 'Vivaah Connect',
    url: 'https://www.vivaahaconnect.com',
    category: 'Events and Weddings',
    tags: ['Website'],
    description: 'A custom-built website for Vivaah Connect.',
    featured: false,
  },
  {
    slug: 'cat-zone',
    title: 'Cat Zone',
    url: 'https://www.catzone.in',
    category: 'E-commerce',
    tags: ['Website'],
    description: 'A custom-built website for Cat Zone.',
    featured: false,
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
