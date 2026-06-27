export const homeFaqs = [
  {
    question: "How do I know if my crawl space has a moisture problem?",
    answer: "Common signs of a crawl space moisture problem in McDonough, GA include musty odors in the rooms above, standing water after rain, damp or sagging insulation, condensation on ducts and pipes, high indoor humidity, and a vapor barrier that is torn or holding water. If you notice any of these, a crawl space inspection can pinpoint the source before it spreads."
  },
  {
    question: "What does crawl space encapsulation cost in McDonough, GA?",
    answer: "Crawl space encapsulation cost in McDonough, GA depends on the square footage, access, drainage needs, vapor barrier thickness, and whether repairs or a dehumidifier are required. Because every Henry County crawl space is different, an on-site inspection is the most reliable way to build an accurate estimate.",
    link: "/blog/crawl-space-encapsulation-cost-mcdonough-ga/",
    linkText: "Learn what affects encapsulation cost in McDonough"
  },
  {
    question: "Is crawl space encapsulation worth it in Georgia?",
    answer: "For many Georgia homes, encapsulation helps because the state's humid climate and clay-heavy soil push moisture into vented crawl spaces. Sealing the space with a vapor barrier and pairing it with drainage or humidity control can reduce musty odors, protect framing, and create a drier area under the home. An inspection helps confirm whether encapsulation, a vapor barrier, or moisture control is the right fit."
  },
  {
    question: "Can a vapor barrier fix a wet crawl space?",
    answer: "A vapor barrier limits moisture rising from exposed soil, but it will not stop standing water or active water entry on its own. A wet crawl space usually needs drainage, grading, or a sump solution addressed first so water does not collect on top of the liner.",
    link: "/wet-crawl-space-repair/",
    linkText: "See wet crawl space repair options"
  },
  {
    question: "How do I get rid of a musty smell coming from my crawl space?",
    answer: "A musty smell is usually tied to crawl space humidity, exposed soil, or mold-like growth on framing and insulation. Lasting results come from controlling the moisture source with a vapor barrier, drainage, or a dehumidifier rather than masking the odor. An inspection helps identify what is driving the smell."
  },
  {
    question: "Does a crawl space dehumidifier need a vapor barrier too?",
    answer: "Usually, yes. A dehumidifier works best once exposed soil is covered and major water entry is handled, otherwise it runs constantly against incoming moisture. Most lasting results pair a vapor barrier or encapsulation with humidity control."
  },
  {
    question: "Do you serve areas outside McDonough?",
    answer: "Yes. Henry Crawl Solutions serves McDonough and nearby Henry County, GA communities including Stockbridge, Locust Grove, Hampton, Lovejoy, Ola, Jackson, and Jonesboro."
  }
];

type LocationFaqInput = {
  city: string;
  county: string;
  zips: string[];
  neighborhoods: string[];
  nearby: string[];
  localFactors: { heading: string; text: string }[];
};

export const locationFaqs = ({ city, county, zips, neighborhoods, nearby, localFactors }: LocationFaqInput) => [
  {
    question: `What crawl space problems are common in ${city}, GA?`,
    answer: `Homeowners in ${city} and the surrounding ${county} area most often deal with high crawl space humidity, musty odors, damaged or missing vapor barriers, condensation on ducts, and standing water that appears under the home after heavy rain. A local factor here is ${localFactors[0].heading.toLowerCase()} — ${localFactors[0].text.charAt(0).toLowerCase() + localFactors[0].text.slice(1)} Georgia's humid climate and clay-heavy soil keep the ground damp, so these issues tend to recur until the moisture source is sealed and drainage is corrected.`
  },
  {
    question: `How much does crawl space encapsulation cost in ${city}, GA?`,
    answer: `Crawl space encapsulation cost in ${city} depends on the square footage, how accessible the space is, the condition of the existing vapor barrier, and whether drainage or a dehumidifier is needed. Because no two ${city} crawl spaces are alike, an on-site inspection is the most accurate way to price the work, and Henry Crawl Solutions provides a written estimate with no one-size pricing.`
  },
  {
    question: `Should crawl space vents be open or closed for ${city} homes?`,
    answer: `In ${city}'s humid Georgia climate, open foundation vents often let warm, moisture-heavy outside air into the crawl space, where it condenses on cooler ducts and framing. For most ${city} homes, sealing the vents as part of a controlled, encapsulated crawl space is more effective than leaving them open — though the right approach is confirmed during the inspection.`
  },
  {
    question: `How long does crawl space encapsulation take in ${city}?`,
    answer: `Many ${city} crawl spaces are encapsulated in one to three days, depending on the square footage, how much repair or debris removal is needed, and whether drainage work is part of the project. The inspection establishes the scope and a realistic timeline before any work begins.`
  },
  {
    question: `Which ${city} neighborhoods and ZIP codes are covered?`,
    answer: `Henry Crawl Solutions helps homeowners throughout ${city} and nearby ${county} communities, including ${neighborhoods.slice(0, 4).join(", ")}, across ZIP codes ${zips.join(" and ")}.`
  },
  {
    question: `Do you serve areas near ${city}, GA?`,
    answer: `Yes. Along with ${city}, Henry Crawl Solutions serves nearby communities including ${nearby.join(", ")}, and other ${county} and metro-south Atlanta areas. If you are just outside ${city}, reach out and we can confirm coverage for your address.`
  },
  {
    question: `How do I request a crawl space inspection in ${city}?`,
    answer: `Use the contact form to describe what you are seeing under the home — moisture, odor, standing water, or a damaged vapor barrier — or call to schedule a crawl space inspection in ${city}. The inspection identifies the moisture source and the right mix of vapor barrier, drainage, dehumidifier, or encapsulation for your home.`
  }
];

export const genericContactFaqs = [
  {
    question: "What should I include when requesting an estimate?",
    answer: "Share your address or service area, crawl space concern, any recent water or odor issues, and the best way to reach you."
  },
  {
    question: "Is the phone number temporary?",
    answer: "Yes. The current phone number is placeholder contact information and should be replaced before launch."
  }
];
