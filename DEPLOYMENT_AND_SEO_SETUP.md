# How to do the suggested SEO setup

Step-by-step for the three items: **live URL**, **image optimization**, and **OG image**.

---

## 1. Set your live URL

Your site uses `NEXT_PUBLIC_SITE_URL` for metadata, sitemap, and JSON-LD. Set it in production and optionally locally.

### On Vercel

1. Open your project: [vercel.com](https://vercel.com) → your project (e.g. **musician-website-design**).
2. Go to **Settings** → **Environment Variables**.
3. Click **Add New**.
4. Set:
   - **Name:** `NEXT_PUBLIC_SITE_URL`
   - **Value:** `https://joemac.co.nz` (or your real domain, no trailing slash)
   - **Environments:** tick **Production** (and Preview if you use a custom preview URL).
5. Save.
6. **Redeploy** so the new variable is used: **Deployments** → ⋮ on the latest deployment → **Redeploy**.

### Other hosts (Netlify, etc.)

- **Netlify:** Site settings → **Environment variables** → add `NEXT_PUBLIC_SITE_URL` = `https://joemac.co.nz` → trigger a new deploy.
- **Railway / Render / similar:** Project → **Variables** or **Environment** → add the same → redeploy.

### Locally (optional)

Create or edit `.env.local` in the project root (this file is gitignored):

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Use `http://localhost:3000` only for local; production must use your real domain (e.g. `https://joemac.co.nz`).

---

## 2. Image optimization (Core Web Vitals)

`images.unoptimized` has been turned **off** in `next.config.mjs`, so Next.js will optimize images (smaller files, modern formats). That helps LCP and SEO.

### What you need to do

- **Redeploy** after the config change. No other steps required if you’re on Vercel or a Node-compatible host.

### If the build or runtime fails

Some setups (e.g. static export, or hosts that don’t run the Next server) need `unoptimized: true`. If you see image-related errors after turning it off:

1. Open `next.config.mjs`.
2. Set `unoptimized` back to `true`:
   ```js
   images: {
     unoptimized: true,
   },
   ```
3. Redeploy.

So: try with optimization on first; only switch back if you hit issues.

---

## 3. OG image (social previews)

For reliable link previews (e.g. Facebook, Twitter, iMessage), use an image that’s at least **1200×630 px**.

### Option A: Use your current hero image

If `/public/images/hero-live.jpg` is already at least 1200×630:

- You don’t need to change anything; the layout already uses it for Open Graph and Twitter.

### Option B: Add a dedicated OG image (recommended)

1. **Create or export an image** at **1200×630 px** (e.g. a crop of your hero photo, or a simple graphic with your name/logo).
2. **Save it as:**  
   `public/images/og.jpg`  
   (or `og.png`).
3. **Point metadata at it** in `app/layout.tsx`:
   - Find the `openGraph` block and change the image `url` from `"/images/hero-live.jpg"` to `"/images/og.jpg"` (or `og.png`).
   - Find the `twitter` block and set `images: ["/images/og.jpg"]` (or `og.png`).

Example for `og.jpg`:

```ts
// In openGraph.images:
{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Joe Mac performing live" }

// In twitter.images:
["/images/og.jpg"]
```

4. **Redeploy** so the new image is live.

### Quick size check

- **Mac:** Right‑click the file → **Get Info** → check dimensions, or open in Preview and use **Tools → Adjust Size**.
- **Online:** Use a tool like [squoosh.app](https://squoosh.app) to resize/crop to 1200×630 and export as JPG or PNG.

---

## Summary

| Step | Action |
|------|--------|
| **1. Live URL** | Add `NEXT_PUBLIC_SITE_URL=https://joemac.co.nz` in your host’s environment variables, then redeploy. |
| **2. Image optimization** | Already updated in `next.config.mjs`; redeploy. If something breaks, set `unoptimized: true` again. |
| **3. OG image** | Use hero at 1200×630 or add `public/images/og.jpg` (1200×630) and point `openGraph` and `twitter` in `app/layout.tsx` at it. |

After each change, redeploy and test:

- **URL:** Check that `metadataBase` and canonical links use `https://joemac.co.nz` (view page source or use “Share” preview).
- **OG:** Use [opengraph.xyz](https://www.opengraph.xyz/) or similar with `https://joemac.co.nz` to confirm the image and text.

If you tell me your exact domain and host (e.g. Vercel + joemac.co.nz), I can give you copy‑paste values for the env var and the OG image paths.
