'use client';

export function HoverVideo({
  src,
  poster,
  className,
  label,
}: {
  src: string;
  poster?: string;
  className?: string;
  label: string;
}) {
  function play(video: HTMLVideoElement) {
    void video.play().catch(() => undefined);
  }

  function pause(video: HTMLVideoElement) {
    video.pause();
    video.currentTime = 0;
  }

  return (
    <video
      className={className}
      src={src}
      poster={poster}
      controls
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
      onMouseEnter={(event) => play(event.currentTarget)}
      onMouseLeave={(event) => pause(event.currentTarget)}
      onFocus={(event) => play(event.currentTarget)}
      onBlur={(event) => pause(event.currentTarget)}
    />
  );
}
