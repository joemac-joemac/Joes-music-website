"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, Instagram, Youtube, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hi@joemac.co.nz",
      href: "mailto:hi@joemac.co.nz",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+64) 21 563 808",
      href: "tel:+6421563808",
    },
  ]

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      value: "@joemac_joemac",
      href: "https://instagram.com/joemac_joemac",
    },
    {
      icon: Youtube,
      label: "YouTube",
      value: "@joemac_joemac",
      href: "http://www.youtube.com/@joemac_joemac",
    },
  ]

  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight">
            Get In Touch
          </h2>
          <div className="mt-4 h-1 w-16 bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Details</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors group"
                  >
                    <item.icon className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm text-foreground/60">{item.label}</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Follow Along</h3>
              <div className="space-y-4">
                {socialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors group"
                  >
                    <item.icon className="h-6 w-6 text-secondary" />
                    <div>
                      <p className="text-sm text-foreground/60">{item.label}</p>
                      <p className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">Send a Message</h3>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="h-16 w-16 text-primary mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-2">Message Sent!</h4>
                <p className="text-foreground/70">Joe will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-input border-border text-foreground placeholder:text-foreground/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-input border-border text-foreground placeholder:text-foreground/40"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventType" className="text-foreground">Event Type</Label>
                  <Input
                    id="eventType"
                    name="eventType"
                    placeholder="Wedding, Corporate, Private Party..."
                    className="bg-input border-border text-foreground placeholder:text-foreground/40"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="text-foreground">Event Date</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    className="bg-input border-border text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your event..."
                    rows={4}
                    required
                    className="bg-input border-border text-foreground placeholder:text-foreground/40 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
