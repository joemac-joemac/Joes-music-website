"use client"

import { useState, useEffect } from "react"

const QUOTES = [
  {
    text: "Having Joe's band perform was one of the highlights of our wedding night. They were such a vibe! He definitely knew how to entertain a crowd. So many of our guests commented how epic the band were. Joe also blew us (and our guests) away by performing The Blowers Daughter live while we had our first dance as husband and wife. This was one of the most magical moments of our lives, he was an absolute rockstar!",
    attribution: "Jasmine Ottaway — Wedding",
  },
  {
    text: "Joe is an incredibly talented Musician, I would recommend him to anyone looking for live music! Is very professional and always gets the party started",
    attribution: "Tayla Roa — Wedding & Events at The Red Barn",
  },
  {
    text: "Joe Rocks, either on his own or with the band, makes any night fantastic",
    attribution: "Marg-Ann Davies — Wedding",
  },
  {
    text: "Joe was a critical part of the success of a number of live music venues which the Lawrenson Group operated over a period of nearly ten years. Joe is a versatile musician who is equally comfortable playing as a one-piece providing some chill background music on a summer afternoon, or as the front man of an energetic live band performing to a packed dance floor. Joe's easy going nature makes him a pleasure to work with and I wouldn't hesitate to recommend him for a variety of live music needs",
    attribution: "John Lawrenson — Lawrenson Group",
  },
  {
    text: "Hi Janice here. Just wanted to thank you again for making our night the best it could be. Everyone is raving about the band so I am sure you will get a phone call or 2 for more bookings. Thank you for backing me for my song too. All the best, Janice",
    attribution: "Janice Wilton — Wedding",
  },
  {
    text: "Thank you so much Joe & Crew! You guys were an absolute highlight of our day not only for us but also our guests. From playing a set to keep our guests entertained while we were off getting photos, to learning our first dance song all the way through to parting with us all night long despite our questionable requests. The next day everyone could not stop talking about how amazing the band was, I like to think you were a close second to our family & friends witnessing us getting married. You were an absolute gem to deal with and took all the stress away from the music side of things, get good vendors you trust and that is one less thing to worry about – this was certainly the case with you guys. Would hands down recommend you to anyone, thanks again for being a vital piece in making our day perfect 😊",
    attribution: "Meghan Seamark — Wedding",
  },
  {
    text: "Sarah and I just wanted to send you a thank you email for your performance at the wedding last weekend. We received so much positive feedback from our guests about how much fun they had and how awesome you and the band were. Thanks again for everything, you made the day so awesome and stress free for us. Plus everyone had such a great time!!!!",
    attribution: "Mat and Sarah — Wedding",
  },
]

const HOLD_MS = 10000
const SLIDE_DURATION_MS = 600

export function Reviews() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % QUOTES.length)
    }, HOLD_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-title">What people say</h2>
          <div className="section-title-underline-blue" />
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(-${index * 100}%)`,
              transition: `transform ${SLIDE_DURATION_MS}ms ease-in-out`,
            }}
          >
            {QUOTES.map((quote, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full min-w-full px-2 sm:px-6"
              >
                <blockquote className="text-center max-w-3xl mx-auto">
                  <p className="text-lg sm:text-xl text-foreground/90 italic leading-relaxed">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <footer className="mt-4 text-sm sm:text-base text-foreground/70 not-italic">
                    — {quote.attribution}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to review ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 bg-[var(--neon-blue)] shadow-[0_0_8px_rgba(0,212,255,0.6)]"
                  : "w-2 bg-foreground/30 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
