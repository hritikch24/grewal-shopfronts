/**
 * Garage doors — /garage-door-repairs and /garage-door-installation.
 *
 * DRAFT written 15 Oct 2026 and NOT published. Grewal has not confirmed it
 * takes on garage door work. Until `garage.published` is true both routes
 * 404, the sitemap and footer leave them out, and the contact form does not
 * list them. GREWAL_GARAGE_DRAFT=on shows them on a preview deployment so the
 * owner can read them; production ignores the variable.
 *
 * Hub pages only. Never add garage doors to data/services.ts — every entry
 * there becomes 41 city pages, and the owner has asked that Grewal's existing
 * pages are left as they are.
 *
 * No prices, response times, accreditations or manufacturer names until the
 * owner supplies them. No instructions for springs, cables or operators.
 */

export type DoorKind = 'roller' | 'sectional' | 'up-and-over' | 'side-hinged';

export const garage = {
  published: false,
  repairs: ['roller', 'sectional', 'up-and-over', 'side-hinged'] as DoorKind[],
  installs: ['roller', 'sectional', 'up-and-over', 'side-hinged'] as DoorKind[],
  /** Retro-fitting an operator to a hand-operated door. False hides the section. */
  automation: true,
  questionsForOwner: [
    'Does Grewal take on garage door repairs, new garage doors, or both?',
    'For which customers: homeowners, landlords and managing agents of garage blocks, businesses?',
    'Which door types: roller, sectional, up-and-over, side-hinged?',
    'Is the work done by Grewal’s own engineers or passed to another firm? If another firm, the page must say so.',
    'Garage door repair area: the same ~100 miles from Birmingham as shutters? Installation area?',
    'Does the two-hour reply apply to garage door faults too? Any emergency cover for garage doors?',
    'Retro-fitting electric operators to existing doors: yes or no?',
    'Supplier or manufacturer of the doors fitted (only if bought direct).',
    'Guide prices for common repairs and for a single and a double door, supplied and fitted.',
    'Is planned maintenance for garage blocks a separate contract? What does a visit include and cost?',
    'Photos of completed garage door jobs, with location and date.',
  ],
};

export const garageLive = garage.published || (process.env.GREWAL_GARAGE_DRAFT === 'on' && process.env.VERCEL_ENV !== 'production');

export const kindName: Record<DoorKind, string> = {
  roller: 'Roller garage doors',
  sectional: 'Sectional garage doors',
  'up-and-over': 'Up-and-over garage doors',
  'side-hinged': 'Side-hinged garage doors',
};

export function kindsInWords(kinds: DoorKind[]): string {
  const w: string[] = kinds;
  return w.length < 2 ? w.join('') : `${w.slice(0, -1).join(', ')} and ${w.at(-1)}`;
}

export interface GaragePageCopy {
  path: '/garage-door-repairs' | '/garage-door-installation';
  heading: string;
  /** Under 40 characters: the layout adds " | Grewal Shopfronts". */
  title: string;
  /** `{kinds}` becomes the confirmed door types. */
  description: string;
  summary: string;
  audiences: { who: string; what: string }[];
  kindRows: Record<DoorKind, [string, string]>;
  kindColumns: [string, string];
  sections: { key?: string; title: string; body: string[]; checklist?: string[] }[];
  steps: string[];
  pricedOn: string[];
  excluded: string[];
  faqs: { question: string; answer: string }[];
  seeAlso: { href: string; label: string }[];
}

