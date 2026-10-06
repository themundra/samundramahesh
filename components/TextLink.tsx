import type { ReactNode } from "react";
import Link from "next/link";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function TextLink({
  href,
  children,
  className = "",
  external,
}: TextLinkProps) {
  const classes = `text-fg underline decoration-line underline-offset-4 transition hover:text-accent hover:decoration-accent ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
