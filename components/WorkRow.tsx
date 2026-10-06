import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import type { PortfolioItem } from "@/lib/portfolio";

export function WorkRow({ project }: { project: PortfolioItem }) {
  return (
    <Reveal>
      <Link
        href={`/portfolio/${project.slug}`}
        className="group grid gap-3 border-t border-line py-8 transition md:grid-cols-[1fr_1.2fr_auto] md:items-baseline md:gap-8"
      >
        <div>
          <h3 className="font-display text-2xl tracking-tight text-fg transition group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mt-1 font-mono-meta text-xs text-muted">
            {project.status}
          </p>
        </div>
        <p className="text-sm leading-relaxed text-muted md:text-base">
          {project.summary}
        </p>
        <ul className="flex flex-wrap gap-x-3 gap-y-1 md:justify-end">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="font-mono-meta text-xs uppercase tracking-wide text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Link>
    </Reveal>
  );
}
