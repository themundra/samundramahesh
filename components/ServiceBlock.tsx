export function ServiceBlock({
  title,
  summary,
  bullets,
}: {
  title: string;
  summary: string;
  bullets: string[];
}) {
  return (
    <div className="grid gap-6 border-t border-line py-10 md:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] md:gap-12">
      <h3 className="font-display text-2xl tracking-tight text-fg">{title}</h3>
      <div>
        <p className="text-base leading-relaxed text-muted">{summary}</p>
        <ul className="mt-5 space-y-2">
          {bullets.map((b) => (
            <li key={b} className="text-sm text-fg/90">
              — {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
