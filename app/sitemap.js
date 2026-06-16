import { site } from '../config/site';
import { CITY_SLUGS } from '../config/locations';

export default function sitemap() {
  const base = site.siteUrl;
  const now = new Date();

  const staticRoutes = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/book`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/cities`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/partner`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const cityRoutes = CITY_SLUGS.map((slug) => ({
    url: `${base}/taxi/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...staticRoutes, ...cityRoutes];
}
