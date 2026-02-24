import React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://joemac.co.nz"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Joe Mac",
      description:
        "Professional musician and live performer for private events, weddings, corporate functions, and live shows. Member of Dumpweed (Blink-182 tribute).",
      url: siteUrl,
      image: `${siteUrl}/images/hero-live.jpg`,
      jobTitle: "Musician & Live Performer",
      knowsAbout: ["Live music", "Guitar", "Wedding entertainment", "Corporate events", "Blink-182 tribute"],
      sameAs: [
        "https://instagram.com/joemac_joemac",
        "https://www.youtube.com/@joemac_joemac",
        "https://open.spotify.com/artist/4WgEIXgoeLApCW0dy00csU",
        "https://music.apple.com/nz/artist/joe-mac/1663664151",
      ],
      email: "hi@joemac.co.nz",
      telephone: "+6421563808",
    },
    {
      "@type": "MusicGroup",
      "@id": `${siteUrl}/#dumpweed`,
      name: "Dumpweed",
      description: "Blink-182 tribute band",
      url: siteUrl,
      member: { "@id": `${siteUrl}/#person` },
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Joe Mac | Musician & Live Performer",
    template: "%s | Joe Mac",
  },
  description:
    "Professional musician available for private events, weddings, and corporate functions. Also performing with Dumpweed (Blink-182 tribute) and other live acts.",
  keywords: [
    "musician",
    "guitarist",
    "live music",
    "wedding band",
    "private events",
    "Blink-182 tribute",
    "New Zealand musician",
  ],
  authors: [{ name: "Joe Mac", url: siteUrl }],
  creator: "Joe Mac",
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: siteUrl,
    siteName: "Joe Mac",
    title: "Joe Mac | Musician & Live Performer",
    description:
      "Professional musician available for private events, weddings, and corporate functions. Dumpweed (Blink-182 tribute) and live performances across NZ.",
    images: [
      {
        url: "/images/hero-live.jpg",
        width: 1200,
        height: 630,
        alt: "Joe Mac performing live",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joe Mac | Musician & Live Performer",
    description:
      "Professional musician for weddings, corporate events & live shows. Dumpweed (Blink-182 tribute) & solo gigs across NZ.",
    images: ["/images/hero-live.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#1c1b24",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
