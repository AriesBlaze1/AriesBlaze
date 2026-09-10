import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { allProjects } from '@/data/projects';
import { getArticles } from '@/lib/writing';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...['', '/work', '/about', '/lab', '/writing', '/contact'].map((path) => ({
      url: `${site.url}${path}`,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...allProjects.map((project) => ({
      url: `${site.url}/work/${project.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...getArticles().map((article) => ({
      url: `${site.url}/writing/${article.slug}`,
      lastModified: article.date,
      priority: 0.6,
    })),
  ];
}
