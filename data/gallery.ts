type GalleryMetadata = {
  alt: string;
  title: string;
  project: string;
};

export type GalleryItem = GalleryMetadata & (
  | { src: string; type: 'image' }
  | { src: string; poster?: string; type: 'video' }
);

export const galleryMedia: GalleryItem[] = [
  {
    src: '/media/kiln-pxxl-click-scroll.mp4',
    alt: 'Pxxl click and scroll walkthrough captured with Kiln',
    title: 'Kiln click & scroll',
    project: 'Pxxl capture',
    type: 'video',
  },
  {
    src: '/media/kiln-scroll.mp4',
    poster: '/media/kiln-scroll-poster.webp',
    alt: 'Kiln scroll website walkthrough, 33 seconds',
    title: 'Kiln scroll 01',
    project: 'Screen recording · 33 sec',
    type: 'video',
  },
  {
    src: '/media/kiln-scroll-1.mp4',
    poster: '/media/kiln-scroll-1-poster.webp',
    alt: 'Kiln scroll website walkthrough, 20 seconds',
    title: 'Kiln scroll 02',
    project: 'Screen recording · 20 sec',
    type: 'video',
  },
  {
    src: '/media/kiln-scroll-2.mp4',
    poster: '/media/kiln-scroll-2-poster.webp',
    alt: 'Kiln scroll website walkthrough, 20 seconds',
    title: 'Kiln scroll 03',
    project: 'Screen recording · 20 sec',
    type: 'video',
  },
];
