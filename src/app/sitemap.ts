import type { MetadataRoute } from "next";
import { PRODUCTION_PAGES, absoluteUrl } from "@/lib/seo";

/**
 * Single authoritative sitemap — native Next.js App Router.
 * Do not add next-sitemap or public/sitemap.xml alongside this.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return PRODUCTION_PAGES.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));
}
