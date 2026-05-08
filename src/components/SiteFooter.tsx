import { Link } from "@tanstack/react-router";
import { SITE, SERVICES, LOCATIONS } from "@/lib/site";
import { Phone, Mail } from "lucide-react";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-muted/40 mt-16 pb-24 md:pb-10">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="text-lg font-semibold text-primary">Kilkenny Power Washing</div>
          <p className="mt-3 text-sm text-muted-foreground">
            Driveways, patios, roofs and more — covering all of {SITE.area}.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            {SITE.phone && !SITE.phone.includes("@") && (
              <a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-2 text-foreground hover:text-primary">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            )}
            {SITE.email && (
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-foreground hover:text-primary">
                <Mail className="h-4 w-4" /> {SITE.email}
              </a>
            )}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Services</div>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$service" params={{ service: s.slug }} className="text-muted-foreground hover:text-primary">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Areas</div>
          <ul className="space-y-2 text-sm">
            {LOCATIONS.map((l) => (
              <li key={l.slug}>
                <Link to="/locations/$location" params={{ location: l.slug }} className="text-muted-foreground hover:text-primary">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Information</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            <li><Link to="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/cookies" className="text-muted-foreground hover:text-primary">Cookie Policy</Link></li>
            <li><Link to="/terms" className="text-muted-foreground hover:text-primary">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-6 space-y-3 text-xs text-muted-foreground">
          <p>{SITE.legalDisclosure}</p>
          <p>© {year} {SITE.domain} — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
