import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

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
      ? "inline-flex items-center justify-center rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-bg transition hover:brightness-110 disabled:opacity-50"
      : "inline-flex items-center gap-1 text-sm font-medium text-fg underline decoration-line underline-offset-4 transition hover:text-accent hover:decoration-accent";

  if (href) {
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
