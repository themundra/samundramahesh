import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ServiceBlock } from "@/components/ServiceBlock";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Flutter apps, UI/UX design, and Drone Hospital workshop services.",
};

export default function ServicesPage() {
  return (
    <Section
      headline="Services"
      support="Personal portfolio framing — Flutter and UI/UX first; Drone Hospital as a venture service line."
    >
      <div>
        {services.map((s) => (
          <ServiceBlock
            key={s.id}
            title={s.title}
            summary={s.summary}
            bullets={s.bullets}
          />
        ))}
      </div>
    </Section>
  );
}
