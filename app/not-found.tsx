import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-site py-16 md:py-20">
      <h1 className="font-display text-3xl text-fg md:text-4xl">Page not found</h1>
      <p className="mt-4 text-muted">That route does not exist.</p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center text-sm text-accent underline underline-offset-4"
      >
        Back home
      </Link>
    </div>
  );
}