export const garageRepairPage: GaragePageCopy = {
  path: '/garage-door-repairs',
  heading: 'Garage Door Repairs',
  title: 'Garage Door Repairs',
  description: 'Garage door repairs for homes, garage blocks and businesses: {kinds} doors, springs, cables, operators and locks.',
  summary:
    'Repairs to {kinds} garage doors for homeowners, landlords and managing agents of garage blocks, and businesses with vehicle bays or lock-ups. Typical faults are snapped springs, frayed or detached cables, doors jammed part-open, worn locks and electric operators that no longer respond. Each repair is quoted in writing before the work goes ahead.',
  audiences: [
    { who: 'Homeowners', what: 'A single domestic door that has jammed, become noisy or stopped responding to the remote.' },
    { who: 'Landlords and managing agents', what: 'Rows of lock-up garages where doors are forced, dented or seized, often several at once.' },
    { who: 'Businesses', what: 'Workshop, depot and vehicle-bay doors that hold up the working day when they fail.' },
  ],
  kindColumns: ['What usually fails', 'What we look at'],
  kindRows: {
    roller: ['Slats damaged by vehicles, guides out of line, operator or limit faults', 'Curtain, guides, end-locks, operator and safety edge'],
    sectional: ['Torsion spring fractures, lifting cables slipping off drums, worn rollers', 'Spring, cable drums, track, rollers and hinges'],
    'up-and-over': ['Tired tension springs, bent lifting arms, seized handles and rods', 'Springs or counterbalance gear, pivots, lock and frame'],
    'side-hinged': ['Dropped leaves, worn hinges, bolts no longer engaging', 'Hinges, leaf alignment, bolts, locks and threshold'],
  },
  sections: [
    {
      title: 'If the door has jammed',
      body: [
        'Stop using it, switch off an electric operator at the spur, and keep vehicles and people clear. A door with a failed spring or cable is carrying weight unevenly and can drop without warning. Do not force it or try to wind anything.',
      ],
      checklist: ['A photo of the door from the front', 'A photo of the operator label, if it is electric', 'Whether it is stuck open, shut or part-way', 'The postcode'],
    },
    {
      title: 'Springs, cables and operators are not DIY',
      body: [
        'Garage door springs are under high tension and cables take the full weight of the door. Adjusting or replacing them without the right tools and parts causes serious injuries every year. We will not give instructions for this, but we will tell you what is safe to check: power to the operator, the remote battery, the manual release and the safety sensors.',
      ],
    },
    {
      title: 'Garage blocks and multiple doors',
      body: [
        'Where a landlord or agent manages a block of lock-ups, it is usually cheaper to survey all the doors in one visit than to call out door by door. Send a list or a photo of each door with its number, and we will price them as one job.',
      ],
    },
    {
      key: 'maintenance',
      title: 'Planned maintenance',
      body: [
        'Doors in daily use, especially powered ones, last longer with a yearly check of balance, springs, cables, rollers, tracks, locks and the safety reverse. Ask about a maintenance visit when you book a repair.',
      ],
    },
    {
      title: 'When a repair is not worth it',
      body: [
        'If a panel is rusted through, the door has been badly damaged by a vehicle, or parts for it are no longer made, a new door is often the better spend. We will show you both prices.',
      ],
    },
  ],
  steps: [
    'Send photos and the postcode through the form or WhatsApp.',
    'We work out the likely fault and the parts.',
    'An engineer confirms the fault and the written price.',
    'The door is repaired, balanced and safety-tested.',
  ],
  pricedOn: [
    'The failed part, and whether it is held in stock',
    'The size and weight of the door',
    'The make of operator on electric doors',
    'How many doors are involved on one site',
    'Access, and distance from Birmingham',
  ],
  excluded: ['DIY instructions for springs, cables or operators', 'Door types other than those listed'],
  faqs: [
    {
      question: 'Can you repair several garage doors on one site?',
      answer: 'Yes. Send a photo of each door with its number and we will quote them together, which usually costs less than separate call-outs.',
    },
    {
      question: 'What does a garage door repair cost?',
      answer: 'That depends on the part and the door. Guide prices for garage doors have not been published yet; send photos and we will price it before anyone attends.',
    },
    {
      question: 'Do you repair doors fitted by someone else?',
      answer: 'Yes. Photograph any maker’s label you can find, on the door, a spring or the motor unit, and we can bring the right parts.',
    },
    {
      question: 'The remote has stopped working. Is that a repair?',
      answer: 'Often it is the handset, sometimes the receiver. A photo of the operator label tells us which handsets are compatible.',
    },
  ],
  seeAlso: [
    { href: '/garage-door-installation', label: 'New garage doors' },
    { href: '/services/shutter-repair', label: 'Shutter repairs for shops and units' },
    { href: '/services/roller-shutters', label: 'Roller shutters for commercial premises' },
  ],
};

