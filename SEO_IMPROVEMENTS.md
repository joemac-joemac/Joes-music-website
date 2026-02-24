# SEO Analysis & Improvements

Summary of what was analysed, what was changed, and what you can do next.

---

## What Was Implemented

### 1. **Metadata (layout.tsx)**
- **metadataBase** – Set so Open Graph and canonical URLs resolve correctly (uses `NEXT_PUBLIC_SITE_URL` or `https://joemac.co.nz`).
- **Title template** – `template: "%s | Joe Mac"` for future subpages.
- **Open Graph** – `type`, `locale` (en_NZ), `url`, `siteName`, `title`, `description`, and a hero image for link previews (social, iMessage, etc.).
- **Twitter Card** – `summary_large_image` with title, description, and image so shares look good on Twitter/X.
- **Robots** – Explicit `index: true`, `follow: true` (and `googleBot`).
- **Canonical** – `alternates.canonical` set to the site URL to avoid duplicate-content issues.
- **Authors / creator** – Filled for clarity and rich results.

### 2. **Sitemap & robots.txt**
- **`app/sitemap.ts`** – Dynamic sitemap at `/sitemap.xml` (single page; add more entries when you add routes).
- **`app/robots.ts`** – Allows all crawlers on `/`, disallows `/api/`, and references the sitemap.

### 3. **Single H1 (hero)**
- **`components/hero.tsx`** – One `<h1>` added with class `sr-only`: “Joe Mac — Musician & Live Performer”. Keeps the design unchanged while giving crawlers and screen readers a clear main heading.

### 4. **Structured data (JSON-LD)**
- **Person** – Name, description, url, image, jobTitle, knowsAbout, sameAs (Instagram, YouTube, Spotify, Apple Music), email, telephone.
- **MusicGroup** – Dumpweed as a Blink-182 tribute with link to the Person.

Helps search engines understand who you are and can support knowledge panels and rich results.

### 5. **Accessibility (helps SEO and UX)**
- **Navigation** – `aria-label="Main navigation"` on the main `<nav>`.
- **Mobile menu button** – `aria-label` (“Open menu” / “Close menu”) and `aria-expanded` for state.

---

## Recommendations (Optional Next Steps)

### High impact
1. **Set production URL**  
   In production (e.g. Vercel), set:
   ```bash
   NEXT_PUBLIC_SITE_URL=https://joemac.co.nz
   ```
   (or your real domain) so metadata, canonical, sitemap, and JSON-LD use the correct base URL.

2. **Image optimization**  
   In `next.config.mjs`, `images: { unoptimized: true }` disables Next.js image optimization and can hurt Core Web Vitals (LCP). If you can use the default optimizer (or a provider), turn this off and rely on Next’s `<Image>` for automatic formats and sizing.

3. **OG image size**  
   For best social previews, use an image that’s at least **1200×630** for the hero (or add a dedicated `/images/og.jpg`). If `hero-live.jpg` has different dimensions, consider cropping or a separate OG asset.

### Medium impact
4. **More specific video titles**  
   In `components/videos.tsx`, most entries use the generic title “Performance”. More descriptive titles (e.g. “Joe Mac live at [venue]”) are better for SEO and accessibility.

5. **Blog or “Gigs” page**  
   Adding a simple blog or a “Past gigs / News” page gives more indexable content and long‑tail keywords (e.g. “live music Cambridge NZ”, “wedding musician Waikato”).

6. **Local SEO**  
   If you want to appear for “musician near me” or “wedding band [town]”, add a clear location (e.g. “Based in Cambridge, NZ” or a city/region) in the About section and in metadata/JSON-LD (e.g. `address` or `areaServed` on a LocalBusiness/Person).

### Lower priority
7. **FAQ schema**  
   If you add an FAQ section (e.g. “How do I book?”, “What do you need at the venue?”), you can add FAQPage JSON-LD for potential FAQ rich results.

8. **Event schema**  
   For “Upcoming shows”, you could add `Event` JSON-LD for each gig (date, venue, location) to qualify for event rich results.

---

## What Was Already Good

- Clear **title** and **description** and relevant **keywords**.
- **Section IDs** (`#about`, `#videos`, `#shows`, `#gallery`, `#contact`) for deep links and nav.
- **Semantic sections** with `<section>` and **heading order** (h2 for sections, h3 for gigs).
- **Image alt text** present and descriptive (hero, gallery, about).
- **Social links** use `rel="noopener noreferrer"` and `sr-only` labels where appropriate.
- **Priority** and **quality** set on the hero image for LCP.

---

## Quick checklist

| Item | Status |
|------|--------|
| Unique title & description | Done |
| Open Graph & Twitter Card | Done |
| Canonical URL | Done |
| Sitemap | Done |
| robots.txt | Done |
| Single H1 | Done |
| JSON-LD (Person + MusicGroup) | Done |
| Nav & mobile button accessibility | Done |
| Set `NEXT_PUBLIC_SITE_URL` in production | You |
| Consider turning off `images.unoptimized` | You |
| Optional: Event / FAQ schema, blog | You |

If you tell me your exact live URL and whether you use Vercel (or another host), I can suggest exact env and OG image dimensions next.
