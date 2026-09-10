import type { CurrentActivity, SocialLink, Technology } from './types';
export const site = {
  brand: 'AriesBlaze',
  name: 'John Oyekunle',
  title: 'Software & Product Developer',
  location: 'Lagos, Nigeria',
  experience: '3 years',
  email: 'ariesblaze1@gmail.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ariesblaze.netlify.app',
  description:
    'John Oyekunle, building as AriesBlaze. Software & Product Developer in Lagos, Nigeria. SaaS, AI tools, and the systems behind useful digital products.',
};
export const navigation = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Writing', href: '/writing' },
  { label: 'Lab', href: '/lab' },
];
export const socials: SocialLink[] = [
  { label: 'X / @ariesblaze', url: 'https://x.com/_ariesblaze' },
];
export const currently: CurrentActivity[] = [
  {
    label: 'Working with',
    value: 'TypeScript',
    detail:
      'Building and implementing with stronger types and predictable code.',
  },
  {
    label: 'Learning',
    value: 'Rust & Java',
    detail:
      'Expanding into systems programming and object-oriented development.',
  },
];
export const capabilities = [
  {
    number: '01',
    title: 'Product development',
    description:
      'SaaS, productivity tools, and web applications. From the first idea to a working product.',
  },
  {
    number: '02',
    title: 'Interfaces & interaction',
    description:
      'Responsive interfaces, clear typography, and considered interactions that make a product easier to use.',
  },
  {
    number: '03',
    title: 'The systems behind it',
    description:
      'Authentication, PostgreSQL databases, APIs, AI integrations, and application logic.',
  },
  {
    number: '04',
    title: 'Getting it out there',
    description:
      'Deployment, email systems, SEO, and the production details that take a build beyond localhost.',
  },
];
export const technologies: Technology[] = [
  {
    category: 'Languages',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'PHP', 'SQL'],
  },
  {
    category: 'Frameworks & backend',
    items: ['Next.js', 'Node.js', 'Express.js', 'Vite.js'],
  },
  {
    category: 'Interfaces & motion',
    items: [
      'Tailwind CSS',
      'Bootstrap',
      'GSAP',
      'Anime.js',
      'Swiper',
      'Three.js',
    ],
  },
  {
    category: 'Data & infrastructure',
    items: ['Supabase', 'PostgreSQL', 'Firebase'],
  },
  {
    category: 'Auth & integrations',
    items: ['OAuth / Google Authentication', 'Groq AI API', 'Google Maps API'],
  },
  {
    category: 'Tools & delivery',
    items: [
      'Figma',
      'Git / GitHub',
      'Netlify',
      'Render',
      'Railway',
      'PWA',
      'SEO',
    ],
  },
];
export const aboutParagraphs = [
  "I'm John Oyekunle, a Software & Product Developer based in Lagos, Nigeria. Over the past three years, I've grown from building websites and frontend interfaces into designing and developing complete digital products.",
  'My work spans SaaS applications, AI-powered tools, productivity software, client platforms, authentication systems, databases, APIs and the infrastructure needed to take products beyond the interface.',
  'I learn largely by building—starting with an idea, working through the problems it creates, and picking up the technologies required to make it work. That approach has taken me from HTML, CSS and JavaScript into Supabase, PostgreSQL, API integrations, AI, authentication and increasingly deeper product engineering.',
  'I care about clean interfaces, strong typography and thoughtful interaction, but I care just as much about what happens behind the screen: how the product works, how data moves, how users interact with it and whether it actually solves the problem it was built for.',
];
