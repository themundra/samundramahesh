import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { TextLink } from "@/components/TextLink";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Samundra Mahesh.",
};

export default function ContactPage() {
  return (
    <Section
      headline="Contact"
      support="Tell me about a Flutter product, interface project, or workshop question."
    >
      <div className="grid gap-12 md:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)]">
        <div className="space-y-4 text-sm text-muted">
          <p>
            <span className="block font-mono-meta text-xs uppercase tracking-wide text-muted">
              Email
            </span>
            <TextLink href={`mailto:${site.email}`}>{site.email}</TextLink>
          </p>
          <p>
            <span className="block font-mono-meta text-xs uppercase tracking-wide text-muted">
              Location
            </span>
            <span className="text-fg">{site.location}</span>
          </p>
          {site.socials.length > 0 ? (
            <ul className="space-y-2">
              {site.socials.map((s) => (
                <li key={s.href}>
                  <TextLink href={s.href} external>
                    {s.label}
                  </TextLink>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
