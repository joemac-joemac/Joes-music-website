export function UpcomingGigs() {
  const gigs = [
    {
      month: "Feb",
      day: "27",
      year: "2026",
      title: "Joe Mac Solo",
      venue: "The Lookout Bar & Kitchen",
      time: "5pm - 9pm",
    },
    {
      month: "Mar",
      day: "1",
      year: "2026",
      title: "Gourmet in the Gardens",
      venue: "Cambridge Memorial Park",
      time: "4pm - 8pm",
    },
    {
      month: "Mar",
      day: "6",
      year: "2026",
      title: "Joe Mac Solo",
      venue: "The Lookout Bar & Kitchen",
      time: "5pm - 9pm",
    },
    {
      month: "Mar",
      day: "8",
      year: "2026",
      title: "Joe Mac Solo",
      venue: "Fergus Bar & Kitchen",
      time: "4pm - 7pm",
    },
    {
      month: "Mar",
      day: "13",
      year: "2026",
      title: "Joe Mac Solo",
      venue: "The Lookout Bar & Kitchen",
      time: "5pm - 9pm",
    },
    {
      month: "Mar",
      day: "14",
      year: "2026",
      title: "Joe Mac Solo",
      venue: "The Helm Bar & Kitchen",
      time: "4pm - 8pm",
    },
    {
      month: "Mar",
      day: "15",
      year: "2026",
      title: "Joe Mac Solo",
      venue: "Fergus Bar & Kitchen",
      time: "4pm - 7pm",
    },
    {
      month: "Mar",
      day: "20",
      year: "2026",
      title: "Joe Mac Solo",
      venue: "The Lookout Bar & Kitchen",
      time: "5pm - 9pm",
    },
    {
      month: "Mar",
      day: "21",
      year: "2026",
      title: "Joe Mac Solo",
      venue: "The Helm Bar & Kitchen",
      time: "4pm - 8pm",
    },
  ]

  return (
    <section id="shows" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Upcoming Public Shows</h2>
          <p className="mt-4 text-foreground/70 text-lg">
            Catch me live at these venues — all shows are free entry!
          </p>
          <div className="section-title-underline" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {gigs.map((gig) => (
            <div
              key={`${gig.day}-${gig.month}-${gig.venue}`}
              className="rounded-xl border border-border bg-card p-6 hover:border-[var(--neon-pink)]/50 hover:shadow-[0_0_20px_rgba(255,45,122,0.15)] transition-all"
            >
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
              {/* Free entry badge */}
              <p className="text-sm font-semibold text-[var(--neon-pink)] mb-1 drop-shadow-[0_0_8px_rgba(255,45,122,0.4)]">🎉 FREE ENTRY</p>
              <p className="text-sm text-foreground/60">No tickets required</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
