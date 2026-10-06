import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { ContactScanStrip } from "@/components/ContactScanStrip";
import { Button } from "@/components/Button";
import { TextLink } from "@/components/TextLink";
import { site, contactPage } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Samundra Mahesh — email, WhatsApp, Instagram, TikTok, YouTube (@the.mundra).",
};

export default function ContactPage() {
  return (
    <>
      <Section
        eyebrow={contactPage.eyebrow}
        headline={contactPage.headline}
        support={contactPage.support}
      >
        <ContactScanStrip />
      </Section>

      <section className="section-divider py-8 md:py-16">
        <div className="container-site grid gap-5 md:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] md:gap-8">
          <h2 className="font-display text-xl tracking-tight text-fg md:text-2xl">
            Curriculum vitae
          </h2>
          <div>
            <p className="max-w-xl text-base leading-relaxed text-muted">
              Full roles, skills, education, and selected projects — readable
              in the browser, printable as PDF, or downloadable as markdown.
            </p>
            <div className="mt-6 flex w-full max-w-sm flex-col gap-4 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <Button href={site.cvHref}>View CV</Button>
              <TextLink href="/downloads/Mahesh_Dangal_CV_2026.md">
                Download markdown →
              </TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider py-8 md:py-16">
        <div className="container-site grid gap-8 md:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] md:gap-8">
          <div>
            <h2 className="font-display text-xl tracking-tight text-fg md:text-2xl">
              Location
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Based in {site.location}. Remote-friendly for website, app, and
              creative work.
            </p>
            <p className="font-mono-meta mt-6 text-xs text-muted">
              Social handle · {site.handle}
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl tracking-tight text-fg md:text-2xl">
              Send a message
            </h2>
            <p className="mt-3 mb-5 text-sm leading-relaxed text-muted md:mt-4 md:mb-6">
              Prefer a structured brief? Use the form — name, email, and what
              you need.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <Section
        headline="Prefer a quick ping?"
        support="WhatsApp and Instagram are usually fastest for short questions. Email works best for full briefs."
      >
        <p className="font-mono-meta text-sm text-muted">{site.handle}</p>
      </Section>
    </>
  );
}
