# AriesBlaze

John Oyekunle’s portfolio, rebuilt with Next.js App Router, TypeScript, React Server Components, and a small CSS design system. Outfit and Inter are self-hosted through Next/Font. The site uses native CSS motion with reduced-motion support. No database, authentication, or contact service is needed.

## Run locally

Use Node 22.13+ (Node 22 LTS recommended) and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. The homepage is `app/page.tsx`. Next.js serves the site; VS Code Live Server and the archived `legacy/index.html` do not run the new app.

```sh
npm run lint
npm run typecheck
npm run build
npm start
npm run test:e2e
```

## Content

- `data/site.ts`: identity, email, socials, navigation, biography, current activities, capabilities, and technologies.
- `data/projects.ts`: products, client projects, feature order, project notes, technologies, URLs, and status.
- `data/experiments.ts`: independent projects and templates in the Lab.
- `content/writing/*.mdx`: articles and Lab Notes. See the README there. Drafts are excluded from public pages and the sitemap.
- `public/projects/`: optimized screenshot assets. The original supplied images are not needed to run or deploy the site.

Add a project object to create its detail route and sitemap entry. Unknown details are omitted. Status is optional; having a supplied URL does not automatically assert a live service. The contact email and existing domain were confirmed for the rebuild. EatUp and Zentivox are templates; LeadMap is awaiting launch.

For deeper case studies, add verified sections about the problem, product decisions, architecture, challenges, results, or lessons to each project's `sections`. The current notes only use supplied information. Do not invent results, metrics, or technologies.

## Deployment

Netlify configuration is included. Connect the repository, use `npm run build`, and publish `.next` through Netlify's Next.js integration. Next/Image optimization and dynamic article routes require Next.js hosting; do not upload the repository as a plain static site. Vercel or a Node server running `npm start` also works.

The canonical domain is `https://ariesblaze.pxxl.click`. Keep `NEXT_PUBLIC_SITE_URL` set to this HTTPS origin (without a trailing slash) in the hosting provider and rebuild after changing it. No secrets are required. `.env.example` documents the variable.

Old `.html` URLs redirect to their new counterparts. The original site is preserved under `legacy/` as historical reference and is not copied into `public` or served by Next.js. Old unverified blog content is not published in the new writing system.

## Launch content still useful

- Screenshots and deeper implementation notes for Cutboard and WebSnap; their current descriptions follow their public page metadata.
- Confirmed release statuses for linked products and technical details for AskForm or other builds with no listed stack.
- Detailed case-study notes, approved articles, and any client screenshots cleared for display.

## Images and accessibility

Screenshots are optimized to WebP with intrinsic media frames and responsive Next/Image loading. `scripts/prepare-images.mjs` can regenerate them from the original supplied asset folder; it is not needed during normal builds. The UI includes a skip link, semantic landmarks, native modal navigation, visible focus, reduced-motion support, and fallbacks for failed images.

Browser tests cover routes, project filters, unknown content, mobile navigation, horizontal overflow at the requested widths, and automated accessibility checks. Automated checks do not replace manual screen-reader testing or field Core Web Vitals measurements.
