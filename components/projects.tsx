import Link from 'next/link';
import type { Project } from '@/data/types';
import { Arrow } from './icons';
import { ProjectMedia } from './project-media';
export function ProjectCard({
  project,
  featured = false,
  index = 0,
}: {
  project: Project;
  featured?: boolean;
  index?: number;
}) {
  return (
    <article className={`project-card ${featured ? 'project-featured' : ''}`}>
      <Link
        href={`/work/${project.slug}`}
        className={`project-media ${project.color}`}
        aria-label={`View ${project.name} project`}
      >
        <ProjectMedia
          src={project.image}
          name={project.name}
          alt={project.alt}
          sizes={
            featured
              ? '(max-width: 700px) 100vw, 1100px'
              : '(max-width: 700px) 100vw, 550px'
          }
        />
        <span className="media-view">
          Explore project <Arrow diagonal />
        </span>
      </Link>
      <div className="project-info">
        <div>
          <p className="project-category">
            <span className="mono">{String(index + 1).padStart(2, '0')}</span>
            {project.category}
          </p>
          <h3>
            <Link href={`/work/${project.slug}`}>
              {project.name}
              <Arrow diagonal />
            </Link>
          </h3>
          <p className="project-description">{project.description}</p>
        </div>
        {project.status && (
          <span className="status">
            <span />
            {project.status}
          </span>
        )}
      </div>
    </article>
  );
}
