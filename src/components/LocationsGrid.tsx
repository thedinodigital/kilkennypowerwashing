import { Link } from "@tanstack/react-router";
import { LOCATIONS } from "@/lib/site";
import { MapPin } from "lucide-react";

const SUB_AREAS = [
  "Loughboy", "Ferrybank", "St Canice's", "Kells", "Mooncoin",
  "Piltown", "Inistioge", "Stoneyford", "Urlingford", "Johnstown",
];

export function LocationsGrid({ showSubAreas = true }: { showSubAreas?: boolean }) {
  return (
    <section className="py-12 bg-muted/40">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">Areas we cover</h2>
        <p className="mt-2 text-muted-foreground">Across {LOCATIONS.length} main towns and the surrounding villages.</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {LOCATIONS.map((l) => (
            <Link
              key={l.slug}
              to="/locations/$location"
              params={{ location: l.slug }}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
            >
              <MapPin className="h-3.5 w-3.5" />
              {l.name}
            </Link>
          ))}
        </div>
        {showSubAreas && (
          <p className="mt-6 text-sm text-muted-foreground">
            Also serving: {SUB_AREAS.join(", ")} and surrounding townlands.
          </p>
        )}
      </div>
    </section>
  );
}
