import { createFileRoute } from "@tanstack/react-router";
import { buildHead } from "@/lib/seo";
import { ServicesGrid } from "@/components/ServicesGrid";
import { LeadForm } from "@/components/LeadForm";

export const Route = createFileRoute("/services")({
  head: () => buildHead({
    title: "Power Washing Services",
    description: "Driveways, patios, roofs, render, decking and farmyards — every external power washing service across County Kilkenny.",
    path: "/services",
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <section className="bg-primary/5 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Our power washing services</h1>
          <p className="mt-3 text-muted-foreground">
            From a quick patio refresh to full farmyard cleans — pick what you need and we'll get a quote back to you within a day.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <section className="py-12">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-2xl font-bold text-center">Get a free quote</h2>
          <div className="mt-6">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
