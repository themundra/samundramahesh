import type { ReactNode } from "react";

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose-width space-y-4 text-base leading-relaxed text-fg/90 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_h2]:font-display [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:tracking-tight [&_h2]:text-fg [&_h3]:pt-4 [&_h3]:text-lg [&_h3]:text-fg [&_li]:ml-5 [&_li]:list-disc [&_p]:text-muted [&_strong]:text-fg [&_ul]:space-y-2">
      {children}
    </div>
  );
}
