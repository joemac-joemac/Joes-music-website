"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ALL_FAQ_ITEMS } from "@/lib/faq"

function renderAnswer(answer: string | string[]) {
  if (Array.isArray(answer)) {
    return answer.map((paragraph) => (
      <p key={paragraph}>{paragraph}</p>
    ))
  }
  return <p>{answer}</p>
}

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="section-title">FAQs</h2>
          <div className="section-title-underline" />
        </div>

        <Accordion type="single" collapsible className="w-full">
          {ALL_FAQ_ITEMS.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger className="text-base sm:text-lg font-semibold text-foreground hover:text-[var(--neon-pink)] hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed space-y-4">
                {renderAnswer(faq.answer)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
