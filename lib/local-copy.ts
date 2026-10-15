import type { City } from '@/data/cities';

/**
 * Wording for the city and city-service pages.
 *
 * What we promise depends on how far the city is from Exhall (see `reach` in
 * data/cities.ts). Repairs and emergencies are only offered where we can get
 * there in fair time, so a far-away page says so plainly instead of implying
 * a call-out we could not deliver.
 */

/** Services that need us on site quickly, so are not offered at `project` reach. */
export const RESPONSIVE_SERVICES = new Set(['shopfront-repairs', 'emergency-callout', 'shutter-repair', 'glass-replacement']);

export function offersService(city: City, serviceSlug: string): boolean {
  return !(city.reach === 'project' && RESPONSIVE_SERVICES.has(serviceSlug));
}

/** "A, B, C and D" from the first few areas. */
export function areaPhrase(city: City, n = 4): string {
  const list = city.areas.slice(0, n);
  return list.length > 1 ? `${list.slice(0, -1).join(', ')} and ${list[list.length - 1]}` : list[0] ?? city.name;
}

/** At most six postcode districts, so a long list never runs on. */
export function postcodeLine(city: City): string {
  return city.postcodeAreas.slice(0, 6).join(' · ');
}

export function reachSentence(city: City): string {
  switch (city.reach) {
    case 'local':
      return `${city.name} is one of our home areas, a short drive from the yard in Exhall, so surveys, fitting days and follow-up visits are easy to arrange.`;
    case 'regional':
      return `${city.name} is inside our regular working area, roughly within 100 miles of Birmingham, so we can survey, fit and come back for adjustments without long waits.`;
    default:
      return `${city.name} is a long way from our Midlands base, so work there is booked as a planned project and fitted in as few trips as possible.`;
  }
}

/** Short checklist for the city sidebar and quote panels. */
export function offerList(city: City): string[] {
  switch (city.reach) {
    case 'local':
      return ['New fronts, shutters and doors', 'Repairs, often on the first visit', 'Emergency line open day and night', 'Free survey and written price'];
    case 'regional':
      return ['New fronts, shutters and doors', 'Repair visits booked in', 'Urgent job? Ring for an honest arrival time', 'Free survey and written price'];
    default:
      return ['Planned installation projects', 'Survey, drawings and a fixed price', 'One team from survey to handover', 'No repair or emergency cover this far out'];
  }
}

export function heroLine(city: City, serviceName: string, serviceSlug: string): string {
  if (!offersService(city, serviceSlug)) {
    return `We do not offer ${serviceName.toLowerCase()} in ${city.name}. Here is why, and what we can do instead.`;
  }
  switch (city.reach) {
    case 'local':
      return `${serviceName} for premises across ${city.name}, a short drive from our base in Exhall.`;
    case 'regional':
      return `${serviceName} for ${city.name} premises, inside our regular working area.`;
    default:
      return `${serviceName} in ${city.name}, booked ahead as a planned project.`;
  }
}

type Intro = (c: City, areas: string) => string[];

