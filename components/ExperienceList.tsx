import { Section } from "@/components/Section";
import { ExperienceListClient } from "@/components/ExperienceItem";
import { TextLink } from "@/components/TextLink";
import { experience } from "@/content/experience";
import { home } from "@/content/home";
import { site } from "@/content/site";

export function ExperienceList() {
  return (
    <Section
      eyebrow={home.experience.eyebrow}
      headline={home.experience.headline}
      support={home.experience.support}
    >
      <ExperienceListClient items={[...experience]} />
      <p className="mt-8">
        <TextLink href={site.cvHref}>Full CV →</TextLink>
      </p>
    </Section>
  );
}
