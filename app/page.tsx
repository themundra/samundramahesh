import { PageEnter } from "@/components/motion/PageEnter";
import { Button } from "@/components/Button";
import { SelectedWork } from "@/components/SelectedWork";
import { ServicesPreview } from "@/components/ServicesPreview";
import { ExperienceList } from "@/components/ExperienceList";
import { BlogTeaser } from "@/components/BlogTeaser";
import { Section } from "@/components/Section";
import { home } from "@/content/home";

export default function HomePage() {
  const { hero, contact } = home;

  return (
    <>
      <PageEnter>
        <section className="hero-mobile relative overflow-hidden md:min-h-[100svh]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 90% 55% at 50% 35%, rgba(94,200,232,0.14), transparent 58%), radial-gradient(ellipse 50% 40% at 20% 85%, rgba(14,21,34,0.9), transparent 60%), linear-gradient(160deg, #070B12 0%, #0E1522 45%, #070B12 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-[12%] mx-auto h-[55%] w-[90%] opacity-25 md:-right-[10%] md:left-auto md:top-[15%] md:mx-0 md:h-[70%] md:w-[55%] md:opacity-30"
            style={{
              background:
                "linear-gradient(135deg, transparent 40%, rgba(94,200,232,0.08) 50%, transparent 60%), repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(232,238,247,0.03) 24px, rgba(232,238,247,0.03) 25px)",
              maskImage:
                "radial-gradient(ellipse at center, black 20%, transparent 70%)",
            }}
          />

          <div className="container-site relative flex min-h-[inherit] flex-col justify-center py-8 md:min-h-[100svh] md:py-12">
            <p className="font-mono-meta text-xs uppercase tracking-[0.18em] text-accent">
              {hero.role}
            </p>
            <p className="font-display mt-4 text-4xl leading-none tracking-tight text-fg sm:text-6xl md:mt-5 md:text-7xl lg:text-8xl">
              {hero.brand}
            </p>
            <h1 className="mt-5 max-w-xl text-lg font-normal leading-snug text-fg/90 md:mt-6 md:text-2xl">
              {hero.headline}
            </h1>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-muted md:mt-4 md:text-lg">
              {hero.support}
            </p>
            <div className="mt-6 flex w-full max-w-sm flex-col gap-4 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>
        </section>
      </PageEnter>

      <SelectedWork />
      <ServicesPreview />
      <ExperienceList />
      <BlogTeaser />
      <Section headline={contact.headline} support={contact.support}>
        <Button href={contact.cta.href}>{contact.cta.label}</Button>
      </Section>
    </>
  );
}
