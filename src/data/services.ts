export type ServiceSlug =
  | "crawl-space-encapsulation"
  | "crawl-space-repair"
  | "vapor-barrier-installation"
  | "crawl-space-moisture-control"
  | "crawl-space-mold-removal"
  | "wet-crawl-space-repair"
  | "crawl-space-dehumidifier-installation"
  | "crawl-space-drainage"
  | "basement-waterproofing";

export type ProcessStep = { title: string; text: string };
export type CostFactor = { factor: string; detail: string };

export type Service = {
  title: string;
  slug: ServiceSlug;
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  image: {
    src: string;
    alt: string;
  };
  relatedKeywords: string[];
  excerpt: string;
  shortAnswer: string;
  quickFacts: string[];
  overview: string[];
  problemSigns: string[];
  includes: string[];
  process: ProcessStep[];
  costFactors: CostFactor[];
  reasons: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    title: "Crawl Space Encapsulation",
    slug: "crawl-space-encapsulation",
    primaryKeyword: "crawl space encapsulation McDonough GA",
    metaTitle: "Crawl Space Encapsulation in McDonough, GA | Henry Crawl Solutions",
    metaDescription: "Crawl space encapsulation in McDonough & Henry County, GA — sealed vapor barrier, vent sealing, drainage, and humidity control. Free inspection and estimate.",
    image: {
      src: "/images/services/mcdonough-ga-crawl-space-encapsulation-service.jpg",
      alt: "Encapsulated crawl space with sealed vapor barrier for McDonough GA moisture control"
    },
    relatedKeywords: ["crawl space sealing", "crawl space vapor barrier", "crawl space moisture control", "encapsulated crawl space", "crawl space encapsulation cost"],
    excerpt: "Encapsulation helps separate the crawl space from ground moisture, humid air, and recurring damp conditions under the home.",
    shortAnswer:
      "Crawl space encapsulation in McDonough, GA typically involves sealing exposed ground and foundation areas with a durable vapor barrier, addressing moisture entry points, and pairing the system with drainage or humidity control when needed.",
    quickFacts: [
      "Encapsulation seals the crawl space floor and walls with a heavy-duty vapor barrier to separate the home from ground moisture and humid outside air.",
      "A complete system can combine a sealed liner, vent and rim-joist sealing, drainage, and a dehumidifier, sized to the specific crawl space.",
      "In McDonough and Henry County, GA, encapsulation is often paired with drainage because the red-clay soil drains slowly and holds water.",
      "Most projects start with a moisture inspection so the scope and estimate match the actual conditions under the home."
    ],
    overview: [
      "Crawl space encapsulation is the process of sealing the dirt floor, foundation walls, and openings of a crawl space with a continuous, heavy-duty vapor barrier so that ground moisture and humid outside air can no longer move freely into the space beneath your home. Instead of leaving exposed soil and open foundation vents, an encapsulated crawl space becomes a clean, sealed, conditioned area — which helps protect the wood framing, insulation, and ductwork directly above it. For homeowners dealing with musty odors, damp insulation, or high humidity, encapsulation addresses the root cause rather than masking the symptoms.",
      "In McDonough and across Henry County, GA, encapsulation is especially relevant because of the region's humid, subtropical climate and its dense Georgia red-clay subsoil. Clay holds water and drains slowly, so crawl spaces here often stay damp for days after a summer thunderstorm. Many older homes near the McDonough Square were built with vented crawl spaces and thin vapor barriers that have since torn or shifted, while newer subdivisions off Highway 81 and Jonesboro Road can develop moisture problems as graded lots settle. A sealed encapsulation system is designed to keep that ground and humidity-driven moisture out year-round.",
      "Encapsulation is rarely a one-size-fits-all package. A thorough crawl space may need water managed first with drainage or a sump system, then a sealed liner across the floor and up the walls, sealed foundation vents and rim joists, and finally a dehumidifier to hold humidity in a healthy range. Because the right combination depends on what the inspection finds, Henry Crawl Solutions reviews the moisture source, soil condition, and existing barrier before recommending a scope — so you only pay for the parts of the system your home actually needs."
    ],
    problemSigns: ["Musty odors indoors", "High crawl space humidity", "Damaged or missing plastic on the ground", "Condensation on ducts or framing", "Soft insulation or visible moisture staining"],
    includes: ["Crawl space inspection and moisture review", "Ground vapor barrier planning", "Wall and pier sealing recommendations", "Drainage and dehumidifier guidance when needed", "Clear estimate for the recommended scope"],
    process: [
      { title: "Crawl space inspection", text: "We assess the soil, framing, insulation, existing vapor barrier, and humidity to identify where moisture is entering and how much of the space it affects." },
      { title: "Water management first", text: "If standing water, drainage problems, or leaks are present, those are addressed before sealing so the encapsulation is not built over an active moisture source." },
      { title: "Vapor barrier installation", text: "A durable liner is installed across the ground and up the foundation walls and piers, with overlapped, sealed seams for a continuous moisture barrier." },
      { title: "Sealing vents and openings", text: "Foundation vents, the rim joist, and the access door are sealed to stop humid outside air from re-entering the conditioned crawl space." },
      { title: "Humidity control and walkthrough", text: "A dehumidifier is added when needed to hold humidity in a healthy range, followed by a final walkthrough of the completed system." }
    ],
    costFactors: [
      { factor: "Crawl space square footage", detail: "Larger crawl spaces require more vapor barrier material and labor, which is usually the biggest driver of the total cost." },
      { factor: "Soil and existing barrier condition", detail: "Debris removal, grading, or tearing out a failed old liner adds prep work before the new system goes in." },
      { factor: "Drainage or sump needs", detail: "If water enters regularly, interior drainage or a sump pump may be recommended first, which adds to the overall scope." },
      { factor: "Vapor barrier grade", detail: "Thicker, reinforced liners cost more than basic plastic but are more durable for a fully sealed, walkable crawl space." },
      { factor: "Dehumidifier and insulation", detail: "Adding humidity control or sealing the rim joist with insulation increases cost but improves long-term performance." }
    ],
    reasons: ["Reduce moisture movement from the soil", "Help protect wood framing from damp conditions", "Improve conditions around ducts and insulation", "Address recurring odors linked to crawl space humidity"],
    faqs: [
      {
        question: "Is encapsulation always necessary?",
        answer: "Not always. Some crawl spaces only need a vapor barrier repair, drainage improvement, or humidity control. An inspection helps determine the right scope so you do not pay for more than the home needs."
      },
      {
        question: "Does encapsulation help with musty smells?",
        answer: "It can help when the odor is connected to crawl space moisture, exposed soil, or humid air. The source of the odor should be checked first, because a smell tied to a plumbing leak or mold may need that issue handled before sealing."
      },
      {
        question: "How much does crawl space encapsulation cost in McDonough, GA?",
        answer: "Cost depends on the crawl space size, the condition of the soil and existing barrier, and whether drainage or a dehumidifier is included. Because every crawl space is different, we provide a written estimate after a free inspection rather than a one-size price."
      },
      {
        question: "How long does encapsulation take to install?",
        answer: "Many crawl spaces are encapsulated in one to three days, depending on the square footage, the amount of prep or repair needed, and whether drainage work is part of the project."
      },
      {
        question: "Should I close my foundation vents after encapsulation?",
        answer: "Yes. A core part of encapsulation is sealing the foundation vents and openings, because open vents let humid Georgia summer air into the crawl space where it condenses on cooler surfaces."
      },
      {
        question: "Does encapsulation increase home value?",
        answer: "A dry, sealed crawl space is often viewed favorably by buyers and home inspectors because it reduces moisture-related concerns. We focus on documenting the work clearly so the improvement is easy to show."
      }
    ]
  },
  {
    title: "Crawl Space Repair",
    slug: "crawl-space-repair",
    primaryKeyword: "crawl space repair McDonough GA",
    metaTitle: "Crawl Space Repair in McDonough, GA | Henry Crawl Solutions",
    metaDescription: "Crawl space repair in McDonough & Henry County, GA — sagging floors, wood rot, damaged barriers, moisture damage, and drainage problems. Free inspection and estimate.",
    image: {
      src: "/images/services/mcdonough-ga-crawl-space-repair-support-jack.jpg",
      alt: "Crawl space repair support jack and reinforced floor joist in McDonough GA home"
    },
    relatedKeywords: ["wet crawl space repair", "damaged crawl space", "crawl space wood rot", "sagging floor crawl space", "crawl space joist repair"],
    excerpt: "Repair work addresses damaged, damp, or deteriorated crawl space conditions before they become larger home issues.",
    shortAnswer:
      "Crawl space repair in McDonough, GA can include evaluating damp conditions, damaged materials, drainage problems, vapor barrier failure, and visible signs of deterioration under the home.",
    quickFacts: [
      "Crawl space repair addresses the damage moisture leaves behind — soft framing, sagging floors, failed barriers, and deteriorated insulation — not just the symptoms above.",
      "Repairs are planned after an inspection so the root moisture or drainage cause is corrected before the visible damage is fixed.",
      "In Henry County, GA, slow-draining red clay and humid summers are common drivers of the wood rot and damp insulation found under local homes.",
      "Repair work is often staged ahead of vapor barrier, drainage, or encapsulation so the crawl space stays dry once it is sealed."
    ],
    overview: [
      "Crawl space repair covers the work needed to correct damage that has already happened under the home — sagging or bouncy floors, water-stained or rotting joists and beams, fallen or soaked insulation, failed vapor barriers, and the drainage problems that caused them. Because a crawl space is out of sight, this damage often develops quietly over years until it shows up as a soft spot in the floor, a musty smell, or a noticeable change in indoor comfort. Repair starts by finding the underlying cause so the same problem does not return after the fix.",
      "Homes in McDonough and throughout Henry County, GA are particularly prone to crawl space damage because of the area's humid climate and dense red-clay soil. Clay holds water against the foundation and drains slowly, keeping crawl spaces damp long after a storm, and that sustained moisture is what breaks down wood framing, corrodes fasteners, and ruins fiberglass insulation. Older homes near downtown McDonough may have decades-old structural wear, while newer subdivisions can show damage from grading and drainage that changed as the lot settled.",
      "A repair plan is most effective when it is sequenced correctly: identify and stop the moisture or water source, repair or reinforce the affected framing and remove damaged materials, then restore the moisture barrier and add humidity control as needed. Henry Crawl Solutions assesses the full condition under the home and recommends repairs in the right order — and coordinates them with related vapor barrier, drainage, or encapsulation work so the crawl space stays sound after the repair is finished."
    ],
    problemSigns: ["Soft or sagging floor areas", "Wood staining or suspected rot", "Standing water after rain", "Loose insulation", "Persistent crawl space odors"],
    includes: ["Condition assessment under the home", "Moisture and drainage review", "Repair scope recommendations", "Coordination with related vapor barrier or encapsulation needs", "Straightforward estimate details"],
    process: [
      { title: "Full condition assessment", text: "We inspect framing, subfloor, supports, insulation, and the vapor barrier to document every area showing moisture damage or wear." },
      { title: "Find the moisture source", text: "Drainage, grading, plumbing, and ground moisture are reviewed so the underlying cause is corrected, not just the visible damage." },
      { title: "Repair and reinforce", text: "Damaged materials are removed and affected framing is repaired or reinforced with appropriate supports where needed." },
      { title: "Restore the barrier", text: "The vapor barrier is repaired or replaced and openings are addressed so the dried-out crawl space is protected going forward." },
      { title: "Coordinate moisture control", text: "Related drainage, dehumidifier, or encapsulation work is planned so the repair holds and the same damage does not recur." }
    ],
    costFactors: [
      { factor: "Extent of the damage", detail: "Localized repairs cost far less than work that spans multiple joists, beams, or large sections of subfloor." },
      { factor: "Structural reinforcement", detail: "Adding supports or jacks to address sagging or settling adds labor and materials beyond simple material replacement." },
      { factor: "Underlying moisture source", detail: "Correcting the cause — drainage, grading, or a leak — is part of a lasting repair and affects the total scope." },
      { factor: "Material removal", detail: "Tearing out and hauling soaked insulation, debris, or a failed old barrier adds prep time before repairs begin." },
      { factor: "Access and crawl height", detail: "Tight or low-clearance crawl spaces are slower to work in, which can affect labor on larger repairs." }
    ],
    reasons: ["Stop small moisture problems from spreading", "Address visible crawl space damage", "Improve the condition of the area below living spaces", "Plan repairs before adding moisture control upgrades"],
    faqs: [
      {
        question: "What causes crawl space damage?",
        answer: "Common causes include excess moisture, drainage problems, pest activity, poor ventilation, plumbing leaks, and aging vapor barriers. In Henry County, slow-draining clay soil and humid summers make moisture the most frequent culprit."
      },
      {
        question: "Can repair and encapsulation be done together?",
        answer: "Often, yes. Damage should be evaluated first so repairs are planned before sealing or humidity-control work — that way you are not encapsulating over framing that still needs attention."
      },
      {
        question: "What are the signs my crawl space needs repair?",
        answer: "Soft, sagging, or bouncy floors, a musty smell in the rooms above, stained or rotting wood, fallen insulation, and standing water after rain are all signs worth having inspected."
      },
      {
        question: "Are sagging floors always a crawl space problem?",
        answer: "Not always, but a crawl space inspection is a good first step. Sagging is often linked to moisture-weakened joists, settling supports, or damaged subfloor, all of which are visible from underneath the home."
      },
      {
        question: "Is crawl space damage covered by homeowners insurance?",
        answer: "Coverage varies by policy and cause. Sudden events like a burst pipe may be covered, while gradual moisture damage often is not. We document the conditions clearly so you can review them with your insurer."
      },
      {
        question: "How urgent is crawl space repair?",
        answer: "Moisture-driven damage tends to spread, so addressing it earlier usually keeps the scope smaller. An inspection helps you understand how active the problem is and prioritize accordingly."
      }
    ]
  },
  {
    title: "Vapor Barrier Installation",
    slug: "vapor-barrier-installation",
    primaryKeyword: "crawl space vapor barrier McDonough GA",
    metaTitle: "Crawl Space Vapor Barrier Installation in McDonough, GA | Henry Crawl Solutions",
    metaDescription: "Crawl space vapor barrier installation and replacement in McDonough & Henry County, GA. Seal exposed soil, stop ground moisture, and reduce musty odors. Free inspection.",
    image: {
      src: "/images/services/mcdonough-ga-vapor-barrier-installation-crawl-space.jpg",
      alt: "New crawl space vapor barrier installation over Georgia red clay in McDonough GA"
    },
    relatedKeywords: ["vapor barrier installation", "moisture barrier", "crawl space plastic barrier", "replace vapor barrier", "6 mil vs 20 mil vapor barrier"],
    excerpt: "A properly installed vapor barrier helps limit ground moisture from moving into the crawl space.",
    shortAnswer:
      "Vapor barrier installation in McDonough, GA places a moisture-resistant liner over exposed crawl space soil and may include sealing seams, piers, and edges depending on the crawl space conditions.",
    quickFacts: [
      "A vapor barrier is a moisture-resistant liner laid over the exposed crawl space soil to slow ground moisture from evaporating up into the home.",
      "Barriers are measured in mils of thickness; thicker, reinforced liners last longer and hold up better than thin builder-grade plastic.",
      "A vapor barrier is one component of full encapsulation — it covers the floor, while encapsulation also seals the walls, vents, and openings.",
      "Over Henry County's red clay, sealing the seams and edges matters as much as the liner itself for keeping ground moisture out."
    ],
    overview: [
      "A vapor barrier is a moisture-resistant liner installed over the bare dirt floor of a crawl space to slow the steady stream of ground moisture that would otherwise evaporate upward into the framing, insulation, and rooms above. Without one, exposed soil acts like a continuous source of humidity — and over Georgia's damp clay, that adds up to gallons of water vapor entering the home each day. A properly installed and sealed vapor barrier is one of the most cost-effective first steps toward a drier, healthier crawl space.",
      "In McDonough and Henry County, GA, vapor barriers do a lot of work because the local red-clay subsoil stays moist and drains slowly. Many homes were originally fitted with thin 6-mil builder's plastic that tears, slips off the piers, and exposes bare soil again within a few years. When that happens, earthy smells return after rain, insulation dampens, and condensation reappears on ductwork. Replacing a failed barrier with a thicker, well-sealed liner restores that first line of defense against ground moisture.",
      "Installation quality matters as much as the material. A vapor barrier performs best when the ground is cleared and prepped, the liner is run up the foundation walls and around piers, and the seams are generously overlapped and sealed rather than simply laid loose. Because a barrier alone does not stop standing water or humid outside air, Henry Crawl Solutions reviews whether drainage or full encapsulation is also needed — so the new liner is part of a system that keeps the crawl space dry, not just a sheet of plastic over a wet problem."
    ],
    problemSigns: ["Bare soil under the home", "Torn or displaced plastic", "Water pooling above old liner", "Earthy smells after rain", "Damp insulation or ducts"],
    includes: ["Existing barrier review", "Ground preparation recommendations", "Barrier placement and seam planning", "Moisture entry point notes", "Related drainage or encapsulation guidance"],
    process: [
      { title: "Review the existing barrier", text: "We check whether the current liner is torn, slipping, holding water, or missing, and confirm how much bare soil is exposed." },
      { title: "Clear and prep the ground", text: "Debris, old torn plastic, and obstructions are removed so the new barrier sits flat against the soil and piers." },
      { title: "Lay and shape the liner", text: "A moisture-resistant liner is positioned across the floor and run up the foundation walls and around piers for full coverage." },
      { title: "Overlap and seal seams", text: "Seams are overlapped and sealed, and edges are secured so ground moisture cannot escape through gaps in the liner." },
      { title: "Note remaining moisture needs", text: "If standing water or humid air is still a factor, we recommend drainage or encapsulation so the barrier is not covering an active source." }
    ],
    costFactors: [
      { factor: "Crawl space size", detail: "More square footage means more liner material and labor, the main driver of a vapor barrier project's cost." },
      { factor: "Barrier thickness", detail: "Thicker reinforced liners cost more per square foot than thin plastic but resist tearing and last significantly longer." },
      { factor: "Ground preparation", detail: "Removing debris, old plastic, or grading an uneven floor adds prep work before the new barrier is laid." },
      { factor: "Wall and pier coverage", detail: "Running the liner up the walls and sealing around piers is more involved than a simple floor-only layout." },
      { factor: "Seam sealing detail", detail: "Fully overlapped and sealed seams take more time and materials than a loose-laid liner but perform far better." }
    ],
    reasons: ["Replace old or damaged plastic", "Create a cleaner crawl space surface", "Reduce moisture movement from exposed soil", "Support broader moisture-control work"],
    faqs: [
      {
        question: "Is a vapor barrier the same as encapsulation?",
        answer: "No. A vapor barrier is usually one part of encapsulation. A barrier covers the soil, while full encapsulation also seals the foundation walls, vents, and openings and often adds drainage and a dehumidifier."
      },
      {
        question: "When should a vapor barrier be replaced?",
        answer: "Replacement may be needed when the material is torn, missing, holding water, poorly overlapped, or no longer covering exposed soil. Thin builder-grade plastic often reaches that point within a few years."
      },
      {
        question: "What thickness of vapor barrier is best?",
        answer: "Thicker reinforced liners hold up far better than thin 6-mil plastic, especially in a crawl space that will be entered for service. The right choice depends on whether you want a simple barrier or a durable, walkable encapsulation liner."
      },
      {
        question: "How much does vapor barrier installation cost in McDonough, GA?",
        answer: "Cost depends mainly on the crawl space size, the liner thickness, and how much ground prep or wall coverage is involved. We provide a written estimate after a free inspection."
      },
      {
        question: "Can a vapor barrier stop standing water?",
        answer: "No. A vapor barrier slows ground moisture vapor, but it does not stop water that enters from drainage or grading problems. Standing water should be managed with drainage before or alongside a barrier."
      },
      {
        question: "Will a new vapor barrier get rid of musty smells?",
        answer: "It often helps when the odor is driven by moisture evaporating from exposed soil. If humid outside air or mold is also a factor, sealing vents or addressing those issues may be needed as well."
      }
    ]
  },
  {
    title: "Crawl Space Moisture Control",
    slug: "crawl-space-moisture-control",
    primaryKeyword: "crawl space moisture control McDonough GA",
    metaTitle: "Crawl Space Moisture Control in McDonough, GA | Henry Crawl Solutions",
    metaDescription: "Crawl space moisture control in McDonough & Henry County, GA — find the source of damp air, humidity, and condensation and fix it for good. Free inspection.",
    image: {
      src: "/images/services/mcdonough-ga-crawl-space-moisture-control-humidity-monitor.jpg",
      alt: "Crawl space moisture control with sealed liner and humidity monitor in McDonough GA"
    },
    relatedKeywords: ["humid crawl space", "moisture under house", "musty smell under home", "crawl space humidity", "how to lower crawl space humidity"],
    excerpt: "Moisture control targets the source of damp air, condensation, water entry, and musty crawl space conditions.",
    shortAnswer:
      "Crawl space moisture control in McDonough, GA focuses on identifying where moisture is coming from and recommending a practical combination of vapor barrier, drainage, sealing, and dehumidification.",
    quickFacts: [
      "Crawl space moisture control means identifying every source of dampness — ground vapor, water entry, and humid outside air — and treating each with the right method.",
      "A typical plan combines a sealed vapor barrier, drainage where water enters, vent sealing, and a dehumidifier to hold humidity in a healthy range.",
      "Crawl space humidity is generally healthiest kept around 55% or below to limit condensation, mold growth, and wood decay.",
      "In Henry County, GA, humid summers and slow-draining clay make crawl space moisture a recurring issue that one fix alone rarely solves."
    ],
    overview: [
      "Crawl space moisture control is the practice of finding and managing every way moisture gets under your home, then keeping the space dry over the long term. Dampness under a house usually comes from three sources at once: water vapor rising from exposed soil, liquid water entering from drainage or grading problems, and humid outside air drifting in through open foundation vents. Effective moisture control treats each source rather than reaching for a single product, which is why an inspection comes first.",
      "In McDonough and Henry County, GA, the climate and soil make moisture control an ongoing concern. Long, humid subtropical summers push warm, moisture-laden air into vented crawl spaces, where it condenses on cooler ductwork and framing. At the same time, the region's red-clay soil holds water and releases it slowly, keeping the ground damp for days after rain. Together these conditions produce the musty smells, high humidity readings, condensation, and damp insulation that local homeowners notice most from late spring through early fall.",
      "Because the right solution depends on what is driving the moisture, Henry Crawl Solutions measures humidity, checks the vapor barrier, reviews drainage and grading, and looks for condensation and water-entry points before recommending a plan. That plan is usually a practical combination — a sealed barrier to stop ground vapor, drainage where water collects, sealed vents to keep humid air out, and a dehumidifier to manage what remains. The goal is a crawl space that stays consistently dry, not just one that feels better for a few weeks."
    ],
    problemSigns: ["Musty indoor air", "Condensation on surfaces", "High humidity readings", "Mold-like staining", "Standing water or damp soil"],
    includes: ["Moisture source review", "Ventilation and humidity notes", "Vapor barrier condition check", "Drainage and dehumidifier recommendations", "Prioritized repair plan"],
    process: [
      { title: "Measure and inspect", text: "We take humidity readings and inspect the soil, barrier, framing, and ductwork to see how damp the crawl space really is." },
      { title: "Trace the sources", text: "Ground moisture, water entry, drainage, and humid air through vents are reviewed so each contributing source is identified." },
      { title: "Stop water and ground vapor", text: "Drainage is recommended where water enters, and a sealed vapor barrier is planned to block moisture rising from the soil." },
      { title: "Seal and condition the air", text: "Foundation vents and openings are sealed, and a dehumidifier is added when needed to hold humidity in a healthy range." },
      { title: "Prioritized plan", text: "You receive a clear, ordered plan so the most important moisture sources are handled first within a realistic budget." }
    ],
    costFactors: [
      { factor: "Number of moisture sources", detail: "A crawl space with ground vapor, water entry, and humid air needs more components than one with a single issue." },
      { factor: "Vapor barrier condition", detail: "Replacing a failed barrier costs more than topping up a sound one, and is often the foundation of the plan." },
      { factor: "Drainage requirements", detail: "If water enters the space, interior drainage or a sump pump adds to the overall moisture-control scope." },
      { factor: "Dehumidifier", detail: "Adding humidity control increases cost but is often what keeps a sealed crawl space consistently dry in humid months." },
      { factor: "Crawl space size and access", detail: "Larger or low-clearance crawl spaces take more labor across each part of the plan." }
    ],
    reasons: ["Make the crawl space less damp", "Support healthier building materials", "Reduce odor concerns", "Help protect insulation and ductwork"],
    faqs: [
      {
        question: "What is the best way to control crawl space moisture?",
        answer: "The best approach depends on the source. Ground moisture calls for a sealed vapor barrier, water entry calls for drainage, and humid air calls for sealed vents and a dehumidifier. Most crawl spaces need a combination, which is why an inspection comes first."
      },
      {
        question: "Can a dehumidifier solve crawl space moisture by itself?",
        answer: "Sometimes it helps, but it should not be the only answer when water entry, bare soil, or drainage issues are still present. A dehumidifier works best after those sources are sealed off."
      },
      {
        question: "What humidity level should a crawl space be?",
        answer: "Crawl space humidity is generally healthiest kept around 55% or below. Above roughly 60–70%, conditions favor condensation, mold growth, and wood decay over time."
      },
      {
        question: "Should crawl space vents be open or closed?",
        answer: "In Georgia's humid climate, open vents often let warm, moist outside air into the crawl space, where it condenses. Sealing vents as part of a controlled, conditioned crawl space is usually more effective than venting."
      },
      {
        question: "Why is my crawl space humid in the summer?",
        answer: "Warm summer air holds a lot of moisture. When it enters a cooler crawl space through vents, the moisture condenses on ducts and framing — which is why humidity and musty smells often peak from late spring through early fall in Henry County."
      },
      {
        question: "Does controlling crawl space moisture improve indoor air?",
        answer: "It can. Because air from the crawl space moves up into the living area, drier crawl space conditions often help reduce musty odors and dampness felt in the rooms above."
      }
    ]
  },
  {
    title: "Crawl Space Mold Removal",
    slug: "crawl-space-mold-removal",
    primaryKeyword: "crawl space mold removal McDonough GA",
    metaTitle: "Crawl Space Mold Removal in McDonough, GA | Henry Crawl Solutions",
    metaDescription: "Crawl space mold removal in McDonough & Henry County, GA — cleanup of affected framing plus moisture control so growth does not return. Free inspection and estimate.",
    image: {
      src: "/images/services/mcdonough-ga-crawl-space-mold-removal-cleanup.jpg",
      alt: "Crawl space mold cleanup area with treated joists and clean liner in McDonough GA"
    },
    relatedKeywords: ["mold in crawl space", "crawl space mold cleanup", "musty crawl space", "mold under house", "crawl space mold remediation"],
    excerpt: "Mold-related crawl space work starts with moisture source control and a clear cleanup plan for affected areas.",
    shortAnswer:
      "Crawl space mold removal in McDonough, GA should begin with identifying the moisture conditions that allow growth, then planning cleanup and prevention steps suited to the crawl space.",
    quickFacts: [
      "Mold in a crawl space grows where moisture is present, so lasting removal pairs cleanup of affected surfaces with control of the underlying dampness.",
      "Cleaning visible growth without fixing the moisture source usually leads to regrowth within months.",
      "Crawl space mold often signals high humidity, a failed vapor barrier, or past water intrusion — all common in Henry County's humid, clay-soil conditions.",
      "An inspection confirms whether what you are seeing is mold, surface staining, or efflorescence before any cleanup is planned."
    ],
    overview: [
      "Mold in a crawl space is a moisture problem first and a cleaning problem second. Mold needs three things to grow — organic material like wood and dust, the right temperature, and moisture — and the only one a homeowner can realistically control is moisture. That is why effective crawl space mold removal always starts by finding what is keeping the space damp, then combines cleanup of the affected surfaces with a plan to keep humidity and water out so the growth does not simply return.",
      "Crawl spaces in McDonough and Henry County, GA are prone to mold because of the area's warm, humid climate and slow-draining red-clay soil. Vented crawl spaces draw in moist summer air that condenses on cooler framing, and aging or torn vapor barriers leave bare soil that keeps the space damp. The result is the dark staining on joists, musty odors near floors and vents, and that telltale earthy smell that drifts up into the living area — most noticeable in the humid months from late spring through early fall.",
      "Because mold is a symptom, Henry Crawl Solutions begins with a visual review and moisture assessment to confirm what is growing and why. Cleanup of affected materials is then planned alongside the moisture controls that prevent recurrence — repairing or replacing the vapor barrier, improving drainage, sealing vents, and adding a dehumidifier where humidity stays high. For widespread or health-sensitive situations, we are clear about when a specialized remediation or testing professional should be involved, so you get an honest scope rather than an oversold one."
    ],
    problemSigns: ["Musty odor near floors or vents", "Dark staining on joists", "Humid crawl space air", "Wet insulation", "Past water intrusion"],
    includes: ["Visual crawl space review", "Moisture condition notes", "Cleanup scope recommendations", "Prevention planning", "Related encapsulation or dehumidifier guidance"],
    process: [
      { title: "Visual review and confirmation", text: "We inspect the framing, insulation, and barrier to confirm whether the issue is mold, staining, or efflorescence and how widespread it is." },
      { title: "Assess the moisture cause", text: "Humidity, the vapor barrier, drainage, and any past water intrusion are reviewed to pinpoint what is feeding the growth." },
      { title: "Plan the cleanup scope", text: "A cleanup plan for the affected surfaces is recommended, with a clear note when specialized remediation or testing is the right call." },
      { title: "Control the moisture", text: "Vapor barrier, drainage, vent sealing, or dehumidification is planned so conditions no longer support regrowth." },
      { title: "Prevention and follow-up", text: "We outline how to keep the crawl space dry going forward so the same conditions do not return after cleanup." }
    ],
    costFactors: [
      { factor: "Extent of growth", detail: "Spot cleanup of a small area costs far less than addressing growth across many joists or large insulation sections." },
      { factor: "Material removal", detail: "Removing and replacing mold-affected insulation, debris, or a soaked barrier adds to the scope." },
      { factor: "Underlying moisture fix", detail: "Lasting results require correcting the cause, so barrier, drainage, or dehumidifier work factors into the total." },
      { factor: "Specialized remediation", detail: "Widespread or health-sensitive situations may call for a remediation specialist, which we will flag honestly." },
      { factor: "Crawl space size and access", detail: "Larger or low-clearance spaces take more labor to clean and treat thoroughly." }
    ],
    reasons: ["Address visible growth concerns", "Reduce conditions that support recurring mold", "Plan cleanup alongside moisture repair", "Improve confidence in the crawl space condition"],
    faqs: [
      {
        question: "Will mold come back after cleanup?",
        answer: "It can return if moisture problems remain. Cleanup should be paired with moisture control, drainage, ventilation, or encapsulation recommendations so the conditions that caused the growth are no longer present."
      },
      {
        question: "Can a musty smell mean mold?",
        answer: "A musty smell can be related to moisture, organic material, or mold-like growth. The crawl space should be inspected to identify the likely cause rather than assuming it is mold."
      },
      {
        question: "Is crawl space mold dangerous?",
        answer: "Mold can affect indoor air quality and is a sign of excess moisture that may also be damaging the home. Health concerns vary by person and mold type, so a doctor handles health questions while we focus on the moisture conditions and cleanup."
      },
      {
        question: "What causes mold in a crawl space?",
        answer: "High humidity, a failed or missing vapor barrier, poor drainage, and past water intrusion are the most common causes — all of which are common in Henry County's humid, clay-soil environment."
      },
      {
        question: "Do I need professional mold testing?",
        answer: "Not every situation requires testing. For small, clearly visible growth, the priority is moisture control and cleanup. For widespread or health-sensitive cases, we will recommend a specialized remediation or testing professional."
      },
      {
        question: "Does encapsulation prevent crawl space mold?",
        answer: "Encapsulation strongly reduces the conditions mold needs by sealing out ground moisture and humid air. Paired with humidity control, it is one of the most effective long-term ways to keep a crawl space mold-resistant."
      }
    ]
  },
  {
    title: "Wet Crawl Space Repair",
    slug: "wet-crawl-space-repair",
    primaryKeyword: "wet crawl space repair McDonough GA",
    metaTitle: "Wet Crawl Space Repair in McDonough, GA | Henry Crawl Solutions",
    metaDescription: "Wet crawl space repair in McDonough & Henry County, GA — find water entry points, fix drainage, remove damaged materials, and stop standing water. Free inspection.",
    image: {
      src: "/images/services/mcdonough-ga-wet-crawl-space-repair-pump.jpg",
      alt: "Wet crawl space repair with standing water and pump hose under McDonough GA home"
    },
    relatedKeywords: ["standing water in crawl space", "water under house", "crawl space water damage", "flooded crawl space", "sump pump crawl space"],
    excerpt: "Wet crawl space repair focuses on water entry, drainage, and damaged materials caused by recurring moisture.",
    shortAnswer:
      "Wet crawl space repair in McDonough, GA can involve locating water entry points, reviewing drainage, removing damaged materials, and recommending barriers, drains, or sump solutions.",
    quickFacts: [
      "Wet crawl space repair addresses liquid water — standing puddles, runoff, and groundwater — not just humidity, so it begins by locating where water enters.",
      "Lasting repairs combine stopping the water source with drainage, a sump pump where needed, and replacing materials the water damaged.",
      "In Henry County, GA, heavy summer storms over slow-draining red clay are a leading cause of recurring standing water under homes.",
      "Standing water should be resolved before installing a vapor barrier or encapsulation so the new system is not trapping water beneath it."
    ],
    overview: [
      "A wet crawl space is different from a merely humid one: it has actual liquid water — puddles after storms, damp mud, a vapor barrier holding water, or a steady seep along the foundation. That water rots framing, ruins insulation, feeds mold, and keeps the whole space damp no matter what else is done. Wet crawl space repair targets the water itself, starting with where it comes from, because covering a wet crawl space without stopping the source only traps the problem underneath.",
      "Homes in McDonough and across Henry County, GA see wet crawl spaces often because of the combination of intense summer thunderstorms and dense red-clay soil that drains slowly. When heavy rain falls faster than the clay can absorb it, water pools against the foundation and finds its way through vents, cracks, and grading low spots into the crawl space. Roof runoff from clogged gutters or short downspouts, a high seasonal water table, and lots that have settled over time all add to the volume of water arriving under the home.",
      "Repair is most reliable when it follows the water's path. Henry Crawl Solutions inspects for the entry points, reviews exterior grading and downspouts, and recommends a practical combination — interior drainage to collect water, a sump pump to discharge it, exterior corrections to reduce what arrives, and replacement of materials the water has damaged. Once the space reliably stays dry, it can be fitted with a fresh vapor barrier or encapsulated, so the wet crawl space becomes a lasting fix rather than a recurring emergency after every storm."
    ],
    problemSigns: ["Standing water after storms", "Mud or water marks", "Wet vapor barrier", "Damp wood or insulation", "Musty air after rain"],
    includes: ["Water entry inspection", "Drainage and grading notes", "Repair recommendations for affected areas", "Vapor barrier review", "Sump or drain discussion where appropriate"],
    process: [
      { title: "Locate the water entry", text: "We inspect for where water enters — vents, cracks, grading low spots, or seepage along the foundation — after a wet period when possible." },
      { title: "Review drainage and grading", text: "Downspouts, gutters, exterior slope, and any existing drainage are checked to understand how much water reaches the home." },
      { title: "Manage the water", text: "Interior drainage and a sump pump are recommended where needed to collect and discharge water that enters the crawl space." },
      { title: "Repair damaged materials", text: "Soaked insulation, debris, and a water-logged barrier are removed, and affected framing is addressed." },
      { title: "Protect the dried space", text: "Once the space stays dry, a fresh vapor barrier or encapsulation can be planned so the repair holds long term." }
    ],
    costFactors: [
      { factor: "Source and volume of water", detail: "A minor seep is far simpler to manage than recurring storm flooding that needs full interior drainage." },
      { factor: "Drainage and sump system", detail: "Adding interior drains and a sump pump to collect and discharge water is a major part of many wet-crawl-space scopes." },
      { factor: "Exterior corrections", detail: "Improving grading, downspouts, and runoff at the surface can reduce the water arriving and affect the plan." },
      { factor: "Damaged material replacement", detail: "Removing soaked insulation, debris, and a ruined barrier adds cleanup labor before repairs begin." },
      { factor: "Follow-up barrier or encapsulation", detail: "Sealing the dried space with a new barrier or encapsulation is often recommended once water is controlled." }
    ],
    reasons: ["Reduce standing water below the home", "Protect crawl space materials", "Prepare for encapsulation or barrier work", "Help reduce moisture-related odors"],
    faqs: [
      {
        question: "Why is water getting into my crawl space?",
        answer: "Common causes include roof runoff, poor grading, foundation openings, plumbing leaks, groundwater, and missing drainage systems. In Henry County, heavy storms over slow-draining clay are frequently the driver."
      },
      {
        question: "Should water be removed before installing a vapor barrier?",
        answer: "Yes. Recurring water entry should be addressed before placing or replacing a vapor barrier so water does not collect on top of it and undo the work."
      },
      {
        question: "Do I need a sump pump for my crawl space?",
        answer: "A sump pump helps when water regularly collects and needs somewhere to go. If the space only gets occasional seepage, interior drainage and exterior corrections may be enough — an inspection clarifies which applies."
      },
      {
        question: "Is standing water in a crawl space an emergency?",
        answer: "Persistent standing water should be addressed promptly because it accelerates wood rot, mold, and insulation damage. The longer it sits, the larger the repair scope tends to become."
      },
      {
        question: "Can fixing my gutters stop crawl space water?",
        answer: "Sometimes. Clogged gutters and short downspouts dump roof runoff right next to the foundation, so correcting them can meaningfully reduce water. Often it is one part of a plan that also includes drainage."
      },
      {
        question: "How much does wet crawl space repair cost in McDonough, GA?",
        answer: "It depends on the water source and volume, whether drainage and a sump pump are needed, and how much material was damaged. We provide a written estimate after a free inspection of the conditions."
      }
    ]
  },
  {
    title: "Crawl Space Dehumidifier Installation",
    slug: "crawl-space-dehumidifier-installation",
    primaryKeyword: "crawl space dehumidifier McDonough GA",
    metaTitle: "Crawl Space Dehumidifier Installation in McDonough, GA | Henry Crawl Solutions",
    metaDescription: "Crawl space dehumidifier installation in McDonough & Henry County, GA — right-sized humidity control with proper drainage for sealed crawl spaces. Free inspection.",
    image: {
      src: "/images/services/mcdonough-ga-crawl-space-dehumidifier-installation.jpg",
      alt: "Crawl space dehumidifier installation with drain line in sealed McDonough GA crawl space"
    },
    relatedKeywords: ["crawl space humidity control", "dehumidifier under house", "crawl space air quality", "best crawl space dehumidifier"],
    excerpt: "A crawl space dehumidifier can help manage humid air after water and vapor issues have been addressed.",
    shortAnswer:
      "Crawl space dehumidifier installation in McDonough, GA may be recommended when humidity remains high after sealing, vapor barrier, and drainage needs are considered.",
    quickFacts: [
      "A crawl space dehumidifier actively pulls moisture out of the air to hold humidity in a healthy range, usually around 55% or below.",
      "It works best in a sealed crawl space — after the vapor barrier, vent sealing, and any drainage are in place — not as a standalone fix for water problems.",
      "Proper sizing and a reliable drain path (gravity line, condensate pump, or sump) are what make a dehumidifier perform and stay low-maintenance.",
      "In Henry County's humid summers, a dehumidifier is often the final piece that keeps an encapsulated crawl space consistently dry."
    ],
    overview: [
      "A crawl space dehumidifier is a unit built to run in the low, enclosed environment under a home, actively removing moisture from the air and holding humidity in a healthy range — typically around 55% or below. Unlike a vapor barrier, which blocks moisture from the ground, a dehumidifier conditions the air itself, capturing the humidity that remains after the soil and vents are sealed. It is the component that keeps a crawl space consistently dry through the most humid stretches of the year.",
      "In McDonough and Henry County, GA, a dehumidifier earns its place because of the long, humid subtropical summers. Even a well-sealed crawl space can hold residual moisture, and warm-season humidity tends to push readings up just when condensation risk is highest. Homeowners often notice that an otherwise encapsulated crawl space still feels damp, or that condensation reappears on ducts in July and August — that lingering humidity is exactly what a properly sized dehumidifier is designed to handle.",
      "The key to a dehumidifier that performs is matching the unit to the crawl space and giving it a reliable way to drain. Henry Crawl Solutions assesses the square footage and humidity load to recommend an appropriately sized unit, plans a drain path — a gravity line, condensate pump, or tie-in to a sump — and positions it for even coverage. Because a dehumidifier should not be asked to fight active water entry or bare soil, we confirm those issues are handled first, so the unit holds humidity rather than running constantly against a moisture source it cannot win."
    ],
    problemSigns: ["High humidity readings", "Condensation on ducts", "Musty air during warm months", "Damp insulation", "Encapsulated crawl space still feels humid"],
    includes: ["Humidity assessment", "Equipment sizing discussion", "Drainage path planning", "Placement recommendations", "Maintenance expectations"],
    process: [
      { title: "Humidity assessment", text: "We measure crawl space humidity and review the square footage and conditions to understand the actual moisture load." },
      { title: "Confirm the space is sealed", text: "We verify the vapor barrier, vent sealing, and any drainage are in place so the unit is not fighting an open moisture source." },
      { title: "Size the equipment", text: "An appropriately sized dehumidifier is recommended so it controls humidity efficiently without running constantly." },
      { title: "Plan the drain path", text: "A reliable drain is set up — a gravity line, condensate pump, or tie-in to a sump — so collected water is removed automatically." },
      { title: "Placement and handoff", text: "The unit is positioned for even coverage, and we review maintenance expectations like filter checks and target humidity." }
    ],
    costFactors: [
      { factor: "Unit size and capacity", detail: "Larger crawl spaces and higher moisture loads need higher-capacity units, which cost more than compact models." },
      { factor: "Drainage setup", detail: "A simple gravity drain is cheaper than a setup needing a condensate pump or a tie-in to a sump system." },
      { factor: "Electrical access", detail: "Running a dedicated outlet or power to the unit's location can add to the installation depending on the crawl space." },
      { factor: "Prerequisite sealing", detail: "If the barrier or vents are not yet sealed, that work is recommended first so the dehumidifier performs as intended." },
      { factor: "Controls and monitoring", detail: "Optional humidistats or remote humidity monitoring add convenience and cost." }
    ],
    reasons: ["Control humid air under the home", "Support encapsulation performance", "Reduce condensation risk", "Help maintain drier crawl space conditions"],
    faqs: [
      {
        question: "Does every crawl space need a dehumidifier?",
        answer: "No. A dehumidifier is most useful when humidity remains high after moisture sources and drainage issues are addressed. Some sealed crawl spaces stay dry without one; an inspection and humidity reading clarify whether yours needs it."
      },
      {
        question: "Where does a crawl space dehumidifier drain?",
        answer: "Drainage can vary by setup. It may connect to a condensate pump, a gravity drain line, or a sump system depending on site conditions and where water can be discharged."
      },
      {
        question: "What size dehumidifier do I need for my crawl space?",
        answer: "Sizing depends on the square footage and how much moisture the space holds. An undersized unit runs constantly and struggles, while an oversized one wastes energy, so we match the capacity to the space."
      },
      {
        question: "Will a regular household dehumidifier work in a crawl space?",
        answer: "Standard room dehumidifiers are generally not built for the low, enclosed, often cooler crawl space environment and tend to fail early. Units designed for crawl spaces are built to run reliably in those conditions."
      },
      {
        question: "How much does it cost to run a crawl space dehumidifier?",
        answer: "Operating cost depends on the unit's efficiency and how hard it works, which is why a sealed crawl space matters — in a properly sealed space, the unit cycles far less than in a leaky, vented one."
      },
      {
        question: "Do I still need a vapor barrier if I have a dehumidifier?",
        answer: "Yes. A dehumidifier conditions the air but does not stop ground moisture from rising out of bare soil. A vapor barrier and dehumidifier work together, each handling a different moisture source."
      }
    ]
  },
  {
    title: "Crawl Space Drainage",
    slug: "crawl-space-drainage",
    primaryKeyword: "crawl space drainage McDonough GA",
    metaTitle: "Crawl Space Drainage Systems in McDonough, GA | Henry Crawl Solutions",
    metaDescription: "Crawl space drainage in McDonough & Henry County, GA — interior drains, sump pumps, and grading fixes to move water away from under your home. Free inspection.",
    image: {
      src: "/images/services/mcdonough-ga-crawl-space-drainage-system.jpg",
      alt: "Crawl space drainage system with gravel trench and perforated pipe in McDonough GA"
    },
    relatedKeywords: ["crawl space drain system", "water drainage under house", "sump pump crawl space", "french drain crawl space"],
    excerpt: "Drainage improvements help move water away from the crawl space and reduce recurring wet conditions.",
    shortAnswer:
      "Crawl space drainage in McDonough, GA focuses on managing water that enters or collects under the home through grading, drains, sump systems, or related moisture-control recommendations.",
    quickFacts: [
      "A crawl space drainage system collects water that enters and routes it away from the home, usually through interior perimeter drains discharging to a sump pump.",
      "Drainage is the foundation other moisture work is built on — a vapor barrier or encapsulation laid over an undrained, wet space will not hold up.",
      "Exterior fixes like regrading, downspout extensions, and gutter repairs reduce how much water reaches the foundation in the first place.",
      "In Henry County, GA, slow-draining red clay and heavy summer storms make drainage one of the most important steps for a dry crawl space."
    ],
    overview: [
      "Crawl space drainage is the system that collects water entering or pooling under your home and carries it away before it can soak the soil, the vapor barrier, and the framing. The most common interior approach is a perimeter drain — a channel or perforated pipe set along the footing that gathers water and routes it to a sump pump, which discharges it away from the house. Drainage is what makes everything else durable: a barrier or encapsulation installed over a space that keeps flooding will simply trap water beneath it.",
      "In McDonough and Henry County, GA, drainage is one of the most important crawl space investments because of the local soil and weather. The region's dense red clay absorbs water slowly, so when heavy summer thunderstorms hit, rainfall sits against the foundation and works its way inside instead of soaking away. Add roof runoff from short downspouts and lots that have settled over time, and many crawl spaces here collect water repeatedly — leaving wet soil, channels worn in the dirt, water marks on foundation walls, and vapor barriers that keep failing.",
      "Effective drainage usually works from both directions. Henry Crawl Solutions reviews the water's path inside the crawl space and the conditions outside — grading, gutters, and downspouts — then recommends the right combination: interior perimeter drainage and a sump pump to handle water that gets in, plus exterior corrections to reduce how much arrives. Once the space drains reliably, it is ready for a fresh vapor barrier or encapsulation, turning a recurring wet-weather problem into a crawl space that stays dry storm after storm."
    ],
    problemSigns: ["Water pooling in low spots", "Wet soil after rain", "Drainage channels in dirt", "Water marks on foundation walls", "Repeated vapor barrier failure"],
    includes: ["Water path review", "Interior and exterior drainage notes", "Sump pump discussion if needed", "Barrier and encapsulation coordination", "Estimate for practical next steps"],
    process: [
      { title: "Trace the water path", text: "We map where water enters and collects inside the crawl space, ideally during or after a wet period." },
      { title: "Review exterior conditions", text: "Grading, gutters, and downspouts are checked to see how much water is being directed toward the foundation." },
      { title: "Plan interior drainage", text: "A perimeter drain and collection points are designed to gather water and route it to a discharge location." },
      { title: "Add a sump pump", text: "Where water needs to be lifted out, a sump pump is recommended to discharge collected water away from the home." },
      { title: "Coordinate barrier work", text: "Once drainage is in place, a vapor barrier or encapsulation is planned so the now-dry space stays protected." }
    ],
    costFactors: [
      { factor: "Linear footage of drainage", detail: "Longer perimeter drain runs and more collection points increase materials and labor." },
      { factor: "Sump pump system", detail: "Adding a sump pump, basin, and discharge line is a significant component when water must be pumped out." },
      { factor: "Soil and access", detail: "Trenching through dense clay in a low-clearance crawl space is more labor-intensive than open, workable ground." },
      { factor: "Exterior corrections", detail: "Regrading, downspout extensions, or gutter work outside adds to the scope but reduces incoming water." },
      { factor: "Discharge distance", detail: "Routing water far enough from the foundation to drain safely can add piping and labor." }
    ],
    reasons: ["Reduce standing water", "Support vapor barrier installation", "Improve crawl space repair outcomes", "Limit repeat moisture issues after storms"],
    faqs: [
      {
        question: "Is drainage needed before encapsulation?",
        answer: "If water regularly enters the crawl space, drainage should be considered before encapsulation so the sealed area is not trapping water beneath the new liner."
      },
      {
        question: "Can outside grading affect crawl space water?",
        answer: "Yes. Roof runoff, downspouts, and soil slope near the foundation all influence water below the home. Correcting them is often a cost-effective part of a drainage plan."
      },
      {
        question: "What is the difference between interior and exterior drainage?",
        answer: "Interior drainage collects water that has entered the crawl space and pumps it out, while exterior drainage and grading reduce how much water reaches the foundation. Many homes benefit from both."
      },
      {
        question: "How long does a sump pump last?",
        answer: "A sump pump's lifespan varies with use and quality, and pumps are mechanical parts that eventually wear out. Periodic testing and a backup plan for power outages help avoid surprises during heavy storms."
      },
      {
        question: "Will a French drain fix my crawl space water?",
        answer: "A perimeter or French-style drain is often a key part of the solution, but on its own it may not be enough if exterior runoff or grading is sending large volumes of water toward the home. We evaluate the whole path."
      },
      {
        question: "How much does crawl space drainage cost in McDonough, GA?",
        answer: "Cost depends on the length of drainage needed, whether a sump pump is required, the soil and access, and any exterior corrections. We provide a written estimate after a free inspection."
      }
    ]
  },
  {
    title: "Basement Waterproofing",
    slug: "basement-waterproofing",
    primaryKeyword: "basement waterproofing McDonough GA",
    metaTitle: "Basement Waterproofing in McDonough, GA | Henry Crawl Solutions",
    metaDescription: "Basement waterproofing in McDonough & Henry County, GA — stop water intrusion, damp walls, and below-grade moisture with drainage and sealing. Free inspection.",
    image: {
      src: "/images/services/mcdonough-ga-basement-waterproofing-sump-drain.jpg",
      alt: "Basement waterproofing with perimeter drain and sump system in McDonough GA"
    },
    relatedKeywords: ["wet basement repair", "basement moisture control", "foundation drainage", "basement leak repair"],
    excerpt: "Basement waterproofing helps address water intrusion, damp walls, and drainage concerns below grade.",
    shortAnswer:
      "Basement waterproofing in McDonough, GA can involve inspecting moisture entry, drainage, foundation conditions, and practical repairs to help reduce wet basement problems.",
    quickFacts: [
      "Basement waterproofing manages below-grade water intrusion through interior drainage, sump systems, wall sealing, and exterior grading corrections.",
      "Most wet basements are a drainage problem at heart — the goal is to control the water reaching and entering the foundation, not just seal the surface.",
      "Interior solutions like perimeter drains and sump pumps handle water that gets in; exterior corrections reduce how much arrives.",
      "In Henry County, GA, slow-draining clay and heavy storms drive the damp walls, seepage, and musty odors common in below-grade spaces."
    ],
    overview: [
      "Basement waterproofing is the work of keeping below-grade space dry by controlling where water goes around and under the foundation. A wet basement shows up as damp or staining walls, seepage at the floor-wall joint, efflorescence (the white mineral residue water leaves behind), musty odors, or outright water after heavy rain. Because almost all of this traces back to water in the soil against the foundation, durable waterproofing focuses on managing that water — collecting and discharging what gets in, and reducing what arrives — rather than just painting a sealer on the inside of a wall.",
      "In McDonough and Henry County, GA, below-grade moisture problems are driven by the same conditions that affect crawl spaces: dense red-clay soil that holds water and drains slowly, combined with intense summer thunderstorms. When the clay around a foundation saturates, it presses water against the walls and floor, finding cracks, joints, and porous spots. Lots that have settled, short or clogged downspouts, and grading that slopes toward the house all increase the hydrostatic pressure that pushes water inside.",
      "Effective waterproofing usually layers interior and exterior measures. Henry Crawl Solutions inspects where water enters, reviews the foundation and the drainage around the home, and recommends a practical combination — interior perimeter drainage tied to a sump pump to handle water that reaches the inside, wall sealing where appropriate, and exterior corrections like regrading and downspout extensions to cut down the volume. Because basement and crawl space moisture often share the same source, we coordinate the recommendations so the whole foundation is protected, not just one room."
    ],
    problemSigns: ["Damp basement walls", "Water after heavy rain", "Musty basement odor", "Efflorescence or staining", "Moisture near floor-wall joints"],
    includes: ["Basement moisture review", "Drainage and water entry notes", "Foundation-adjacent recommendations", "Related crawl space drainage guidance", "Clear waterproofing estimate"],
    process: [
      { title: "Basement moisture inspection", text: "We review the walls, floor, and floor-wall joints for seepage, staining, efflorescence, and where water enters." },
      { title: "Review water sources", text: "Grading, downspouts, gutters, and the surrounding soil are checked to understand where below-grade water is coming from." },
      { title: "Plan interior drainage", text: "Interior perimeter drainage tied to a sump pump is designed to collect and discharge water that reaches the inside." },
      { title: "Seal and correct", text: "Wall sealing where appropriate and exterior grading or downspout corrections are recommended to reduce intrusion." },
      { title: "Coordinate the foundation", text: "Because basement and crawl space moisture often share a source, related drainage is coordinated so the whole foundation stays dry." }
    ],
    costFactors: [
      { factor: "Source and severity", detail: "Occasional dampness is far simpler to address than recurring water intrusion after every storm." },
      { factor: "Interior drainage and sump", detail: "Installing perimeter drainage and a sump system is a major component when water reaches the inside regularly." },
      { factor: "Wall sealing and repair", detail: "Sealing porous walls or addressing cracks and joints adds to the scope depending on the foundation's condition." },
      { factor: "Exterior corrections", detail: "Regrading, downspout extensions, and gutter work reduce incoming water but add to the overall plan." },
      { factor: "Foundation size and access", detail: "Larger or harder-to-access foundations require more labor across each waterproofing measure." }
    ],
    reasons: ["Address below-grade moisture", "Reduce wet basement conditions", "Protect storage and mechanical areas", "Coordinate drainage around the home"],
    faqs: [
      {
        question: "Is basement waterproofing related to crawl space drainage?",
        answer: "It can be. Both issues may involve groundwater, grading, downspouts, and foundation drainage around the home, so the solutions often overlap and are best coordinated."
      },
      {
        question: "What should I do after finding basement water?",
        answer: "Document where water appears, check downspouts and grading, move stored items away from the moisture, and request an inspection before covering or finishing affected areas."
      },
      {
        question: "What causes a wet basement?",
        answer: "Common causes include poor grading, clogged or short downspouts, high groundwater, cracks or porous foundation walls, and slow-draining soil. In Henry County, saturated clay pressing against the foundation is a frequent driver."
      },
      {
        question: "Is interior or exterior waterproofing better?",
        answer: "They solve different parts of the problem. Interior drainage manages water that gets in, while exterior corrections reduce how much arrives. Many homes are best served by a combination, which an inspection helps define."
      },
      {
        question: "Does waterproofing paint fix a wet basement?",
        answer: "Sealer or waterproofing paint can help with minor surface dampness, but on its own it rarely solves active water intrusion driven by drainage. It is usually one part of a broader plan, not a standalone fix."
      },
      {
        question: "How much does basement waterproofing cost in McDonough, GA?",
        answer: "Cost depends on the severity, whether interior drainage and a sump are needed, the amount of wall sealing, and any exterior corrections. We provide a written estimate after a free inspection of the conditions."
      }
    ]
  }
];

