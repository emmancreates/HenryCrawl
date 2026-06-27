import { site, business } from "@data/site";
import { services } from "@data/services";

/**
 * Centralized JSON-LD entity graph.
 *
 * Every page emits ONE `@graph` containing the canonical business + website
 * nodes (referenced by stable `@id`) plus the page-specific nodes. Page nodes
 * point back to the business via `{ "@id": businessId }` so search engines and
 * AI answer engines resolve a single, consistent business entity sitewide —
 * the foundation of local/entity SEO and GEO.
 */

export const businessId = `${site.url}/#business`;
export const websiteId = `${site.url}/#website`;

const abs = (path: string) => new URL(path, site.url).toString();

/** The single source-of-truth LocalBusiness node (also acts as Organization/publisher). */
export function businessNode(): Record<string, unknown> {
  const node: Record<string, unknown> = {
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": businessId,
    name: site.name,
    legalName: business.legalName,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    description: site.description,
    slogan: business.slogan,
    image: abs("/crawl-space-hero.jpg"),
    logo: abs("/crawl-space-hero.jpg"),
    priceRange: business.priceRange,
    currenciesAccepted: business.currenciesAccepted,
    paymentAccepted: business.paymentAccepted,
    knowsAbout: services.map((s) => s.title),
    address: {
      "@type": "PostalAddress",
      ...(business.address.streetAddress ? { streetAddress: business.address.streetAddress } : {}),
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
      geoRadius: Math.round(business.geo.serviceRadiusMiles * 1609.34),
    },
    openingHoursSpecification: business.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Crawl Space & Moisture Control Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: abs(`/${s.slug}/`),
        },
      })),
    },
  };
  if (business.sameAs.length) node.sameAs = business.sameAs;
  return node;
}

/** WebSite node, published by the business. */
export function websiteNode(): Record<string, unknown> {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "en-US",
    publisher: { "@id": businessId },
  };
}

/** A breadcrumb node from a list of { label, href? } crumbs. */
export function breadcrumbNode(crumbs: { label: string; href?: string }[]): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: crumb.href ? abs(crumb.href) : undefined,
    })),
  };
}

/** Wrap page nodes into a single @graph document. Always includes the business + website. */
export function buildGraph(nodes: Record<string, unknown>[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [businessNode(), websiteNode(), ...nodes],
  };
}
