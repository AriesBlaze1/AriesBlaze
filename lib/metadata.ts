import type { Metadata } from 'next';
import { site } from '@/data/site';
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | AriesBlaze`,
      description,
      url: path,
      siteName: site.brand,
      type: 'website',
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: 'AriesBlaze — John Oyekunle, Software & Product Developer',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | AriesBlaze`,
      description,
      images: ['/opengraph-image'],
      creator: '@_ariesblaze',
    },
  };
}