export const garageInstallPage: GaragePageCopy = {
  path: '/garage-door-installation',
  heading: 'Garage Door Installation',
  title: 'New Garage Doors Supplied & Fitted',
  description: 'New and replacement {kinds} garage doors for homes, garage blocks and businesses, made to measure.',
  summary:
    'New and replacement {kinds} garage doors, supplied to the measured opening and fitted, hand-operated or electric. That covers a single door at a house, a run of replacement doors on a lock-up block, and doors to workshops and vehicle bays. Every job starts with a survey and a written quotation.',
  audiences: [
    { who: 'Homeowners', what: 'Replacing a worn-out or damaged door, or moving from manual to electric.' },
    { who: 'Landlords and managing agents', what: 'Replacing doors across a garage block in one programme, to one specification.' },
    { who: 'Businesses', what: 'Doors to workshops, depots and small vehicle bays where an industrial shutter would be oversized.' },
  ],
  kindColumns: ['Suits', 'Points to check'],
  kindRows: {
    roller: ['Short drives and tight spaces; daily electric use', 'Room for the coil box at the head of the opening; a power supply'],
    sectional: ['Integral garages and heated spaces', 'Enough height over the opening, and ceiling space for the tracks'],
    'up-and-over': ['Simple manual operation; lock-up blocks', 'The leaf projects forward as it opens'],
    'side-hinged': ['Workshops and storage, everyday walk-in access', 'Swing space for both leaves'],
  },
  sections: [
    {
      title: 'The survey',
      body: ['A door is specified from the structural opening, so the survey records:'],
      checklist: [
        'Width and height of the opening, and whether it is square',
        'Headroom and side room',
        'Depth into the garage',
        'Condition of the lintel, piers and any frame',
        'Where power is available, for electric doors',
      ],
    },
    {
      title: 'Hand-operated or electric',
      body: [
        'Electric doors open from a handset and stop and reverse if they meet an obstruction; they need a power point close to the top of the opening. Hand-operated doors cost less and suit garages that are opened occasionally, including most lock-up blocks.',
      ],
    },
    {
      key: 'automation',
      title: 'Adding an operator to an existing door',
      body: [
        'Most sectional doors, and a good number of up-and-over doors, will take an operator mounted on the garage ceiling. First the door has to be properly balanced and moving freely, or the operator ends up doing the springs’ work. We check this before quoting.',
      ],
    },
    {
      title: 'Insulated or single-skin',
      body: [
        'Insulated doors are worth the extra where the garage is attached to a house, has a room above it, or is heated or used as a workspace. Lock-ups and detached garages used for storage rarely need them.',
      ],
    },
    {
      title: 'Consents',
      body: [
        'A like-for-like replacement on a house seldom needs planning permission. Listed buildings, some conservation areas and estates with planning conditions are the exceptions. Making an opening wider is structural work under the Building Regulations. On a garage block, check the lease or the landlord’s consent before work is ordered.',
      ],
    },
    {
      title: 'Garage door or industrial shutter?',
      body: [
        'For openings to warehouses, loading bays and large commercial units, an industrial roller shutter is normally the right product. Garage doors suit domestic garages, lock-ups and smaller vehicle bays.',
      ],
    },
  ],
  steps: [
    'Send photos of the opening, rough sizes and the postcode.',
    'We survey the opening and the structure.',
    'You receive an itemised written quotation.',
    'The door is made to size, fitted, tested and handed over with its instructions.',
  ],
  pricedOn: [
    'The type and dimensions of the door',
    'Whether it is insulated',
    'Electric or hand-operated',
    'Finish, colour and glazing',
    'Making good to the opening',
    'Number of doors on one site',
  ],
  excluded: ['Forming or widening openings (building work)', 'Door types other than those listed'],
  faqs: [
    {
      question: 'Can you replace every door on a garage block?',
      answer: 'Yes, subject to survey. Replacing a run of doors to one specification is usually more economical per door than one-off replacements.',
    },
    {
      question: 'What does a new garage door cost?',
      answer: 'Type, size, insulation, operator and finish all affect it. Guide prices for garage doors have not been published yet; photos and rough sizes are enough for an initial figure.',
    },
    {
      question: 'How long between order and fitting?',
      answer: 'Doors are made to the surveyed size, which takes most of the time. The fitting date is confirmed when the order is placed.',
    },
    {
      question: 'Can a new door reuse the old frame?',
      answer: 'Occasionally, for an up-and-over door into a sound frame. Roller and sectional doors are fixed into the brickwork or steelwork, so the old frame is usually removed.',
    },
  ],
  seeAlso: [
    { href: '/garage-door-repairs', label: 'Garage door repairs' },
    { href: '/services/roller-shutters', label: 'Roller shutters for commercial premises' },
    { href: '/services/security-doors', label: 'Steel security doors' },
  ],
};
