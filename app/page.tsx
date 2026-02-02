import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Videos } from "@/components/videos"
import { UpcomingGigs } from "@/components/upcoming-gigs"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Videos />
      <UpcomingGigs />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
