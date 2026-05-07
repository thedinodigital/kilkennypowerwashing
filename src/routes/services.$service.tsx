import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { buildHead, jsonLdScript } from "@/lib/seo";
import { SERVICES, SITE } from "@/lib/site";
import { LeadForm } from "@/components/LeadForm";
import { Faq } from "@/components/Faq";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

import driveway from "@/assets/kilkenny-driveway-cleaning.jpg";
import patio from "@/assets/kilkenny-patio-cleaning.jpg";
import roof from "@/assets/kilkenny-roof-cleaning.jpg";
import render from "@/assets/kilkenny-render-softwashing.jpg";
import decking from "@/assets/kilkenny-decking-restoration.jpg";
import farmyard from "@/assets/kilkenny-farmyard-commercial.jpg";

const IMAGES: Record<string, string> = {
  "driveway-cleaning": driveway,
  "patio-cleaning": patio,
  "roof-cleaning": roof,
  "render-softwashing": render,
  "decking-restoration": decking,
  "farmyard-commercial": farmyard,
};

const COPY: Record<string, {
  hook: string;
  included: string[];
  process: string[];
  pricing: string;
  faqs: { q: string; a: string }[];
  related: string[];
}> = {
  "driveway-cleaning": {
    hook: "Tarmac, concrete, gravel-set or block paving — we'll have it looking sharp again.",
    included: [
      "Pre-treatment of moss, algae and oil stains",
      "Full pressure wash with a flat-surface cleaner",
      "Edges, gullies and steps detailed by hand",
      "Block paving re-sanded with kiln-dried sand if needed",
      "Site left tidy, all debris washed away",
    ],
    process: [
      "Free site visit and fixed quote",
      "We agree a date that suits you",
      "Job done in a single visit, usually 2–4 hours",
      "Walk-around with you before we leave",
    ],
    pricing: "Most driveway cleans in Kilkenny fall between €120 and €280 depending on size and condition. You'll get an exact quote after a free site visit.",
    faqs: [
      { q: "Will power washing damage my block paving?", a: "Not when it's done correctly. We use the right nozzle and the right pressure, and we re-sand the joints afterwards so the blocks stay locked in." },
      { q: "Do you remove oil stains?", a: "Yes — oil and tyre marks are pre-treated with a degreaser before washing. Heavy old stains may not lift 100% but they'll be dramatically reduced." },
      { q: "How often should I get my driveway cleaned?", a: "Most homes benefit from a deep clean every 2–3 years. Driveways under heavy tree cover may need it more often." },
    ],
    related: ["patio-cleaning", "decking-restoration"],
  },
  "patio-cleaning": {
    hook: "Lift years of moss, algae and dirt out of your slabs — without churning up the joints.",
    included: [
      "Pre-treatment for stubborn algae and moss",
      "Pressure wash tuned to the slab type (sandstone, limestone, concrete)",
      "Joints brushed clear and re-sanded if needed",
      "Furniture moved and replaced",
    ],
    process: [
      "Free quote with honest expectations on what'll lift",
      "Booked in for a date that suits",
      "Most patios done in 2–5 hours",
      "Tidy finish, slabs left to dry",
    ],
    pricing: "Most patio cleans in Kilkenny fall between €100 and €250 depending on size and condition.",
    faqs: [
      { q: "Will the slabs come back like new?", a: "If they're sound underneath, yes. If they're worn or stained from iron deposits, we'll be straight with you about what to expect before we start." },
      { q: "Do you re-sand the joints?", a: "Yes, where the joints are sand-filled. We'll let you know if your patio is mortared (no re-sanding needed)." },
      { q: "Can I walk on it straight away?", a: "Yes — once it's dry. Avoid heavy furniture for a few hours if we've re-sanded the joints." },
    ],
    related: ["driveway-cleaning", "decking-restoration"],
  },
  "roof-cleaning": {
    hook: "Soft-washing for tiles and slate. No high-pressure damage, no broken tiles.",
    included: [
      "Inspection and safety setup",
      "Biocide treatment to kill moss and algae at the root",
      "Low-pressure rinse where appropriate",
      "Gutter clearance included",
    ],
    process: [
      "Site visit and roof inspection",
      "Quote with photos of the existing condition",
      "Treatment applied — full kill takes a few weeks to show",
      "Optional follow-up rinse",
    ],
    pricing: "Most roof cleans fall between €350 and €900 depending on roof size, pitch and access.",
    faqs: [
      { q: "Why soft-wash and not pressure wash?", a: "High pressure on tiles or slates strips the protective coating and can crack them. Soft-washing kills the moss without damaging the roof." },
      { q: "How long does the treatment take to show?", a: "The biocide kills the moss within days, but it takes several weeks of weather to wash away naturally. The roof keeps improving for 2–3 months." },
      { q: "Will it damage my plants or pets?", a: "We protect plants and gutters before treatment. Once dry, the area is safe for pets." },
    ],
    related: ["render-softwashing", "patio-cleaning"],
  },
  "render-softwashing": {
    hook: "Pebbledash and painted render get gentle treatment — no scrubbing, no damage.",
    included: [
      "Window and trim protection",
      "Soft-wash biocide application",
      "Low-pressure rinse",
      "Patio and beds protected throughout",
    ],
    process: [
      "Free quote and condition check",
      "Date agreed",
      "Treatment applied — results visible over 2–4 weeks",
      "Tidy finish",
    ],
    pricing: "Most render soft-washes fall between €250 and €700 depending on house size.",
    faqs: [
      { q: "Will my render come up white again?", a: "If the discolouration is algae and atmospheric grime — yes. If the render itself is faded paint, you'll need a repaint." },
      { q: "Will it damage my windows?", a: "No. We protect frames and seals, and the chemical is rinsed at low pressure." },
      { q: "How long does the result last?", a: "Typically 3–5 years before another treatment is worth doing." },
    ],
    related: ["roof-cleaning", "driveway-cleaning"],
  },
  "decking-restoration": {
    hook: "Strip back the grey, bring out the timber underneath. Ready for a fresh coat of oil.",
    included: [
      "Furniture and pots moved aside",
      "Decking cleaner applied",
      "Pressure wash with a decking-specific nozzle",
      "Boards left to dry, ready for treatment",
    ],
    process: [
      "Free quote",
      "Booking in",
      "Wash done in a few hours",
      "We can recommend a local decking oil supplier if you want to re-treat",
    ],
    pricing: "Most decking cleans fall between €150 and €400 depending on size.",
    faqs: [
      { q: "Will it raise the grain?", a: "Slightly — that's normal. A light sand before re-oiling gives the best finish." },
      { q: "Can I re-oil straight away?", a: "Wait until the boards are fully dry — usually 2–3 days of decent weather." },
      { q: "Do you clean composite decking?", a: "Yes, with reduced pressure suited to composite materials." },
    ],
    related: ["patio-cleaning", "driveway-cleaning"],
  },
  "farmyard-commercial": {
    hook: "Yards, sheds, forecourts and large concrete areas — the heavy stuff.",
    included: [
      "Industrial pressure equipment",
      "Slurry, dung and general grime removal",
      "Forecourt and forecourt-canopy cleaning",
      "Out-of-hours work where needed",
    ],
    process: [
      "Site walk-around and quote",
      "Schedule agreed around your operations",
      "Job completed efficiently with industrial gear",
      "Site signed off with you",
    ],
    pricing: "Quoted per job after a site visit — varies a lot by area and access.",
    faqs: [
      { q: "Do you work weekends or out-of-hours?", a: "Yes — for forecourts and businesses that can't shut during the day." },
      { q: "Do you have insurance for commercial sites?", a: "Yes — full public liability cover. Certificates can be supplied on request." },
      { q: "Can you handle TB-test or dairy yard cleans?", a: "Yes. We work to whatever standard your inspection or contract requires." },
    ],
    related: ["driveway-cleaning", "render-softwashing"],
  },
};

