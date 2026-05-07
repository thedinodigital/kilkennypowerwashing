import { createFileRoute } from "@tanstack/react-router";
import { buildHead } from "@/lib/seo";
import { SITE } from "@/lib/site";
import teamImg from "@/assets/kilkenny-power-washing-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => buildHead({
    title: "About Us",
    description: "How Kilkennypowerwashing.ie works: a local lead-generation service connecting Kilkenny homeowners with a vetted, fully-insured power washing contractor.",
    path: "/about",
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold">About Kilkennypowerwashing.ie</h1>
      {/* PLACEHOLDER — REPLACE WITH REAL PHOTO */}
      <img src={teamImg} alt="Local Kilkenny power washing contractor" width={1200} height={800} className="mt-6 rounded-lg border border-border" loading="lazy" />
      <div className="prose prose-neutral mt-6 space-y-4 text-foreground/80">
        <p>
          We're a local lead-generation service for power washing in {SITE.area}. We're not the people who turn up at your gate
          — that's our vetted local contractor. What we do is make it easy for Kilkenny homeowners to find an honest, insured
          tradesman without trawling through ads.
        </p>
        <p>
          Every enquiry submitted through this site is sent to one fully-insured local contractor. They get in touch, give you a
          straight quote, and either you go ahead or you don't. There's no obligation and no hard sell.
        </p>
        <p>
          We're upfront about what we are because we think it matters. The legal disclosure at the bottom of every page says it
          plainly: this site doesn't provide the service — we connect you with someone who does.
        </p>
        <h2 className="text-2xl font-bold mt-8">Why we work this way</h2>
        <p>
          Good local tradesmen are usually too busy doing the work to spend their evenings building a website or running ads.
          We handle that side, they handle the wash. You get one point of contact and a fair price.
        </p>
      </div>
    </article>
  );
}
