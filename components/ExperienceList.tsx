import { Section } from "@/components/Section";
import { ExperienceListClient } from "@/components/ExperienceItem";
import { experience } from "@/content/experience";

export function ExperienceList() {
  return (
    <Section
      eyebrow="Experience"
      headline="Path so far"
      support="Independent product work and founding Drone Hospital Nepal."
    >
      <ExperienceListClient items={[...experience]} />
    </Section>
  );
}
