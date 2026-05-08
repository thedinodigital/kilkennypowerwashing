import { createFileRoute, Link } from "@tanstack/react-router";
import { buildHead, jsonLdScript } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { LeadForm } from "@/components/LeadForm";
import { ServicesGrid } from "@/components/ServicesGrid";
import { LocationsGrid } from "@/components/LocationsGrid";
import { TrustStrip, HowItWorks } from "@/components/Sections";
import { Faq } from "@/components/Faq";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImg from "@/assets/kilkenny-driveway-before-after.jpg";

const FAQS = [
  {
    q: "How much does power washing cost in Kilkenny?",
    a: "Most domestic driveway cleans fall between €120 and €280 depending on size and condition. Patios usually run €100–€250, and roof soft-washing typically €350–€900. You'll get an exact price after a free site visit — no obligation.",
  },
  {
    q: "How long does power washing take?",
    a: "An average driveway takes 2–4 hours. A patio is usually a half-day. Roof soft-washing takes longer because the chemical needs dwell time. Your contractor will give a clear time estimate up front.",
  },
  {
    q: "Will power washing damage my driveway or patio?",
    a: "Not when it's done properly. The right pressure, nozzle and technique vary by surface — that's why a competent local contractor matters. Block paving may need re-sanding afterwards, and that's included in the quote where required.",
  },
  {
    q: "Is the contractor insured?",
    a: "Yes. We only pass leads to a fully-insured local contractor. Public liability cover is in place for every job.",
  },
  {
    q: "Do you offer roof cleaning safely?",
    a: "Roofs are soft-washed using low pressure and a biocide treatment. We don't blast tiles or slate at high pressure — that causes damage and shortens roof life.",
  },
  {
    q: "What areas of County Kilkenny do you cover?",
    a: "All of County Kilkenny — Kilkenny City, Callan, Thomastown, Castlecomer, Graiguenamanagh, Bennettsbridge, Freshford, Gowran, and the surrounding villages and townlands.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    ...buildHead({
      title: "Power Washing in Kilkenny — Driveways, Patios & Roofs",
      description: "Honest pricing, local team, fully insured. Free no-obligation power washing quotes across County Kilkenny within 24 hours.",
      path: "/",
    }),
    scripts: [
      jsonLdScript({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: SITE.name,
        url: SITE.url,
        telephone: SITE.phone,
        email: SITE.email,
        address: {
          "@type": "PostalAddress",
          addressRegion: "County Kilkenny",
          addressCountry: "IE",
        },
        areaServed: "County Kilkenny, Ireland",
        description: "Lead-generation service connecting Kilkenny homeowners with a vetted local power washing contractor.",
      }),
      jsonLdScript({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-20 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Power Washing in Kilkenny — Driveways, Patios, Roofs & More
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Honest pricing. Local team. Fully insured. Free quotes within 24 hours.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="#quote">Get a Free Quote</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Call {SITE.phone}
                </a>
              </Button>
            </div>
            {/* PLACEHOLDER — REPLACE WITH REAL PHOTO */}
            <img
              src={heroImg}
              alt="Before and after power washing of a Kilkenny driveway"
              width={1600}
              height={900}
              className="mt-8 lg:hidden rounded-lg border border-border"
            />
          </div>
          <div id="quote" className="lg:pl-8">
            <div className="hidden lg:block mb-4">
              {/* PLACEHOLDER — REPLACE WITH REAL PHOTO */}
              <img
                src={heroImg}
                alt="Before and after power washing of a Kilkenny driveway"
                width={1600}
                height={900}
                className="rounded-lg border border-border"
              />
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      <TrustStrip />
      <ServicesGrid />
      <HowItWorks />
      <LocationsGrid />

      {/* Map placeholder */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Where we work</h2>
          <p className="mt-2 text-muted-foreground">Centred on Kilkenny City — covering the whole county.</p>
          <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-lg border border-border">
            <iframe
              title="Map of Kilkenny, Ireland"
              src="https://www.google.com/maps?q=Kilkenny,Ireland&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Faq items={FAQS} />

      {/* Testimonials */}
      <section className="py-12 bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">What our customers say</h2>
          {/* REAL TESTIMONIALS WILL BE ADDED — do not fabricate. Once the contractor is signed,
              syndicate verified Google reviews here. */}
          <p className="mt-4 text-sm text-muted-foreground italic">
            Verified customer reviews will appear here once our local contractor's Google reviews are connected.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Ready for a clean finish?</h2>
          <p className="mt-2 text-muted-foreground">Get a free, no-obligation quote — usually within 24 hours.</p>
          <div className="mt-6">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
