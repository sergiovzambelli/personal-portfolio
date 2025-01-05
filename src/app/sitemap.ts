import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sergiovzambelli.it',
      changeFrequency: 'yearly',
      priority: 1,
    },
  ]
}
