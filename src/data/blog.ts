export type BlogPost = {
  title: string;
  slug: string;
  description: string;
  date: string;
  dateModified?: string;
  relatedServices: string[];
  relatedPost?: string;
  faqs: { question: string; answer: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    title: "Crawl Space Encapsulation Cost in McDonough, GA",
    slug: "crawl-space-encapsulation-cost-mcdonough-ga",
    description: "Learn what can affect crawl space encapsulation cost in McDonough, including size, moisture issues, drainage, vapor barrier choices, and dehumidifier needs.",
    date: "2026-06-22",
    dateModified: "2026-06-23",
    relatedServices: ["crawl-space-encapsulation", "vapor-barrier-installation", "crawl-space-moisture-control"],
    relatedPost: "vapor-barrier-vs-crawl-space-encapsulation",
    faqs: [
      {
        question: "Why does encapsulation pricing vary?",
        answer: "Pricing varies because crawl spaces differ in size, access, water issues, liner needs, drainage requirements, and repair conditions. Two homes on the same street can need very different work to reach the same dry result."
      },
      {
        question: "Should drainage be priced before encapsulation?",
        answer: "If water enters the crawl space, drainage should be reviewed before finalizing an encapsulation scope, because sealing over an undrained space traps water beneath the liner."
      },
      {
        question: "What is the biggest factor in encapsulation cost?",
        answer: "Square footage is usually the largest single driver, since more area means more vapor barrier material and labor. Drainage needs and adding a dehumidifier are the next most significant factors."
      },
      {
        question: "Can I get an exact price online?",
        answer: "Not reliably. Because the right scope depends on what an inspection finds under the home, an on-site visit and written estimate are the only accurate way to price encapsulation — there is no one-size price."
      }
    ]
  },
  {
    title: "Signs Your Crawl Space Has Moisture Problems",
    slug: "signs-your-crawl-space-has-moisture-problems",
    description: "Musty odors, standing water, condensation, and damaged vapor barriers can all point to crawl space moisture problems under the home.",
    date: "2026-06-22",
    dateModified: "2026-06-23",
    relatedServices: ["crawl-space-moisture-control", "wet-crawl-space-repair", "crawl-space-mold-removal"],
    relatedPost: "why-your-house-smells-musty-after-rain",
    faqs: [
      {
        question: "Can moisture problems show up inside the house?",
        answer: "Yes. Because air from the crawl space rises into the living area, musty odors, high humidity, and floor comfort issues are often connected to conditions under the home."
      },
      {
        question: "Is standing water normal in a crawl space?",
        answer: "No. Standing water should be evaluated promptly because it damages vapor barriers, wood, and insulation and keeps humidity high. The longer it sits, the larger the repair tends to become."
      },
      {
        question: "What is the first sign of a crawl space moisture problem?",
        answer: "A musty smell in the rooms above is often the earliest clue, since it can appear before any visible water. Condensation on ducts and a damp-feeling floor are other common early signs."
      },
      {
        question: "How do I find out where the moisture is coming from?",
        answer: "A crawl space inspection checks drainage, ground moisture, ventilation, plumbing, and humidity together to trace the source, rather than treating the symptom you noticed indoors."
      }
    ]
  },
  {
    title: "Vapor Barrier vs. Crawl Space Encapsulation",
    slug: "vapor-barrier-vs-crawl-space-encapsulation",
    description: "Understand the difference between a crawl space vapor barrier and full encapsulation so you can ask better questions during an inspection.",
    date: "2026-06-22",
    dateModified: "2026-06-23",
    relatedServices: ["vapor-barrier-installation", "crawl-space-encapsulation", "crawl-space-dehumidifier-installation"],
    relatedPost: "crawl-space-encapsulation-cost-mcdonough-ga",
    faqs: [
      {
        question: "Is a vapor barrier enough?",
        answer: "A vapor barrier may be enough for a crawl space that is already fairly dry, but full encapsulation is often recommended when humid air, water entry, or wall coverage also need to be addressed."
      },
      {
        question: "Can a vapor barrier be part of encapsulation?",
        answer: "Yes. A ground vapor barrier is one component of encapsulation, which also seals the walls, vents, and openings and may add drainage and a dehumidifier."
      },
      {
        question: "Is encapsulation just a thicker vapor barrier?",
        answer: "No. Encapsulation can use a thicker liner, but the real difference is scope — it seals the entire crawl space, not just the floor, and controls humid air and water that a floor liner alone cannot."
      },
      {
        question: "Which is cheaper, a vapor barrier or encapsulation?",
        answer: "A vapor barrier alone costs less because it is a single component. Encapsulation costs more because it includes wall and vent sealing and often drainage and humidity control, but it addresses more moisture sources."
      }
    ]
  },
  {
    title: "Why Your House Smells Musty After Rain",
    slug: "why-your-house-smells-musty-after-rain",
    description: "A musty smell after rain can point to damp soil, crawl space humidity, drainage problems, or wet building materials below the home.",
    date: "2026-06-22",
    dateModified: "2026-06-23",
    relatedServices: ["wet-crawl-space-repair", "crawl-space-drainage", "crawl-space-moisture-control"],
    relatedPost: "signs-your-crawl-space-has-moisture-problems",
    faqs: [
      {
        question: "Why does rain make musty odors worse?",
        answer: "Rain increases crawl space moisture, wets exposed soil, and can reveal drainage issues. Since crawl space air rises into the home, that added dampness makes the musty odor more noticeable indoors."
      },
      {
        question: "Can a musty smell come from the crawl space?",
        answer: "Yes, it is one of the most common sources. An inspection helps determine whether the odor is tied to crawl space moisture, mold-like growth, or another source before you try to treat it."
      },
      {
        question: "Will air fresheners or a dehumidifier in the house fix it?",
        answer: "They only mask the symptom. Because the moisture is under the home, lasting results come from controlling it at the source with drainage, a sealed vapor barrier, and crawl space humidity control."
      },
      {
        question: "How do I stop the musty smell from coming back?",
        answer: "Stop the water getting in, seal the exposed soil with a vapor barrier, and manage crawl space humidity. Treating the moisture source is what keeps the odor from returning after the next storm."
      }
    ]
  },
  {
    title: "Crawl Space Drainage Cost in McDonough, GA: What Drives the Price",
    slug: "crawl-space-drainage-cost-mcdonough-ga",
    description: "What affects crawl space drainage cost in McDonough, GA — perimeter drains, sump pumps, soil and access, exterior grading, and why it is priced before encapsulation.",
    date: "2026-06-23",
    relatedServices: ["crawl-space-drainage", "wet-crawl-space-repair", "crawl-space-encapsulation"],
    relatedPost: "crawl-space-encapsulation-cost-mcdonough-ga",
    faqs: [
      {
        question: "How much does crawl space drainage cost in McDonough, GA?",
        answer: "There is no single price because cost depends on how much drainage is needed, whether a sump pump is required, the soil and access, and any exterior grading work. A short interior drain is far less than a full perimeter system with a pump. An on-site inspection is the only reliable way to get an accurate number, and Henry Crawl Solutions provides a written estimate with no one-size pricing."
      },
      {
        question: "Is a sump pump included in drainage cost?",
        answer: "Not always. A sump pump, basin, and discharge line are a separate component added when water needs to be actively pumped out. Crawl spaces that only need water redirected may not require a pump at all."
      },
      {
        question: "Should drainage be done before encapsulation?",
        answer: "Yes, if water regularly enters the crawl space. Sealing over an undrained, wet space traps water beneath the liner, so drainage is usually priced and installed first."
      },
      {
        question: "Does fixing gutters reduce drainage cost?",
        answer: "It can help. Clogged or short downspouts dump roof runoff next to the foundation, so correcting them may reduce how much interior drainage is needed — though it is often one part of a larger plan."
      }
    ]
  },
  {
    title: "Are Crawl Space Vents Good or Bad? Open vs. Sealed in Georgia",
    slug: "crawl-space-vents-open-or-closed-georgia",
    description: "Should crawl space vents be open or closed in Georgia? Why humid Southern air makes sealed, conditioned crawl spaces outperform traditional open foundation vents.",
    date: "2026-06-23",
    relatedServices: ["crawl-space-moisture-control", "crawl-space-encapsulation", "crawl-space-dehumidifier-installation"],
    relatedPost: "vapor-barrier-vs-crawl-space-encapsulation",
    faqs: [
      {
        question: "Should crawl space vents be open or closed in Georgia?",
        answer: "For most Georgia homes, sealing the vents as part of a controlled, encapsulated crawl space works better than leaving them open. In a humid climate, open vents let warm, moisture-heavy outside air into the cooler crawl space, where it condenses on ducts and framing and raises humidity."
      },
      {
        question: "Why were crawl space vents required in the first place?",
        answer: "Older building codes assumed that venting would let moisture escape and keep the crawl space dry. Modern building science has shown that in humid climates, vents often bring in more moisture than they remove, which is why sealed crawl spaces have become common."
      },
      {
        question: "Will closing my vents cause mold?",
        answer: "Simply closing vents without sealing the soil and controlling humidity can trap moisture. Vents should be closed as part of a complete approach — vapor barrier, sealed openings, and humidity control — so the space stays dry, not as a standalone step."
      },
      {
        question: "Do I need a dehumidifier if I seal the vents?",
        answer: "Often, yes. Once a crawl space is sealed, a dehumidifier manages the humidity that remains, which is what keeps a sealed space consistently dry through Georgia's humid summers."
      }
    ]
  },
  {
    title: "Is Crawl Space Encapsulation Worth It in Georgia?",
    slug: "is-crawl-space-encapsulation-worth-it-georgia",
    description: "Is crawl space encapsulation worth it in Georgia? How the humid climate and clay soil affect the value of sealing your crawl space, and when a simpler fix is enough.",
    date: "2026-06-23",
    relatedServices: ["crawl-space-encapsulation", "crawl-space-moisture-control", "crawl-space-dehumidifier-installation"],
    relatedPost: "crawl-space-encapsulation-cost-mcdonough-ga",
    faqs: [
      {
        question: "Is crawl space encapsulation worth it in Georgia?",
        answer: "For many Georgia homes it is, because the humid climate and clay-heavy soil push constant moisture into vented crawl spaces. Sealing the space can reduce musty odors, help protect framing and ductwork, and make the area under the home easier to keep dry. Whether it is worth it for your home depends on the moisture conditions, which an inspection confirms."
      },
      {
        question: "When is encapsulation not necessary?",
        answer: "Some crawl spaces only need a vapor barrier repair, better drainage, or humidity control rather than full encapsulation. If the space is already fairly dry and the issue is limited, a simpler fix may be the better value."
      },
      {
        question: "Does crawl space encapsulation save money on energy?",
        answer: "Many homeowners find a sealed, drier crawl space helps the HVAC system work in more stable conditions, since ducts in a humid crawl space contend with damp air. Energy results vary by home, so it is best treated as one of several benefits rather than the only reason to encapsulate."
      },
      {
        question: "Does encapsulation help when selling a home?",
        answer: "A dry, sealed crawl space is often viewed favorably by buyers and home inspectors because it reduces moisture-related concerns. Clear documentation of the work makes the improvement easy to show."
      }
    ]
  },
  {
    title: "How to Get Rid of Mold in a Crawl Space (and Keep It Gone)",
    slug: "how-to-get-rid-of-mold-in-crawl-space",
    description: "How to get rid of crawl space mold for good — find the moisture source, clean affected surfaces, and prevent regrowth. Why cleaning alone rarely works in humid Georgia.",
    date: "2026-06-23",
    relatedServices: ["crawl-space-mold-removal", "crawl-space-moisture-control", "crawl-space-encapsulation"],
    relatedPost: "signs-your-crawl-space-has-moisture-problems",
    faqs: [
      {
        question: "How do you permanently get rid of crawl space mold?",
        answer: "Lasting mold removal pairs cleaning the affected surfaces with fixing the moisture that fed the growth — repairing the vapor barrier, improving drainage, sealing vents, and controlling humidity. Cleaning alone usually leads to regrowth within months because the underlying dampness remains."
      },
      {
        question: "Can I remove crawl space mold myself?",
        answer: "Small, clearly visible growth can sometimes be cleaned by a homeowner with proper protection, but the moisture source still has to be corrected or it returns. Widespread or health-sensitive situations are better handled by a specialized remediation professional."
      },
      {
        question: "What kills mold in a crawl space?",
        answer: "Surface cleaning can remove visible growth, but the real control is removing the moisture mold needs to live. Without lowering the humidity and stopping water entry, no cleaning product keeps a crawl space mold-free."
      },
      {
        question: "Does encapsulation prevent crawl space mold?",
        answer: "Encapsulation strongly reduces the conditions mold needs by sealing out ground moisture and humid air. Paired with humidity control, it is one of the most effective long-term ways to keep a crawl space mold-resistant."
      }
    ]
  }
];

export const getPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