export const relatedServices: Record<ServiceSlug, ServiceSlug[]> = {
  "crawl-space-encapsulation": ["vapor-barrier-installation", "crawl-space-moisture-control", "crawl-space-dehumidifier-installation"],
  "crawl-space-repair": ["wet-crawl-space-repair", "crawl-space-mold-removal", "crawl-space-drainage"],
  "vapor-barrier-installation": ["crawl-space-encapsulation", "crawl-space-moisture-control", "wet-crawl-space-repair"],
  "crawl-space-moisture-control": ["crawl-space-encapsulation", "crawl-space-dehumidifier-installation", "crawl-space-mold-removal"],
  "crawl-space-mold-removal": ["crawl-space-moisture-control", "crawl-space-encapsulation", "wet-crawl-space-repair"],
  "wet-crawl-space-repair": ["crawl-space-drainage", "vapor-barrier-installation", "crawl-space-mold-removal"],
  "crawl-space-dehumidifier-installation": ["crawl-space-moisture-control", "crawl-space-encapsulation", "vapor-barrier-installation"],
  "crawl-space-drainage": ["wet-crawl-space-repair", "basement-waterproofing", "crawl-space-encapsulation"],
  "basement-waterproofing": ["crawl-space-drainage", "wet-crawl-space-repair", "crawl-space-moisture-control"]
};

export const getService = (slug: string) => services.find((service) => service.slug === slug);

export const getRelatedServices = (slug: ServiceSlug) =>
  relatedServices[slug].map((relatedSlug) => services.find((service) => service.slug === relatedSlug)!);
