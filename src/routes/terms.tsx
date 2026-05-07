import { createFileRoute } from "@tanstack/react-router";
import { buildHead } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => buildHead({
    title: "Terms of Use",
    description: "Terms governing use of Kilkennypowerwashing.ie, including our role as a lead-generation service rather than a service provider.",
    path: "/terms",
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 prose prose-neutral">
      <h1 className="text-3xl md:text-4xl font-bold">Terms of Use</h1>

      <h2>1. About this site</h2>
      <p>
        {SITE.domain} is a local lead-generation service. We do not provide power washing services directly. Enquiries
        submitted through this site are passed to a vetted, fully-insured local contractor who contacts you and provides
        the service under their own contract with you.
      </p>

      <h2>2. No service contract with us</h2>
      <p>
        Any contract for power washing services is between you and the contractor we refer you to. {SITE.domain} is not a
        party to that contract and is not liable for the performance, quality or outcome of work carried out by the
        contractor.
      </p>

      <h2>3. Information on the site</h2>
      <p>
        We try to keep information accurate, but pricing examples, area lists and service descriptions are indicative only.
        The exact scope and price of any job will be agreed directly between you and the contractor after a site visit or quote.
      </p>

      <h2>4. Acceptable use</h2>
      <p>You must not use the site to submit false enquiries, harass third parties, or attempt to interfere with the site's operation.</p>

      <h2>5. Liability</h2>
      <p>
        To the fullest extent permitted by law, {SITE.domain} excludes liability for indirect or consequential losses arising
        from your use of the site or from any service provided by the contractor.
      </p>

      <h2>6. Governing law</h2>
      <p>These terms are governed by the laws of Ireland.</p>
    </article>
  );
}
