import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getAllShowSlugs, getShowBySlug } from "@/lib/shows"
import { buildShowEventJsonLd } from "@/lib/schema"
import { SITE_URL } from "@/lib/site"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllShowSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const show = getShowBySlug(slug)
  if (!show) return {}

  return {
    title: `${show.venueName} — Live Music | Joe Mac`,
    description: show.shortDescription,
    alternates: { canonical: `${SITE_URL}/shows/${show.slug}` },
    openGraph: {
      title: `${show.venueName} — Live Music | Joe Mac`,
      description: show.shortDescription,
      url: `${SITE_URL}/shows/${show.slug}`,
      images: [{ url: show.image, alt: show.imageAlt }],
    },
  }
}

export default async function ShowPage({ params }: PageProps) {
  const { slug } = await params
  const show = getShowBySlug(slug)
  if (!show) notFound()

  const eventJsonLd = buildShowEventJsonLd(show)

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <Navigation />
      <article className="pt-28 pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/"
              className="text-sm font-medium text-foreground/60 hover:text-[var(--neon-pink)] transition-colors"
            >
              ← Back to homepage
            </Link>
          </div>

          <header className="text-center mb-10">
            <p className="text-sm uppercase tracking-wider text-[var(--neon-blue)] mb-2">
              Live performance
            </p>
            <h1 className="section-title text-3xl sm:text-4xl">{show.venueName}</h1>
            <div className="section-title-underline" />
            <p className="mt-4 text-foreground/70 text-lg">{show.location}</p>
            <p className="mt-2 text-foreground/60">{show.date}</p>
            <p className="mt-6 text-foreground/80 text-lg leading-relaxed">
              {show.shortDescription}
            </p>
          </header>

          <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-10 border border-border">
            <Image
              src={show.image}
              alt={show.imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            {show.content.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="btn-neon-pink px-10 py-6 text-base font-semibold uppercase tracking-wider rounded-[10px]"
            >
              <Link href="/#contact">Get a Quote for Your Event</Link>
            </Button>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
