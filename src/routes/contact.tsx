import { createFileRoute } from "@tanstack/react-router";
import { buildHead } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { LeadForm } from "@/components/LeadForm";
import { Phone, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => buildHead({
    title: "Contact Us",
    description: "Get a free no-obligation power washing quote in County Kilkenny. Call, email or fill in the form — we'll be back to you within 24 hours.",
    path: "/contact",
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-2">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">Get in touch</h1>
        <p className="mt-3 text-muted-foreground">
          Tell us what you need and we'll have a quote with you within 24 hours.
        </p>
        <div className="mt-6 space-y-3 text-sm">
          <a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-2 text-foreground hover:text-primary">
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-foreground hover:text-primary">
            <Mail className="h-4 w-4" /> {SITE.email}
          </a>
          <div className="flex items-center gap-2 text-foreground">
            <MapPin className="h-4 w-4" /> {SITE.area}, Ireland
          </div>
        </div>
      </div>
      <div>
        <LeadForm />
      </div>
    </section>
  );
}
