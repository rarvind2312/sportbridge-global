import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

/**
 * Single authoritative robots.txt — native Next.js App Router.
 * Do not add public/robots.txt alongside this.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/404",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
