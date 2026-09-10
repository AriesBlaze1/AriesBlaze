import type { NdaWork, Project } from './types';
export const projects: Project[] = [
  {
    slug: 'spenddeck',
    name: 'Spenddeck',
    category: 'Finance / Productivity',
    kind: 'Product',
    description:
      'A clearer picture of what your money can actually do. Balances, commitments, and protected savings in one place.',
    role: 'Product Developer',
    image: '/projects/spenddeck.webp',
    alt: 'Spenddeck landing page introducing balances, commitments, and protected savings',
    color: 'slate',
    url: 'https://spenddedck.xyz/',
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'Vite.js'],
    sections: [
      {
        title: 'Overview',
        body: 'Spenddeck is a personal finance and productivity product built around understanding spending and financial commitments.',
      },
      {
        title: 'Product focus',
        body: 'The interface brings balances, commitments, and protected savings into a single view, making the distinction between an account balance and money that is free to use.',
      },
      {
        title: 'Behind the interface',
        body: 'The confirmed infrastructure includes Supabase and PostgreSQL, with Resend and SMTP for email systems.',
      },
    ],
  },
  {
    slug: 'askform',
    name: 'AskForm',
    category: 'Forms / Productivity',
    kind: 'Product',
    description:
      'From existing questions to a published form. Paste, edit, share, and collect responses.',
    role: 'Product Developer',
    image: '/projects/askform.webp',
    alt: 'AskForm interface introducing a form builder for existing questionnaires',
    color: 'sand',
    url: 'https://useaskform.pxxl.click/',
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'Vite.js'],
    sections: [
      {
        title: 'Overview',
        body: 'AskForm is a form builder for existing questionnaires. It starts with questions you already have.',
      },
      {
        title: 'The workflow',
        body: 'Paste questions, edit the detected structure, and publish a share link or embed. The product presentation also includes response collection and sending forms to Google Forms.',
      },
    ],
  },
  {
    slug: 'sitepulse',
    name: 'SitePulse',
    category: 'SaaS / Website intelligence',
    kind: 'Product',
    description:
      'Website auditing, analysis, and monitoring. An early step from building websites to building software products.',
    role: 'Product / Full-stack Developer',
    image: '/projects/sitepulse.webp',
    alt: 'SitePulse website auditing product interface',
    color: 'lavender',
    url: 'https://sitepulseng.netlify.app/',
    technologies: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
    ],
    sections: [
      {
        title: 'Overview',
        body: 'SitePulse is a website intelligence product for auditing, analysis, and monitoring.',
      },
      {
        title: 'A step into product development',
        body: 'This project marks an important part of my move from conventional websites toward software products: an interface supported by application logic and a database.',
      },
      {
        title: 'Architecture',
        body: 'The build combines HTML, CSS, JavaScript, and Tailwind CSS on the interface with Supabase and PostgreSQL for the product infrastructure.',
      },
    ],
  },
  {
    slug: 'velune',
    name: 'Velune',
    category: 'Digital library / Reading',
    kind: 'Product',
    description:
      'Read without limits. A digital library with the account systems and infrastructure behind a reading product.',
    role: 'Frontend / Full-stack Product Developer',
    image: '/projects/velune.webp',
    alt: 'Velune digital library interface',
    color: 'sage',
    url: 'https://velune.pxxl.click/',
    technologies: [
      'HTML5',
      'Tailwind CSS',
      'Vanilla JavaScript (ES6)',
      'Supabase',
      'Google Authentication',
    ],
    sections: [
      {
        title: 'Overview',
        body: 'Velune is a digital library and reading product, built around the idea: Read without Limits.',
      },
      {
        title: 'Beyond the library interface',
        body: 'The build includes the account lifecycle and the supporting systems needed for a public product.',
        items: [
          'Authentication and Google OAuth',
          'Session handling and password reset',
          'SEO metadata, canonical URLs, and social sharing assets',
          'Search Console verification, sitemap, and robots.txt',
          'PWA icons',
        ],
      },
      {
        title: 'Architecture',
        body: 'The confirmed stack includes HTML5, Tailwind CSS, Vanilla JavaScript (ES6), Supabase, and Google Authentication. Other JavaScript libraries are used but are not listed here yet.',
      },
    ],
  },
  {
    slug: 'arcnotes',
    name: 'ArcNotes',
    category: 'AI / Documents',
    kind: 'Product',
    status: 'Building',
    description:
      'AI-powered document processing and summarization for PDFs and longer documents.',
    role: 'Product / Full-stack Developer',
    image: '/projects/arcnotes.webp',
    alt: 'ArcNotes AI document summarization interface',
    color: 'sand',
    technologies: ['TypeScript'],
    sections: [
      {
        title: 'Overview',
        body: 'ArcNotes is an AI-powered PDF and document processing product focused on summarization.',
      },
      {
        title: 'Rebuild',
        body: 'ArcNotes is currently being rebuilt. TypeScript is confirmed for the new implementation; the remaining stack details are not published here yet.',
      },
      {
        title: 'Current state',
        body: 'A public link is not listed here yet.',
      },
    ],
  },
  {
    slug: 'billwise',
    name: 'BillWise',
    category: 'Finance / Invoicing',
    kind: 'Product',
    description:
      'Create, send, and track invoices with a focused workspace for freelancers and teams.',
    role: 'Product Developer',
    image: '/projects/billwise.webp',
    alt: 'BillWise landing page introducing an invoicing workspace',
    color: 'slate',
    url: 'https://billwise.pxxl.click/',
    technologies: ['Next.js', 'Node.js', 'TypeScript'],
    sections: [
      {
        title: 'Overview',
        body: 'BillWise is an invoicing product for creating, sending, and tracking payments.',
      },
    ],
  },
  {
    slug: 'leadmap',
    name: 'LeadMap',
    category: 'Business discovery / SaaS',
    kind: 'Product',
    status: 'Building',
    description:
      'Discover businesses and organize publicly available contact and digital-presence information.',
    role: 'Founder / Product Developer',
    image: '/projects/leadmap.webp',
    alt: 'LeadMap business discovery landing page',
    color: 'sage',
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'Vite.js'],
    sections: [
      {
        title: 'Overview',
        body: 'LeadMap is a business discovery and lead workspace built around Maps and business data. Its focus is finding relevant businesses and organizing available contact information.',
      },
      {
        title: 'Launch constraints',
        body: 'LeadMap is currently in development and is not presented as a publicly launched service.',
      },
      {
        title: 'Technical direction',
        body: 'The confirmed stack includes Next.js, Node.js, TypeScript, and Vite.js. Remaining integration details are not documented here yet.',
      },
    ],
  },
  {
    slug: 'markprint',
    name: 'MarkPrint',
    category: 'Developer tool',
    kind: 'Product',
    description:
      'A browser-based HTML authoring environment with editing, file management, and live preview.',
    role: 'Product Developer',
    image: '/projects/markprint.webp',
    alt: 'MarkPrint browser workspace for building and previewing HTML documents',
    color: 'slate',
    url: 'https://markprint.pxxl.click/',
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'Vite.js'],
    sections: [
      {
        title: 'Overview',
        body: 'MarkPrint is a browser-based coding environment focused on writing and previewing HTML.',
      },
      {
        title: 'Implemented functionality',
        body: 'The initial product brings the core authoring workflow into the browser.',
        items: [
          'Editing and boilerplate generation',
          'HTML uploads and live preview',
          'File saving, management, and properties',
          'Playground and onboarding',
        ],
      },
      {
        title: 'Future exploration',
        body: 'A collaborative editor, shared terminal, voice, comments, task board, and GitHub integration were explored as later concepts. These are not presented as shipped features.',
      },
    ],
  },
  {
    slug: 'conventus',
    name: 'Conventus',
    category: 'Events / Ticketing',
    kind: 'Product',
    description: 'An event-ticketing platform, built and deployed.',
    role: 'Product / Web Developer',
    image: '/projects/conventus.webp',
    alt: 'Conventus event ticketing workspace interface',
    color: 'sand',
    url: 'https://conventus.pxxl.click/',
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'Vite.js'],
    sections: [
      {
        title: 'Overview',
        body: 'Conventus is an event-ticketing platform. My role covered product and web development.',
      },
    ],
  },
  {
    slug: 'fromus',
    name: 'FROMUS',
    category: 'Social / Memories',
    kind: 'Product',
    status: 'Building',
    description:
      'A collaborative event-memory platform for preserving moments from shared experiences.',
    role: 'Product Developer',
    image: '/projects/fromus.webp',
    alt: 'FROMUS shared event memories platform interface',
    color: 'lavender',
    technologies: ['Next.js', 'TypeScript', 'Vite.js'],
    sections: [
      {
        title: 'Overview',
        body: 'FROMUS is a collaborative event-memory platform intended to help groups preserve memories from shared events.',
      },
      {
        title: 'Product direction',
        body: 'The focus is a functional product experience for shared memories. A public release date and implementation details have not been published here.',
      },
    ],
  },
];
export const ndaWork: NdaWork = { count: 2 };
export const allProjects: Project[] = projects;
export const featuredSlugs = ['spenddeck', 'askform', 'sitepulse', 'velune'];
export const featuredProjects = featuredSlugs.map((slug) =>
  projects.find((project) => project.slug === slug)!,
);
