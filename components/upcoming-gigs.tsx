import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function UpcomingGigs() {
  const gigs = [
    {
      date: "21",
      month: "FEB",
      year: "2026",
      venue: "Smash Palace",
      location: "Gisborne",
      event: "2ble Headed Monster Tribute Tour",
      description: "Dumpweed (Blink-182) & Dub Penguins (Sublime)",
      ticketUrl: "https://undertheradar.co.nz",
      price: "$25 pre-sale / $30 door",
      image: "/images/dumpweed-gisbornesmash-210226.jpg",
      featured: true,
    },
    {
      date: "15",
      month: "MAR",
      year: "2026",
      venue: "The Crown",
      location: "Auckland",
      event: "Joe Mac Acoustic Session",
      description: "Intimate solo performance",
      ticketUrl: "#",
      price: "Free entry",
      featured: false,
    },
    {
      date: "28",
      month: "MAR",
      year: "2026",
      venue: "Totara Street",
      location: "Mount Maunganui",
      event: "Dumpweed Live",
      description: "Blink-182 tribute night",
      ticketUrl: "#",
      price: "$20",
      featured: false,
    },
  ]

  return (
    <section id="shows" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight">
            Shows
          </h2>
          <div className="mt-4 h-1 w-16 bg-primary mx-auto" />
        </div>

        {/* Featured Show */}
        {gigs.filter((g) => g.featured).map((gig) => (
          <div
            key={gig.event}
            className="mb-12 rounded-xl overflow-hidden border border-border bg-card"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image
                  src={gig.image || "/placeholder.svg"}
                  alt={gig.event}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    Featured Show
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  {gig.event}
                </h3>
                <p className="text-foreground/70 mb-4">{gig.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-foreground/80 mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-secondary" />
                    {gig.date} {gig.month} {gig.year}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-secondary" />
                    {gig.venue}, {gig.location}
                  </span>
                </div>
                <p className="text-lg font-semibold text-accent mb-6">{gig.price}</p>
                <Button
                  asChild
                  size="lg"
                  className="w-fit bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href={gig.ticketUrl} target="_blank" rel="noopener noreferrer">
                    Get Tickets
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Other Shows */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gigs.filter((g) => !g.featured).map((gig) => (
            <div
              key={gig.event}
              className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4">
                {/* Date Box */}
                <div className="flex-shrink-0 text-center p-3 rounded-lg bg-muted">
                  <span className="block text-2xl font-bold text-primary">{gig.date}</span>
                  <span className="block text-xs font-semibold text-foreground/70 uppercase">
                    {gig.month}
                  </span>
                </div>
                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-foreground truncate">{gig.event}</h4>
                  <p className="text-sm text-foreground/70">{gig.description}</p>
                  <p className="text-sm text-foreground/60 mt-1 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {gig.venue}, {gig.location}
                  </p>
                  <p className="text-sm font-semibold text-accent mt-2">{gig.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
