import { Section } from "@/components/Section";
import { WorkRow } from "@/components/WorkRow";
import { getFeaturedPortfolio, listPortfolio } from "@/lib/portfolio";

export function SelectedWork() {
  const featured = getFeaturedPortfolio();
  const projects = featured.length > 0 ? featured : listPortfolio().slice(0, 3);

  return (
    <Section
      eyebrow="Selected work"
      headline="Products worth opening"
      support="Case studies first — Trackify in depth, then lighter project notes."
    >
      <div className="border-b border-line">
        {projects.map((project) => (
          <WorkRow key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
