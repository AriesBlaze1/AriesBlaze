import type { Experiment } from './types';
export const experiments: Experiment[] = [
  {
    slug: 'websnap',
    name: 'WebSnap',
    category: 'Website capture / Review',
    description:
      'Capture websites, inspect layouts and CSS, measure spacing, and annotate feedback in a review workspace.',
    image: '/projects/websnap.webp',
    url: 'https://websnap.pxxl.click/',
    status: 'Live',
    technologies: ['Express.js'],
  },
  {
    slug: 'cut-board',
    name: 'Cutboard',
    category: 'Creative tool',
    description:
      'Turn screenshots, memes, reactions, and quotes into polished visuals worth sharing.',
    image: '/projects/cutboard.webp',
    url: 'https://cut-board.pxxl.click/',
    status: 'Live',
  },
  {
    slug: 'eatup',
    name: 'EatUp',
    category: 'Restaurant / Interface study',
    description:
      'A restaurant concept for Lagos, exploring food photography, menu discovery, and reservations.',
    image: '/projects/eatup.webp',
    status: 'Template',
  },
  {
    slug: 'zentivox',
    name: 'Zentivox',
    category: 'Architecture / Interface study',
    description:
      'An architecture studio concept exploring restrained typography and a project-led presentation.',
    image: '/projects/zentivox.webp',
    status: 'Template',
  },
];
