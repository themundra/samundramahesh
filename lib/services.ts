import { services, type Service } from "@/content/services";

export function listServices(): Service[] {
  return services;
}

export function getServiceBySlug(slug: string): Service | null {
  return services.find((s) => s.id === slug) ?? null;
}

export function listServiceSlugs(): string[] {
  return services.map((s) => s.id);
}
