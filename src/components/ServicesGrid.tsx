import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/site";
import { Droplets, Brush, Home, PaintBucket, Hammer, Tractor } from "lucide-react";

const ICONS = {
  "driveway-cleaning": Droplets,
  "patio-cleaning": Brush,
  "roof-cleaning": Home,
  "render-softwashing": PaintBucket,
  "decking-restoration": Hammer,
  "farmyard-commercial": Tractor,
} as const;

export function ServicesGrid() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">Our services</h2>
        <p className="mt-2 text-muted-foreground">Pick the job — get an honest quote within 24 hours.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.slug];
            return (
              <Link
                key={s.slug}
                to="/services/$service"
                params={{ service: s.slug }}
                className="group rounded-lg border border-border bg-card p-6 hover:border-primary hover:shadow-md transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold group-hover:text-primary">{s.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.short}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
