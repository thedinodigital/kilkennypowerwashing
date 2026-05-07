import { createFileRoute } from "@tanstack/react-router";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/cookies")({
  head: () => buildHead({
    title: "Cookie Policy",
    description: "What cookies Kilkennypowerwashing.ie uses, why, and how you can change your preferences.",
    path: "/cookies",
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 prose prose-neutral">
      <h1 className="text-3xl md:text-4xl font-bold">Cookie Policy</h1>

      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They help the site work and remember
        your choices.
      </p>

      <h2>Cookies we use</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Purpose</th>
            <th>Duration</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>kpw-cookie-consent-v1</td>
            <td>Remembers your cookie consent choices.</td>
            <td>Until cleared</td>
            <td>Essential, first-party</td>
          </tr>
        </tbody>
      </table>

      <h2>Analytics & marketing</h2>
      <p>
        We do not currently run analytics or marketing cookies on this site. If we add them in future, they will only fire
        after you accept them in the consent banner.
      </p>

      <h2>Managing cookies</h2>
      <p>
        You can change your choices at any time by clearing the <code>kpw-cookie-consent-v1</code> entry in your browser's
        site storage; the banner will then reappear.
      </p>
    </article>
  );
}