export const Route = createFileRoute("/services/$service")({
  beforeLoad: ({ params }) => {
    if (!SERVICES.some((s) => s.slug === params.service)) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const svc = SERVICES.find((s) => s.slug === params.service);
    if (!svc) return {};
    return {
      ...buildHead({
        title: `${svc.name} in Kilkenny`,
        description: `${svc.name} across County Kilkenny. Honest pricing, fully-insured local contractor, free quotes within 24 hours.`,
        path: `/services/${svc.slug}`,
        image: IMAGES[svc.slug],
      }),
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${svc.name} in Kilkenny`,
          serviceType: svc.name,
          areaServed: "County Kilkenny, Ireland",
          provider: { "@type": "LocalBusiness", name: SITE.name, url: SITE.url },
          description: svc.short,
        }),
      ],
    };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="text-3xl font-bold">Service not found</h1>
      <Link to="/services" className="mt-4 inline-block text-primary underline">View all services</Link>
    </div>
  ),
});

function ServicePage() {
  const { service } = Route.useParams();
  const svc = SERVICES.find((s) => s.slug === service)!;
  const copy = COPY[service];
  const img = IMAGES[service];

  return (
    <>
      <section className="bg-primary/5 py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{svc.name} in Kilkenny</h1>
            <p className="mt-3 text-lg text-muted-foreground">{copy.hook}</p>
            <div className="mt-6">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="#quote">Get a Free Quote</a>
              </Button>
            </div>
          </div>
          {/* PLACEHOLDER — REPLACE WITH REAL PHOTO */}
          <img src={img} alt={`${svc.name} in Kilkenny`} loading="lazy" width={1200} height={800} className="rounded-lg border border-border" />
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">What's included</h2>
            <ul className="mt-4 space-y-2">
              {copy.included.map((i) => (
                <li key={i} className="flex gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>{i}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">What to expect</h2>
            <ol className="mt-4 space-y-3">
              {copy.process.map((p, i) => (
                <li key={p} className="flex gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground text-sm font-bold">{i + 1}</span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-10 bg-muted/40">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold">Pricing guide</h2>
          <p className="mt-3 text-muted-foreground">{copy.pricing}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold">Before & after</h2>
          {/* PLACEHOLDER — REPLACE WITH REAL PHOTOS */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <img src={img} alt={`${svc.name} example`} loading="lazy" width={1200} height={800} className="rounded-lg border border-border" />
            <img src={img} alt={`${svc.name} finished result`} loading="lazy" width={1200} height={800} className="rounded-lg border border-border" />
          </div>
        </div>
      </section>

      <Faq items={copy.faqs} />

      <section id="quote" className="py-12 bg-muted/40">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-2xl font-bold text-center">Get your {svc.name.toLowerCase()} quote</h2>
          <div className="mt-6"><LeadForm defaultService={svc.name} /></div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-xl font-bold">Related services</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {copy.related.map((slug) => {
              const r = SERVICES.find((s) => s.slug === slug)!;
              return (
                <Link key={slug} to="/services/$service" params={{ service: slug }} className="rounded-full border border-border bg-card px-4 py-2 text-sm hover:border-primary hover:text-primary">
                  {r.name}
                </Link>
              );
            })}
            <Link to="/locations" className="rounded-full border border-border bg-card px-4 py-2 text-sm hover:border-primary hover:text-primary">
              Areas we cover
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
