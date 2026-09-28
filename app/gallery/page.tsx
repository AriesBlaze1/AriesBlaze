import { MediaGallery } from '@/components/media-gallery';
import { PageIntro } from '@/components/ui';
import { galleryMedia } from '@/data/gallery';
import { projects } from '@/data/projects';
import type { GalleryItem } from '@/data/gallery';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  'Gallery',
  'Interface walkthroughs and project visuals by John Oyekunle.',
  '/gallery',
);

const galleryItems: GalleryItem[] = [
  ...galleryMedia,
  ...projects.map((project) => ({
    src: project.image,
    alt: project.alt,
    title: project.name,
    project: project.category,
    type: 'image' as const,
  })),
];

export default function GalleryPage() {
  return (
    <div className="container gallery-page">
      <PageIntro label="Gallery / Project visuals & walkthroughs" title="A closer look.">
        <p>Interfaces, details and moments from products built to solve real problems.</p>
      </PageIntro>
      <MediaGallery items={galleryItems} />
    </div>
  );
}
