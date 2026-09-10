import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="container error-page">
      <p className="eyebrow">404 / Off the path</p>
      <h1>This page isn’t here.</h1>
      <p>
        It may have moved, or it hasn’t been published yet.
        <br />
        There’s still plenty of work to explore.
      </p>
      <Link className="button primary" href="/work">
        Explore the work →
      </Link>
      <Link className="text-link" href="/">
        Back home →
      </Link>
    </div>
  );
}
