import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/Button";
import { TextLink } from "@/components/TextLink";
import {
  getServiceBySlug,
  listServiceSlugs,
  listServices,
} from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return listServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.teaser,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const others = listServices().filter((s) => s.id !== service.id);

  return (
    <article className="pb-10 md:pb-8">
      <header className="container-site py-8 md:py-16">
        <p className="font-mono-meta text-xs uppercase tracking-[0.18em] text-accent">
          Service
          {service.label ? (
            <span> · {service.label}</span>
          ) : null}
        </p>
        <h1 className="font-display mt-3 max-w-3xl text-3xl tracking-tight text-fg md:text-5xl">
          {service.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:mt-5 md:text-lg">
          {service.teaser}
        </p>
        <div className="mt-6 flex w-full max-w-sm flex-col gap-4 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          <Button href="/contact">Discuss this</Button>
          <TextLink href="/services" className="hidden md:inline">
            All services
          </TextLink>
        </div>
      </header>

      <section className="container-site section-divider py-8 md:py-16">
        <div className="grid gap-6 md:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] md:gap-8">
          <h2 className="font-display text-xl tracking-tight text-fg md:text-2xl">
            Overview
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {service.overview}
          </p>
        </div>
      </section>

      <section className="container-site section-divider py-8 md:py-16">
        <div className="grid gap-6 md:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] md:gap-8">
          <h2 className="font-display text-xl tracking-tight text-fg md:text-2xl">
            A good fit when
          </h2>
          <ul className="space-y-4">
            {service.suitedFor.map((item) => (
              <li
                key={item}
                className="border-b border-line pb-4 text-base leading-relaxed text-fg/90 last:border-0 last:pb-0"
              >
                — {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-site section-divider py-8 md:py-16">
        <div className="grid gap-6 md:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] md:gap-8">
          <h2 className="font-display text-xl tracking-tight text-fg md:text-2xl">
            What’s included
          </h2>
          <ul className="space-y-4">
            {service.includes.map((item) => (
              <li
                key={item}
                className="text-base leading-relaxed text-fg/90"
              >
                — {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-site section-divider py-8 md:py-16">
        <div className="grid gap-6 md:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] md:gap-8">
          <h2 className="font-display text-xl tracking-tight text-fg md:text-2xl">
            How it runs
          </h2>
          <ol className="space-y-8">
            {service.process.map((step, index) => (
              <li key={step.title} className="grid gap-2 sm:grid-cols-[3rem_1fr]">
                <span className="font-mono-meta text-xs text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-xl text-fg">{step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-site section-divider py-8 md:py-16">
        <div className="grid gap-6 md:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] md:gap-8">
          <h2 className="font-display text-xl tracking-tight text-fg md:text-2xl">
            Approach
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {service.approach}
          </p>
        </div>
      </section>

      {service.proof && service.proof.length > 0 ? (
        <section className="container-site section-divider py-8 md:py-16">
          <div className="grid gap-6 md:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] md:gap-8">
            <h2 className="font-display text-xl tracking-tight text-fg md:text-2xl">
              Proof
            </h2>
            <ul className="space-y-6">
              {service.proof.map((frame) => (
                <li key={frame.src}>
                  <div className="relative aspect-[4/5] max-w-md overflow-hidden border border-line bg-bg-elevated sm:aspect-[3/4]">
                    <Image
                      src={frame.src}
                      alt={frame.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 28rem"
                    />
                  </div>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                    {frame.caption}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="container-site section-divider py-8 md:py-16">
        <h2 className="font-display text-xl tracking-tight text-fg md:text-2xl">
          Ready to start
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Share a short brief — goals, timeline, and constraints. I will reply
          with a clear next step.
        </p>
        <div className="mt-6">
          <Button href="/contact">Get in touch</Button>
        </div>
      </section>

      <section className="container-site section-divider py-8 md:py-16">
        <h2 className="font-display text-lg tracking-tight text-fg md:text-xl">
          Other services
        </h2>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {others.map((s) => (
            <li key={s.id}>
              <Link
                href={`/services/${s.id}`}
                className="group flex flex-col gap-1 py-4 transition md:flex-row md:items-baseline md:justify-between md:gap-8"
              >
                <span className="font-display text-lg text-fg transition group-hover:text-accent">
                  {s.title}
                </span>
                <span className="text-sm text-muted md:text-right">
                  {s.teaser}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
