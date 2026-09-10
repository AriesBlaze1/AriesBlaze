'use client';
import Link from 'next/link';
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="container error-page">
      <p className="eyebrow">Something interrupted this page</p>
      <h1>Let’s try that again.</h1>
      <p>
        The page couldn’t load. Try once more, or head back to the homepage.
      </p>
      <button className="button primary" onClick={reset}>
        Try again
      </button>
      <Link className="text-link" href="/">
        Back home →
      </Link>
    </div>
  );
}
