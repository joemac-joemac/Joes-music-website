"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Youtube, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#videos", label: "Videos" },
    { href: "#shows", label: "Shows" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ]

  const socialLinks = [
    { href: "https://instagram.com/joemac_joemac", icon: Instagram, label: "Instagram" },
    { href: "http://www.youtube.com/@joemac_joemac", icon: Youtube, label: "YouTube" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/JoeMacLtd_logo_v.10.png"
              alt="Joe Mac"
              width={120}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.label}</span>
              </Link>
            ))}
            <Button asChild size="sm" className="ml-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-lg font-medium text-foreground hover:text-primary transition-colors uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
            <Button asChild className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#contact">Book Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
