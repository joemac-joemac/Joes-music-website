import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-live.jpg"
          alt="Joe Mac performing live"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/JoeMacLtd_logo_v.10.png"
            alt="Joe Mac"
            width={500}
            height={250}
            className="mx-auto w-72 sm:w-96 md:w-[450px] h-auto"
            priority
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-base font-semibold uppercase tracking-wider"
          >
            <Link href="#contact">Book Joe Mac</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-foreground/30 text-foreground hover:bg-foreground/10 hover:border-foreground/50 bg-transparent px-10 py-6 text-base font-semibold uppercase tracking-wider"
          >
            <Link href="#shows">Upcoming Shows</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#about" className="text-foreground/50 hover:text-primary transition-colors">
          <ChevronDown className="h-8 w-8" />
          <span className="sr-only">Scroll down</span>
        </Link>
      </div>
    </section>
  )
}
