import Image from "next/image"
import { Music, Users, Mic2, GraduationCap } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Music,
      title: "1000+ Songs",
      description: "No setlist needed",
    },
    {
      icon: Users,
      title: "Network",
      description: "Top-level musicians",
    },
    {
      icon: Mic2,
      title: "Dumpweed",
      description: "Blink-182 tribute",
    },
    {
      icon: GraduationCap,
      title: "Teacher",
      description: "Multi-instrumentalist",
    },
  ]

  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight">
            About
          </h2>
          <div className="mt-4 h-1 w-16 bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/JoeMac_Outdoor.png"
                alt="Joe Mac performing"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Joe Mac is a seasoned musician and all-around music professional, blending over a decade of live performance experience with a background in commercial music.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              From solo gigs and weddings to corporate events, Joe brings energy, versatility, and a repertoire of 1,000+ songs to every stage—usually without a setlist, letting the night's vibe lead the way, and drawing on a broad network of top-level musicians to deliver memorable performances of all kinds.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              He's also a member of Dumpweed, a high-energy Blink-182 tribute band known for sold-out shows, and is steadily releasing his own original music. During the week, Joe teaches guitar, bass, keyboard, and drums, and works in post-production.
            </p>
            <p className="text-xl text-secondary font-medium italic">
              Music is Joe Mac's life, and he brings passion, experience, and a touch of spontaneity to every gig.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border"
                >
                  <item.icon className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-foreground/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
