import type { ReactNode } from "react";

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose-width space-y-4 text-base leading-relaxed text-fg/90 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_h2]:font-display [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:tracking-tight [&_h2]:text-fg [&_h3]:pt-4 [&_h3]:text-lg [&_h3]:text-fg [&_img]:my-6 [&_img]:max-h-[28rem] [&_img]:w-auto [&_img]:max-w-full [&_img]:rounded-sm [&_img]:border [&_img]:border-line [&_li]:ml-5 [&_li]:list-disc [&_p]:text-muted [&_pre]:overflow-x-auto [&_pre]:rounded-sm [&_pre]:border [&_pre]:border-line [&_pre]:bg-bg-elevated [&_pre]:p-4 [&_pre]:text-sm [&_strong]:text-fg [&_table]:block [&_table]:w-full [&_table]:overflow-x-auto [&_ul]:space-y-2 [&>.not-prose]:max-w-none">
      {children}
    </div>
  );
}
