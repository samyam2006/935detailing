# 935 Detailing

A full-stack, multi-page marketing website for **935 Detailing** — a precision
auto-detailing company based in California. Built with a dark, cinematic brand
aesthetic pulled straight from the logo: obsidian black, racing crimson and
brushed metallic silver.

## ✨ Features

- **Multi-page site** — Home, Services & Pricing, Gallery, About, and a
  Book/Contact page with a working backend.
- **Full-stack** — a validated `POST /api/contact` booking endpoint (honeypot
  spam protection + in-memory rate limiting) powering the booking form.
- **Custom artwork, no stock photos** — every vehicle is a hand-built,
  fully-themeable SVG sports-coupe, so the visuals are 100% original and load
  instantly.
- **Motion throughout** — scroll reveals, an animated navbar, hover states, a
  parallax hero and an interactive drag-to-compare before/after slider
  (Framer Motion).
- **Brand-matched design system** — metallic/crimson gradient text, carbon-fiber
  and grid textures, glass panels and a crimson glow language.
- **Responsive & accessible** — mobile menu, `prefers-reduced-motion` support,
  semantic markup and SEO metadata.
- **Real social links** — Instagram, X, YouTube and TikTok wired to the
  business accounts.

## 🧱 Tech Stack

| Layer      | Choice                                  |
| ---------- | --------------------------------------- |
| Framework  | Next.js 15 (App Router) + React 19      |
| Language   | TypeScript                              |
| Styling    | Tailwind CSS v4                         |
| Animation  | Framer Motion                           |
| Icons      | lucide-react                            |

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

### Production

```bash
npm run build
npm run start
```

## 📁 Structure

```
app/
  layout.tsx          # root layout, nav + footer, SEO metadata
  page.tsx            # Home
  services/page.tsx   # Services & pricing + FAQ
  gallery/page.tsx    # Filterable showcase + before/after
  about/page.tsx      # Story + values
  contact/page.tsx    # Booking form + contact details
  api/contact/route.ts# Backend booking endpoint
  globals.css         # Brand design system
components/           # Navbar, Footer, Hero, CarArt (SVG), BookingForm, …
lib/site.ts           # Central content: services, socials, testimonials, …
```

## 🎨 Customizing content

Business content lives in **`lib/site.ts`** — contact details, service packages
and pricing, testimonials and gallery items. Update the values there and the
whole site follows. Brand colors are defined as tokens in
**`app/globals.css`** under `@theme`.

### Wiring up the booking endpoint

`app/api/contact/route.ts` currently validates and logs each lead. To deliver
bookings for real, connect it to your email/CRM/DB of choice (e.g. Resend,
SendGrid, or a database) where it logs the `booking` object.

---

Serving all of California. Crafted with precision.
