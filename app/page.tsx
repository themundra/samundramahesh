import { PageEnter } from "@/components/motion/PageEnter";
import { Button } from "@/components/Button";
import { SelectedWork } from "@/components/SelectedWork";
import { ServicesPreview } from "@/components/ServicesPreview";
import { ExperienceList } from "@/components/ExperienceList";
import { BlogTeaser } from "@/components/BlogTeaser";
import { Section } from "@/components/Section";

export default function HomePage() {
  return (
    <PageEnter>
      <section className="relative min-h-[100svh] overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(94,200,232,0.12), transparent 55%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(14,21,34,0.9), transparent 60%), linear-gradient(160deg, #070B12 0%, #0E1522 45%, #070B12 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[10%] top-[15%] h-[70%] w-[55%] opacity-30"
          style={{
            background:
              "linear-gradient(135deg, transparent 40%, rgba(94,200,232,0.08) 50%, transparent 60%), repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(232,238,247,0.03) 24px, rgba(232,238,247,0.03) 25px)",
            maskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 70%)",
          }}
        />

        <div className="container-site relative flex min-h-[100svh] flex-col justify-center py-24">
          <p className="font-display text-5xl leading-none tracking-tight text-fg sm:text-6xl md:text-7xl lg:text-8xl">
            Samundra Mahesh
          </p>
          <h1 className="mt-6 max-w-xl text-xl font-normal leading-snug text-fg/90 md:text-2xl">
            Flutter apps and interfaces with calm precision.
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            I design and build polished mobile experiences — and run Drone
            Hospital Nepal as a repair, maintenance, and training venture.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Button href="/portfolio">View work</Button>
            <Button href="/contact" variant="secondary">
              Get in touch →
            </Button>
          </div>
        </div>
      </section>

      <SelectedWork />
      <ServicesPreview />
      <ExperienceList />
      <BlogTeaser />
      <Section
        headline="Let’s build something precise"
        support="Flutter product, interface system, or a short workshop question — reach out."
      >
        <Button href="/contact">Contact</Button>
      </Section>
    </PageEnter>
  );
}
