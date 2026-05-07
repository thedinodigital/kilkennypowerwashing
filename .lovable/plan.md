
# Kilkenny Power Washing — Full Site Build Plan

A single-niche, single-region lead-gen site for power washing in County Kilkenny. Rank-and-rent model: clear legal disclosure that the site is not the service provider. Built on TanStack Start (this template's native stack), which gives us SSR/SSG, file-based routing, and per-route `<head>` out of the box — so we don't need react-helmet-async or react-snap.

## Stack confirmation

- TanStack Start (file-based routes in `src/routes/`)
- Tailwind v4 via `src/styles.css` with semantic design tokens
- shadcn/ui components (already installed)
- Per-page meta via TanStack Router `head()` (replaces react-helmet-async)
- Lucide icons
- No backend in v1 — lead form `console.log`s and shows success state
- AI-generated placeholder images saved to `src/assets/`, all tagged `PLACEHOLDER`

## Design system

Tokens added to `src/styles.css` (oklch):
- `--primary` — deep petrol/teal (≈ #0F4C5C)
- `--accent` — warm amber (≈ #E8871E) for CTAs
- `--background` white, `--muted` soft grey (≈ #F7F7F5)
- `--foreground` near-black (≈ #1A1A1A)
- Inter font (Google Fonts via root `<head>` link)
- Mobile-first; sticky bottom "Call Now" bar on mobile across every page

## Routes (22 total)

```
src/routes/
  __root.tsx                                  Header, Footer, MobileStickyCTA, CookieBanner
  index.tsx                                   Homepage
  services.tsx                                Services overview
  services.driveway-cleaning.tsx
  services.patio-cleaning.tsx
  services.roof-cleaning.tsx
  services.render-softwashing.tsx
  services.decking-restoration.tsx
  services.farmyard-commercial.tsx
  locations.tsx                               Locations overview
  locations.kilkenny-city.tsx
  locations.callan.tsx
  locations.thomastown.tsx
  locations.castlecomer.tsx
  locations.graiguenamanagh.tsx
  locations.bennettsbridge.tsx
  locations.freshford.tsx
  locations.gowran.tsx
  about.tsx
  contact.tsx
  privacy.tsx
  cookies.tsx
  terms.tsx
```

Each route defines its own `head()` with unique title, description, canonical, OG/Twitter tags, and JSON-LD schema where appropriate.

## Shared components (`src/components/`)

- `SiteHeader` — logo, nav, desktop "Get a Quote" button
- `SiteFooter` — contact, quick links, mandatory legal disclosure, copyright
- `MobileStickyCTA` — bottom-fixed "Call Now" + "Get Quote" on mobile only
- `LeadForm` — reused on home, every service, every location, contact page. Validates with zod, consent checkbox required, `console.log` + success state
- `ServicesGrid` — 6 service cards
- `LocationsGrid` — 8 location pills
- `TrustStrip` — 3 icons (insured / free quotes / Kilkenny-wide)
- `HowItWorks` — 3-step explainer
- `FAQ` — accordion (shadcn) + emits `FAQPage` JSON-LD when given items
- `BeforeAfterImage` — labelled placeholder image pair
- `CookieBanner` — Accept All / Reject All / Customise (granular: essential always-on, analytics, marketing). Persists to `localStorage`. No scripts fire from it in v1; structured to plug analytics in later.
- `JsonLd` — small helper to inject schema via `head().scripts`
- `ServicePageTemplate`, `LocationPageTemplate` — to keep service/location pages DRY

## Page specs (matching brief)

- **Homepage**: hero (split before/after driveway), inline lead form, trust strip, services grid, how-it-works, locations grid, embedded Google Map iframe (Kilkenny city centre placeholder), FAQ (6 items + FAQPage schema), empty Testimonials section with explicit code comment `{/* REAL TESTIMONIALS WILL BE ADDED — do not fabricate */}`, footer. `LocalBusiness` JSON-LD with placeholder NAP.
- **Service pages**: hero, what's included, process, honest pricing range, before/after gallery, 3 service-specific FAQs, lead form, internal links. `Service` JSON-LD.
- **Location pages**: hero, services-available grid, local-context placeholder paragraphs, coverage area list, lead form, links to nearby locations. `Place` JSON-LD.
- **About / Contact / Privacy / Cookies / Terms**: full Irish-law GDPR privacy policy mentioning third-party contractor data sharing, 12-month retention, DPC complaint right, data subject rights. Cookie policy lists every cookie used (only the consent cookie in v1). Terms disclaims direct service provision.

All phone numbers render as `<a href="tel:...">[CONTACT NUMBER]</a>`. All contact details are clearly placeholdered: `[CONTACT NUMBER]`, `info@kilkennypowerwashing.ie`, `[ADDRESS TO BE CONFIRMED]`.

## Imagery

AI-generated via the agent image tool, saved to `src/assets/` and imported as ES6. ~10 images total to keep generation time reasonable:
1. Hero: driveway before/after (single composite)
2. Driveway service hero
3. Patio service hero
4. Roof cleaning service hero
5. Render soft-washing service hero
6. Decking restoration service hero
7. Farmyard/commercial service hero
8. Worker with wand (about page)
9. Generic Kilkenny streetscape (location pages share)
10. OG share image (1200×630)

Every `<img>` has descriptive `alt` and a `{/* PLACEHOLDER — REPLACE WITH REAL PHOTO */}` comment above it. Filenames use the `kilkenny-driveway-cleaning-before-after.jpg` style.

## SEO infrastructure

- Per-route `head()` with title pattern `[Page] | Kilkenny Power Washing`, 150–160 char descriptions, canonical, OG, Twitter
- JSON-LD via `head().scripts` (LocalBusiness on home, Service per service page, Place per location, FAQPage on home)
- `public/robots.txt` allowing all + sitemap link
- `public/sitemap.xml` static file listing all 22 URLs
- Semantic HTML, single H1 per page

## GDPR

- Cookie banner on first visit, equally prominent Accept All / Reject All, expandable granular controls. Choice persisted in `cookie-consent` localStorage key with timestamp + version. No analytics/marketing scripts in v1 — banner is wired so adding them later only requires reading the consent state.
- Privacy policy explicitly names "vetted local contractor" data sharing, lawful basis (consent), retention (12 months), DPC contact.
- Footer disclosure on every page (in `SiteFooter`).

## Build order (single pass)

1. Update `src/styles.css` with brand tokens + Inter
2. Generate 10 placeholder images in parallel
3. Build shared components (Header, Footer, MobileStickyCTA, CookieBanner, LeadForm, JsonLd, ServicePageTemplate, LocationPageTemplate, FAQ, etc.)
4. Wire `__root.tsx` with header/footer/sticky-CTA/cookie-banner shell
5. Build homepage
6. Build all 6 service pages via template
7. Build all 8 location pages via template
8. Build About, Contact, Privacy, Cookies, Terms
9. Add `robots.txt` + `sitemap.xml`
10. Final QA pass: every route has unique title/meta/canonical, every form has consent, every phone uses `tel:`, footer disclosure present everywhere, no fabricated testimonials/ratings, no console errors

## Non-goals (explicitly excluded per brief)

- No fabricated testimonials, star ratings, or "trusted by N customers" claims
- No invented business name, phone, email, or address — placeholders only
- No backend / Formspree / HubSpot — form is `console.log` + success
- No keyword-stuffed copy — plain tradesman English
- No analytics scripts in v1
