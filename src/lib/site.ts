// Central site config — all placeholders live here.
export const SITE = {
  name: "Kilkenny Power Washing",
  domain: "kilkennypowerwashing.ie",
  url: "https://kilkennypowerwashing.ie",
  phone: "[CONTACT NUMBER]",
  // tel: link uses a neutral placeholder — replace with E.164 once known.
  phoneTel: "+353000000000",
  email: "info@kilkennypowerwashing.ie",
  address: "[ADDRESS TO BE CONFIRMED], County Kilkenny, Ireland",
  area: "County Kilkenny",
  legalDisclosure:
    "Kilkennypowerwashing.ie is a local lead-generation service. Enquiries submitted through this site are passed to a vetted, fully-insured local power washing contractor who will contact you directly. We are not the service provider.",
};

export const SERVICES = [
  {
    slug: "driveway-cleaning",
    name: "Driveway Cleaning",
    short: "Bring tarmac, concrete and block paving back to life.",
    priceFrom: "€120",
    priceTo: "€280",
  },
  {
    slug: "patio-cleaning",
    name: "Patio Cleaning",
    short: "Lift years of moss, algae and grime from your patio.",
    priceFrom: "€100",
    priceTo: "€250",
  },
  {
    slug: "roof-cleaning",
    name: "Roof Cleaning",
    short: "Safe soft-washing for tiles and slate. No high-pressure damage.",
    priceFrom: "€350",
    priceTo: "€900",
  },
  {
    slug: "render-softwashing",
    name: "Render Soft-Washing",
    short: "Gentle wash for pebbledash and painted render — no scrubbing.",
    priceFrom: "€250",
    priceTo: "€700",
  },
  {
    slug: "decking-restoration",
    name: "Decking Restoration",
    short: "Strip back the grey, bring out the timber underneath.",
    priceFrom: "€150",
    priceTo: "€400",
  },
  {
    slug: "farmyard-commercial",
    name: "Farmyard & Commercial",
    short: "Yards, sheds, forecourts and large concrete areas.",
    priceFrom: "Quoted per job",
    priceTo: "",
  },
] as const;

export const LOCATIONS = [
  { slug: "kilkenny-city", name: "Kilkenny City", nearby: ["Loughboy", "St Canice's", "Ferrybank"] },
  { slug: "callan", name: "Callan", nearby: ["Kells", "Mooncoin"] },
  { slug: "thomastown", name: "Thomastown", nearby: ["Inistioge", "Stoneyford"] },
  { slug: "castlecomer", name: "Castlecomer", nearby: ["Clogh", "Moneenroe"] },
  { slug: "graiguenamanagh", name: "Graiguenamanagh", nearby: ["Tinnahinch", "Inistioge"] },
  { slug: "bennettsbridge", name: "Bennettsbridge", nearby: ["Stoneyford", "Thomastown"] },
  { slug: "freshford", name: "Freshford", nearby: ["Three Castles", "Ballyragget"] },
  { slug: "gowran", name: "Gowran", nearby: ["Paulstown", "Goresbridge"] },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];
export type LocationSlug = (typeof LOCATIONS)[number]["slug"];
