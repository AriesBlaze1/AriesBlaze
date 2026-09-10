import type { MetadataRoute } from 'next';
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AriesBlaze — John Oyekunle',
    short_name: 'AriesBlaze',
    description: 'Software & Product Developer',
    start_url: '/',
    display: 'browser',
    background_color: '#faf9f6',
    theme_color: '#faf9f6',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
