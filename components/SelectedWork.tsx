import { Section } from "@/components/Section";
import { PortfolioScanStrip } from "@/components/PortfolioScanStrip";
import { TextLink } from "@/components/TextLink";
import { getFeaturedPortfolio, listPortfolio } from "@/lib/portfolio";
import { home } from "@/content/home";

export function SelectedWork() {
  const featured = getFeaturedPortfolio();
  const projects =
    featured.length > 0 ? featured : listPortfolio().slice(0, 3);

  return (
    <Section
      eyebrow={home.work.eyebrow}
      headline={home.work.headline}
      support={home.work.support}
    >
      <PortfolioScanStrip projects={projects} variant="snap" />
      <p className="mt-6 md:mt-8">
        <TextLink href="/portfolio">All projects →</TextLink>
      </p>
    </Section>
  );
}
