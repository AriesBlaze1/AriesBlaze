'use client';
import { useState } from 'react';
import type { Project } from '@/data/types';
import { ProjectCard } from './projects';
export function WorkBrowser({
  projects,
  ndaCount,
}: {
  projects: Project[];
  ndaCount: number;
}) {
  const [filter, setFilter] = useState('All work');
  const filtered = filter === 'Under NDA' ? [] : projects;
  return (
    <>
      <div className="filter-bar" aria-label="Filter projects">
        {['All work', 'Products', 'Under NDA'].map((label) => (
          <button
            key={label}
            onClick={() => setFilter(label)}
            aria-pressed={filter === label}
          >
            {label}
            <span>{label === 'Under NDA' ? ndaCount : projects.length}</span>
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {filter === 'Under NDA'
          ? `Showing ${ndaCount} NDA projects`
          : `Showing ${filtered.length} projects`}
      </p>
      {filter === 'Under NDA' ? (
        <section className="nda-card" aria-labelledby="nda-title">
          <span className="mono">CONFIDENTIAL WORK</span>
          <h2 id="nda-title">Selected work under NDA.</h2>
          <p>
            Some client engagements are private. Their names, scope, stack, and
            links are intentionally not published here.
          </p>
          <span>{ndaCount} protected engagements</span>
        </section>
      ) : (
        <div className="project-grid">
          {filtered.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      )}
    </>
  );
}
