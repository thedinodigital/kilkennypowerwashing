import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { buildHead, jsonLdScript } from "@/lib/seo";
import { LOCATIONS, SERVICES, SITE } from "@/lib/site";
import { LeadForm } from "@/components/LeadForm";
import { ServicesGrid } from "@/components/ServicesGrid";
import streetscape from "@/assets/kilkenny-streetscape.jpg";

const LOCAL_COPY: Record<string, string[]> = {
  "kilkenny-city": [
    "Kilkenny City has a real mix of housing — from new estates around Loughboy and the Castlecomer Road to the older terraced streets near St Canice's. Each one has its own quirks when it comes to power washing.",
    "We see a lot of work around Ferrybank and the city's older red-brick terraces, where moss takes hold quickly on shaded north-facing fronts.",
  ],
  callan: [
    "Callan and the surrounding villages are full of stone-fronted houses and older driveways that respond really well to a careful wash.",
    "Roof moss is common out this side of the county due to the surrounding farmland and tree cover.",
  ],
  thomastown: [
    "Thomastown is known for its stone houses and slate roofs. Slate needs a soft touch — high pressure isn't the answer.",
    "The proximity to the River Nore means damp-loving algae appears quickly on north-facing render and patios.",
  ],
  castlecomer: [
    "Castlecomer sits higher and wetter than much of the county. Roofs and renders here pick up green growth fast.",
    "We do a lot of farmyard and outbuilding work in the wider Castlecomer area.",
  ],
  graiguenamanagh: [
    "Graiguenamanagh's riverside setting makes for picturesque homes — and a lot of damp-driven algae on patios and renders.",
    "Cottages along the Barrow corridor often need a gentle soft-wash rather than aggressive pressure washing.",
  ],
  bennettsbridge: [
    "Bennettsbridge is mostly low-density housing with generous driveways and gardens — a good fit for a thorough deep clean.",
    "Farmyard and equestrian property cleans come up regularly here.",
  ],
  freshford: [
    "Freshford and the surrounding villages have a lot of older properties where careful technique matters more than raw pressure.",
    "Soft-washing renders and roofs is the bread and butter out this way.",
  ],
  gowran: [
    "Gowran sits on heavier ground with a lot of mature trees, which means moss appears quickly on roofs and north-facing render.",
    "Driveways here often benefit from a yearly refresh because of leaf-fall staining.",
  ],
};

export const Route = createFileRoute("/locations/$location")({
  beforeLoad: ({ params }) => {
    if (!LOCATIONS.some((l) => l.slug === params.location)) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const loc = LOCATIONS.find((l) => l.slug === params.location);
    if (!loc) return {};
    return {
      ...buildHead({
        title: `Power Washing in ${loc.name}`,
        description: `Power washing in ${loc.name}, County Kilkenny. Driveways, patios, roofs and more. Free quotes within 24 hours from a vetted local contractor.`,
        path: `/locations/${loc.slug}`,
      }),
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "Place",
          name: `${loc.name}, County Kilkenny`,
          address: { "@type": "PostalAddress", addressLocality: loc.name, addressRegion: "County Kilkenny", addressCountry: "IE" },
          containedInPlace: { "@type": "AdministrativeArea", name: "County Kilkenny" },
        }),
      ],
    };
  },
  component: LocationPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="text-3xl font-bold">Location not found</h1>
      <Link to="/locations" className="mt-4 inline-block text-primary underline">All areas we cover</Link>
    </div>
  ),
});

function LocationPage() {
  const { location } = Route.useParams();
  const loc = LOCATIONS.find((l) => l.slug === location)!;
  const paragraphs = LOCAL_COPY[location] ?? [];
  const others = LOCATIONS.filter((l) => l.slug !== location).slice(0, 3);

  return (
    <>
      <section className="bg-primary/5 py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Power Washing in {loc.name}, County Kilkenny</h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Serving {loc.name} and the surrounding area. Driveways, patios, roofs and more — quoted within 24 hours.
            </p>
          </div>
          {/* PLACEHOLDER — REPLACE WITH REAL PHOTO */}
          <img src={streetscape} alt={`${loc.name}, County Kilkenny`} loading="lazy" width={1200} height={800} className="rounded-lg border border-border" />
        </div>
      </section>

      <section className="py-2">
        <div className="mx-auto max-w-3xl px-4 prose prose-neutral">
          {paragraphs.map((p) => (
            <p key={p} className="text-foreground/80 mt-4">{p}</p>
          ))}
        </div>
      </section>

      <ServicesGrid />

      <section className="py-12 bg-muted/40">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold">Coverage around {loc.name}</h2>
          <p className="mt-3 text-muted-foreground">
            We cover {loc.name} and surrounding villages including {loc.nearby.join(", ")}, plus the wider {SITE.area} area.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-2xl font-bold text-center">Get a free quote in {loc.name}</h2>
          <div className="mt-6"><LeadForm /></div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-xl font-bold">Nearby areas we cover</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {others.map((l) => (
              <Link key={l.slug} to="/locations/$location" params={{ location: l.slug }} className="rounded-full border border-border bg-card px-4 py-2 text-sm hover:border-primary hover:text-primary">
                {l.name}
              </Link>
            ))}
            <Link to="/services" className="rounded-full border border-border bg-card px-4 py-2 text-sm hover:border-primary hover:text-primary">
              All services ({SERVICES.length})
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
