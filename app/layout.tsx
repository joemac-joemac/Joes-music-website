import React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { buildSiteJsonLdGraph } from "@/lib/schema"
import { HOMEPAGE_DESCRIPTION, HOMEPAGE_TITLE, SITE_URL } from "@/lib/site"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

const jsonLd = buildSiteJsonLdGraph()

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOMEPAGE_TITLE,
    template: "%s | Joe Mac",
  },
  description: HOMEPAGE_DESCRIPTION,
  keywords: [
    "wedding musician",
    "live music Auckland",
    "corporate entertainment",
    "private events musician",
    "Waikato wedding music",
    "Bay of Plenty live music",
    "acoustic musician NZ",
    "full band wedding",
  ],
  authors: [{ name: "Joe Mac", url: SITE_URL }],
  creator: "Joe Mac",
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: SITE_URL,
    siteName: "Joe Mac",
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESCRIPTION,
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
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESCRIPTION,
    images: ["/images/hero-live.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: SITE_URL },
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
