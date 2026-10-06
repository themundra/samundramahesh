import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-site py-32">
      <h1 className="font-display text-4xl text-fg">Page not found</h1>
      <p className="mt-4 text-muted">That route does not exist.</p>
      <Link
        href="/"
        className="mt-8 inline-block text-sm text-accent underline underline-offset-4"
      >
        Back home
      </Link>
    </div>
  );
}
