import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { WorkRow } from "@/components/WorkRow";
import { PortfolioScanStrip } from "@/components/PortfolioScanStrip";
import { Button } from "@/components/Button";
import { listPortfolio } from "@/lib/portfolio";
import { portfolioPage } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected products and case studies by Samundra Mahesh — Trackify, Falano College, Courier Direct.",
};

export default function PortfolioPage() {
  const projects = listPortfolio();

  return (
    <>
      <Section
        eyebrow={portfolioPage.eyebrow}
        headline={portfolioPage.headline}
        support={portfolioPage.support}
      />

      <div className="container-site pb-4">
        <PortfolioScanStrip projects={projects} variant="snap" />
      </div>

      <section aria-label="Project summaries" className="pb-6 md:pb-12">
        <div className="container-site border-b border-line">
          {projects.map((project) => (
            <WorkRow key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <Section
        headline="Have a product in mind?"
        support="Website, app, or a related creative brief — I will reply with a clear next step."
      >
        <Button href="/contact">Get in touch</Button>
      </Section>
    </>
  );
}
