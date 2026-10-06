/** Accent mono topic chips for stack[] / tags[] — visible at all breakpoints. */
export function TopicTags({
  tags,
  className = "",
}: {
  tags: string[];
  className?: string;
}) {
  if (tags.length === 0) return null;

  return (
    <ul
      className={[
        "flex flex-wrap items-center gap-x-2 gap-y-1",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {tags.map((tag, i) => (
        <li key={tag} className="flex items-center gap-2">
          {i > 0 ? (
            <span aria-hidden className="text-accent/40">
              ·
            </span>
          ) : null}
          <span className="font-mono-meta text-[0.65rem] uppercase tracking-wide text-accent">
            {tag}
          </span>
        </li>
      ))}
    </ul>
  );
}
