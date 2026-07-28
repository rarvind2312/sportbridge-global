import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/services", priority: 0.8 },
    { path: "/network", priority: 0.8 },
    { path: "/opportunities", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
  ] as const;

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path === "/" ? "/" : route.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));
}
