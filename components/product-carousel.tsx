'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Project } from '@/data/types';
import { Arrow } from './icons';
import { ProjectMedia } from './project-media';

export function ProductCarousel({ products }: { products: Project[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = () => setActive((current) => (current + 1) % products.length);
  const previous = () => setActive((current) => (current - 1 + products.length) % products.length);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (paused || reduced || products.length < 2) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % products.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused, products.length]);

  const product = products[active];
  return <section className="product-carousel" aria-roledescription="carousel" aria-label="Selected products" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
    <div className="carousel-stage" key={product.slug}>
      <Link className={`carousel-media ${product.color}`} href={`/work/${product.slug}`} aria-label={`Read the ${product.name} case study`}>
        <ProjectMedia src={product.image} alt={product.alt} name={product.name} sizes="(max-width: 650px) 100vw, 600px" />
      </Link>
      <div className="carousel-copy">
        <div className="module-meta"><span>{String(active + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}</span><span>{product.status || 'Live'}</span></div>
        <p className="module-label">{product.category}</p>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="carousel-links"><Link href={`/work/${product.slug}`}>Case study <Arrow /></Link>{product.url && <a href={product.url} target="_blank" rel="noreferrer">Live project <Arrow diagonal /></a>}</div>
      </div>
    </div>
    <div className="carousel-controls"><div className="carousel-dots" role="tablist" aria-label="Choose a product">{products.map((item, index) => <button type="button" role="tab" aria-selected={index === active} aria-label={`Show ${item.name}`} key={item.slug} onClick={() => setActive(index)}><span className="sr-only">{item.name}</span></button>)}</div><div><button type="button" onClick={previous} aria-label="Previous product">←</button><button type="button" onClick={next} aria-label="Next product">→</button></div></div>
  </section>;
}