const INTROS: Record<string, Intro> = {
  'aluminium-shopfronts': (c, a) => [
    `Need a new aluminium front for a shop in ${c.name}? We make each one to the measurements of your opening, with the door, glass, colour and fascia box chosen around how you trade. Jobs range from a single takeaway on a local parade to a row of units refitted together.`,
    `Wherever your unit is, including ${a}, the job starts with a free measured survey and a drawing, so you can see the finished front before anything is ordered.`,
  ],
  'roller-shutters': (c, a) => [
    `A good shutter is the cheapest security a ${c.name} shop can buy. We supply solid, perforated and punched-lath shutters, pushed up by hand or motorised, sized to your opening and fixed into sound masonry.`,
    `Many councils ask for perforated or internal shutters on shopping streets, so we check the rules for your address during the survey. Premises we are asked about include ${a}.`,
  ],
  'security-doors': (c, a) => [
    `Back doors and fire exits are where most break-ins start. For premises in ${c.name}, we fit steel door sets with multi-point locks, hinge bolts and, where your insurer asks for one, a tested security rating.`,
    `We work on shops, offices, pharmacies and industrial units in ${a} and beyond. Every frame is anchored into solid masonry, and fire exits keep their panic hardware so staff can always get out.`,
  ],
  'automatic-doors': (c, a) => [
    `An automatic entrance makes a ${c.name} shop, surgery or office easier for everyone, from wheelchair users to people with full shopping bags. We fit sliding doors, swing door operators and gentle low-energy openers.`,
    `Whether your entrance is in ${a} or elsewhere in ${c.name}, every door is set to the safety standard for powered doors and you are left with the test record.`,
  ],
  'bi-fold-doors': (c, a) => [
    `On a warm day, a front that folds right back pulls people in off the pavement. We fit commercial bi-fold systems for cafés, bars and restaurants in ${c.name}, with a built-in traffic door for everyday use.`,
    `During the survey we check the beam above and the drainage below, because the panels hang from the top track and need a level, well-drained threshold. Areas we cover include ${a}.`,
  ],
  'fire-doors': (c, a) => [
    `If a fire risk assessment for your ${c.name} premises has flagged doors that fail, we replace them with certified doorsets or put right the ones worth saving.`,
    `Each door is fitted exactly as its maker tested it, with the right gaps, seals and approved hardware, and you get a record for every one. We work in shops, flats above shops, offices and industrial units in ${a}.`,
  ],
  'shopfront-repairs': (c, a) => [
    `Dropped doors, tired closers, sticking locks and cracked glass are the everyday faults we fix on ${c.name} shopfronts. Many are sorted on the first visit with parts carried on the van.`,
    `We repair fronts of any make in ${a} and the surrounding streets. If a repair would be money wasted, we say so and price the alternative as well.`,
  ],
  'emergency-callout': (c) =>
    c.reach === 'local'
      ? [
          `When a ${c.name} shop is left open by smashed glass, a forced door or a jammed shutter, ring our emergency line. ${c.name} is close to our base, so we can usually reach you quickly, day or night.`,
          `We board or glaze the opening, secure the shutter or change the lock, clear the debris and record everything for your insurer, then measure for the permanent repair.`,
        ]
      : [
          `${c.name} is inside our repair area but not on our doorstep. If your premises are left insecure, ring the emergency line first and we will give you an honest arrival time before you decide.`,
          `If we can reach you in good time, we board or glaze the opening, secure shutters or change locks, and record the damage for your insurer. If a local firm can get there sooner, we will tell you so.`,
        ],
  'shutter-repair': (c, a) => [
    `Broken springs, burnt-out motors, bent laths and jammed guides are the usual reasons a ${c.name} shutter will not open or close. We repair all the common makes, manual and electric.`,
    `Premises in ${a} are all within reach. Most repairs are finished in one visit, and you hear the price before work starts.`,
  ],
  'glass-replacement': (c, a) => [
    `Cracked, smashed or misted glass on a ${c.name} shopfront is measured, ordered and replaced with the correct safety glass for where it sits. If the gap cannot wait, we board it first.`,
    `We replace toughened, laminated and double-glazed units in shopfronts, doors and windows in ${a} and nearby.`,
  ],
  'aluminium-doors': (c, a) => [
    `A worn entrance door lets down the whole shop. We replace shop, office and communal doors in ${c.name} with aluminium door sets made to measure, with secure locks and a closer that shuts every time.`,
    `Single, double and pivot doors are all available, in any colour, for premises in ${a}.`,
  ],
  'aluminium-windows': (c, a) => [
    `Upper floors and offices in ${c.name} often still have draughty old windows. We swap them for slim aluminium windows, fixed or opening, double glazed and powder coated in any colour.`,
    `Every opening is measured on its own, and we fit room by room to keep disruption down. Buildings we are asked about include ones in ${a}.`,
  ],
  'curtain-walling': (c) => [
    `For showrooms, office receptions and new commercial buildings in ${c.name}, curtain walling gives floor-to-ceiling glass across wide spans.`,
    `We work from your building drawings and structural information, so frames and fixings suit the loads at your site, with fire-stopping at floor edges where it is needed.`,
  ],
  'glass-shopfronts': (c, a) => [
    `Frameless glass gives a ${c.name} boutique, salon or showroom the clearest possible view in. Thick toughened panes sit in slim channels, joined with clear silicone, with a matching glass door.`,
    `We cover ${a}. If heating bills or night-time security matter, we will suggest an internal shutter or double-glazed glass to go with it.`,
  ],
};

/** Paragraphs for a responsive service in a city too far away to offer it. */
function notOffered(c: City, serviceName: string): string[] {
  return [
    `${c.name} is too far from our Midlands base for us to offer ${serviceName.toLowerCase()} at a response time that would be fair to you, so we do not take this work on there.`,
    `A firm based near ${c.name} will reach you sooner. If the damage means you are replacing the front, shutter or door altogether, we can quote that as a planned project.`,
  ];
}

export function serviceIntro(city: City, serviceSlug: string, serviceName: string): string[] {
  const body = offersService(city, serviceSlug)
    ? (INTROS[serviceSlug] ?? ((c: City, a: string) => [`We provide ${serviceName.toLowerCase()} for premises in ${c.name}, including ${a}.`]))(city, areaPhrase(city))
    : notOffered(city, serviceName);
  return [...body, reachSentence(city)];
}
