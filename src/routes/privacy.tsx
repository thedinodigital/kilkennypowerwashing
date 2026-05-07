import { createFileRoute } from "@tanstack/react-router";
import { buildHead } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => buildHead({
    title: "Privacy Policy",
    description: "How Kilkennypowerwashing.ie collects, uses and protects your personal data, and how it's shared with our vetted local contractor.",
    path: "/privacy",
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const updated = new Date().toLocaleDateString("en-IE", { year: "numeric", month: "long", day: "numeric" });
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 prose prose-neutral">
      <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground">Last updated: {updated}</p>

      <h2>1. Who we are</h2>
      <p>
        This privacy policy applies to {SITE.domain} (the "site"). The data controller is the operator of {SITE.domain}.
        Business name and registered address: <em>[TO BE CONFIRMED]</em>. You can contact the controller at{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>

      <h2>2. What data we collect</h2>
      <ul>
        <li><strong>Information you give us</strong> through the contact/quote form: name, phone number, email, town, the service you need, and any notes you add.</li>
        <li><strong>Technical data</strong>: IP address, browser type, pages visited (only if you accept analytics cookies).</li>
        <li><strong>Cookies</strong>: see our <a href="/cookies">Cookie Policy</a>.</li>
      </ul>

      <h2>3. How we use your data</h2>
      <p>We use your data to:</p>
      <ul>
        <li>Pass your enquiry to our vetted local power washing contractor so they can give you a quote.</li>
        <li>Reply to direct queries.</li>
        <li>Improve the site (only with your analytics consent).</li>
      </ul>

      <h2>4. Lawful basis</h2>
      <p>
        We rely on your <strong>consent</strong> (Article 6(1)(a) GDPR) when you tick the consent box on the form. You can
        withdraw consent at any time by emailing us.
      </p>

      <h2>5. Sharing your data with a third-party contractor</h2>
      <p>
        <strong>Important:</strong> {SITE.domain} is a lead-generation service. When you submit the form, your details are
        passed to a single vetted, fully-insured local power washing contractor in County Kilkenny who will contact you to
        arrange a quote. The contractor's identity will be disclosed on first contact.
      </p>
      <p>
        We do not sell your data. We do not pass it to multiple contractors, marketing lists, or unrelated third parties.
      </p>

      <h2>6. Data retention</h2>
      <p>
        Lead form submissions are retained for <strong>12 months</strong> from the date of submission, after which they are
        deleted. Anonymised analytics may be retained for longer.
      </p>

      <h2>7. Your rights</h2>
      <p>Under the GDPR you have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you.</li>
        <li>Request correction or deletion of your data.</li>
        <li>Request data portability.</li>
        <li>Object to or restrict processing.</li>
        <li>Withdraw consent at any time.</li>
        <li>Lodge a complaint with the <a href="https://www.dataprotection.ie/" target="_blank" rel="noreferrer">Data Protection Commission</a> (the Irish DPC).</li>
      </ul>
      <p>To exercise any of these rights, email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>

      <h2>8. Security</h2>
      <p>We use reasonable technical and organisational measures to protect your data. No system is 100% secure, but we take it seriously.</p>

      <h2>9. Changes to this policy</h2>
      <p>We may update this policy from time to time. The "Last updated" date at the top will reflect any changes.</p>
    </article>
  );
}
