import { Section } from "@/components/Section";
import { ServiceScanStrip } from "@/components/ServiceScanStrip";
import { TextLink } from "@/components/TextLink";
import { services } from "@/content/services";
import { home } from "@/content/home";

export function ServicesPreview() {
  return (
    <Section
      eyebrow={home.services.eyebrow}
      headline={home.services.headline}
      support={home.services.support}
    >
      <ServiceScanStrip services={services} variant="snap" />
      <p className="mt-6 md:mt-8">
        <TextLink href="/services">Explore services →</TextLink>
      </p>
    </Section>
  );
}
