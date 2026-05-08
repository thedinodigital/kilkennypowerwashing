import { Link } from "@tanstack/react-router";
import { Phone, MessageSquare, Mail } from "lucide-react";
import { SITE } from "@/lib/site";

export function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur">
      <div className="grid grid-cols-2">
        {SITE.phone.includes("@") ? (
          <a
            href={`mailto:${SITE.phone}`}
            className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-primary-foreground bg-primary"
          >
            <Mail className="h-4 w-4" /> Email Us
          </a>
        ) : (
          <a
            href={`tel:${SITE.phoneTel}`}
            className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-primary-foreground bg-primary"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        )}
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-accent-foreground bg-accent"
        >
          <MessageSquare className="h-4 w-4" /> Get Quote
        </Link>
      </div>
    </div>
  );
}
