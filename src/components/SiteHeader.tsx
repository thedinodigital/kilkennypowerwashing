import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/locations", label: "Areas" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-semibold text-primary">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground text-sm">KP</span>
          <span className="hidden sm:inline text-base">Kilkenny Power Washing</span>
          <span className="sm:hidden text-base">Kilkenny PW</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary font-semibold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          {SITE.phone.includes("@") ? (
            <a href={`mailto:${SITE.phone}`} className="inline-flex items-center gap-1 text-sm font-medium text-primary">
              <Mail className="h-4 w-4" /> {SITE.phone}
            </a>
          ) : (
            <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center gap-1 text-sm font-medium text-primary">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          )}
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </nav>
        <button
          className="md:hidden p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="py-2 text-base"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <a href={`tel:${SITE.phoneTel}`} className="py-2 text-base font-medium text-primary inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
