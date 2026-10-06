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
          className="flex w-full items-baseline justify-between gap-4 py-6 text-left"
        >
          <span>
            <span className="font-display block text-xl text-fg">
              {item.role}
            </span>
            <span className="mt-1 block text-sm text-muted">
              {item.company}
              {item.location ? ` · ${item.location}` : ""}
            </span>
          </span>
          <span className="font-mono-meta shrink-0 text-xs text-muted">
            {item.period}
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="pb-8"
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
