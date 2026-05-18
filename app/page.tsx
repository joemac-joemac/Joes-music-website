import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Reviews } from "@/components/reviews"
import { FAQ } from "@/components/faq"
import { Videos } from "@/components/videos"
import { UpcomingGigs } from "@/components/upcoming-gigs"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { HOMEPAGE_DESCRIPTION, HOMEPAGE_TITLE, SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: HOMEPAGE_TITLE,
  description: HOMEPAGE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESCRIPTION,
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Reviews />
      <FAQ />
      <Videos />
      <UpcomingGigs />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
