import { SITE } from "./site";
import ogImage from "@/assets/og-kilkenny-power-washing.jpg";

interface SeoArgs {
  title: string;
  description: string;
  path: string; // e.g. "/services/driveway-cleaning"
  image?: string;
}

export function buildHead({ title, description, path, image }: SeoArgs) {
  const fullTitle = `${title} | ${SITE.name}`;
  const url = `${SITE.url}${path}`;
  const img = image ?? ogImage;
  const absImg = img.startsWith("http") ? img : `${SITE.url}${img}`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: absImg },
      { property: "og:site_name", content: SITE.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: absImg },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function jsonLdScript(obj: unknown) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(obj),
  };
}
