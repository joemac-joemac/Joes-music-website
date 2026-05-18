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

export const SHOW_PAGES: ShowPageData[] = [
  {
    slug: "live-music-auckland-example",
    venueName: "Harbour View Lounge",
    location: "Auckland CBD, Auckland",
    date: "Saturday 14 June 2026",
    shortDescription:
      "An evening of live acoustic music overlooking the harbour—relaxed sets, sing-alongs, and dance-floor favourites.",
    image: "/images/hero-live.jpg",
    imageAlt: "Joe Mac performing live acoustic music in Auckland",
    content: [
      "There's something special about live music in Auckland when the city lights start to glow and the room settles into that easy weekend energy. At Harbour View Lounge, I perform solo acoustic sets designed to lift the atmosphere without overpowering conversation—think warm guitar, familiar melodies, and the kind of performance that feels personal rather than staged.",
      "Whether you're meeting friends after work, celebrating a milestone, or simply enjoying a night out, the music is built around the room. I read the crowd in real time, moving from laid-back acoustic favourites to upbeat sing-along moments as the evening builds. It's the same approach I bring to weddings and private events across Auckland, Waikato, Coromandel & Bay of Plenty: flexible, professional, and focused on creating a memorable experience.",
      "Venues like this are where live music shines—intimate enough to connect, spacious enough to breathe. Expect a mix of contemporary hits, timeless classics, and requests when the vibe calls for it. If you're planning a similar event and want live entertainment tailored to your space, get in touch for a quote. You can also browse upcoming public shows on the homepage to see where I'm playing next.",
    ],
  },
]

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
