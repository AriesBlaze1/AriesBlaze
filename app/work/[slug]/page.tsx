import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allProjects } from '@/data/projects';
import { ContactBand, TextLink } from '@/components/ui';
import { ProjectMedia } from '@/components/project-media';
import { pageMetadata } from '@/lib/metadata';
import { site } from '@/data/site';
export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  return project
    ? pageMetadata(project.name, project.description, `/work/${slug}`)
    : { title: 'Project not found', robots: { index: false } };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();
  const next =
    allProjects[(allProjects.indexOf(project) + 1) % allProjects.length];
  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: project.name,
            description: project.description,
            url: `${site.url}/work/${project.slug}`,
            creator: { '@type': 'Person', name: site.name },
          }).replace(/</g, '\u003c'),
        }}
      />
      <div className="project-intro">
        <Link className="back-link" href="/work">
          ← All work
        </Link>
        <p className="eyebrow">
          {project.kind} / {project.category}
        </p>
        <h1>
          {project.name}
          <span className="accent">.</span>
        </h1>
        <p className="project-lead">{project.description}</p>
        <div className="project-meta">
          <div>
            <span className="mono">My role</span>
            <p>{project.role}</p>
          </div>
          {project.status && (
            <div>
              <span className="mono">Status</span>
              <p>{project.status}</p>
            </div>
          )}
          {project.url && (
            <TextLink external href={project.url}>
              Visit project
            </TextLink>
          )}
        </div>
      </div>
      {project.image && (
        <div className={`project-media case-media ${project.color}`}>
          <ProjectMedia
            src={project.image}
            name={project.name}
            alt={project.alt}
            priority
            sizes="(max-width: 1200px) 100vw, 1100px"
          />
        </div>
      )}
      <div className="case-layout">
        <aside>
          <p className="eyebrow">Project notes</p>
          <nav aria-label="Project sections">
            {project.sections.map((section, index) => (
              <a href={`#section-${index}`} key={section.title}>
                {section.title}
              </a>
            ))}
            {project.technologies.length > 0 && <a href="#stack">Stack</a>}
          </nav>
        </aside>
        <div className="case-content">
          {project.sections.map((section, index) => (
            <section id={`section-${index}`} key={section.title}>
              <span className="mono">{String(index + 1).padStart(2, '0')}</span>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.items && (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          {project.technologies.length > 0 && (
            <section id="stack">
              <h2>Confirmed stack</h2>
              <div className="tags">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
      <Link className="next-project" href={`/work/${next.slug}`}>
        <span className="eyebrow">Next project</span>
        <span>{next.name} ↗</span>
      </Link>
      <ContactBand />
    </div>
  );
}
