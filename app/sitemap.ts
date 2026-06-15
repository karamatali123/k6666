import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/k666-game`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
