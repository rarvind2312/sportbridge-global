/**
 * Authoritative production origin for SEO (sitemap, robots, canonical, OG, JSON-LD).
 * Always HTTPS — never derive this from request headers or hosting defaults.
 */
export const PRODUCTION_ORIGIN = "https://sportbridgeglobal.com.au" as const;

export const PRODUCTION_PAGES = [
  "/",
  "/about",
  "/services",
  "/network",
  "/opportunities",
  "/contact",
] as const;

export function absoluteUrl(path: string = "/"): string {
  if (path === "/" || path === "") return `${PRODUCTION_ORIGIN}/`;
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${PRODUCTION_ORIGIN}${normalised}`;
}
