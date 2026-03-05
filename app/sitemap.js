import { getCalculators } from '@/lib/calculators';

export default function sitemap() {
  const base = 'https://roi.orkolabs.com';
  const calculators = getCalculators().map((c) => ({
    url: `${base}/calculators/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/audit`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/toolkit`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/methodology`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/disclaimer`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    ...calculators,
  ];
}
