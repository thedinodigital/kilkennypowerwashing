import { createFileRoute } from "@tanstack/react-router";
import { buildHead } from "@/lib/seo";
import { LocationsGrid } from "@/components/LocationsGrid";
import { LeadForm } from "@/components/LeadForm";

export const Route = createFileRoute("/locations")({
  head: () => buildHead({
    title: "Areas We Cover in Kilkenny",
    description: "Power washing across all of County Kilkenny — Kilkenny City, Callan, Thomastown, Castlecomer, Graiguenamanagh and more.",
    path: "/locations",
  }),
  component: LocationsIndex,
});

function LocationsIndex() {
  return (
    <>
      <section className="bg-primary/5 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Areas we cover in County Kilkenny</h1>
          <p className="mt-3 text-muted-foreground">
            Click your town for local information, or get a quote and we'll come to you wherever you are in the county.
          </p>
        </div>
      </section>
      <LocationsGrid />
      <section className="py-12">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-2xl font-bold text-center">Get a free quote</h2>
          <div className="mt-6"><LeadForm /></div>
        </div>
      </section>
    </>
  );
}
