import { PageIntro, TextLink } from '@/components/ui';
import { ArticleBrowser } from '@/components/article-browser';
import { getArticles } from '@/lib/writing';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Writing',
  'Product stories, engineering decisions, and lab notes from John Oyekunle. The thinking behind AriesBlaze.',
  '/writing',
);
export default function WritingPage() {
  const articles = getArticles();
  return (
    <div className="container">
      <PageIntro
        label="Writing / Notes from the build"
        title="Thinking out loud."
      >
        <p>
          Product stories, technical decisions, and things I’m learning along
          the way. A record of the work behind the work.
        </p>
      </PageIntro>
      {articles.length ? (
        <ArticleBrowser
          articles={articles.map(({ content, ...article }) => {
            void content;
            return article;
          })}
        />
      ) : (
        <section className="writing-empty">
          <div>
            <p className="eyebrow">A space taking shape</p>
            <h2>
              The writing starts
              <br />
              with the work.
            </h2>
            <p>
              No published articles yet. For now, the project notes are the best
              place to see what I’m building and the systems behind it.
            </p>
            <TextLink href="/work">Read the project notes</TextLink>
          </div>
          <div className="writing-topics">
            <div>
              <h3>Building & engineering</h3>
              <p>
                Product decisions, integrations, and what happens behind the
                interface.
              </p>
            </div>
            <div>
              <h3>Design & learning</h3>
              <p>
                Interfaces, typography, and lessons from picking up new tools.
              </p>
            </div>
            <div>
              <h3>Lab notes</h3>
              <p>
                Short observations, technical experiments, and small discoveries
                from the build.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
