# Writing

Add trusted, locally authored `.mdx` files here. The filename becomes the route slug. Only entries with `published: true` appear on the site, in metadata, or in the sitemap. Drafts return 404. Do not publish an empty draft.

Required frontmatter:

```yaml
---
title: Your article title
description: A concise description for readers and search engines.
category: Building
published: false
date: '2026-09-05'
---
```

Categories: Building, Engineering, Design, Learning, Journal, Case studies, Lab notes.

Write Markdown below the frontmatter. Fenced code blocks receive syntax highlighting; GitHub-flavored tables are supported. Use `<figure><img src="/images/example.webp" alt="Describe the image" width="1000" height="600" /><figcaption>Caption</figcaption></figure>` for images, supplying real dimensions. Store the referenced image in `public/images/`.

MDX runs trusted source code at build time. Never feed untrusted submissions or remote content into this renderer. Dates and categories are validated. Reading time, metadata, navigation, related articles, and sitemap entries are generated automatically.

Ideas from the brief, not published articles: From Building Websites to Building Products; What Velune Taught Me About Building Beyond the UI; TypeScript Is Humbling Me; My Projects Have Become My Curriculum.
