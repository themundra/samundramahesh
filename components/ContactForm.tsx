"use client";

import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/Button";
import { TextLink } from "@/components/TextLink";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | "unavailable"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverMessage, setServerMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setServerMessage("");

    const form = new FormData(e.currentTarget);
    const values = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      message: String(form.get("message") ?? ""),
    };

    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        message?: string;
      };

      if (res.status === 503) {
        setStatus("unavailable");
        setServerMessage(
          data.message ??
            "Email service is not configured. Please use the mailto link.",
        );
        return;
      }

      if (!res.ok) {
        setStatus("error");
        setServerMessage(data.error ?? "Something went wrong. Try again.");
        return;
      }

      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
      setServerMessage("Network error. Try again or use email.");
    }
  }

  const fieldClass =
    "mt-2 w-full rounded-sm border border-line bg-bg px-3 py-3 text-base text-fg";

  return (
    <div className="rounded-sm border border-line bg-bg-elevated p-5 md:p-8">
      <form onSubmit={onSubmit} className="space-y-5" noValidate>
        <div>
          <label htmlFor="name" className="block text-sm text-fg">
            Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" role="alert" className="mt-1 text-sm text-danger">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-fg">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p
              id="email-error"
              role="alert"
              className="mt-1 text-sm text-danger"
            >
              {errors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-fg">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={fieldClass}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message ? (
            <p
              id="message-error"
              role="alert"
              className="mt-1 text-sm text-danger"
            >
              {errors.message}
            </p>
          ) : null}
        </div>

        <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
          {status === "loading" ? "Sending…" : "Send message"}
        </Button>
      </form>

      <div className="mt-6 space-y-2 text-sm" aria-live="polite">
        {status === "success" ? (
          <p className="text-success">Message sent. I will get back to you.</p>
        ) : null}
        {status === "error" ? (
          <p className="text-danger">{serverMessage}</p>
        ) : null}
        {status === "unavailable" ? (
          <p className="text-muted">
            {serverMessage}{" "}
            <TextLink href="mailto:mahesamun@gmail.com">
              mahesamun@gmail.com
            </TextLink>
          </p>
        ) : null}
        {status === "idle" ? (
          <p className="text-muted">
            Prefer email?{" "}
            <TextLink href="mailto:mahesamun@gmail.com">
              mahesamun@gmail.com
            </TextLink>
          </p>
        ) : null}
      </div>
    </div>
  );
}
