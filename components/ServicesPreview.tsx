import { Section } from "@/components/Section";
import { services } from "@/content/services";
import { TextLink } from "@/components/TextLink";

export function ServicesPreview() {
  return (
    <Section
      eyebrow="Services"
      headline="How I can help"
      support="Flutter delivery, interface craft, and Drone Hospital workshop services."
    >
      <ul className="divide-y divide-line border-y border-line">
        {services.map((s) => (
          <li
            key={s.id}
            className="flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:justify-between md:gap-8"
          >
            <p className="font-display text-xl text-fg">{s.title}</p>
            <p className="max-w-xl text-sm text-muted md:text-right">
              {s.summary}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-8">
        <TextLink href="/services">All services →</TextLink>
      </p>
    </Section>
  );
}
