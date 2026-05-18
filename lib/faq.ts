export type FaqItem = {
  question: string
  answer: string | string[]
}

/** FAQ entries used for on-page content and FAQPage JSON-LD */
export const SEO_FAQ_ITEMS: FaqItem[] = [
  {
    question: "How much does a wedding musician cost in NZ?",
    answer:
      "Pricing depends on event type, travel requirements, performance duration and whether you're booking solo acoustic music or a full-band setup. Every event is different, so I provide tailored quotes based on your needs. Whether it's a relaxed ceremony, corporate function or full wedding reception, I can help create a package that fits your event and budget.",
  },
  {
    question: "Can you provide a full band?",
    answer:
      "Yes. While I regularly perform as a solo acoustic musician, I can also provide larger lineups and full-band options depending on your event. From intimate performances through to energetic dance-floor sets, I can tailor the format to suit weddings, private functions and corporate events.",
  },
  {
    question: "Do you travel outside Auckland?",
    answer:
      "Absolutely. I regularly perform across Auckland, Waikato, Coromandel & Bay of Plenty and am available throughout New Zealand for weddings, private events and corporate functions. Travel requirements can be discussed during booking.",
  },
  {
    question: "Can you learn our first dance song?",
    answer:
      "Yes. First dances are one of the most personal moments of a wedding and I'm happy to learn special songs whenever possible. If there's a meaningful song you'd love performed live, let me know early and I'll do my best to make it happen.",
  },
]

export const ADDITIONAL_FAQ_ITEMS: FaqItem[] = [
  {
    question: "How long are your sets?",
    answer: [
      "A typical party band set is about 3 hours, and we usually won't play past midnight—or whatever the venue's curfew is. If you need the band to play longer, that's negotiable too.",
    ],
  },
]

export const ALL_FAQ_ITEMS: FaqItem[] = [...SEO_FAQ_ITEMS, ...ADDITIONAL_FAQ_ITEMS]

export function faqAnswerToText(answer: string | string[]): string {
  return Array.isArray(answer) ? answer.join(" ") : answer
}
