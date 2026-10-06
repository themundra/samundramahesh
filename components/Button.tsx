import type { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

function isInternalHref(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function Button({
  href,
  variant = "primary",
  children,
  type = "button",
  className = "",
  disabled,
  onClick,
}: ButtonProps) {
  const base =
    variant === "primary"
      ? "inline-flex min-h-11 w-full items-center justify-center rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-bg transition hover:brightness-110 active:brightness-95 disabled:opacity-50 sm:w-auto"
      : "inline-flex items-center gap-1 text-sm font-medium text-fg underline decoration-line underline-offset-4 transition hover:text-accent hover:decoration-accent active:opacity-70";

  if (href) {
    if (isInternalHref(href)) {
      return (
        <Link href={href} className={`${base} ${className}`}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={`${base} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${className}`}
    >
      {children}
    </button>
  );
}
