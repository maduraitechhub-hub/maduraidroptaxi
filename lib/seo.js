import { site } from '../config/site';

const SITE_WIDE_KEYWORDS = [
  'TamilNadu Drop Taxi',
  'drop taxi Tamil Nadu',
  'cab service Tamil Nadu',
  'taxi booking Tamil Nadu',
  'outstation cab Tamil Nadu',
  'one way taxi Tamil Nadu',
  'airport taxi Tamil Nadu',
];

/**
 * Builds a complete Next.js metadata object for any page.
 * @param {object} opts
 * @param {string} opts.title
 * @param {string} opts.description
 * @param {string[]} [opts.keywords]
 * @param {string} [opts.path] - relative path e.g. '/taxi/madurai'
 * @param {string} [opts.ogImage]
 */
export function buildMetadata({
  title,
  description,
  keywords = [],
  path = '/',
  ogImage,
}) {
  const canonical = `${site.siteUrl}${path}`;
  const image = ogImage || `${site.siteUrl}${site.ogImage}`;
  const allKeywords = [...new Set([...keywords, ...SITE_WIDE_KEYWORDS])];

  return {
    metadataBase: new URL(site.siteUrl),
    title,
    description,
    keywords: allKeywords,
    authors: [{ name: site.siteName, url: site.siteUrl }],
    category: 'travel',
    referrer: 'origin-when-cross-origin',

    alternates: { canonical },

    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },

    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_IN',
      siteName: site.siteName,
      url: canonical,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },

    other: {
      'geo.region': site.stateCode,
      'geo.placename': `${site.stateName}, ${site.country}`,
      ...(site.gscVerification
        ? { 'google-site-verification': site.gscVerification }
        : {}),
    },

    ...(site.gscVerification
      ? { verification: { google: site.gscVerification } }
      : {}),
  };
}

/** Pre-built page SEO configs */
export const PAGE_SEO = {
  home: {
    title: `${site.siteName} – Premium Cab Service | Book Online`,
    description: `Book ${site.siteName} for safe, affordable, and reliable travel across Tamil Nadu. One-way drops, airport pickups, and outstation taxi service with verified drivers.`,
    keywords: ['Tamil Nadu taxi service', 'trusted cab service', 'reliable drop taxi', 'book taxi online'],
    path: '/',
  },
  book: {
    title: `Book Taxi | ${site.siteName} – Online Cab Booking`,
    description: `Book a drop taxi or cab in Tamil Nadu in minutes. Outstation, airport pickup, and local rides with transparent fares and professional drivers.`,
    keywords: ['book taxi Tamil Nadu', 'online cab booking', 'instant taxi quote', 'outstation taxi booking'],
    path: '/book',
  },
  cities: {
    title: `Cities We Serve | ${site.siteName} – All Districts`,
    description: `Taxi service across all 38 districts of Tamil Nadu. From metro cities to smaller towns – same trusted quality everywhere.`,
    keywords: ['Tamil Nadu cities taxi', 'cab service all districts', 'intercity taxi Tamil Nadu'],
    path: '/cities',
  },
  about: {
    title: `About Us | ${site.siteName} – Our Story & Values`,
    description: `Learn about ${site.siteName}: our mission, safety standards, fleet, and commitment to reliable cab service across Tamil Nadu since ${site.established}.`,
    keywords: ['about TamilNadu Drop Taxi', 'trusted taxi company Tamil Nadu', 'cab service since 2015'],
    path: '/about',
  },
  partner: {
    title: `Partner With Us | ${site.siteName} – Fleet & Drivers`,
    description: `Partner with ${site.siteName} as a driver or fleet owner. Grow your earnings with a trusted brand serving riders across Tamil Nadu.`,
    keywords: ['taxi partner program Tamil Nadu', 'drive with taxi company', 'fleet partner cab'],
    path: '/partner',
  },
  contact: {
    title: `Contact | ${site.siteName} – Call & WhatsApp`,
    description: `Contact ${site.siteName} for bookings, quotes, and support. Reach us by phone or WhatsApp for fast assistance across Tamil Nadu.`,
    keywords: ['contact TamilNadu Drop Taxi', 'taxi customer care Tamil Nadu', 'WhatsApp taxi booking'],
    path: '/contact',
  },
};

/** Build city page SEO */
export function buildCitySeo(city) {
  return {
    title: `${city.name} Drop Taxi | ${site.siteName} – Book Cab Online`,
    description: `Book a reliable drop taxi in ${city.name}. One-way, round trip, and airport transfer available with verified drivers. Starting from ₹15/km. Call ${site.phoneDisplay}.`,
    keywords: [
      `${city.name} drop taxi`,
      `${city.name} cab service`,
      `${city.name} taxi booking`,
      `taxi from ${city.name}`,
      `${city.name} outstation cab`,
      `${city.name} airport taxi`,
    ],
    path: `/taxi/${city.slug}`,
  };
}
