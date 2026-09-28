import Link from 'next/link';
import { aboutParagraphs, capabilities, currently, site, socials } from '@/data/site';
import { experienceTimeline } from '@/data/experience';
import { galleryMedia, type GalleryItem } from '@/data/gallery';
import type { Project } from '@/data/types';
import { MediaGallery } from './media-gallery';
import { HoverVideo } from './hover-video';
import { ProfileCollage } from './profile-collage';
import { ProjectMedia } from './project-media';
import { Arrow } from './icons';
import { Footer } from './ui';

export function HomeShowcase({ projects, ndaCount }: { projects: Project[]; ndaCount: number }) {
  const galleryItems: GalleryItem[] = [
    ...galleryMedia,
    ...projects.map((project) => ({
      src: project.image,
      alt: project.alt,
      title: project.name,
      project: project.category,
      type: 'image' as const,
    })),
  ];

  return (
    <div className="portfolio-home">
      <div className="home-flow">
        <section className="portfolio-hero" aria-labelledby="hero-title">
          <p className="hero-name">John Oyekunle <span>· {site.location}</span></p>
          <h1 id="hero-title">AriesBlaze</h1>
          <p className="hero-role">Software <span className="accent">Developer</span></p>
          <p className="hero-summary">
            I build SaaS, AI tools, and web applications that make everyday work clearer, from the interface to the systems behind it.
          </p>
          <div className="hero-actions">
            <Link className="glass-button glass-button-dark" href="#work">Explore my work <Arrow diagonal /></Link>
            <Link className="text-link" href="#contact">Get in touch <Arrow diagonal /></Link>
          </div>
        </section>

        <section className="home-about" id="about" aria-labelledby="home-about-title">
          <div className="home-about-visual">
            <ProfileCollage />
          </div>
          <div className="home-about-copy">
            <p className="home-eyebrow">A little about me</p>
            <h2 id="home-about-title">I learn by building.</h2>
            <p>{aboutParagraphs[0]}</p>
            <p>{aboutParagraphs[3]}</p>
            <Link className="text-link" href="/about">More about me <Arrow diagonal /></Link>
          </div>
        </section>

        <section className="home-work" id="work" aria-labelledby="home-work-title">
          <div className="home-section-heading">
            <p className="home-eyebrow">Selected projects</p>
            <h2 id="home-work-title">What I&apos;ve been building</h2>
            <p>Software products, web applications, and client work.</p>
          </div>
          <div className="home-project-list">
            {projects.map((project, index) => (
              <article className="home-project" key={project.slug}>
                <Link className="home-project-visual" href={`/work/${project.slug}`} aria-label={`View ${project.name} project`}>
                  <ProjectMedia src={project.image} name={project.name} alt={project.alt} priority={index < 2} sizes="(max-width: 760px) 100vw, 54vw" />
                </Link>
                <div className="home-project-copy">
                  <p className="home-project-meta"><span>{project.category}</span><span>{project.status || 'Live'}</span></p>
                  <h3><Link href={`/work/${project.slug}`}>{project.name} <Arrow diagonal /></Link></h3>
                  <p className="home-project-description">{project.description}</p>
                  <p className="home-project-role">{project.role}</p>
                  <ul className="home-project-tech" aria-label={`${project.name} technologies`}>
                    {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                  <div className="home-project-links">
                    <Link href={`/work/${project.slug}`}>Project details <Arrow /></Link>
                    {project.url && <a href={project.url} target="_blank" rel="noreferrer">Visit project <Arrow diagonal /></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="home-nda-note">Also includes {ndaCount} client projects under NDA. <Link href="/work">View all work <Arrow diagonal /></Link></p>
        </section>

        <section className="home-gallery" id="gallery" aria-labelledby="home-gallery-title">
          <div className="home-section-heading home-gallery-heading">
            <div>
              <p className="home-eyebrow">Screens and walkthroughs</p>
              <h2 id="home-gallery-title">Project gallery</h2>
            </div>
            <Link className="text-link" href="/gallery">Open full gallery <Arrow diagonal /></Link>
          </div>
          <MediaGallery items={galleryItems} />
        </section>

        <section className="home-experience" aria-labelledby="home-experience-title">
          <div className="home-section-heading">
            <p className="home-eyebrow">The journey so far</p>
            <h2 id="home-experience-title">Experience</h2>
          </div>
          <ol className="experience-timeline">
            {experienceTimeline.map((item) => (
              <li key={item.period}>
                <time>{item.period}</time>
                <div><h3>{item.focus}</h3><p>{item.detail}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="home-services" aria-labelledby="home-services-title">
          <div className="home-section-heading">
            <p className="home-eyebrow">What I do</p>
            <h2 id="home-services-title">What I can help you build</h2>
          </div>
          <div className="home-service-list">
            {capabilities.map((capability) => (
              <article key={capability.number}>
                <h3>{capability.title}</h3><p>{capability.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-current" aria-labelledby="home-current-title">
          <div className="home-current-copy">
            <p className="home-eyebrow">Currently building</p>
            <h2 id="home-current-title"><span className="accent">Kiln</span></h2>
            <p>A current project in progress.</p>
            <div className="home-current-tools">
              {currently.map((item) => <p key={item.label}><span>{item.label}</span><strong>{item.value}</strong><small>{item.detail}</small></p>)}
            </div>
            <Link className="text-link" href="/gallery">See Kiln in the gallery <Arrow diagonal /></Link>
          </div>
          <HoverVideo
            className="home-current-video"
            src="/media/kiln-pxxl-click-scroll.mp4"
            label="Kiln Pxxl click and scroll walkthrough"
          />
        </section>

        <section className="home-contact" id="contact" aria-labelledby="home-contact-title">
          <p className="home-eyebrow">Get in touch</p>
          <h2 id="home-contact-title">Have something worth building?</h2>
          <p>For product work, opportunities, or a good conversation.</p>
          <div className="home-contact-links">
            <a href={`mailto:${site.email}`}>{site.email} <Arrow diagonal /></a>
            {socials.map((social) => <a key={social.url} href={social.url} target="_blank" rel="noreferrer">{social.label} <Arrow diagonal /></a>)}
            <Link href="/contact">Contact page <Arrow /></Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
