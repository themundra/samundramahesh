import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  headline: string;
  support?: string;
  children?: ReactNode;
  className?: string;
  id?: string;
};

export function Section({
  eyebrow,
  headline,
  support,
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className="container-site">
        {eyebrow ? (
          <p className="font-mono-meta mb-3 text-xs uppercase tracking-[0.18em] text-muted">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-display text-3xl tracking-tight text-fg md:text-4xl">
          {headline}
        </h2>
        {support ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {support}
          </p>
        ) : null}
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
