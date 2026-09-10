'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Project } from '@/data/types';
import { Arrow } from './icons';

type ShowcaseProject = Pick<
  Project,
  'slug' | 'name' | 'category' | 'description' | 'status'
>;

export function HomeShowcase({
  projects,
  totalProjects,
}: {
  projects: ShowcaseProject[];
  totalProjects: number;
}) {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="home-frame" aria-label="AriesBlaze portfolio introduction">
      <div className="home-utility">
        <p>
          <span className="live-pulse" /> Available for selected projects
        </p>
        <p className="utility-center">Designing the interface · engineering the system</p>
        <p>Portfolio / 2026</p>
      </div>

      <div className="home-stage">
        <article className="home-intro">
          <div className="intro-topline">
            <span>John Oyekunle</span>
            <span>Software &amp; product developer</span>
          </div>

          <div className="index-orb" aria-label={`${totalProjects} products indexed`}>
            <span className="orbital-dots" aria-hidden="true" />
            <strong>{String(totalProjects).padStart(2, '0')}</strong>
            <small>products</small>
          </div>

          <div className="home-headline">
            <p className="home-eyebrow">Independent product developer · Lagos</p>
            <h1>
              One builder. The whole product.
              <em> From interface to infrastructure.</em>
            </h1>
            <p className="home-summary">
              I’m John. I take SaaS and AI products from a rough problem to working
              software—designing the experience and engineering what sits behind it.
            </p>
            <div className="home-actions">
              <Link className="home-primary-action" href="/work">
                Explore {totalProjects} products <Arrow />
              </Link>
              <Link className="home-secondary-action" href="/contact">
                Start a conversation <Arrow diagonal />
              </Link>
            </div>
          </div>

          <div className="home-intro-foot">
            <span>Product strategy</span>
            <span>Interface design</span>
            <span>Full-stack development</span>
          </div>
        </article>

        <section className="home-work" aria-labelledby="selected-work-title">
          <div className="work-heading">
            <div>
              <p className="home-eyebrow">Selected work</p>
              <h2 id="selected-work-title">Products, not just pages.</h2>
            </div>
            <p>
              01—{String(projects.length).padStart(2, '0')} / {totalProjects} indexed
            </p>
          </div>

          <div className="project-ledger">
            {projects.map((project, index) => (
              <Link
                className={`ledger-card ${index === activeProject ? 'is-active' : ''}`}
                href={`/work/${project.slug}`}
                key={project.slug}
                onMouseEnter={() => setActiveProject(index)}
                onFocus={() => setActiveProject(index)}
              >
                <div className="ledger-meta">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{project.status || 'Live'}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.category}</p>
                <span className="ledger-arrow"><Arrow diagonal /></span>
              </Link>
            ))}
          </div>

          <div className="work-footer">
            <div className="project-dots" aria-hidden="true">
              {projects.map((project, index) => (
                <i className={index === activeProject ? 'is-active' : ''} key={project.slug} />
              ))}
            </div>
            <Link href="/work">
              View complete work index <Arrow />
            </Link>
          </div>
        </section>
      </div>

      <div className="home-marquee" aria-label="Portfolio disciplines">
        <div>
          <span>PRODUCT THINKING</span><i />
          <span>INTERFACE SYSTEMS</span><i />
          <span>SAAS &amp; AI</span><i />
          <span>FULL-STACK BUILDS</span><i />
          <span>PRODUCT THINKING</span><i />
          <span>INTERFACE SYSTEMS</span><i />
          <span>SAAS &amp; AI</span><i />
          <span>FULL-STACK BUILDS</span><i />
        </div>
      </div>
    </section>
  );
}
