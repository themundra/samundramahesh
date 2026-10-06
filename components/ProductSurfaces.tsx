import Image from "next/image";
import { portfolioSurfaces } from "@/content/portfolio-surfaces";

export type SurfaceItem = {
  src: string;
  alt: string;
  title: string;
  detail: string;
};

type Props = {
  /** Portfolio slug — loads surfaces from content/portfolio-surfaces */
  preset: string;
  /** First N items render as a grid; the rest as list rows */
  gridCount?: number;
};

/**
 * Mixed layout for case-study product screens:
 * a compact image grid, then list rows with title + detail.
 * On mobile the grid is a horizontal snap rail so phones don't stack full-width.
 */
export function ProductSurfaces({ preset, gridCount = 3 }: Props) {
  const items = portfolioSurfaces[preset] ?? [];
  if (items.length === 0) return null;

  const take = Math.max(1, Number(gridCount) || 3);
  const grid = items.slice(0, take);
  const list = items.slice(take);

  return (
    <div className="not-prose my-5 w-full max-w-none space-y-6">
      <ul className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0">
        {grid.map((item) => (
          <li
            key={item.src}
            className="w-[7.75rem] shrink-0 snap-start border border-line bg-bg-elevated sm:w-auto sm:shrink"
          >
            <div className="relative aspect-[9/16] overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 124px, 220px"
              />
            </div>
            <p className="border-t border-line px-3 py-2 font-mono-meta text-[0.65rem] uppercase tracking-[0.14em] text-accent">
              {item.title}
            </p>
          </li>
        ))}
      </ul>

      {list.length > 0 ? (
        <ul className="divide-y divide-line border-y border-line">
          {list.map((item) => (
            <li
              key={item.src}
              className="grid gap-5 py-4 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:items-center sm:gap-8"
            >
              <div className="relative mx-auto aspect-[9/16] w-28 overflow-hidden border border-line bg-bg-elevated sm:mx-0 sm:w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-top"
                  sizes="112px"
                />
              </div>
              <div>
                <p className="font-display text-lg tracking-tight text-fg">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
