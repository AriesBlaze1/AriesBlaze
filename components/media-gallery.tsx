'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { GalleryItem } from '@/data/gallery';
import { Arrow } from './icons';

function GalleryCard({
  item,
  index,
  onOpen,
}: {
  item: GalleryItem;
  index: number;
  onOpen: (index: number) => void;
}) {
  function playPreview(video: HTMLVideoElement | null) {
    if (video) void video.play().catch(() => undefined);
  }

  function pausePreview(video: HTMLVideoElement | null) {
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  }

  return (
    <button
      type="button"
      className={`gallery-item gallery-item-${index % 4} ${item.type === 'video' ? 'gallery-item-video' : ''}`}
      onClick={() => onOpen(index)}
      onMouseEnter={(event) => playPreview(event.currentTarget.querySelector('video'))}
      onMouseLeave={(event) => pausePreview(event.currentTarget.querySelector('video'))}
      onFocus={(event) => playPreview(event.currentTarget.querySelector('video'))}
      onBlur={(event) => pausePreview(event.currentTarget.querySelector('video'))}
      aria-label={`Open ${item.title} ${item.type}`}
      aria-roledescription="slide"
    >
      <span className="gallery-image">
        {item.type === 'video' ? (
          <video
            src={item.src}
            poster={item.poster}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`${item.title} video preview`}
          />
        ) : (
          <Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 75vw, 34vw" />
        )}
      </span>
      <span className="gallery-caption">
        <span><strong>{item.title}</strong><small>{item.project}</small></span>
        <span className="gallery-open" aria-hidden="true"><Arrow diagonal /></span>
      </span>
    </button>
  );
}

export function MediaGallery({ items }: { items: GalleryItem[] }) {
  const [activeMedia, setActiveMedia] = useState<number | null>(null);
  const carousel = useRef<HTMLDivElement>(null);
  const viewer = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    if (activeMedia !== null) {
      if (!viewer.current?.open) viewer.current?.showModal();
    } else if (viewer.current?.open) {
      viewer.current.close();
    }
  }, [activeMedia]);

  function moveMedia(direction: number) {
    setActiveMedia((index) =>
      index === null ? null : (index + direction + items.length) % items.length,
    );
  }

  function moveCarousel(direction: number) {
    const viewport = carousel.current;
    if (!viewport) return;

    const slides = Array.from(viewport.querySelectorAll<HTMLElement>('.gallery-item'));
    if (!slides.length) return;

    const threshold = viewport.scrollLeft + 10;
    const currentIndex = slides.reduce(
      (last, slide, index) => (slide.offsetLeft < threshold ? index : last),
      -1,
    );
    const nextIndex = slides.findIndex((slide) => slide.offsetLeft >= threshold);
    const targetIndex = direction > 0
      ? Math.min(slides.length - 1, nextIndex < 0 ? slides.length - 1 : nextIndex)
      : Math.max(0, currentIndex - 1);

    viewport.scrollTo({
      left: slides[targetIndex].offsetLeft,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  }

  return (
    <>
      <div className="gallery-carousel" role="region" aria-roledescription="carousel" aria-label="Project images and videos">
        <div className="gallery-viewport" ref={carousel} tabIndex={0} aria-label="Browse project media">
          <div className="gallery-track">
            {items.map((item, index) => (
              <GalleryCard
                key={`${item.title}-${index}`}
                item={item}
                index={index}
                onOpen={setActiveMedia}
              />
            ))}
          </div>
        </div>
        <div className="gallery-carousel-arrows">
          <button type="button" onClick={() => moveCarousel(-1)} aria-label="Previous gallery item"><Arrow className="gallery-arrow-prev" /></button>
          <button type="button" onClick={() => moveCarousel(1)} aria-label="Next gallery item"><Arrow /></button>
        </div>
      </div>

      <dialog
        className="media-viewer"
        ref={viewer}
        aria-label="Media viewer"
        onClose={() => setActiveMedia(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActiveMedia(null);
        }}
      >
        {activeMedia !== null && items[activeMedia] && (
          <div className="viewer-inner">
            <div className="viewer-toolbar">
              <span>{items[activeMedia].title} <i>/</i> {String(activeMedia + 1).padStart(2, '0')} of {String(items.length).padStart(2, '0')}</span>
              <button type="button" onClick={() => setActiveMedia(null)} aria-label="Close media viewer">Close <b>×</b></button>
            </div>
            <div
              className="viewer-media"
              onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }}
              onTouchEnd={(event) => {
                const end = event.changedTouches[0]?.clientX;
                if (touchStart.current !== null && end !== undefined && Math.abs(end - touchStart.current) > 55) {
                  moveMedia(end < touchStart.current ? 1 : -1);
                }
                touchStart.current = null;
              }}
            >
              {items[activeMedia].type === 'video' ? (
                <video key={items[activeMedia].src} src={items[activeMedia].src} controls playsInline autoPlay />
              ) : (
                <Image src={items[activeMedia].src} alt={items[activeMedia].alt} fill sizes="95vw" priority />
              )}
            </div>
            <div className="viewer-footer">
              <span>{items[activeMedia].alt}</span>
              <div>
                <button type="button" onClick={() => moveMedia(-1)} aria-label="Previous media">←</button>
                <button type="button" onClick={() => moveMedia(1)} aria-label="Next media">→</button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
