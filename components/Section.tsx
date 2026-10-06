import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  headline: string;
  support?: string;
  children?: ReactNode;
  className?: string;
  id?: string;
  /** Soft top hairline divider (default on) */
  divided?: boolean;
};

export function Section({
  eyebrow,
  headline,
  support,
  children,
  className = "",
  id,
  divided = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={[
        "py-10 md:py-16",
        divided ? "section-divider" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="container-site">
        {eyebrow ? (
          <p className="font-mono-meta mb-2 text-xs uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-display text-2xl tracking-tight text-fg md:text-4xl">
          {headline}
        </h2>
        {support ? (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {support}
          </p>
        ) : null}
        {children ? <div className="mt-7 md:mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
