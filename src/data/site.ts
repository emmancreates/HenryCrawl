export const site = {
  name: "Henry Crawl Solutions",
  domain: "HenryCrawl.com",
  url: "https://henrycrawl.com",
  tagline: "Crawl Space Repair & Moisture Control in Henry County, GA",
  phone: "(470) 924-8708",
  phoneHref: "tel:+14709248708",
  email: "info@henrycrawl.com",
  emailHref: "mailto:info@henrycrawl.com",
  primaryLocation: "McDonough, GA",
  primaryCta: "Request a Free Crawl Space Inspection",
  secondaryCta: "Call for a Crawl Space Estimate",
  shortCta: "Call Now",
  description:
    "Henry Crawl Solutions helps homeowners in McDonough and Henry County, GA request crawl space encapsulation, repair, moisture control, vapor barrier, drainage, dehumidifier, mold removal, and basement waterproofing estimates.",
};

/**
 * Structured business profile used to build the sitewide entity graph
 * (LocalBusiness / Organization JSON-LD).
 *
 * NOTE FOR LAUNCH — replace the placeholder values below with verified data and
 * keep them identical to the Google Business Profile (NAP consistency matters):
 *   - phone (currently a placeholder)
 *   - street address, if this is NOT a service-area-only business
 *   - hours (confirm the real schedule)
 *   - priceRange
 *   - sameAs (add the real Google Business Profile, Facebook, Yelp, etc. URLs)
 * The geo coordinates below are the public center of McDonough, GA and are used
 * as the service-area center for a service-area business (no public street address).
 */
export const business = {
  // Modeled as a service-area business: serves customers at their homes, no
  // public storefront address. Set `streetAddress` if/when there is one.
  isServiceAreaBusiness: true,
  legalName: "Henry Crawl Solutions",
  slogan: site.tagline,
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Check, Credit Card",
  foundingLocation: "McDonough, GA",
  address: {
    streetAddress: "", // set for a storefront business; empty = service-area only
    locality: "McDonough",
    region: "GA",
    regionName: "Georgia",
    postalCode: "30253",
    country: "US",
  },
  // Public coordinate center of McDonough, GA — used as the service-area center.
  geo: {
    latitude: 33.4473,
    longitude: -84.1469,
    serviceRadiusMiles: 25,
  },
  // Confirm before launch.
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { days: ["Saturday"], opens: "09:00", closes: "14:00" },
  ],
  // Add verified profile URLs (Google Business Profile, Facebook, Yelp, BBB, etc.).
  sameAs: [] as string[],
};

export const navLinks = [
  { label: "Services", href: "/services/" },
  { label: "Service Areas", href: "/service-areas/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

export const trustItems = [
  "Crawl Space Moisture Control",
  "Vapor Barrier Installation",
  "Drainage & Dehumidifiers",
  "Serving Henry County",
];
