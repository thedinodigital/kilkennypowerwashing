import { useState } from "react";
import { z } from "zod";
// removed: useServerFn — now using direct fetch
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { submitLead } from "@/lib/lead.functions";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter a phone number").max(30),
  email: z.string().trim().email("Please enter a valid email").max(255),
  service: z.string().min(1, "Please choose a service"),
  area: z.string().trim().min(2, "Please enter your town").max(100),
  notes: z.string().trim().max(1000).optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Consent is required to submit" }),
  }),
});

interface Props {
  defaultService?: string;
  compact?: boolean;
}

export function LeadForm({ defaultService, compact }: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      service: fd.get("service"),
      area: fd.get("area"),
      notes: fd.get("notes") || undefined,
      consent,
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const k = String(issue.path[0]);
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitError(null);
    setSubmitting(true);
    try {
      const { consent: _c, ...payload } = result.data;
      await submitLead(payload);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitError("Sorry, something went wrong. Please call us or try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-card p-6 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-3 text-xl font-semibold">Thanks — we'll be in touch within 24 hours.</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Your details have been received. A vetted local contractor will call or email you to arrange a free quote.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`space-y-4 ${compact ? "" : "rounded-lg border border-border bg-card p-6"}`}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} required />
        <Field label="Phone" name="phone" type="tel" error={errors.phone} required />
      </div>
      <Field label="Email" name="email" type="email" error={errors.email} required />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="service">Service needed *</Label>
          <select
            id="service"
            name="service"
            defaultValue={defaultService ?? ""}
            className="mt-1.5 w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
          >
            <option value="">Choose…</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
            <option value="Other">Other</option>
          </select>
          {errors.service && <p className="text-xs text-destructive mt-1">{errors.service}</p>}
        </div>
        <Field label="Town/area in Kilkenny" name="area" error={errors.area} required />
      </div>
      <div>
        <Label htmlFor="notes">Notes (optional)</Label>
        <Textarea id="notes" name="notes" rows={3} className="mt-1.5" placeholder="Anything we should know about the job?" />
      </div>
      <div className="flex items-start gap-2">
        <Checkbox id="consent" checked={consent} onCheckedChange={(v) => setConsent(v === true)} />
        <Label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
          I consent to my details being shared with a vetted local contractor who will contact me about my enquiry. See our{" "}
          <a href="/privacy" className="text-primary underline">Privacy Policy</a>.
        </Label>
      </div>
      {errors.consent && <p className="text-xs text-destructive">{errors.consent}</p>}
      {submitError && <p className="text-sm text-destructive">{submitError}</p>}
      <Button type="submit" size="lg" disabled={submitting} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
        {submitting ? "Sending…" : "Request My Free Quote"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}{required && " *"}</Label>
      <Input id={name} name={name} type={type} className="mt-1.5" />
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}
