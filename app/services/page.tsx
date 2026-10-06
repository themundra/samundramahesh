import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ServiceBlock } from "@/components/ServiceBlock";
import { ServiceScanStrip } from "@/components/ServiceScanStrip";
import { Button } from "@/components/Button";
import { services, servicesPage } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website and app design, social media management, business content, and Drone Hospital workshop services by Samundra Mahesh.",
};

export default function ServicesPage() {
  return (
    <>
      <Section
        eyebrow={servicesPage.eyebrow}
        headline={servicesPage.headline}
        support={servicesPage.support}
      />

      <div className="container-site pb-4">
        <ServiceScanStrip services={services} variant="snap" />
      </div>

      <section aria-label="Service summaries" className="pb-6 md:pb-12">
        <div className="container-site border-b border-line">
          {services.map((s) => (
            <ServiceBlock
              key={s.id}
              id={s.id}
              title={s.title}
              summary={s.summary}
              label={s.label}
            />
          ))}
        </div>
      </section>

      <Section
        headline="Ready when you are"
        support="Tell me about the website or app, social presence, business content, or workshop need — I will reply with a clear next step."
      >
        <Button href="/contact">Get in touch</Button>
      </Section>
    </>
  );
}
