"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How much does a wedding musician cost in NZ?",
    answer: [
      "The simple answer is: you get what you pay for.",
      "For solid entertainment from experienced professionals, expect around $250–$350 per hour, per musician. There may be added costs for travel, AV (sound & lighting), a sound engineer, and a huge bowl of brown M&Ms.",
      "If you've found your artist through an agency (rather than booking directly), expect to pay a little extra for that service too.",
      "In most cases, artists and agencies are open to negotiation. If you're on a tight budget (aren't we all!), just be upfront about that from the start.",
    ],
  },
  {
    question: "Can you provide a full band?",
    answer: [
      "Absolutely. I'm fortunate to be part of a large community of highly skilled musos who are experienced enough to work with me to create almost any kind of band you can imagine.",
    ],
  },
  {
    question: "Do you travel outside Auckland?",
    answer: [
      "Yes. There may be added costs for travel and accommodation.",
    ],
  },
  {
    question: "Can you learn our first dance song?",
    answer: [
      "Yes! I love learning special songs for these moments—whether it's walking down the aisle, the signing ceremony, the recessional, or your first dance.",
    ],
  },
  {
    question: "How long are your sets?",
    answer: [
      "A typical party band set is about 3 hours, and we usually won't play past midnight—or whatever the venue's curfew is. If you need the band to play longer, that's negotiable too.",
    ],
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="section-title">FAQs</h2>
          <div className="section-title-underline" />
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger className="text-base sm:text-lg font-semibold text-foreground hover:text-[var(--neon-pink)] hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed space-y-4">
                {faq.answer.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
