import Image from "next/image"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { InstagramIcon, YoutubeIcon, SpotifyIcon, AppleMusicIcon } from "@/components/brand-icons"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#videos", label: "Videos" },
    { href: "#shows", label: "Shows" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ]

  const socialLinks = [
    { href: "https://instagram.com/joemac_joemac", icon: InstagramIcon, label: "Instagram", iconClassName: "text-[#E4405F]" },
    { href: "http://www.youtube.com/@joemac_joemac", icon: YoutubeIcon, label: "YouTube", iconClassName: "text-[#FF0000]" },
    { href: "https://open.spotify.com/artist/4WgEIXgoeLApCW0dy00csU?si=_YqRBM_DSQmspJItBIRTQw", icon: SpotifyIcon, label: "Spotify", iconClassName: "text-[#1DB954]" },
    { href: "https://music.apple.com/nz/artist/joe-mac/1663664151", icon: AppleMusicIcon, label: "Apple Music", iconClassName: "text-[#FA243C]" },
    { href: "mailto:hi@joemac.co.nz", icon: Mail, label: "Email" },
    { href: "tel:+6421563808", icon: Phone, label: "Phone" },
  ]

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <Image
              src="/images/JoeMacLtd_logo_v.13_tr.png"
              alt="Joe Mac"
              width={150}
              height={75}
              className="h-16 w-auto object-contain"
            />
            <p className="text-foreground/60 text-sm">
              Live music for every occasion. Weddings, corporate events, private parties, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground uppercase tracking-wider text-sm">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-2 rounded-lg bg-muted border border-border text-foreground/60 hover:text-primary hover:border-primary/50 transition-all"
                >
                  <social.icon className={`h-5 w-5 ${social.iconClassName ?? ""}`} />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
            <p className="text-foreground/60 text-sm">
              <Link href="mailto:hi@joemac.co.nz" className="hover:text-primary transition-colors">
                hi@joemac.co.nz
              </Link>
              <br />
              <Link href="tel:+6421563808" className="hover:text-primary transition-colors">
                (+64) 21 563 808
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-foreground/50 text-sm">
            &copy; {currentYear} Joe Mac. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
