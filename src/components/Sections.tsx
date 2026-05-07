import { ShieldCheck, Banknote, MapPin } from "lucide-react";

export function TrustStrip() {
  const items = [
    { icon: ShieldCheck, label: "Fully insured local contractor" },
    { icon: Banknote, label: "Free no-obligation quotes" },
    { icon: MapPin, label: "Serving all of County Kilkenny" },
  ];
  return (
    <section className="border-y border-border bg-muted/40 py-6">
      <div className="mx-auto max-w-6xl px-4 grid gap-4 sm:grid-cols-3">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-3 justify-center sm:justify-start">
            <it.icon className="h-5 w-5 text-primary shrink-0" />
            <span className="text-sm font-medium">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { n: 1, title: "Tell us what you need", body: "Fill in the form or give us a call." },
    { n: 2, title: "Get a free quote", body: "Within 24 hours. No obligation." },
    { n: 3, title: "Job done", body: "Your local contractor arrives on the agreed day." },
  ];
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">How it works</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-lg border border-border bg-card p-6">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground font-bold">
                {s.n}
              </div>
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
