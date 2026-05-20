export type ShowPageData = {
  slug: string
  venueName: string
  location: string
  date: string
  shortDescription: string
  image: string
  imageAlt: string
  content: string[]
}

/** Add real public-show pages here when you want dedicated detail URLs. */
export const SHOW_PAGES: ShowPageData[] = []

const showBySlug = new Map(SHOW_PAGES.map((show) => [show.slug, show]))

export function getShowBySlug(slug: string): ShowPageData | undefined {
  return showBySlug.get(slug)
}

export function getAllShowSlugs(): string[] {
  return SHOW_PAGES.map((show) => show.slug)
}

export function getShowPath(slug: string): string {
  return `/shows/${slug}`
}
