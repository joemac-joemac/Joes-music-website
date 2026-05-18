import { MetadataRoute } from "next"
import { getAllShowSlugs } from "@/lib/shows"
import { SITE_URL } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const showEntries = getAllShowSlugs().map((slug) => ({
    url: `${SITE_URL}/shows/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...showEntries,
  ]
}
