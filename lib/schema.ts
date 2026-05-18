import { faqAnswerToText, SEO_FAQ_ITEMS } from "@/lib/faq"
import {
  AREAS_SERVED,
  SERVICE_AREA,
  SERVICE_TYPES,
  SITE_URL,
  SOCIAL_PROFILES,
} from "@/lib/site"

export function buildFaqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SEO_FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqAnswerToText(item.answer),
      },
    })),
  }
}

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Musician", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: "Joe Mac",
    url: SITE_URL,
    image: `${SITE_URL}/images/hero-live.jpg`,
    description: `${SERVICE_AREA}. Wedding music, corporate entertainment, private events and live performances.`,
    areaServed: AREAS_SERVED.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    knowsAbout: SERVICE_TYPES,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Live music services",
      itemListElement: SERVICE_TYPES.map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
        },
      })),
    },
    sameAs: [...SOCIAL_PROFILES],
    email: "hi@joemac.co.nz",
    telephone: "+6421563808",
  }
}

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Joe Mac",
    description:
      "Professional musician and live performer for private events, weddings, corporate functions, and live shows. Member of Dumpweed (Blink-182 tribute).",
    url: SITE_URL,
    image: `${SITE_URL}/images/hero-live.jpg`,
    jobTitle: "Musician & Live Performer",
    knowsAbout: [
      "Live music",
      "Guitar",
      "Wedding entertainment",
      "Corporate events",
      "Blink-182 tribute",
    ],
    sameAs: [...SOCIAL_PROFILES],
    email: "hi@joemac.co.nz",
    telephone: "+6421563808",
  }
}

export function buildMusicGroupJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "@id": `${SITE_URL}/#dumpweed`,
    name: "Dumpweed",
    description: "Blink-182 tribute band",
    url: SITE_URL,
    member: { "@id": `${SITE_URL}/#person` },
  }
}

function withoutContext<T extends Record<string, unknown>>(node: T) {
  const { "@context": _context, ...rest } = node
  return rest
}

export function buildSiteJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      withoutContext(buildPersonJsonLd()),
      withoutContext(buildMusicGroupJsonLd()),
      withoutContext(buildLocalBusinessJsonLd()),
      withoutContext(buildFaqPageJsonLd()),
    ],
  }
}

export function buildShowEventJsonLd(show: {
  venueName: string
  location: string
  date: string
  shortDescription: string
  slug: string
  image: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: `Joe Mac live at ${show.venueName}`,
    description: show.shortDescription,
    startDate: show.date,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: show.venueName,
      address: show.location,
    },
    image: `${SITE_URL}${show.image}`,
    url: `${SITE_URL}/shows/${show.slug}`,
    performer: {
      "@type": "Musician",
      name: "Joe Mac",
      url: SITE_URL,
    },
  }
}
