export type LocationFactor = {
  heading: string;
  text: string;
};

export type Location = {
  city: string;
  slug: string;
  county: string;
  zips: string[];
  headline: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  nearby: string[];
  neighborhoods: string[];
  problemAngle: string;
  overview: string[];
  localFactors: LocationFactor[];
};

export const locations: Location[] = [
  {
    city: "McDonough",
    slug: "mcdonough-ga",
    county: "Henry County",
    zips: ["30252", "30253"],
    headline: "Crawl Space Encapsulation & Repair in McDonough, GA",
    metaTitle: "Crawl Space Encapsulation in McDonough, GA | Henry Crawl Solutions",
    metaDescription: "Crawl space encapsulation, moisture control, vapor barriers, drainage, and repair for McDonough, GA homeowners. Free crawl space inspection from Henry Crawl Solutions.",
    intro: "Henry Crawl Solutions helps homeowners in McDonough fix damp crawl spaces, musty odors, standing water, damaged vapor barriers, and moisture problems under the home.",
    nearby: ["Stockbridge", "Locust Grove", "Hampton", "Ola"],
    neighborhoods: ["McDonough Square", "Avalon", "Lake Dow", "Westridge", "Brookstone", "Eagles Landing"],
    problemAngle: "McDonough homes can face humid crawl spaces after rainy weather, aging vapor barriers, and drainage patterns that leave soil damp below living areas.",
    overview: [
      "McDonough sits at the heart of Henry County, where a mix of historic homes near the downtown square and fast-growing subdivisions off Highway 81 and Jonesboro Road creates a wide range of crawl space conditions. Older houses around the McDonough Square often have original crawl spaces with thin, aging vapor barriers and exposed red-clay soil, while newer construction in communities like Avalon and Lake Dow can develop drainage problems as graded lots settle in the years after the build.",
      "Because Henry County's clay subsoil holds water and drains slowly, McDonough crawl spaces frequently stay humid long after a storm. That trapped moisture is what leads to musty odors in the rooms above, condensation on ductwork, damp insulation, and the slow deterioration of framing. A crawl space inspection identifies where the moisture is coming from and which combination of vapor barrier, drainage, dehumidifier, or full encapsulation will keep the space under your McDonough home dry.",
    ],
    localFactors: [
      { heading: "Historic homes near the Square", text: "Houses around downtown McDonough often have original crawl spaces with brittle or missing vapor barriers and exposed soil that needs sealing." },
      { heading: "New subdivisions off Hwy 81", text: "Recently built homes in graded communities can see settling and grading changes that redirect rainwater toward the foundation." },
      { heading: "Red clay and slow drainage", text: "Henry County clay holds moisture, so McDonough crawl spaces stay damp and benefit from drainage paired with a sealed vapor barrier." },
    ],
  },
  {
    city: "Stockbridge",
    slug: "stockbridge-ga",
    county: "Henry County",
    zips: ["30281"],
    headline: "Crawl Space Encapsulation & Repair in Stockbridge, GA",
    metaTitle: "Crawl Space Repair in Stockbridge, GA | Henry Crawl Solutions",
    metaDescription: "Crawl space repair, moisture control, vapor barriers, drainage, and encapsulation for Stockbridge, GA homeowners. Free crawl space inspection from Henry Crawl Solutions.",
    intro: "Homeowners in Stockbridge may deal with crawl space humidity, moisture buildup, damaged vapor barriers, and musty odors. Henry Crawl Solutions helps connect homeowners with crawl space repair and moisture control solutions.",
    nearby: ["McDonough", "Jonesboro", "Lovejoy", "Hampton"],
    neighborhoods: ["Eagles Landing", "Cotton Indian Creek", "Bethany", "Rock Quarry", "Panola Mountain area"],
    problemAngle: "In Stockbridge, tree cover, roof runoff, and older crawl space liners can combine to create damp conditions that deserve a closer look.",
    overview: [
      "Stockbridge anchors the northern end of Henry County, where established neighborhoods built from the 1980s through the 2000s sit beneath a heavy tree canopy near Cotton Indian Creek and Panola Mountain State Park. That mature shade keeps crawl spaces cool and slow to dry, and the low-lying lots along the creek watershed can collect water that seeps into the soil under the home.",
      "Many Stockbridge homes still rely on their original vapor barriers, which tear and shift over decades until bare soil is exposed again. Combined with roof runoff and grading that has changed over the years, the result is the persistent humidity, musty smells, and damp insulation that Stockbridge homeowners notice most in summer. Henry Crawl Solutions helps homeowners in Stockbridge pinpoint the moisture source and choose between vapor barrier replacement, drainage, dehumidification, or encapsulation.",
    ],
    localFactors: [
      { heading: "Heavy tree canopy", text: "Shaded lots near Cotton Indian Creek keep crawl spaces cool and damp, so moisture lingers long after rain." },
      { heading: "Creek-side and low lots", text: "Homes in the creek watershed can collect runoff that raises soil moisture under the floor." },
      { heading: "Aging 1980s–2000s liners", text: "Original vapor barriers in established subdivisions are often torn or displaced and need replacement." },
    ],
  },
  {
    city: "Locust Grove",
    slug: "locust-grove-ga",
    county: "Henry County",
    zips: ["30248"],
    headline: "Crawl Space Encapsulation & Repair in Locust Grove, GA",
    metaTitle: "Crawl Space Encapsulation in Locust Grove, GA | Henry Crawl Solutions",
    metaDescription: "Crawl space encapsulation, moisture control, vapor barriers, drainage, and repair for Locust Grove, GA homeowners. Free crawl space inspection from Henry Crawl Solutions.",
    intro: "Henry Crawl Solutions helps Locust Grove homeowners address damp crawl spaces, damaged vapor barriers, poor drainage, and moisture concerns under the home.",
    nearby: ["McDonough", "Jackson", "Ola", "Hampton"],
    neighborhoods: ["Heritage", "Lakemont", "The Bridges", "Tanger Outlets area", "Bethlehem Road corridor"],
    problemAngle: "Locust Grove crawl spaces may need attention when open soil, slope, or seasonal humidity leaves the area below the home feeling wet or musty.",
    overview: [
      "Locust Grove, near I-75 exit 212 and the Tanger Outlets, is one of the fastest-growing communities in southern Henry County. A wave of new subdivisions has gone up on former farmland and wooded acreage, which means many crawl spaces here are only a few years old yet already showing settling and grading problems as the freshly worked soil compacts.",
      "New construction does not make a crawl space immune to moisture. As graded lots settle, downspout and slope changes can send rainwater back toward the foundation, and builder-grade vapor barriers are often thin and loosely seamed. Add Locust Grove's red clay and humid summers, and homeowners frequently see condensation, musty air, and damp soil under floors that should still feel new. Henry Crawl Solutions helps Locust Grove homeowners correct drainage and seal the crawl space before small issues become structural ones.",
    ],
    localFactors: [
      { heading: "Newer subdivisions", text: "Recently built homes near Tanger Outlets can settle, shifting grading and drainage in the first years after construction." },
      { heading: "Former farmland lots", text: "Disturbed, freshly graded soil compacts unevenly and can channel water toward the crawl space." },
      { heading: "Thin builder vapor barriers", text: "Loosely seamed builder-grade liners often need upgrading to fully separate the home from ground moisture." },
    ],
  },
  {
    city: "Hampton",
    slug: "hampton-ga",
    county: "Henry County",
    zips: ["30228"],
    headline: "Crawl Space Encapsulation & Repair in Hampton, GA",
    metaTitle: "Crawl Space Repair in Hampton, GA | Henry Crawl Solutions",
    metaDescription: "Crawl space repair, vapor barrier replacement, moisture control, drainage, and encapsulation for Hampton, GA homeowners. Free crawl space inspection from Henry Crawl Solutions.",
    intro: "Henry Crawl Solutions helps Hampton homeowners with crawl space repair, vapor barrier replacement, moisture control, and drainage-related crawl space issues.",
    nearby: ["McDonough", "Lovejoy", "Stockbridge", "Locust Grove"],
    neighborhoods: ["Crystal Lake", "Dailey Mill", "Lake Jodeco area", "Atlanta Motor Speedway area", "Bear Creek corridor"],
    problemAngle: "Hampton homeowners often notice crawl space problems through musty rooms, wet soil after storms, or damaged liner material that no longer covers exposed ground.",
    overview: [
      "Hampton spreads across western Henry County, from the neighborhoods around the Atlanta Motor Speedway and Crystal Lake to the rural acreage near Bear Creek. This blend of larger lots, country properties, and golf-community subdivisions means crawl space conditions vary widely, but the common thread is moisture that collects under homes set on low or poorly draining ground.",
      "On Hampton's larger and more rural lots, downspouts, septic fields, and natural slope all influence how water moves toward the foundation, and older homes here often have crawl spaces with thin or torn vapor barriers over bare clay. The result is damp insulation, musty odors, and standing water after heavy storms. Henry Crawl Solutions helps Hampton homeowners manage water entry, replace failed liners, and add the drainage or humidity control a particular property needs.",
    ],
    localFactors: [
      { heading: "Rural and large lots", text: "Acreage properties near Bear Creek rely on grading and slope that can direct storm water toward the crawl space." },
      { heading: "Speedway-area housing mix", text: "Older homes and rentals around the Atlanta Motor Speedway often have aging crawl space liners due for replacement." },
      { heading: "Low and lakeside ground", text: "Homes near Crystal Lake and Lake Jodeco sit on ground that holds moisture and benefits from drainage." },
    ],
  },
  {
    city: "Lovejoy",
    slug: "lovejoy-ga",
    county: "Clayton County",
    zips: ["30250", "30228"],
    headline: "Crawl Space Encapsulation & Repair in Lovejoy, GA",
    metaTitle: "Crawl Space Repair in Lovejoy, GA | Henry Crawl Solutions",
    metaDescription: "Crawl space moisture control, vapor barriers, wet crawl space repair, drainage, and encapsulation for Lovejoy, GA homeowners. Free inspection from Henry Crawl Solutions.",
    intro: "Henry Crawl Solutions helps Lovejoy homeowners find solutions for crawl space moisture, musty odors, damaged vapor barriers, and wet crawl space conditions.",
    nearby: ["Hampton", "Jonesboro", "Stockbridge", "McDonough"],
    neighborhoods: ["Lake Spivey area", "Talmadge", "Panhandle Road corridor", "Spivey Hills", "McDonough Road corridor"],
    problemAngle: "Lovejoy homes with damp crawl spaces may need a mix of water management, barrier repair, and humidity control rather than a one-size-fits-all fix.",
    overview: [
      "Lovejoy straddles the Clayton and Henry County line just north of Hampton, near the Lake Spivey area where established neighborhoods sit on mature, tree-shaded lots. Many of these homes were built decades ago, and their crawl spaces still rely on original vapor barriers that have torn, slipped, or been buried under years of debris.",
      "The combination of shaded ground, lake-influenced humidity, and older drainage means Lovejoy crawl spaces often hold moisture that homeowners first notice as a musty smell or damp flooring. Because the cause can be ground moisture, outside water entry, or humid air, the right fix usually blends barrier replacement, drainage, and dehumidification. Henry Crawl Solutions helps Lovejoy homeowners sort out which combination will actually keep the crawl space dry.",
    ],
    localFactors: [
      { heading: "Lake Spivey humidity", text: "Proximity to Lake Spivey adds ambient moisture that humid crawl spaces pull in through open vents." },
      { heading: "Mature, shaded lots", text: "Long-established tree cover keeps the ground under Lovejoy homes from drying out between rains." },
      { heading: "Original vapor barriers", text: "Older homes frequently have failing liners that no longer cover the exposed soil beneath the floor." },
    ],
  },
  {
    city: "Ola",
    slug: "ola-ga",
    county: "Henry County",
    zips: ["30252"],
    headline: "Crawl Space Encapsulation & Repair in Ola, GA",
    metaTitle: "Crawl Space Encapsulation in Ola, GA | Henry Crawl Solutions",
    metaDescription: "Crawl space encapsulation, vapor barrier repair, drainage, moisture control, and wet crawl space help for Ola, GA homeowners. Free inspection from Henry Crawl Solutions.",
    intro: "Henry Crawl Solutions helps homeowners in Ola address crawl space humidity, vapor barrier damage, standing water, and moisture problems below the home.",
    nearby: ["McDonough", "Locust Grove", "Jackson", "Hampton"],
    neighborhoods: ["Ola school district", "Tussahaw Reservoir area", "Walnut Creek corridor", "East Lake Road", "Jackson Lake Road corridor"],
    problemAngle: "In Ola, larger lots and varied grading can make downspout discharge, foundation slope, and crawl space drainage especially important to review.",
    overview: [
      "Ola is the rural eastern stretch of Henry County, built around the well-regarded Ola school cluster and the Tussahaw Reservoir and Walnut Creek watersheds. Homes here tend to sit on larger, wooded lots with private wells and septic systems, and many have generously sized crawl spaces that are harder to keep dry than a compact suburban footprint.",
      "On Ola's acreage, the way a property is graded matters enormously: downspout discharge, foundation slope, and the natural fall toward nearby creeks all affect how much water reaches the crawl space. Larger crawl spaces also hold more humid air, so homeowners often need a properly sized dehumidifier alongside a sealed vapor barrier. Henry Crawl Solutions helps Ola homeowners review drainage across the lot and encapsulate the crawl space so the area under the home stays dry year-round.",
    ],
    localFactors: [
      { heading: "Large rural lots", text: "Bigger crawl spaces on acreage hold more humid air and often need a sized dehumidifier with the vapor barrier." },
      { heading: "Reservoir and creek watersheds", text: "Ground near Tussahaw Reservoir and Walnut Creek stays moist, raising soil humidity under the home." },
      { heading: "Grading and downspouts", text: "On sloped country lots, downspout discharge and foundation grade strongly affect crawl space water." },
    ],
  },
  {
    city: "Jackson",
    slug: "jackson-ga",
    county: "Butts County",
    zips: ["30233"],
    headline: "Crawl Space Encapsulation & Repair in Jackson, GA",
    metaTitle: "Crawl Space Repair in Jackson, GA | Henry Crawl Solutions",
    metaDescription: "Crawl space repair, moisture control, drainage, vapor barriers, and encapsulation for Jackson, GA homeowners near Jackson Lake. Free inspection from Henry Crawl Solutions.",
    intro: "Henry Crawl Solutions helps Jackson homeowners with crawl space repair, moisture control, drainage, vapor barriers, and encapsulation-related needs.",
    nearby: ["Locust Grove", "Ola", "McDonough", "Hampton"],
    neighborhoods: ["Historic downtown Jackson", "Jackson Lake area", "High Falls Road corridor", "Indian Springs area", "McKibben Street district"],
    problemAngle: "Jackson crawl spaces can show moisture through wet soil, musty air, or wood staining, especially when drainage and old barriers are working against each other.",
    overview: [
      "Jackson, the seat of Butts County just south of Henry, pairs a historic downtown with lake and river country around Jackson Lake, High Falls, and Indian Springs. The older homes near the city center often have decades-old crawl spaces with original framing and worn vapor barriers, while lake-area properties contend with the extra humidity that comes from living near the water.",
      "That mix of aging housing stock and water-rich surroundings makes crawl space moisture a common concern in Jackson. Homeowners notice wood staining on joists, musty air, and soil that never fully dries, usually because old drainage and a failing barrier are working against each other. Henry Crawl Solutions helps Jackson homeowners stabilize moisture with the right blend of drainage, vapor barrier replacement, and encapsulation.",
    ],
    localFactors: [
      { heading: "Historic downtown homes", text: "Older houses near central Jackson often have original crawl spaces with worn liners and damp framing." },
      { heading: "Jackson Lake humidity", text: "Lake-area properties take on extra ambient moisture that humid crawl spaces draw in." },
      { heading: "Rural drainage", text: "Country lots around High Falls and Indian Springs depend on grading that can steer water under the home." },
    ],
  },
  {
    city: "Jonesboro",
    slug: "jonesboro-ga",
    county: "Clayton County",
    zips: ["30236", "30238"],
    headline: "Crawl Space Encapsulation & Repair in Jonesboro, GA",
    metaTitle: "Crawl Space Repair in Jonesboro, GA | Henry Crawl Solutions",
    metaDescription: "Crawl space moisture control, vapor barriers, mold-related cleanup planning, drainage, and repair for Jonesboro, GA homeowners. Free inspection from Henry Crawl Solutions.",
    intro: "Henry Crawl Solutions helps Jonesboro homeowners with damp crawl spaces, mold concerns, damaged vapor barriers, musty smells, and moisture control.",
    nearby: ["Stockbridge", "Lovejoy", "Hampton", "McDonough"],
    neighborhoods: ["Historic Jonesboro", "Lake Jodeco area", "Tara Road corridor", "Lee Street district", "Spivey area"],
    problemAngle: "Jonesboro homeowners may see crawl space warning signs in odors, uneven humidity, damp insulation, or water marks after storms.",
    overview: [
      "Jonesboro, the historic seat of Clayton County northwest of Henry, is known for its established mid-century neighborhoods and tree-lined streets near the old Tara Road corridor. Many homes here date to an era when crawl spaces were built with minimal ground cover, so original vapor barriers are often long past their useful life and bare clay soil sits exposed beneath the floor.",
      "Decades of mature tree growth and settled drainage keep the ground under Jonesboro homes damp, which shows up as musty insulation, uneven humidity, and water marks after heavy storms. Where that moisture lingers, mold-like growth can take hold on joists and subflooring. Henry Crawl Solutions helps Jonesboro homeowners control the underlying moisture, replace failed barriers, and plan any mold-related cleanup so the crawl space stays healthy.",
    ],
    localFactors: [
      { heading: "Established mid-century homes", text: "Older Jonesboro houses often have minimal original ground cover and vapor barriers that need replacing." },
      { heading: "Mature tree cover", text: "Long-standing shade and leaf debris keep crawl space soil from drying between rains." },
      { heading: "Lingering moisture and mold", text: "Persistent dampness on joists and insulation can lead to mold-like growth that needs a cleanup plan." },
    ],
  },
];

export const getLocation = (slug: string) => locations.find((location) => location.slug === slug);
export const getLocationByCity = (city: string) => locations.find((location) => location.city === city);

export const locationBlogLinks: Record<string, string> = {
  "mcdonough-ga": "/blog/crawl-space-encapsulation-cost-mcdonough-ga/",
  "stockbridge-ga": "/blog/signs-your-crawl-space-has-moisture-problems/",
  "jonesboro-ga": "/blog/signs-your-crawl-space-has-moisture-problems/",
  "locust-grove-ga": "/blog/vapor-barrier-vs-crawl-space-encapsulation/",
  "ola-ga": "/blog/vapor-barrier-vs-crawl-space-encapsulation/",
  "hampton-ga": "/blog/why-your-house-smells-musty-after-rain/",
  "lovejoy-ga": "/blog/why-your-house-smells-musty-after-rain/",
  "jackson-ga": "/blog/why-your-house-smells-musty-after-rain/"
};
