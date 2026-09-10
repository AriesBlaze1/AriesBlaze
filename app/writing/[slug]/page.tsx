import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import type { ComponentProps } from 'react';
import { getArticles } from '@/lib/writing';
import { pageMetadata } from '@/lib/metadata';
import { site } from '@/data/site';
export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticles().find((a) => a.slug === slug);
  if (!article) return { title: 'Article not found', robots: { index: false } };
  const metadata = pageMetadata(
    article.title,
    article.description,
    `/writing/${slug}`,
  );
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: 'article',
      publishedTime: article.date,
      authors: [site.name],
    },
  };
}
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const articles = getArticles();
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  const index = articles.indexOf(article);
  const previous = articles[index + 1];
  const next = articles[index - 1];
  const related = articles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 2);
  return (
    <div className="container">
      <article className="article-shell">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: article.title,
              description: article.description,
              datePublished: article.date,
              author: {
                '@type': 'Person',
                name: site.name,
                url: `${site.url}/about`,
              },
              mainEntityOfPage: `${site.url}/writing/${article.slug}`,
              image: `${site.url}/opengraph-image`,
            }).replace(/</g, '\u003c'),
          }}
        />
        <header className="page-intro">
          <Link href="/writing" className="back-link">
            ← All writing
          </Link>
          <p className="eyebrow">{article.category}</p>
          <h1>{article.title}</h1>
          <p className="intro-copy">{article.description}</p>
          <div className="article-meta">
            John Oyekunle · <time dateTime={article.date}>{article.date}</time>{' '}
            · {article.readingMinutes} min read
          </div>
        </header>
        <div className="prose">
          <MDXRemote
            source={article.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark' }]],
              },
            }}
            components={{
              table: (props: ComponentProps<'table'>) => (
                <div className="table-wrap">
                  <table {...props} />
                </div>
              ),
            }}
          />
        </div>
        <nav className="article-nav" aria-label="More writing">
          {previous && (
            <Link href={`/writing/${previous.slug}`}>← {previous.title}</Link>
          )}
          {next && <Link href={`/writing/${next.slug}`}>{next.title} →</Link>}
        </nav>
        {related.length > 0 && (
          <section className="section">
            <h2>Related writing</h2>
            {related.map((item) => (
              <Link
                className="writing-item"
                href={`/writing/${item.slug}`}
                key={item.slug}
              >
                {item.title} ↗
              </Link>
            ))}
          </section>
        )}
      </article>
    </div>
  );
}
