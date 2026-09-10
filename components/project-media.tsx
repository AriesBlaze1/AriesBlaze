'use client';
import Image from 'next/image';
import { useState } from 'react';
export function ProjectMedia({
  src,
  name,
  alt,
  priority = false,
  sizes = '(max-width: 700px) 100vw, 50vw',
}: {
  src?: string;
  name: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const [failed, setFailed] = useState(false);
  return src && !failed ? (
    <Image
      src={src}
      alt={alt || `${name} project preview`}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
    />
  ) : (
    <div className="media-fallback">
      <span className="eyebrow">AriesBlaze / Project</span>
      <span>
        {name}
        <i>.</i>
      </span>
      <span className="mono">
        {failed ? 'Preview unavailable' : 'Product overview'}
      </span>
    </div>
  );
}
