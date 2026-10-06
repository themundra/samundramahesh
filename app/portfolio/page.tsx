import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { WorkRow } from "@/components/WorkRow";
import { listPortfolio } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected Flutter products and case studies by Samundra Mahesh.",
};

export default function PortfolioPage() {
  const projects = listPortfolio();

  return (
    <Section
      headline="Portfolio"
      support="Selected products and case studies — Trackify first, then lighter project notes."
    >
      <div className="border-b border-line">
        {projects.map((project) => (
          <WorkRow key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
