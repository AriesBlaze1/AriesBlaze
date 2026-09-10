/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Project } from '@/data/types';
import { Arrow } from './icons';
import { ProjectMedia } from './project-media';

export function PortfolioModule({ className = '', children, labelledBy }: { className?: string; children: ReactNode; labelledBy?: string }) {
  return <section className={`portfolio-module ${className}`} aria-labelledby={labelledBy}>{children}</section>;
}

export function ProjectModule({ project, featured = false }: { project: Project; featured?: boolean }) {
  return <PortfolioModule className={`project-module ${featured ? 'project-module-featured' : ''}`} labelledBy={`${project.slug}-title`}>
    <Link className={`module-project-image ${project.color}`} href={`/work/${project.slug}`} aria-label={`Read the ${project.name} case study`}><ProjectMedia src={project.image} alt={project.alt} name={project.name} sizes={featured ? '(max-width: 700px) 100vw, 720px' : '(max-width: 700px) 100vw, 360px'} /></Link>
    <div className="module-project-copy"><div className="module-meta"><span>{project.kind}</span><span>{project.status || 'Live'}</span></div><h2 id={`${project.slug}-title`}><Link href={`/work/${project.slug}`}>{project.name} <Arrow diagonal /></Link></h2><p>{project.description}</p><div className="module-project-links"><Link href={`/work/${project.slug}`}>Case study <Arrow /></Link>{project.url && <a href={project.url} target="_blank" rel="noreferrer">Live site <Arrow diagonal /></a>}</div></div>
  </PortfolioModule>;
}

export function StatusModule({ label, children }: { label: string; children: ReactNode }) {
  return <PortfolioModule className="status-module"><p className="module-label"><i />{label}</p>{children}</PortfolioModule>;
}

export function MetricModule({ value, label }: { value: string; label: string }) {
  return <PortfolioModule className="metric-module"><strong>{value}</strong><span>{label}</span></PortfolioModule>;
}

type Tool = { name: string; logo: string; purpose: string };
export function StackModule({ tools }: { tools: Tool[] }) {
  return <PortfolioModule className="stack-module" labelledBy="stack-title">
    <div className="module-heading"><p className="module-label">Technical stack</p><Link href="/about">Full profile <Arrow /></Link></div>
    <h2 id="stack-title">Tools with a purpose.</h2>
    <div className="tool-marquee" aria-label="Technology stack"><div className="tool-track">{[...tools, ...tools].map((tool, index) => <div className="tool-chip" key={`${tool.name}-${index}`} aria-hidden={index >= tools.length}><img src={`https://cdn.simpleicons.org/${tool.logo}/20211f`} alt={index < tools.length ? `${tool.name} logo` : ''} /><span>{tool.name}</span><small>{tool.purpose}</small></div>)}</div></div>
  </PortfolioModule>;
}

export function ActivityModule() {
  return <PortfolioModule className="activity-module"><p className="module-label">Development activity</p><div className="activity-summary"><span>PRODUCTS</span><strong>Building and documenting products in public.</strong><span>NO LIVE FEED CONNECTED</span></div><p>Projects and product experiments are documented here as they become ready to share.</p></PortfolioModule>;
}
