'use client';
import { useState } from 'react';
import Link from 'next/link';
import type { Article } from '@/data/types';
type ArticleSummary = Omit<Article, 'content'>;
export function ArticleBrowser({ articles }: { articles: ArticleSummary[] }) {
  const [category, setCategory] = useState('All');
  const categories = [
    'All',
    ...new Set(articles.map((article) => article.category)),
  ];
  const filtered = articles.filter(
    (article) => category === 'All' || article.category === category,
  );
  return (
    <>
      {articles.length > 5 && (
        <div className="filter-bar">
          {categories.map((item) => (
            <button
              key={item}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
      <div className="writing-list">
        {filtered.map((article) => (
          <Link
            className="writing-item"
            key={article.slug}
            href={`/writing/${article.slug}`}
          >
            <span className="eyebrow">
              {article.category} / {article.readingMinutes} min read
            </span>
            <h2>{article.title} ↗</h2>
            <p>{article.description}</p>
            <time dateTime={article.date} className="mono">
              {article.date}
            </time>
          </Link>
        ))}
      </div>
    </>
  );
}
