"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { getShowPath } from "@/lib/shows"

const MONTH_NAMES: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
}

type Gig = {
  month: string
  day: string
  year: string
  title: string
  venue: string
  time: string
  ticketUrl?: string
  showSlug?: string
}

function isUpcoming(gig: Gig): boolean {
  const monthIndex = MONTH_NAMES[gig.month]
  if (monthIndex === undefined) return true
  const gigDate = new Date(parseInt(gig.year, 10), monthIndex, parseInt(gig.day, 10))
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  gigDate.setHours(0, 0, 0, 0)
  return gigDate >= today
}

function getVenueUrl(venue: string): string | undefined {
  const normalized = venue.toLowerCase()
  if (normalized.includes("lookout")) return "https://www.thelookoutbar.co.nz"
  if (normalized.includes("helm")) return "https://thehelm.co.nz"
  if (normalized.includes("fergus")) return "https://fergusbar.co.nz"
  if (normalized.includes("barbershop")) return "https://barbershop.co.nz"
  return undefined
}

const GIG_CARD_CLASS =
  "rounded-xl border border-border bg-card p-6 hover:border-[var(--neon-pink)]/50 hover:shadow-[0_0_20px_rgba(255,45,122,0.15)] transition-all"

const ALL_GIGS: Gig[] = [
    {
      month: "Mar",
      day: "13",
      year: "2026",
      title: "Solo @ The Lookout Bar & Kitchen",
      venue: "The Lookout Bar & Kitchen",
      time: "5pm - 9pm",
    },
    {
      month: "Mar",
      day: "14",
      year: "2026",
      title: "Solo @ The Helm Bar & Kitchen",
      venue: "The Helm Bar & Kitchen",
      time: "4pm - 8pm",
    },
    {
      month: "Mar",
      day: "15",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "Mar",
      day: "20",
      year: "2026",
      title: "Solo @ The Lookout Bar & Kitchen",
      venue: "The Lookout Bar & Kitchen",
      time: "5pm - 9pm",
    },
    {
      month: "Mar",
      day: "21",
      year: "2026",
      title: "Solo @ The Helm Bar & Kitchen",
      venue: "The Helm Bar & Kitchen",
      time: "4pm - 8pm",
    },
    {
      month: "Mar",
      day: "27",
      year: "2026",
      title: "Dumpweed - Blink 182 Tribute Band",
      venue: "Paisley Stage, Napier",
      time: "9pm - late",
      ticketUrl:
        "https://www.undertheradar.co.nz/gig/101033/Dumpweed---Blink-182-Tribute-Band.utr",
    },
    {
      month: "Mar",
      day: "28",
      year: "2026",
      title: "Solo @ The Helm",
      venue: "The Helm",
      time: "4pm - 8pm",
    },
    {
      month: "Mar",
      day: "29",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "Apr",
      day: "3",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "Apr",
      day: "5",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "Apr",
      day: "11",
      year: "2026",
      title: "Solo @ The Helm",
      venue: "The Helm",
      time: "4pm - 8pm",
    },
    {
      month: "Apr",
      day: "12",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "Apr",
      day: "17",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "Apr",
      day: "18",
      year: "2026",
      title: "Solo @ The Helm",
      venue: "The Helm",
      time: "4pm - 8pm",
    },
    {
      month: "Apr",
      day: "19",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "Apr",
      day: "24",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "Apr",
      day: "25",
      year: "2026",
      title: "Solo @ The Helm",
      venue: "The Helm",
      time: "4pm - 8pm",
    },
    {
      month: "Apr",
      day: "26",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "May",
      day: "1",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "May",
      day: "2",
      year: "2026",
      title: "Solo @ The Helm",
      venue: "The Helm",
      time: "4pm - 8pm",
    },
    {
      month: "May",
      day: "3",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "May",
      day: "8",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "May",
      day: "9",
      year: "2026",
      title: "Solo @ The Helm",
      venue: "The Helm",
      time: "4pm - 8pm",
    },
    {
      month: "May",
      day: "10",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "May",
      day: "15",
      year: "2026",
      title: "Joe Mac Duo w/ Sam Ryan",
      venue: "Latitude 37",
      time: "9:30pm - 12:30am",
    },
    {
      month: "May",
      day: "16",
      year: "2026",
      title: "Solo @ The Helm",
      venue: "The Helm",
      time: "4pm - 8pm",
    },
    {
      month: "May",
      day: "17",
      year: "2026",
      title: "Solo @ Pink Ribbon Brunch @ The Lookout ($20)",
      venue: "Pink Ribbon Brunch @ The Lookout ($20)",
      time: "9:30am - 12:00pm",
      ticketUrl:
        "mailto:INFO@THELOOKOUTBAR.CO.NZ?subject=Pink%20Ribbon%20Brunch%20tickets",
    },
    {
      month: "May",
      day: "22",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "May",
      day: "23",
      year: "2026",
      title: "Solo @ The Helm",
      venue: "The Helm",
      time: "4pm - 8pm",
    },
    {
      month: "May",
      day: "24",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "May",
      day: "29",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "May",
      day: "30",
      year: "2026",
      title: "Solo @ The Helm",
      venue: "The Helm",
      time: "4pm - 8pm",
    },
    {
      month: "May",
      day: "31",
      year: "2026",
      title: "Solo @ Good George Dining Hall",
      venue: "Good George Dining Hall",
      time: "12pm - 3pm",
    },
    {
      month: "May",
      day: "31",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "Jun",
      day: "5",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "Jun",
      day: "6",
      year: "2026",
      title: "Solo @ The Helm",
      venue: "The Helm",
      time: "4pm - 8pm",
    },
    {
      month: "Jun",
      day: "7",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "Jun",
      day: "12",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "Jun",
      day: "13",
      year: "2026",
      title: "Solo @ The Helm",
      venue: "The Helm",
      time: "4pm - 8pm",
    },
    {
      month: "Jun",
      day: "14",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "Jun",
      day: "19",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "Jun",
      day: "20",
      year: "2026",
      title: "Solo @ The Helm",
      venue: "The Helm",
      time: "4pm - 8pm",
    },
    {
      month: "Jun",
      day: "21",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "Jun",
      day: "26",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "Jun",
      day: "27",
      year: "2026",
      title: "Solo @ The Helm",
      venue: "The Helm",
      time: "4pm - 8pm",
    },
    {
      month: "Jun",
      day: "28",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "Jul",
      day: "10",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "Jul",
      day: "12",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "Jul",
      day: "17",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "Jul",
      day: "18",
      year: "2026",
      title: "Solo @ The Helm",
      venue: "The Helm",
      time: "4pm - 8pm",
    },
    {
      month: "Jul",
      day: "19",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "Jul",
      day: "24",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "Jul",
      day: "25",
      year: "2026",
      title: "Solo @ The Helm",
      venue: "The Helm",
      time: "4pm - 8pm",
    },
    {
      month: "Jul",
      day: "26",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "Jul",
      day: "31",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "Aug",
      day: "1",
      year: "2026",
      title: "Solo @ The Helm",
      venue: "The Helm",
      time: "4pm - 8pm",
    },
    {
      month: "Aug",
      day: "2",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "Aug",
      day: "7",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "Aug",
      day: "9",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "Aug",
      day: "14",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "Aug",
      day: "15",
      year: "2026",
      title: "Solo @ The Helm",
      venue: "The Helm",
      time: "4pm - 8pm",
    },
    {
      month: "Aug",
      day: "16",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "Aug",
      day: "21",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "Aug",
      day: "22",
      year: "2026",
      title: "Solo @ The Helm",
      venue: "The Helm",
      time: "4pm - 8pm",
    },
    {
      month: "Aug",
      day: "23",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "Aug",
      day: "28",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "Aug",
      day: "29",
      year: "2026",
      title: "Solo @ The Helm",
      venue: "The Helm",
      time: "4pm - 8pm",
    },
    {
      month: "Aug",
      day: "30",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "Sep",
      day: "4",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "Sep",
      day: "5",
      year: "2026",
      title: "Private event @ Saints Public House",
      venue: "Saints Public House",
      time: "Private event",
    },
    {
      month: "Sep",
      day: "6",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "Sep",
      day: "11",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "Sep",
      day: "12",
      year: "2026",
      title: "Private event @ The Lookout",
      venue: "The Lookout",
      time: "Private event",
    },
    {
      month: "Sep",
      day: "13",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "Sep",
      day: "18",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "Sep",
      day: "19",
      year: "2026",
      title: "Solo @ Barbershop co",
      venue: "Barbershop co",
      time: "9am - 12pm",
    },
    {
      month: "Sep",
      day: "20",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
    {
      month: "Sep",
      day: "25",
      year: "2026",
      title: "Solo @ The Lookout",
      venue: "The Lookout",
      time: "5pm - 9pm",
    },
    {
      month: "Sep",
      day: "26",
      year: "2026",
      title: "Solo @ The Helm",
      venue: "The Helm",
      time: "4pm - 8pm",
    },
    {
      month: "Sep",
      day: "27",
      year: "2026",
      title: "Solo @ Fergus Bar & Restaurant",
      venue: "Fergus Bar & Restaurant",
      time: "4pm - 7pm",
    },
  ]

export function UpcomingGigs() {
  // Filter in the browser so "today" is always real for the visitor — static Next.js
  // builds bake in server `new Date()` at build time, so past events never disappeared.
  const [gigs, setGigs] = useState<Gig[] | null>(null)

  useEffect(() => {
    setGigs(ALL_GIGS.filter(isUpcoming))
  }, [])

  return (
    <section id="shows" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Gig Guide</h2>
          <p className="mt-4 text-foreground/70 text-lg">
            Catch me live at these venues
          </p>
          <div className="section-title-underline" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {gigs === null ? (
            <p className="col-span-full text-center text-foreground/60 py-8">
              Loading schedule…
            </p>
          ) : gigs.length === 0 ? (
            <p className="col-span-full text-center text-foreground/60 py-8">
              No upcoming public shows listed right now — check back soon!
            </p>
          ) : (
            gigs.map((gig) => {
              const venueUrl = getVenueUrl(gig.venue)
              const cardContent = (
                <>
                  {/* Date block */}
                  <div className="mb-4">
                    <span className="block text-2xl font-bold text-[var(--neon-pink)] drop-shadow-[0_0_10px_rgba(255,45,122,0.4)]">
                      {gig.month} {gig.day}
                    </span>
                    <span className="block text-sm text-foreground/60">{gig.year}</span>
                  </div>
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2">{gig.title}</h3>
                  {/* Venue • Time */}
                  <p className="text-foreground/80 mb-4">
                    {gig.venue} • {gig.time}
                  </p>
                  {gig.showSlug ? (
                    <p className="mb-4">
                      <Link
                        href={getShowPath(gig.showSlug)}
                        className="text-sm font-medium text-[var(--neon-blue)] hover:underline"
                        onClick={(event) => event.stopPropagation()}
                      >
                        View show details
                      </Link>
                    </p>
                  ) : null}
                  {gig.ticketUrl ? (
                    <div>
                      <p className="text-sm font-semibold text-[var(--neon-pink)] mb-2 drop-shadow-[0_0_8px_rgba(255,45,122,0.4)]">
                        🎫 TICKETS AVAILABLE
                      </p>
                      <a
                        href={gig.ticketUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex items-center justify-center rounded-full border border-[var(--neon-pink)] px-4 py-1 text-sm font-semibold text-[var(--neon-pink)] hover:bg-[var(--neon-pink)] hover:text-black transition-colors"
                      >
                        Buy tickets
                      </a>
                    </div>
                  ) : null}
                </>
              )

              if (venueUrl) {
                return (
                  <a
                    key={`${gig.day}-${gig.month}-${gig.venue}`}
                    href={venueUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`${GIG_CARD_CLASS} block no-underline text-inherit`}
                  >
                    {cardContent}
                  </a>
                )
              }

              return (
                <div
                  key={`${gig.day}-${gig.month}-${gig.venue}`}
                  className={GIG_CARD_CLASS}
                >
                  {cardContent}
                </div>
              )
            })
          )}
        </div>
      </div>
    </section>
  )
}
