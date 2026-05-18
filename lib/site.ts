export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://joemac.co.nz"

export const SERVICE_AREA =
  "Serving Auckland, Waikato, Coromandel & Bay of Plenty"

export const HOMEPAGE_TITLE =
  "Joe Mac | Wedding & Live Musician | Auckland, Waikato, Coromandel & Bay of Plenty"

export const HOMEPAGE_DESCRIPTION =
  "Live wedding music, corporate entertainment and private event performances across Auckland, Waikato, Coromandel & Bay of Plenty. Solo acoustic and full-band options available."

export const SOCIAL_PROFILES = [
  "https://instagram.com/joemac_joemac",
  "https://www.youtube.com/@joemac_joemac",
  "https://open.spotify.com/artist/4WgEIXgoeLApCW0dy00csU",
  "https://music.apple.com/nz/artist/joe-mac/1663664151",
] as const

export const AREAS_SERVED = [
  "Auckland",
  "Waikato",
  "Coromandel",
  "Bay of Plenty",
] as const

export const SERVICE_TYPES = [
  "Wedding Music",
  "Corporate Entertainment",
  "Private Events",
  "Live Music",
] as const
