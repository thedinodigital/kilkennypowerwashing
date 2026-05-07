import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const KEY = "kpw-cookie-consent-v1";

interface Consent {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  ts: number;
}

function read(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

function save(c: Consent) {
  try {
    localStorage.setItem(KEY, JSON.stringify(c));
  } catch {
    // ignore
  }
}

export function CookieBanner() {
  const [show, setShow] = useState(false);
  const [customise, setCustomise] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!read()) setShow(true);
  }, []);

  if (!show) return null;

  const accept = (a: boolean, m: boolean) => {
    save({ essential: true, analytics: a, marketing: m, ts: Date.now() });
    setShow(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-16 md:bottom-4 z-50 mx-auto max-w-2xl px-4"
    >
      <div className="rounded-lg border border-border bg-card p-4 shadow-lg">
        <p className="text-sm text-foreground">
          We use cookies to make this site work. With your consent, we may also use analytics
          and marketing cookies. You can accept all, reject all, or choose. See our{" "}
          <a href="/cookies" className="text-primary underline">Cookie Policy</a>.
        </p>

        {customise && (
          <div className="mt-4 space-y-3 text-sm">
            <Row label="Essential" desc="Required for the site to function. Always on." disabled checked />
            <Row
              label="Analytics"
              desc="Anonymous usage stats so we can improve the site."
              checked={analytics}
              onChange={setAnalytics}
            />
            <Row
              label="Marketing"
              desc="Used to measure ad campaigns. Off by default."
              checked={marketing}
              onChange={setMarketing}
            />
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2 justify-end">
          {!customise && (
            <Button variant="ghost" size="sm" onClick={() => setCustomise(true)}>
              Customise
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={() => accept(false, false)}
          >
            Reject All
          </Button>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() =>
              customise ? accept(analytics, marketing) : accept(true, true)
            }
          >
            {customise ? "Save Choices" : "Accept All"}
          </Button>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  desc,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="font-medium">{label}</div>
        <div className="text-muted-foreground text-xs">{desc}</div>
      </div>
      <Switch checked={checked} disabled={disabled} onCheckedChange={onChange} />
    </div>
  );
}
