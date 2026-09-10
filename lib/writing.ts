import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { Article, ArticleCategory } from '@/data/types';
export const articleCategories: ArticleCategory[] = [
  'Building',
  'Engineering',
  'Design',
  'Learning',
  'Journal',
  'Case studies',
  'Lab notes',
];
const directory = path.join(process.cwd(), 'content', 'writing');
export function getArticles(): Article[] {
  if (!fs.existsSync(directory)) return [];
  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const { data, content } = matter(
        fs.readFileSync(path.join(directory, file), 'utf8'),
      );
      if (
        typeof data.title !== 'string' ||
        typeof data.description !== 'string' ||
        !articleCategories.includes(data.category)
      )
        throw new Error(`Invalid article metadata: ${file}`);
      const published = data.published === true;
      const date =
        data.date instanceof Date
          ? data.date.toISOString().slice(0, 10)
          : data.date;
      if (
        published &&
        (typeof date !== 'string' ||
          !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
          Number.isNaN(Date.parse(date)))
      )
        throw new Error(`Published article needs a valid date: ${file}`);
      return {
        slug: file.replace(/\.mdx$/, ''),
        title: data.title,
        description: data.description,
        category: data.category,
        published,
        date,
        content,
        readingMinutes: Math.max(
          1,
          Math.ceil(content.split(/\s+/).length / 220),
        ),
      } satisfies Article;
    })
    .filter((article) => article.published)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}
