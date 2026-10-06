"use client";

import { useId, useState } from "react";
import type { ExperienceItem as ExperienceData } from "@/content/experience";

export function ExperienceItem({
  item,
  open,
  onToggle,
}: {
  item: ExperienceData;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className="border-t border-line">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex min-h-14 w-full items-start justify-between gap-4 py-5 text-left md:items-baseline md:py-6"
        >
          <span className="min-w-0">
            <span className="font-display block text-lg text-fg md:text-xl">
              {item.role}
            </span>
            <span className="mt-1 block text-sm text-muted">
              {item.company}
              {item.location ? ` · ${item.location}` : ""}
            </span>
            <span className="font-mono-meta mt-2 block text-xs text-muted md:hidden">
              {item.period}
            </span>
          </span>
          <span className="flex shrink-0 items-center gap-2">
            <span className="font-mono-meta hidden text-xs text-muted md:inline">
              {item.period}
            </span>
            <span
              aria-hidden
              className={`text-muted transition ${open ? "rotate-45" : ""}`}
            >
              +
            </span>
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="pb-6 md:pb-8"
      >
        <ul className="space-y-2">
          {item.bullets.map((b) => (
            <li key={b} className="text-sm leading-relaxed text-muted">
              — {b}
            </li>
          ))}
        </ul>
        <p className="font-mono-meta mt-4 text-xs text-muted">
          {item.skills.join(" · ")}
        </p>
      </div>
    </div>
  );
}

export function ExperienceListClient({ items }: { items: ExperienceData[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-b border-line">
      {items.map((item, index) => (
        <ExperienceItem
          key={`${item.company}-${item.role}`}
          item={item}
          open={openIndex === index}
          onToggle={() =>
            setOpenIndex((current) => (current === index ? -1 : index))
          }
        />
      ))}
    </div>
  );
}
