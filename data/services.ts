export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

export interface PricingRange {
  item: string;
  price: string;
}

export interface PricingGuide {
  heading: string;
  content: string;
  ranges: PricingRange[];
  note: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  heroImage: string;
  description: string;
  benefits: ServiceBenefit[];
  faqs: ServiceFaq[];
  relatedServices: string[];
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  howItWorks?: HowItWorksStep[];
  pricingGuide?: PricingGuide;
  peopleAlsoAsk?: ServiceFaq[];
}

/*
 * Every word below was written for this site alone. Before changing any of it,
 * run `npm run gate` after a build: it fails if a page shares more than 3% of
 * its eight-word phrases with any other site in the portfolio.
 */
export const services: Service[] = [
  {
    slug: 'aluminium-shopfronts',
    name: 'Aluminium Shopfronts',
    shortDescription:
      'New aluminium fronts made to measure for shops, cafés, salons and showrooms, fitted by our own crews from our Coventry base and across England.',
    heroImage: 'service-aluminium-shopfront.webp',
    primaryKeyword: 'aluminium shopfronts',
    metaTitle: 'Aluminium Shopfronts, Made and Fitted',
    metaDescription:
      'Made-to-measure aluminium shopfronts for shops and cafés. Slim or chunky frames, any RAL colour, toughened or laminated glass. Free survey: 07597 630000.',
    description: `A shopfront does three jobs at once. It has to sell the shop to people walking past, keep the weather out, and lock up safely at night. Aluminium handles all three better than timber or PVC-U for most commercial units, which is why the bulk of the fronts we fit are aluminium.

We have been fitting commercial frontages since 2004, working out of Exhall on the edge of Coventry. Most of our installs are in the Midlands, but we take shopfront work anywhere in England.

**What we actually fit**

A typical job is a glazed screen across the full width of the unit, a single or double entrance door, a stallriser (the solid panel under the glass) and a fascia box above for the sign. We can add a shutter box, a fanlight, a side door to flats above, or a recessed lobby. Frames come in slim "shopfront" sections for a light look or deeper sections where the glass is tall or the unit is exposed to wind.

**Glass**

Glass in doors and low panels near the floor must be safety glass by law. We fit toughened glass as the minimum and recommend laminated glass on the street side for shops that hold stock worth stealing: laminated glass cracks but stays in one piece, so a thief cannot simply step through. Double-glazed units cut heat loss and noise on busy roads.

**Heat loss and Building Regulations**

A front that heats the shop all winter costs real money. Frames with a thermal break (a plastic strip that stops cold travelling through the metal) keep the inside face warmer and stop condensation running down the frame. Where Building Regulations apply to the work, we specify frames and glass that meet the current energy rules and tell you before you order.

**Colour and finish**

Frames are powder coated, which is a baked-on paint finish that does not peel like wet paint. You can choose any RAL colour, two colours (one inside, one outside), or a textured or metallic finish. Black, anthracite grey and bronze are the most popular for shops right now.

**Planning**

Changing the look of a shopfront usually needs planning permission, and the sign normally needs separate advertisement consent. Listed buildings and conservation areas are stricter. We will tell you at survey stage what is likely to apply and supply drawings your council can use.

**How the day goes**

We strip out the old front and fit the new one in the same visit where we can, so the shop is never left open overnight. Most single units take one to two days on site. The old frame and glass go away with us.`,
    benefits: [
      {
        title: 'Built to your exact opening',
        description:
          'Every front is fabricated from our survey measurements, so it fits the building you have rather than a standard size, with no gaps packed out with foam.',
      },
      {
        title: 'One team, start to finish',
        description:
          'You deal with the same team from the first survey to the handover, so nothing gets lost between measuring and fitting.',
      },
      {
        title: 'Secure at close of day',
        description:
          'Multi-point locks, laminated glass and a shutter box can all be built into the same front, so security does not look bolted on afterwards.',
      },
      {
        title: 'Little upkeep for decades',
        description:
          'Aluminium does not rot or rust. A wash with soapy water a few times a year and a drop of oil on the door hinges is the usual maintenance.',
      },
    ],
    faqs: [
      {
        question: 'How long will my shop be closed while the front is replaced?',
        answer:
          'Usually not at all, or for one day at most. We prepare everything off site and fit the new front in one or two days. If you trade late, we can start early and make the shop secure before we leave each evening.',
      },
      {
        question: 'Is planning permission needed for a new shopfront?',
        answer:
          'Often, yes. Most councils treat a change to the appearance of a shopfront as development that needs planning permission, and signs need advertisement consent. Repairs and true like-for-like replacements are sometimes exempt, but listed buildings and conservation areas almost never are. We check your address at survey and tell you what applies.',
      },
      {
        question: 'What is a thermal break and do I need one?',
        answer:
          'It is a strip of insulating plastic built into the middle of the aluminium frame. It stops cold passing straight through the metal, so the inside face stays warmer and does not run with condensation. For a heated shop it is almost always worth having, and it is often needed to meet Building Regulations.',
      },
      {
        question: 'Can the frame match our brand colours?',
        answer:
          'Yes. Any RAL colour is available, and we can match a brand colour from a sample. Unusual colours add a few working days to the lead time because the coater runs them as a separate batch.',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Tell us about the unit',
        description:
          'Call, WhatsApp or use the form. A couple of photos of the current front and a rough width help us give you a ballpark figure straight away.',
      },
      {
        step: 2,
        title: 'Free measured survey',
        description:
          'We visit, measure the opening, check the lintel and floor level, and talk through door position, glass type, colour and any planning issues.',
      },
      {
        step: 3,
        title: 'Drawing and fixed price',
        description:
          'You get a drawing of the new front and a written price. Nothing is ordered until you have approved both.',
      },
      {
        step: 4,
        title: 'Fabrication',
        description:
          'Frames are cut, coated and glazed to the approved drawing. Expect around three to four weeks, longer for special colours.',
      },
      {
        step: 5,
        title: 'Fitting day',
        description:
          'We remove the old front, fit the new one, seal it, adjust the doors and show you how the locks work. The old materials leave with us.',
      },
    ],
    pricingGuide: {
      heading: 'Aluminium shopfront prices',
      content:
        'Width, height, door type and glass choice drive the price more than anything else. These are the ranges we see most often on standard jobs.',
      ranges: [
        { item: 'One shop unit', price: '£2,500 – £5,000' },
        { item: 'Two units side by side', price: '£4,500 – £8,500' },
        { item: 'Parade of three or more', price: '£12,000 – £25,000' },
        { item: 'Thermal break frames, extra', price: '£800 – £1,500' },
      ],
      note: 'Prices are before VAT. We confirm the exact figure in writing after the survey.',
    },
    peopleAlsoAsk: [
      {
        question: 'How many years does an aluminium shopfront last?',
        answer:
          'Twenty-five years or more is normal. The frame itself will outlast most leases; door closers and locks are the parts that wear and they can be swapped individually.',
      },
      {
        question: 'Is aluminium better than PVC-U for a shopfront?',
        answer:
          'For commercial use, generally yes. Aluminium is stronger, so frames can be slimmer and carry bigger glass, and it copes far better with a heavy entrance door being opened hundreds of times a day.',
      },
      {
        question: 'Can I have a shutter fitted with the new front?',
        answer:
          'Yes, and it is the neatest way to do it. We build the shutter box into the fascia so it sits behind the sign instead of hanging off the wall.',
      },
      {
        question: 'What does a stallriser do?',
        answer:
          'It is the solid panel under the window. It protects the glass from kicks, trolleys and floor cleaning, and many councils expect one on traditional streets.',
      },
    ],
    relatedServices: ['automatic-doors', 'security-doors', 'bi-fold-doors', 'shopfront-repairs'],
  },

  {
    slug: 'roller-shutters',
    name: 'Roller Shutters',
    shortDescription:
      'Manual and motorised roller shutters for shops, garages, warehouses and loading bays, from slim punched-lath shop shutters to heavy industrial doors.',
    heroImage: 'service-security-shutter.webp',
    primaryKeyword: 'roller shutters',
    metaTitle: 'Roller Shutters for Shops and Units',
    metaDescription:
      'Shop and industrial roller shutters supplied and fitted. Solid, perforated or punched laths, manual or electric, insurance-rated options. Call 07597 630000.',
    description: `A roller shutter is the last thing you close at night and the first thing you open in the morning, so it has to work every single time. We fit shutters on high-street shops, takeaways, petrol station kiosks, garages and industrial units, and we look after them afterwards.

**Choosing the curtain**

The curtain is the part that rolls up. Solid steel laths give the most privacy and resistance. Perforated laths have tiny holes, so a lit window display can still be seen at night. Punched laths have larger slots and are often fitted behind a glazed front. Insulated laths, filled with foam, suit loading bays and buildings that are heated.

If your insurer has asked for a specific security rating, tell us at the start. Rated shutters are tested as a complete set (curtain, guides, box and locking), and the certificate only counts if the whole set is fitted as tested.

**Hand-operated or motorised**

Small shop shutters can be pushed up by hand with spring assistance. Above about three metres wide, or where staff open up alone, a motor is the safer choice. Motors can be run from a key switch, a wall button or a remote fob, and can be set up with a safety edge that stops the curtain if it touches something on the way down.

**Fire shutters**

Some openings, such as those between a shop and a storage area or across a stairwell, need a fire-rated shutter that closes on its own when the alarm sounds. These are a separate product with their own testing and must be serviced so they actually drop when needed. We supply and fit them where the fire strategy calls for one.

**The building matters too**

A shutter is only as strong as what it is fixed to. On survey we check the brickwork or steel each side, the headroom for the box, and whether the guides can sit on the face of the wall or need to go inside the opening. Planning permission is often needed for an external shutter on a shopfront, especially a solid one, and some councils will only allow perforated or internal shutters. We will tell you before you order.

**After installation**

We test every shutter before we leave and show your staff how to use it and what to do if the power fails. A yearly service keeps springs, motors and safety devices in order and spots wear early.`,
    benefits: [
      {
        title: 'Strong, visible deterrent',
        description:
          'A closed shutter tells a would-be thief that getting in will be slow and noisy. Most give up before they start.',
      },
      {
        title: 'No floor space lost',
        description:
          'The curtain coils into a box above the opening, so nothing swings into the shop or across the pavement.',
      },
      {
        title: 'Push-button opening',
        description:
          'Motorised shutters open from a key switch or remote fob, which is quicker and safer for staff opening alone early in the morning.',
      },
      {
        title: 'Options for every opening',
        description:
          'From a narrow kiosk hatch to a six-metre loading bay, the same supplier, survey and service visit cover all of your openings.',
      },
    ],
    faqs: [
      {
        question: 'Will I need permission to fit a shutter to my shop?',
        answer:
          'Often you will. Many councils treat an external shutter on a shopfront as needing planning permission, and some refuse solid shutters on high streets. Internal shutters, fitted behind the glass, usually do not need it. We check your council\'s guidance during the survey.',
      },
      {
        question: 'How often should a shutter be serviced?',
        answer:
          'Once a year for most shop shutters. Shutters that go up and down many times a day, such as on loading bays, are better checked every six months.',
      },
      {
        question: 'What if the power goes off and the shutter is down?',
        answer:
          'Most motors have a manual override, either a hand chain or a crank handle. We show you where it is and how to use it on handover day. A battery backup can also be fitted.',
      },
      {
        question: 'Can a shutter be added to the shopfront I already have?',
        answer:
          'Usually, yes. We fit the box on the face of the fascia or behind it, depending on the space. If there is no room, a slimmer box or an internal shutter may work instead.',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Talk it through',
        description:
          'We ask what you want the shutter to protect, how often it will run and whether your insurer has set any rules.',
      },
      {
        step: 2,
        title: 'Measure and check fixings',
        description:
          'On site we measure the opening, check the walls and headroom, and look at where power can be run for a motor.',
      },
      {
        step: 3,
        title: 'Written specification',
        description:
          'You receive a quote listing the lath type, colour, operation, locks and any safety devices, with one total price.',
      },
      {
        step: 4,
        title: 'Made and fitted',
        description:
          'Shutters are made to size, then fitted, wired and adjusted in a single visit for most shop openings.',
      },
      {
        step: 5,
        title: 'Test and handover',
        description:
          'We run the shutter through full cycles, check the safety devices and show staff how to open, close and override it.',
      },
    ],
    pricingGuide: {
      heading: 'Roller shutter prices',
      content:
        'Size, operation and curtain type decide most of the cost. Here are typical figures for the shutters we fit most often.',
      ranges: [
        { item: 'Hand-operated, up to 3 m wide', price: '£800 – £1,500' },
        { item: 'Motorised, up to 3 m wide', price: '£1,500 – £3,000' },
        { item: 'Fire-rated shutter', price: '£3,000 – £6,000' },
        { item: 'Industrial door, 5 m or wider', price: '£4,000 – £8,000' },
      ],
      note: 'Prices are before VAT. We confirm the exact figure in writing after the survey.',
    },
    peopleAlsoAsk: [
      {
        question: 'How long does fitting a shop shutter take?',
        answer:
          'Most shop shutters are fitted and running in a day. Large industrial doors or ones that need new steelwork can take two.',
      },
      {
        question: 'Are motorised shutters loud?',
        answer:
          'Modern tubular motors are fairly quiet. Most of the noise comes from the laths in the guides, which is kept down by regular cleaning and lubrication.',
      },
      {
        question: 'Do insurers insist on shutters?',
        answer:
          'Some do, particularly for shops holding cash, cigarettes, alcohol, phones or jewellery. Check your policy wording, because it may name a specific security rating.',
      },
      {
        question: 'Can a shutter go inside the glass instead of outside?',
        answer:
          'Yes. Internal shutters sit behind the glass, are often easier to get approved and keep the front looking open at night.',
      },
    ],
    relatedServices: ['aluminium-shopfronts', 'security-doors', 'fire-doors', 'emergency-callout'],
  },

  {
    slug: 'security-doors',
    name: 'Security Doors',
    shortDescription:
      'Heavy steel doors for back entrances, stock rooms, plant rooms and fire exits, with locks and ratings chosen to satisfy your insurer.',
    heroImage: 'service-steel-door.jpeg',
    primaryKeyword: 'commercial security doors',
    metaTitle: 'Steel Security Doors for Businesses',
    metaDescription:
      'Steel security doors for rear entrances, stock rooms and fire exits. Insurance-rated options, anti-snap locks, panic bars. Free survey: 07597 630000.',
    description: `Burglars rarely come through the front. They try the back door, the fire exit and the side gate, where nobody is watching. A proper steel security door closes that gap.

We fit security doors on shops, pharmacies, off-licences, offices, warehouses and plant rooms, mostly across the Midlands and further afield when needed.

**What makes a door "secure"**

It is the whole set, not just the leaf. A strong door in a weak frame, or a good frame fixed to crumbling brick, will still give way. We supply doors as complete sets: steel leaf, welded steel frame, hinges with dog bolts (steel pins that stop the door being lifted out if the hinges are cut), and locks that throw bolts into the frame at several points.

**Ratings and insurers**

Security doors are tested by independent bodies and given a rating that shows how long they resist attack with given tools. The most common scheme in the UK is LPS 1175, where higher numbers mean more time and heavier tools. If your insurer or landlord has named a rating, send us the wording and we will quote a door that meets it, with the certificate to prove it.

**Fire exits that stay secure**

A fire exit must open instantly from inside without a key. That does not mean it has to be weak. Panic bars and push pads can be fitted to steel doors, with outside access only by key or code. We make sure escape routes keep working while the door stays shut to anyone outside.

**Locks, closers and access control**

We fit anti-snap cylinders, deadlocks, hook bolts and overhead closers that pull the door shut every time. If you want keypad, fob or intercom entry, we prepare the door for it and can fit the hardware too.

**Fitting**

The old door and frame come out, the opening is made good, and the new set is fixed into solid masonry with heavy anchors. Most single doors are done in a day, so you are never left without a lockable entrance overnight.`,
    benefits: [
      {
        title: 'Certificates your insurer accepts',
        description:
          'Rated doors come with the test certificate for the exact model fitted, which is what an underwriter will ask to see after a claim.',
      },
      {
        title: 'Locks into the frame at several points',
        description:
          'Bolts engage top, middle and bottom, so the door cannot be levered at one corner.',
      },
      {
        title: 'Safe as an escape route',
        description:
          'Panic hardware lets staff get out in one push while the outside stays locked.',
      },
      {
        title: 'Built for hard use',
        description:
          'Steel leaves and frames shrug off the knocks of deliveries, bins and trolleys that wreck timber doors within a few years.',
      },
    ],
    faqs: [
      {
        question: 'Which security rating should I ask for?',
        answer:
          'Start with your insurance policy or landlord\'s requirements, since they often name one. Without a stated rating, a door built to a recognised standard with multi-point locking suits most shops. High-value stock such as phones, jewellery or medicines may justify a higher rating.',
      },
      {
        question: 'Can my security door be a fire exit as well?',
        answer:
          'Yes. We fit panic bars or push pads so it opens from inside with one movement, while the outside needs a key or code.',
      },
      {
        question: 'How is the frame fixed into the wall?',
        answer:
          'With heavy-duty anchors drilled deep into solid brick, block or concrete. Where the wall is weak or hollow, we reinforce it first or fix into a steel sub-frame.',
      },
      {
        question: 'What upkeep does a steel door need?',
        answer:
          'Very little. Check the closer and panic bar monthly, keep the hinges and bolts lightly oiled, and have it looked at once a year.',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Risk chat',
        description:
          'We ask what is behind the door, what your insurer needs and whether it is a fire exit.',
      },
      {
        step: 2,
        title: 'Survey',
        description:
          'We measure the opening, check the walls and floor and note which way the door must open.',
      },
      {
        step: 3,
        title: 'Door and lock choice',
        description:
          'You get a written price for the door set, locks and any panic or access hardware, with the rating stated.',
      },
      {
        step: 4,
        title: 'Swap-over',
        description:
          'Old door out, new set in, fixed and finished in one visit for most single doors.',
      },
      {
        step: 5,
        title: 'Keys and paperwork',
        description:
          'We hand over keys, show staff the escape hardware and give you the certificate for your insurer.',
      },
    ],
    pricingGuide: {
      heading: 'Security door prices',
      content:
        'The rating, size and number of leaves set most of the price. These figures cover the doors we fit most.',
      ranges: [
        { item: 'Steel door, one leaf', price: '£1,200 – £2,500' },
        { item: 'Steel door, two leaves', price: '£2,000 – £4,000' },
        { item: 'LPS 1175 rated (SR2) door', price: '£2,500 – £5,000' },
        { item: 'Composite door with steel core', price: '£1,800 – £3,500' },
      ],
      note: 'Prices are before VAT. We confirm the exact figure in writing after the survey.',
    },
    peopleAlsoAsk: [
      {
        question: 'What do LPS 1175 ratings mean?',
        answer:
          'They describe how long a door resists attack and with which tools. A low rating stops quick attacks with simple hand tools; higher ratings stand up to longer attacks with heavier tools.',
      },
      {
        question: 'Are steel security doors heavy?',
        answer:
          'Yes, a single leaf can weigh well over 60 kg. That is why we use heavy hinges and a good closer, so it still opens easily.',
      },
      {
        question: 'Is a guarantee included?',
        answer:
          'The door set carries the manufacturer\'s guarantee, and we stand behind our fitting. We put the details in writing on your quote.',
      },
      {
        question: 'Can a steel door be painted to match the building?',
        answer:
          'Yes. Steel door sets are powder coated in a chosen colour, so they do not have to look industrial.',
      },
    ],
    relatedServices: ['roller-shutters', 'fire-doors', 'aluminium-shopfronts', 'emergency-callout'],
  },

  {
    slug: 'automatic-doors',
    name: 'Automatic Doors',
    shortDescription:
      'Sliding and swing automatic entrances for shops, surgeries, offices and showrooms, including operators added to doors you already have.',
    heroImage: 'service-auto-sliding-doors.webp',
    primaryKeyword: 'automatic doors commercial',
    metaTitle: 'Automatic Doors for Shops and Offices',
    metaDescription:
      'Automatic sliding and swing doors for shops, surgeries and offices. New entrances or operators added to existing doors, plus servicing. Call 07597 630000.',
    description: `An automatic door lets people in with full hands, with a pushchair or in a wheelchair, without anyone holding it open. For busy shops it also stops the door being left wide open all day, which keeps the heat in.

**Sliding or swing?**

Sliding doors suit wide entrances with room for the panels to slide sideways, such as supermarkets, pharmacies and showrooms. They move a lot of people quickly. Swing doors suit narrower entrances and existing doors: an operator (a motor arm) is fitted to the top of the door and opens it on a sensor or push button.

**Low-energy swing operators**

Where traffic is light, such as a clinic, office or accessible toilet, a low-energy operator opens the door slowly and gently on a push pad. Because it moves slowly, it needs fewer safety sensors, which keeps the cost down. It is often the simplest way to make an existing entrance accessible.

**Safety comes first**

A powered door can trap fingers or knock someone over if it is set up badly. Every door we fit is set to the safety standard for powered pedestrian doors, with sensors that detect people in the opening and stop or reverse the door. We record the settings and test results at handover, so you have proof the door was safe when we left.

**Fire alarms and power cuts**

Automatic doors on escape routes must open, or be pushed open, when the fire alarm sounds or the power fails. We link the door to your alarm where needed and choose a door that fails safe for your building.

**Locking at night**

Sliding doors can have electric locks that engage when switched to "night" mode, and swing doors keep their normal locks. If you also want a shutter, we plan the two together so the sensors do not get in the way.

**Keeping it running**

Sensors drift, belts stretch and floor guides fill with grit. A service visit once or twice a year keeps the door safe and avoids the classic call-out: a door stuck open at closing time.`,
    benefits: [
      {
        title: 'Easier for every customer',
        description:
          'People with wheelchairs, walking aids, buggies or heavy bags get in without help, which helps you meet your duties under the Equality Act.',
      },
      {
        title: 'Heat stays inside',
        description:
          'The door opens only when someone is there and closes straight after, instead of being propped open all day.',
      },
      {
        title: 'Works with doors you already have',
        description:
          'A swing operator can often be added to a sound existing door, so you do not need a whole new entrance.',
      },
      {
        title: 'Tested and recorded',
        description:
          'We set safety sensors to the standard for powered doors and give you the test record at handover.',
      },
    ],
    faqs: [
      {
        question: 'How wide does an automatic doorway need to be?',
        answer:
          'For wheelchair access, aim for a clear opening of at least 1000 mm on a busy public entrance. Smaller openings can still be automated, but we will tell you if the width will limit who can use it.',
      },
      {
        question: 'What happens in a power cut?',
        answer:
          'It depends on the door. Some open and stay open, some can be pushed open by hand, and some have battery backup. We choose the behaviour that suits your fire plan and security needs.',
      },
      {
        question: 'How often does an automatic door need a service?',
        answer:
          'At least once a year, and twice for busy public entrances. Regular checks keep the safety sensors working correctly.',
      },
      {
        question: 'Can you automate the door we already have?',
        answer:
          'Often, yes. If the door, frame and hinges are in good order, we fit a swing operator and sensors to it. If the door is worn or too heavy, we will say so and quote a replacement.',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Who uses the door?',
        description:
          'We ask how many people come through, who they are and whether the door is on a fire escape route.',
      },
      {
        step: 2,
        title: 'Look at the entrance',
        description:
          'We measure the opening, check the frame and floor, and find a power supply for the operator.',
      },
      {
        step: 3,
        title: 'Choose and price',
        description:
          'You get a written recommendation for sliding, swing or low-energy operation, with one fixed price.',
      },
      {
        step: 4,
        title: 'Fit and wire',
        description:
          'We fit the door or operator, wire it in and connect it to the fire alarm where needed.',
      },
      {
        step: 5,
        title: 'Set up and record',
        description:
          'Speeds, sensors and hold-open times are set and tested, and you receive the test record.',
      },
    ],
    pricingGuide: {
      heading: 'Automatic door prices',
      content:
        'The door type and whether we reuse your existing door make the biggest difference. Typical figures are below.',
      ranges: [
        { item: 'Sliding entrance, two leaves', price: '£3,500 – £7,000' },
        { item: 'Operator on a swing door', price: '£2,000 – £4,000' },
        { item: 'Low-energy swing operator', price: '£1,500 – £3,000' },
        { item: 'Yearly service plan', price: '£250 – £500' },
      ],
      note: 'Prices are before VAT. We confirm the exact figure in writing after the survey.',
    },
    peopleAlsoAsk: [
      {
        question: 'Must a shop have an automatic door?',
        answer:
          'No law says every shop must, but businesses must make reasonable adjustments for disabled customers. For many entrances, an automatic door is the most practical way to do that.',
      },
      {
        question: 'Can automatic doors be locked overnight?',
        answer:
          'Yes. Sliding doors can lock electrically in night mode, and swing doors keep a normal lock.',
      },
      {
        question: 'Do automatic doors open when the fire alarm goes off?',
        answer:
          'They can be linked to the alarm so they open and stay open, which is usually what an escape route needs.',
      },
      {
        question: 'Do automatic doors use much electricity?',
        answer:
          'Very little. The operator only draws real power while the door moves, and keeping heat in usually saves more than it costs to run.',
      },
    ],
    relatedServices: ['aluminium-shopfronts', 'bi-fold-doors', 'shopfront-repairs', 'security-doors'],
  },

  {
    slug: 'bi-fold-doors',
    name: 'Bi-Fold Doors',
    shortDescription:
      'Folding glazed fronts for cafés, bars, restaurants and showrooms that open the whole frontage to the street in warm weather.',
    heroImage: 'service-bifold-door.webp',
    primaryKeyword: 'commercial bi-fold doors',
    metaTitle: 'Commercial Bi-Fold Doors and Fronts',
    metaDescription:
      'Aluminium bi-fold fronts for cafés, bars and restaurants. Fold the frontage open in summer, lock it tight at night. Free survey: 07597 630000.',
    description: `On a sunny afternoon, a café with its whole front folded open looks busy even when it is half empty, and people walk in more easily. That is the reason most of our bi-fold customers are cafés, bars, restaurants and dessert shops.

**How they work**

A bi-fold front is a row of glazed panels hinged together. They run on a track at the top and fold back like a concertina, stacking neatly at one or both ends. One panel is usually set up as a normal door, so you can use the front every day without folding everything.

**Built for commercial use**

Home bi-folds are opened a few times a week. A café front may be opened and closed every day for years, and pushed by customers in between. We use commercial systems with heavier rollers, stronger hinges and frames sized for the panel weight, not domestic products dressed up.

**Weather and heat**

Closed, a good bi-fold should keep wind and rain out like any other front. Frames with a thermal break and double glazing stop the front becoming a cold wall in winter. A low threshold makes the opening easier to step over but needs proper drainage outside, which we check at survey.

**What the building has to carry**

Folding panels hang from the top track, so the beam or lintel above has to carry the weight without sagging. On older buildings we may need a new steel. We check this at survey, before you commit, so there are no surprises.

**Security at night**

Panels lock to each other and into the frame top and bottom, and the glass can be laminated. Many owners add a shutter on the outside so the glass is covered when the shop is closed.

**Planning**

Replacing a shopfront with bi-folds changes how the building looks and usually needs planning permission. Councils sometimes ask for a stallriser or a door position that matches the street. We include drawings you can submit.`,
    benefits: [
      {
        title: 'The whole front opens',
        description:
          'Panels stack to the side, so most of the width becomes an open entrance on warm days.',
      },
      {
        title: 'A normal door for every day',
        description:
          'A built-in traffic door means you only fold the front when you want to.',
      },
      {
        title: 'Warm in winter',
        description:
          'Thermally broken frames and double glazing keep the front from becoming a cold spot when closed.',
      },
      {
        title: 'Easy to step through',
        description:
          'Low thresholds suit wheelchairs and buggies, and are detailed so rain still drains away outside.',
      },
    ],
    faqs: [
      {
        question: 'How many panels can one front have?',
        answer:
          'It depends on the width and the panel size. Most shopfronts use three to seven panels. Wider fronts can split into two sets that fold to each side.',
      },
      {
        question: 'Will I need planning permission for bi-folds?',
        answer:
          'Usually, yes, because the front will look different. Listed buildings and conservation areas also need extra consents. We help with drawings for the application.',
      },
      {
        question: 'Are bi-fold fronts secure when closed?',
        answer:
          'Yes. Each panel locks into the next and into the frame top and bottom. Laminated glass and an external shutter add more protection.',
      },
      {
        question: 'How do I look after them?',
        answer:
          'Sweep and wipe the bottom track weekly so grit does not wear the rollers, and have the system adjusted once a year.',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Your idea',
        description:
          'Tell us how wide the front is, how you trade and whether you want to fold one way or both.',
      },
      {
        step: 2,
        title: 'Check the structure',
        description:
          'We measure, check the beam above and the floor below, and look at drainage outside.',
      },
      {
        step: 3,
        title: 'Panel layout and price',
        description:
          'You get a drawing showing the number of panels and fold direction, with a fixed price.',
      },
      {
        step: 4,
        title: 'Fit',
        description:
          'The old front is removed and the bi-fold system installed, glazed and adjusted.',
      },
      {
        step: 5,
        title: 'Show and tell',
        description:
          'We show staff the right order to fold and lock the panels, which keeps the hinges from being strained.',
      },
    ],
    pricingGuide: {
      heading: 'Bi-fold door prices',
      content:
        'The number of panels and the width are the main factors. These are typical ranges for commercial fronts.',
      ranges: [
        { item: 'Three panels, up to 3 m', price: '£3,000 – £5,500' },
        { item: 'Five panels, up to 5 m', price: '£5,500 – £9,000' },
        { item: 'Seven or more panels, 7 m and up', price: '£8,000 – £15,000' },
        { item: 'Built-in traffic door, extra', price: '£800 – £1,500' },
      ],
      note: 'Prices are before VAT. We confirm the exact figure in writing after the survey.',
    },
    peopleAlsoAsk: [
      {
        question: 'Can a bi-fold be my main entrance?',
        answer:
          'Yes, if one panel is set up as a traffic door with a closer and lock. Customers then use it like a normal door.',
      },
      {
        question: 'How wide can a bi-fold front be?',
        answer:
          'Fronts of seven metres or more are possible, usually split into two folding sets.',
      },
      {
        question: 'Do bi-folds meet energy rules?',
        answer:
          'With thermally broken frames and double glazing, they can. We confirm what applies to your job before ordering.',
      },
      {
        question: 'Can a bi-fold front have a shutter too?',
        answer:
          'Yes. An external shutter can cover the whole opening at night, with the box hidden in the fascia above.',
      },
    ],
    relatedServices: ['aluminium-shopfronts', 'automatic-doors', 'roller-shutters', 'shopfront-repairs'],
  },

  {
    slug: 'fire-doors',
    name: 'Fire Doors',
    shortDescription:
      'Certified fire doorsets supplied and fitted for shops, offices, flats above shops and industrial premises, with the paperwork your fire risk assessor needs.',
    heroImage: 'preview-fire.webp',
    primaryKeyword: 'commercial fire doors',
    metaTitle: 'Fire Doors Fitted for Businesses',
    metaDescription:
      'Certified FD30 and FD60 fire doors fitted for shops, offices and flats above shops. Correct seals, closers and gaps, with records. Call 07597 630000.',
    description: `A fire door only works if every part of it is right: the door, the frame, the seals, the hinges, the closer and the gaps around the edge. Get one detail wrong and a door rated for 30 minutes may fail in five. Fire risk assessments often pick this up, and that is usually when we are called.

**What the ratings mean**

FD30 means the doorset held back fire for 30 minutes in a test. FD60 means 60 minutes. Higher ratings exist for special cases. An "S" after the rating (for example FD30S) means the door also has smoke seals, which slow the spread of cold smoke, often the bigger danger. Your fire risk assessment or building plans will say which rating each door needs.

**Certified doorsets**

We fit doors that come with third-party certification, which means an independent body has checked the product and how it is made. Each door carries a label or plug on its edge so an inspector can trace it. Fitting a certified door with uncertified hardware breaks the certification, so we use hinges, locks and closers that are approved for that door.

**Fitting is where most doors fail**

The gap around a fire door should be about 3 mm (within the limits set by the maker), and the gap under it must not be too large. Intumescent strips, which swell up in a fire to seal the gap, must be the right type and in the right place. The frame must be fixed solidly and the gap behind it filled with fire-rated material. We follow the maker's instructions to the letter.

**Self-closing**

Most fire doors must close by themselves, every time, from any angle. We fit and adjust the closer so it does, and fit hold-open devices that release on the fire alarm where doors need to stay open in normal use.

**Records**

After fitting we give you a record for each door: its location, rating, certification number and photos. Your fire risk assessor will ask for exactly this.

**Who is responsible?**

Under the Fire Safety Order, the "responsible person" (usually the employer, owner or managing agent) must keep fire doors in working order. Flats above shops often share a stair with the shop below, and doors there need extra care.`,
    benefits: [
      {
        title: 'Correct to the maker\'s test',
        description:
          'Gaps, seals and hardware are fitted exactly as the doorset was tested, which is the only way the rating holds.',
      },
      {
        title: 'Traceable certification',
        description:
          'Every door carries a label your assessor can check against the certificate.',
      },
      {
        title: 'Paperwork for each door',
        description:
          'You receive a record with location, rating and photos to keep with your fire risk assessment.',
      },
      {
        title: 'Remedial work too',
        description:
          'We fix failing doors where the door itself is sound, and replace those that cannot be saved.',
      },
    ],
    faqs: [
      {
        question: 'What does the S in FD30S mean?',
        answer:
          'It means the door also has smoke seals. FD30 resists fire for 30 minutes; FD30S does the same and also limits cold smoke passing around the edges.',
      },
      {
        question: 'Can I change the handle or lock on a fire door?',
        answer:
          'Only with parts approved for that door. Ordinary hardware can create a weak spot or remove intumescent material, which breaks the certification.',
      },
      {
        question: 'How often should fire doors be checked?',
        answer:
          'Doors in busy areas are often checked every few months, and all doors at least once a year. Your fire risk assessment should set the frequency.',
      },
      {
        question: 'Must every fire door shut by itself?',
        answer:
          'Most must. Doors to cupboards that are kept locked are a common exception. Your fire risk assessment will say which doors need closers.',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Read the assessment',
        description:
          'Send us your fire risk assessment or list of doors. We work from what it says each door must achieve.',
      },
      {
        step: 2,
        title: 'Inspect each door',
        description:
          'We measure openings, check frames and walls, and decide whether to repair or replace each door.',
      },
      {
        step: 3,
        title: 'Door schedule and price',
        description:
          'You receive a schedule listing each door, its rating and the work needed, with a fixed price.',
      },
      {
        step: 4,
        title: 'Install',
        description:
          'Doors are hung, sealed and fitted with approved hardware, then closers are adjusted.',
      },
      {
        step: 5,
        title: 'Hand over the records',
        description:
          'You get photos, labels and a written record for every door.',
      },
    ],
    pricingGuide: {
      heading: 'Fire door prices',
      content:
        'The rating, size and hardware chosen set the price for each doorset. These are typical per-door figures.',
      ranges: [
        { item: 'FD30 doorset, one leaf', price: '£450 – £900' },
        { item: 'FD60 doorset, one leaf', price: '£600 – £1,200' },
        { item: 'FD30S with smoke seals', price: '£550 – £1,000' },
        { item: 'FD90 specialist doorset', price: '£1,000 – £2,000' },
      ],
      note: 'Prices are before VAT and per door. We confirm the exact figure in writing after the survey.',
    },
    peopleAlsoAsk: [
      {
        question: 'Is FD60 better than FD30?',
        answer:
          'It resists fire for longer, but it is only "better" where the building needs it. Fitting the wrong rating does not help, and FD60 doors are heavier and cost more.',
      },
      {
        question: 'Do fire doors need intumescent strips?',
        answer:
          'Yes, in almost all cases. The strips swell in heat and close the gap around the door. Smoke seals are added where the door must also stop cold smoke.',
      },
      {
        question: 'Can I paint a fire door?',
        answer:
          'Yes, with normal paint, but never paint over the intumescent strips or smoke seals.',
      },
      {
        question: 'Can a fire door have a glass panel?',
        answer:
          'Yes, if it uses fire-rated glass and beading tested with that door. Ordinary glass cannot be added afterwards.',
      },
    ],
    relatedServices: ['security-doors', 'roller-shutters', 'shopfront-repairs', 'emergency-callout'],
  },

  {
    slug: 'shopfront-repairs',
    name: 'Shopfront Repairs',
    shortDescription:
      'Repairs to doors, locks, glass, frames and closers on shopfronts of any make, so you can keep trading without paying for a whole new front.',
    heroImage: 'service-glass-shopfront.webp',
    primaryKeyword: 'shopfront repairs',
    metaTitle: 'Shopfront Repairs: Doors, Locks, Glass',
    metaDescription:
      'Shopfront repairs for any make: dropped doors, failed closers, broken locks, cracked glass and damaged frames. Insurance reports. Call 07597 630000.',
    description: `Most shopfronts we are called to do not need replacing. They need a door re-hung, a closer swapped, a lock changed or a pane of glass replaced. Done properly, a repair can add years to a front for a fraction of the price of a new one.

**Doors that drag, drop or will not lock**

The most common call. Heavy shop doors wear out their hinges, pivots and floor springs (the closer hidden in the floor under many glass doors). The door sinks, scrapes the floor and stops lining up with the lock. We re-hang or replace the worn parts and set the door so it closes and locks cleanly again.

**Closers and floor springs**

A closer that slams, swings too fast or will not hold the door open needs adjusting or replacing. Floor springs leak oil when they fail; we lift the door, swap the spring and reset it.

**Locks and cylinders**

Snapped keys, stiff locks, lost keys after a staff change: we replace cylinders and locks the same day in most cases, and can upgrade to anti-snap cylinders while we are there.

**Glass**

Cracked or broken panes are replaced with glass that meets the safety rules for that position, which may mean a higher spec than what was there before. If the replacement glass has to be made to order, we board or temporarily glaze the gap first.

**Frames and panels**

Bent frames after a vehicle strike, damaged stallriser panels, loose fascia boxes and leaking seals can all be repaired or sections replaced. We match the frame colour as closely as possible.

**Insurance**

For damage after a break-in, storm or vehicle impact, we provide photos and a written report of the damage and the repair, which you can pass to your insurer or landlord.

**When repair is not worth it**

If a front is so worn that it will keep failing, we will tell you plainly and give you both prices, so you can decide.`,
    benefits: [
      {
        title: 'Any make or age',
        description:
          'We repair aluminium, steel and older timber fronts, whoever originally fitted them.',
      },
      {
        title: 'Same-visit fixes for common faults',
        description:
          'Our van carries closers, cylinders, hinges and seals, so many jobs are finished on the first visit.',
      },
      {
        title: 'Reports for insurers',
        description:
          'Photos and a written report of damage and repairs make your claim simpler.',
      },
      {
        title: 'Straight advice',
        description:
          'If a repair would be money wasted, we say so and price the alternative too.',
      },
    ],
    faqs: [
      {
        question: 'How soon can you come out?',
        answer:
          'Urgent faults that leave a shop insecure are treated as emergencies. For non-urgent repairs, we usually book a visit within a few working days.',
      },
      {
        question: 'Can you match the glass I have now?',
        answer:
          'We match thickness, type and tint where possible. If current safety rules need a higher spec than the old pane, we fit that instead and tell you why.',
      },
      {
        question: 'Will you repair a shopfront fitted by another company?',
        answer:
          'Yes. Most parts on commercial fronts are standard, and we can source the rest.',
      },
      {
        question: 'Do I need my landlord\'s permission for repairs?',
        answer:
          'Check your lease. Simple repairs usually do not need consent, but changes to the look of the front often do.',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Send us the problem',
        description:
          'Call or WhatsApp a photo or short video of the fault. It often tells us which parts to bring.',
      },
      {
        step: 2,
        title: 'Visit and diagnose',
        description:
          'An engineer checks the front, finds the cause and explains what is needed.',
      },
      {
        step: 3,
        title: 'Clear price',
        description:
          'You get a price before work starts. Small repairs are often done there and then.',
      },
      {
        step: 4,
        title: 'Fix and test',
        description:
          'We repair the fault and test the doors and locks before we leave.',
      },
    ],
    pricingGuide: {
      heading: 'Shopfront repair prices',
      content:
        'The part and the time needed set the price. These are common repair costs.',
      ranges: [
        { item: 'Boarding one opening after damage', price: '£150 – £350' },
        { item: 'Replacing a single glass panel', price: '£300 – £800' },
        { item: 'Repairing a section of frame', price: '£400 – £1,200' },
        { item: 'New door hardware (closer, lock, hinges)', price: '£150 – £500' },
      ],
      note: 'Prices are before VAT. We confirm the exact figure before any work begins.',
    },
    peopleAlsoAsk: [
      {
        question: 'Is it cheaper to repair or replace my shopfront?',
        answer:
          'Repair is cheaper in most cases. Replacement makes sense when the frame is badly damaged or several parts are failing at once.',
      },
      {
        question: 'Why does my shop door scrape the floor?',
        answer:
          'Usually worn hinges, pivots or a failing floor spring have let the door drop. Re-hanging or replacing the worn part fixes it.',
      },
      {
        question: 'Can you match my frame colour?',
        answer:
          'We match the RAL colour where it is known, or get as close as possible from a sample.',
      },
      {
        question: 'My shop door will not lock. Is that urgent?',
        answer:
          'If the shop cannot be secured overnight, yes. Ring the emergency line if you are near Coventry or Birmingham.',
      },
    ],
    relatedServices: ['emergency-callout', 'aluminium-shopfronts', 'roller-shutters', 'automatic-doors'],
  },

  {
    slug: 'emergency-callout',
    name: 'Emergency Callout',
    shortDescription:
      'Help when a shop is left open: smashed glass, a shutter stuck up or down, a forced door or a vehicle strike. We make it safe, then plan the proper repair.',
    heroImage: 'service-curtain-walling.webp',
    primaryKeyword: 'emergency shopfront repair',
    metaTitle: 'Emergency Shopfront and Shutter Help',
    metaDescription:
      'Shop left open after a break-in, smashed glass or a jammed shutter? Our 24/7 emergency line gets your premises boarded or secured. Call 07597 630000.',
    description: `The worst calls come at the worst times: a phone ringing at 2am because the alarm has gone off, or staff arriving to find the glass in pieces and the stock on show. Our emergency line is open 24 hours a day, every day of the year, for exactly these moments.

**What counts as an emergency**

Anything that leaves your premises open, unsafe or unable to trade. The usual ones are:

- glass smashed in a break-in or by vandals
- a roller shutter stuck open at closing time, or stuck shut in the morning
- a door forced, with the lock or frame broken
- a car or van driven into the front
- storm damage to glass, signs or fascia
- a door or closer that has failed so the shop cannot be locked

**First, make it safe**

Our first job is to stop further loss. That means boarding broken openings with timber, fitting temporary glazing where you need to keep trading, securing or manually closing a jammed shutter, or changing a lock so old keys no longer work. Broken glass is cleared from the pavement and the shop.

**Then, the permanent fix**

Most permanent repairs need parts made to measure, such as new glass or a shutter motor. Once the site is safe, we measure up and give you a price for the permanent repair, so you are not left with boards for longer than necessary.

**Insurance**

Take photos before anything is touched if you safely can. We also photograph the damage and our work and give you a written report, which insurers normally ask for. Emergency boarding is usually covered under a commercial policy, but check your own terms.

**Call-out charges**

Emergency and out-of-hours work costs more than a booked visit, and we tell you the call-out charge on the phone before we set off. No surprises when the invoice arrives.

**Where we cover**

Our emergency work is focused on the area around Coventry and Birmingham, where we can reach you quickly. Further away, call us anyway: we will tell you honestly whether we can get there in good time.`,
    benefits: [
      {
        title: 'Open 24/7, all year',
        description:
          'A real person answers the emergency line at night, at weekends and on bank holidays.',
      },
      {
        title: 'Boards, glass and locks on the van',
        description:
          'We arrive with the materials to secure most openings in one visit.',
      },
      {
        title: 'Photos and a written report',
        description:
          'Everything your insurer will want to see is recorded as we work.',
      },
      {
        title: 'A plan for the proper repair',
        description:
          'We measure for the permanent fix while we are there, so the boards come down sooner.',
      },
    ],
    faqs: [
      {
        question: 'How fast can you reach us?',
        answer:
          'It depends on where you are and the time of day. Ring us and we will give you an honest arrival estimate before we set off. Shops near Coventry and Birmingham are the quickest for us to reach.',
      },
      {
        question: 'Is there a charge just for coming out?',
        answer:
          'Yes, emergency visits carry a call-out charge, and out-of-hours rates apply at night and weekends. We tell you the figure on the phone first.',
      },
      {
        question: 'Will my insurer pay for emergency boarding?',
        answer:
          'Most commercial policies cover making premises secure after damage, but terms vary. We supply the photos and report your insurer will need.',
      },
      {
        question: 'Do you board up homes as well as shops?',
        answer:
          'Our emergency service is for commercial premises: shops, offices, takeaways and industrial units, including flats above shops when the damage is linked.',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Ring the emergency line',
        description:
          'Tell us what happened and where. We give you an arrival estimate and the call-out cost.',
      },
      {
        step: 2,
        title: 'We get to you',
        description:
          'An engineer is sent with boards, glass, locks and shutter parts.',
      },
      {
        step: 3,
        title: 'Premises made safe',
        description:
          'Openings are boarded or glazed, shutters secured and locks changed as needed. Debris is cleared.',
      },
      {
        step: 4,
        title: 'Permanent repair booked',
        description:
          'We measure for the lasting repair and send you a price, along with the damage report.',
      },
    ],
    pricingGuide: {
      heading: 'Emergency call-out prices',
      content:
        'Emergency work is priced by time and materials. These figures show what most call-outs cost.',
      ranges: [
        { item: 'Call-out, including the first hour', price: '£150 – £250' },
        { item: 'Night or weekend supplement', price: '£75 – £150' },
        { item: 'Boarding, per panel', price: '£150 – £350' },
        { item: 'Making a failed shutter secure', price: '£200 – £400' },
      ],
      note: 'Prices are before VAT. We tell you the call-out charge before we travel.',
    },
    peopleAlsoAsk: [
      {
        question: 'What should I do first if my shop window is smashed?',
        answer:
          'Make sure nobody is hurt, call the police if it was a crime and get a crime number, take photos, then call us to secure the opening.',
      },
      {
        question: 'Do you work bank holidays?',
        answer:
          'Yes. The emergency line runs every day of the year.',
      },
      {
        question: 'Can you help with the insurance claim?',
        answer:
          'We provide photos, a description of the damage and an itemised invoice, which covers what most insurers ask for.',
      },
      {
        question: 'Will you take the broken glass away?',
        answer:
          'Yes. We clear broken glass from the shop and the pavement as part of making the premises safe.',
      },
    ],
    relatedServices: ['shopfront-repairs', 'roller-shutters', 'security-doors', 'aluminium-shopfronts'],
  },

  {
    slug: 'shutter-repair',
    name: 'Shutter Repair',
    shortDescription:
      'Repairs to roller shutters of any make: snapped springs, dead motors, bent laths, jammed guides and failed key switches, usually fixed in one visit.',
    heroImage: 'preview-electric.webp',
    primaryKeyword: 'roller shutter repair',
    metaTitle: 'Roller Shutter Repair, Any Make',
    metaDescription:
      'Roller shutter repairs for any make: broken springs, dead motors, bent laths, jammed guides. Most fixed in one visit. Call 07597 630000.',
    description: `A shutter that will not go up keeps you out of your own shop. One that will not come down leaves you open all night. Either way it needs fixing today, which is why shutter repair is a large part of our work.

**What usually goes wrong**

- **Broken spring.** Manual shutters rely on a coiled spring in the barrel to make lifting easy. When it snaps, the shutter becomes too heavy to lift or drops suddenly. Spring work is dangerous because the spring is under tension, so it should only be done by trained engineers.
- **Motor failure.** Motors burn out, especially on shutters that are run up and down many times a day or forced against an obstruction. Sometimes it is only the capacitor, limit switch or key switch.
- **Bent laths.** A van reversing into the curtain, or someone trying to force it, can bend the laths so they jam in the guides.
- **Guides out of line.** Knocked or loose guide rails pinch the curtain and make it stick halfway.
- **Locks and controls.** Seized bottom locks, faulty remotes and water in key switches are common in winter.

**How we find the fault**

We check the shutter from the top down: power supply, controls, motor, barrel, spring, curtain, guides and bottom rail. You get an explanation of what has failed and why, and a price before we fix it.

**Repair or replace?**

Most shutters can be repaired. If the barrel is rusted through, the curtain is badly damaged along its length, or parts are no longer made, a new shutter can work out cheaper over a few years. We give you both figures when it is close.

**Shutters we did not fit**

We repair all common makes, manual and electric, whoever installed them. Our vans carry springs, motors, laths, switches and remote parts for the most common systems.

**Out of hours**

If the shutter is stuck open and you cannot lock up, call our emergency line. We will make it secure that night and complete the full repair as soon as parts allow.

**Avoiding the next breakdown**

A yearly service catches worn springs, tired motors and loose fixings before they fail. It also keeps the safety devices working, which matters if staff or customers walk under the shutter.`,
    benefits: [
      {
        title: 'Fixed in one visit most times',
        description:
          'Common springs, motors and laths travel with us, so most faults are sorted on the first trip.',
      },
      {
        title: 'Every brand, every age',
        description:
          'Manual or motorised, new or decades old, we work on shutters from all the usual makers.',
      },
      {
        title: 'Springs handled safely',
        description:
          'Spring tension is released and reset by trained engineers using the right tools, not a screwdriver and hope.',
      },
      {
        title: 'Price before we start',
        description:
          'You hear what is wrong and what it will cost before any repair begins.',
      },
    ],
    faqs: [
      {
        question: 'How soon can a shutter engineer come?',
        answer:
          'A shutter stuck open overnight is an emergency and we treat it as one. Other repairs are normally booked within a few working days.',
      },
      {
        question: 'Do you repair shutters fitted by other firms?',
        answer:
          'Yes, all the time. Most shutter parts are standard, and we can source the rest.',
      },
      {
        question: 'How long does a new spring take to fit?',
        answer:
          'Typically two to four hours on a shop shutter, depending on access and whether the barrel needs to come down.',
      },
      {
        question: 'Should I repair an old shutter or buy a new one?',
        answer:
          'If the barrel and most of the curtain are sound, repair it. If several major parts are worn out at once, replacement may be the better money. We will give you both prices.',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Describe the fault',
        description:
          'Tell us what the shutter is doing, or send a short video. It helps us bring the right parts.',
      },
      {
        step: 2,
        title: 'Engineer inspects',
        description:
          'We test the power, controls, motor, spring and curtain to find the cause.',
      },
      {
        step: 3,
        title: 'Agree the price',
        description:
          'You approve the repair price before we start work.',
      },
      {
        step: 4,
        title: 'Repair and run',
        description:
          'The fault is fixed and the shutter is run through full cycles to make sure it opens, closes and locks.',
      },
    ],
    pricingGuide: {
      heading: 'Shutter repair prices',
      content:
        'Most repairs fall into a few common jobs. Typical prices for them are below.',
      ranges: [
        { item: 'New spring fitted', price: '£180 – £350' },
        { item: 'New motor fitted', price: '£400 – £800' },
        { item: 'One lath replaced', price: '£80 – £200' },
        { item: 'Guide rails straightened or reset', price: '£200 – £500' },
      ],
      note: 'Prices are before VAT. We confirm the exact figure before any work begins.',
    },
    peopleAlsoAsk: [
      {
        question: 'Why has my shutter stopped halfway?',
        answer:
          'Usually a bent lath or a knocked guide rail is catching the curtain, or the motor\'s limit setting has slipped. Do not force it, as this can bend more laths.',
      },
      {
        question: 'Why does my shutter motor grind?',
        answer:
          'Grinding often means worn gears or bearings, or a curtain that is binding in the guides. Stop using it and have it checked before the motor burns out.',
      },
      {
        question: 'Can I fix a shutter spring myself?',
        answer:
          'No. The spring holds a lot of stored energy and can cause serious injury if released wrongly.',
      },
      {
        question: 'Why does my shutter go down on its own?',
        answer:
          'Usually a worn brake, a failing spring or a slipping limit setting. Stop using it and have it checked; a falling curtain can hurt someone.',
      },
    ],
    relatedServices: ['roller-shutters', 'shopfront-repairs', 'emergency-callout', 'security-doors'],
  },

  {
    slug: 'glass-replacement',
    name: 'Glass Replacement',
    shortDescription:
      'Broken, cracked or misted glass replaced in shopfronts, doors, windows and screens, with the right safety glass for each position.',
    heroImage: 'service-glass-shopfront.webp',
    primaryKeyword: 'commercial glass replacement',
    metaTitle: 'Shop Glass Replacement and Glazing',
    metaDescription:
      'Broken shop glass replaced: toughened, laminated and double-glazed units for shopfronts, doors and windows. Temporary boarding if needed. Call 07597 630000.',
    description: `Broken glass on a shop is a security problem, a safety problem and a sales problem all at once. We replace glass in shopfronts, entrance doors, office screens and commercial windows, and we make the opening safe while the new glass is made.

**Which glass goes where**

The rules on safety glass depend on where the pane sits. Glass in and around doors, and glass low down near the floor, must break safely. That means:

- **Toughened glass.** Heat-treated to be several times stronger than ordinary glass. If it does break, it shatters into small blunt pieces rather than sharp shards.
- **Laminated glass.** Two or more sheets bonded with a plastic layer. When hit, it cracks but holds together in the frame, which makes it much harder to climb through. This is the better choice for a shop front facing the street.
- **Double-glazed units.** Two panes with a sealed gap between them. Each pane can be toughened or laminated as needed.

**Misted double glazing**

If moisture appears between the panes, the seal has failed. The glass itself is fine but the unit needs replacing; the frame usually stays.

**Measuring and ordering**

Toughened glass cannot be cut once it is made, so every pane is ordered to exact sizes. We measure on site, check the thickness and type already fitted, and order the replacement. Standard units usually arrive within a few working days; large or special panes take longer.

**Keeping you secure meanwhile**

If the gap cannot be left open, we board it or fit a temporary pane the same day. Boards can be painted or carry a printed notice so you can keep trading.

**Upgrading while you are at it**

Replacement is a good time to switch to laminated glass on a vulnerable front, add a solar-control coating on a sunny elevation, or fit privacy film. We will suggest it where it makes sense, not on every job.

**Insurance**

We photograph the damage, note the glass type and sizes, and give you a written report and invoice for your claim.`,
    benefits: [
      {
        title: 'Correct safety glass every time',
        description:
          'Each pane is matched to the rules for its position, not just to what was there before.',
      },
      {
        title: 'Made safe the same day',
        description:
          'Boards or temporary glass go in while the permanent pane is being made.',
      },
      {
        title: 'Toughened, laminated and double-glazed',
        description:
          'We handle every common type used in shops, offices and commercial units.',
      },
      {
        title: 'Documents for your claim',
        description:
          'Photos, sizes and specification go into a report your insurer can use.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can broken shop glass be replaced?',
        answer:
          'Standard panes usually arrive within a few working days of measuring. Large or special glass can take longer. We secure the opening in the meantime.',
      },
      {
        question: 'How can I tell what glass I have now?',
        answer:
          'Toughened glass often has a small mark etched in one corner. Laminated glass shows a thin plastic layer at the edge. If in doubt, we check on site.',
      },
      {
        question: 'Will insurance pay for new glass?',
        answer:
          'Many commercial policies include glass cover. We provide the report and invoice your insurer needs.',
      },
      {
        question: 'Can the new glass be stronger than the old?',
        answer:
          'Yes. Swapping to laminated or thicker glass is often worthwhile, especially after a break-in.',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Report the breakage',
        description:
          'Call or send photos. If the opening is unsafe, we treat it as an emergency.',
      },
      {
        step: 2,
        title: 'Measure the opening',
        description:
          'We measure the pane exactly and note the glass type, thickness and frame details.',
      },
      {
        step: 3,
        title: 'Order the glass',
        description:
          'You approve the price and spec, and the new pane is made to size.',
      },
      {
        step: 4,
        title: 'Glaze and seal',
        description:
          'The broken glass is removed, the new pane fitted and sealed, and the frame cleaned.',
      },
    ],
    pricingGuide: {
      heading: 'Glass replacement prices',
      content:
        'Size, type and access set the cost. These figures cover most replacements.',
      ranges: [
        { item: 'Toughened pane up to 2 m²', price: '£200 – £500' },
        { item: 'Double-glazed unit swapped', price: '£350 – £900' },
        { item: 'Laminated security pane', price: '£500 – £1,200' },
        { item: 'Very large pane, 3 m² or more', price: '£800 – £2,000' },
      ],
      note: 'Prices are before VAT. We confirm the exact figure in writing after measuring.',
    },
    peopleAlsoAsk: [
      {
        question: 'What is the difference between toughened and laminated glass?',
        answer:
          'Toughened glass is stronger and breaks into small blunt pieces. Laminated glass cracks but holds together, so it keeps intruders out even when broken.',
      },
      {
        question: 'Can one pane of a double-glazed unit be replaced?',
        answer:
          'Not usually. The whole sealed unit is replaced, but the frame normally stays.',
      },
      {
        question: 'Do I have to upgrade old glass to meet today\'s rules?',
        answer:
          'When you replace glass in a critical position, the new pane should meet current safety requirements, even if the old one did not.',
      },
      {
        question: 'Can you replace glass in a door as well as the window?',
        answer:
          'Yes. Door glass must be safety glass, and we fit the right type for that position.',
      },
    ],
    relatedServices: ['shopfront-repairs', 'aluminium-shopfronts', 'emergency-callout', 'automatic-doors'],
  },

  {
    slug: 'aluminium-doors',
    name: 'Aluminium Doors',
    shortDescription:
      'Single, double and pivot aluminium entrance doors for shops, offices and communal entrances, fitted into new or existing frames.',
    heroImage: 'service-aluminium-shopfront.webp',
    primaryKeyword: 'aluminium doors commercial',
    metaTitle: 'Commercial Aluminium Entrance Doors',
    metaDescription:
      'Aluminium entrance doors for shops, offices and flats: single, double or pivot, with security locks and accessible thresholds. Call 07597 630000.',
    description: `The entrance door takes more punishment than any other part of a building. It is pushed, pulled, kicked open with full hands and slammed by the wind hundreds of times a day. Aluminium doors stand up to that far better than timber or PVC-U.

We fit aluminium doors on their own, without replacing the rest of the front, for shops, offices, surgeries and the communal entrances to flats above shops.

**Door types**

- **Single doors** for most shop and office entrances.
- **Double doors** where you need a wider opening for deliveries or busy periods.
- **Pivot doors**, which turn on a pivot set in from the edge, for wide, tall feature entrances.
- **Doors with side panels and fanlights** to fill an opening that is wider or taller than a standard door.

**Security**

Commercial aluminium doors can be fitted with multi-point locks, hook bolts, anti-snap cylinders and laminated glass. If you want a door that has been tested for break-in resistance, we can supply sets certified to the recognised security standard for doors.

**Access for everyone**

A level or very low threshold, a clear width that suits wheelchairs and a closer that is not too heavy to push all make the entrance easier to use. We check these at survey and can fit an automatic operator now or later.

**Keeping the heat in**

Doors with a thermal break and double glazing stop the entrance being a cold spot. For doors that open constantly, a closer set to shut promptly matters as much as the door itself.

**Finish**

Doors are powder coated in any RAL colour to match or contrast with the existing front. Handles range from simple levers to long pull bars.`,
    benefits: [
      {
        title: 'Built for constant use',
        description:
          'Commercial hinges, closers and frames are made for heavy daily traffic.',
      },
      {
        title: 'Secure locking',
        description:
          'Multi-point locks and anti-snap cylinders come as standard on our entrance doors.',
      },
      {
        title: 'Easy access',
        description:
          'Low thresholds and properly set closers make the door easy for everyone to use.',
      },
      {
        title: 'Lasts for decades',
        description:
          'Aluminium will not warp, swell or rot, so the door keeps closing cleanly year after year.',
      },
    ],
    faqs: [
      {
        question: 'How is an aluminium door different from an aluminium shopfront?',
        answer:
          'A shopfront is the whole glazed screen across the building, of which the door is one part. We can replace just the door if the rest of the front is in good order.',
      },
      {
        question: 'Can you replace a wooden or PVC-U door with aluminium?',
        answer:
          'Yes. We remove the old door and frame, make good the opening and fit a complete aluminium door set.',
      },
      {
        question: 'Do aluminium doors need maintenance?',
        answer:
          'Clean the frame, keep the threshold clear of grit and have the closer and locks checked once a year.',
      },
      {
        question: 'How much does an aluminium door cost?',
        answer:
          'See the price ranges on this page. Size, glass, locks and finish make the difference.',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Discuss the entrance',
        description:
          'Tell us how the door is used, who uses it and what you want it to look like.',
      },
      {
        step: 2,
        title: 'Measure',
        description:
          'We measure the opening and check the floor, walls and how the door must swing.',
      },
      {
        step: 3,
        title: 'Spec and price',
        description:
          'You get a written quote covering the door type, glass, locks, closer and colour.',
      },
      {
        step: 4,
        title: 'Make and fit',
        description:
          'The door set is made to size and fitted, usually in a single day.',
      },
    ],
    pricingGuide: {
      heading: 'Aluminium door prices',
      content:
        'Door type and security level are the main cost drivers. Typical prices are below.',
      ranges: [
        { item: 'Single hinged door', price: '£1,200 – £2,800' },
        { item: 'Pair of entrance doors', price: '£2,500 – £5,000' },
        { item: 'Security-certified door set', price: '£2,800 – £5,500' },
        { item: 'Pivot entrance door', price: '£3,000 – £6,000' },
      ],
      note: 'Prices are before VAT. We confirm the exact figure in writing after the survey.',
    },
    peopleAlsoAsk: [
      {
        question: 'Is aluminium better than PVC-U for a business door?',
        answer:
          'For a busy entrance, yes. Aluminium is stiffer and stronger, so the door keeps its shape and closes properly for much longer.',
      },
      {
        question: 'Can a new door match the colour of my shopfront?',
        answer:
          'Yes. Give us the RAL number or a sample and we match it.',
      },
      {
        question: 'Can an aluminium door be a fire door?',
        answer:
          'Standard aluminium doors are not fire rated. Where a fire-rated door is needed, we supply a certified fire doorset instead.',
      },
      {
        question: 'Can a new door be fitted into my old frame?',
        answer:
          'Sometimes, if the frame is sound and a standard size. Often a complete door set with a new frame gives a better, longer-lasting result.',
      },
    ],
    relatedServices: ['aluminium-shopfronts', 'automatic-doors', 'security-doors', 'glass-replacement'],
  },

  {
    slug: 'aluminium-windows',
    name: 'Aluminium Windows',
    shortDescription:
      'Aluminium windows for offices, upper floors above shops, industrial units and commercial refurbishments, fixed or opening, in any colour.',
    heroImage: 'service-aluminium-shopfront.webp',
    primaryKeyword: 'aluminium windows commercial',
    metaTitle: 'Aluminium Windows for Commercial Buildings',
    metaDescription:
      'Aluminium windows for offices, flats above shops and industrial units. Fixed, top-hung or tilt-and-turn, double glazed, any colour. Call 07597 630000.',
    description: `Upstairs offices, flats over shops and the side walls of industrial units often still have tired timber or early PVC-U windows that leak heat and stick shut. Slim aluminium windows let in more light, keep the weather out and need almost no upkeep.

**Window types**

- **Fixed lights.** Panes that do not open, used where the view or light matters and air comes from elsewhere.
- **Top-hung.** Hinged at the top and opening outwards at the bottom, a good choice for offices because rain runs off.
- **Tilt-and-turn.** Tilts inwards at the top for air, or swings in fully for cleaning from inside, useful on upper floors.
- **Sliding.** Panels slide past each other, handy where an outward-opening window would hit something.

**Heat and noise**

Frames with a thermal break and double-glazed units keep heat in and road noise out. Where the building has to meet Building Regulations for replacement windows, we choose frames and glass that comply and tell you the figures.

**Weather tightness**

Commercial windows are tested for how well they keep out air, water and wind. We fit them with the correct fixings and seals so they perform as tested, and pay particular attention to the joint between frame and wall, where most leaks start.

**Security**

Ground floor and accessible windows can have locking handles, restrictors that limit how far they open, and laminated glass. Restrictors also matter on upper floors where children or vulnerable people may be present.

**Planning**

Replacing windows in a conservation area or on a listed building often needs consent, and councils may ask for a particular frame shape or colour. We tell you at survey.

**Colour**

Any RAL colour is available, and frames can be one colour outside and another inside.`,
    benefits: [
      {
        title: 'Slim frames, more daylight',
        description:
          'Aluminium is strong enough for narrow frames around large panes.',
      },
      {
        title: 'Warmer, quieter rooms',
        description:
          'Thermally broken frames and double glazing cut heat loss and traffic noise.',
      },
      {
        title: 'Weather tested',
        description:
          'Systems are tested for air, water and wind, and we fit them so they perform as tested.',
      },
      {
        title: 'Almost no upkeep',
        description:
          'No painting, no rot. Wipe down and lubricate the hinges now and then.',
      },
    ],
    faqs: [
      {
        question: 'Can aluminium windows go into the shopfront I already have?',
        answer:
          'Yes. Opening windows or fanlights can often be added into an existing aluminium front, or the whole screen replaced if it is failing.',
      },
      {
        question: 'Are aluminium windows energy efficient?',
        answer:
          'With a thermal break and good double glazing, yes. Without a thermal break, aluminium loses heat quickly, so we do not recommend that for heated rooms.',
      },
      {
        question: 'Which colours can I choose?',
        answer:
          'Any RAL colour, plus textured and metallic finishes. Dual colour (different inside and out) is also available.',
      },
      {
        question: 'How long will the windows last?',
        answer:
          'Twenty-five years or more is normal, with handles and hinges replaced as they wear.',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'What needs replacing',
        description:
          'Tell us which windows, which floors and what is wrong with the current ones.',
      },
      {
        step: 2,
        title: 'Survey each opening',
        description:
          'We measure every window, check access for fitting and note any planning issues.',
      },
      {
        step: 3,
        title: 'Window schedule',
        description:
          'You receive a list of each window, its type, glass and colour, with a price.',
      },
      {
        step: 4,
        title: 'Make and install',
        description:
          'Windows are made to size and fitted one room at a time to limit disruption.',
      },
    ],
    pricingGuide: {
      heading: 'Commercial aluminium window prices',
      content:
        'Size, opening type and glass choice set the price. Here are typical figures.',
      ranges: [
        { item: 'Fixed pane, per square metre', price: '£250 – £500' },
        { item: 'Top-hung window', price: '£400 – £900' },
        { item: 'Tilt-and-turn window', price: '£500 – £1,100' },
        { item: 'Security-certified window', price: '£700 – £1,400' },
      ],
      note: 'Prices are before VAT. We confirm the exact figure in writing after the survey.',
    },
    peopleAlsoAsk: [
      {
        question: 'Aluminium or PVC-U for a commercial building?',
        answer:
          'Aluminium allows slimmer frames and larger panes, lasts longer and copes better with heavy use. PVC-U is cheaper upfront.',
      },
      {
        question: 'Can aluminium windows have triple glazing?',
        answer:
          'Yes, many systems accept triple glazing where extra heat or noise performance is needed.',
      },
      {
        question: 'Do new windows need planning permission?',
        answer:
          'Like-for-like replacements usually do not, but listed buildings and conservation areas often need consent.',
      },
      {
        question: 'Can windows above a shop be replaced from inside?',
        answer:
          'Often, yes. Many commercial windows can be glazed and fitted from inside, which avoids scaffolding.',
      },
    ],
    relatedServices: ['aluminium-shopfronts', 'aluminium-doors', 'glass-replacement', 'curtain-walling'],
  },

  {
    slug: 'curtain-walling',
    name: 'Curtain Walling',
    shortDescription:
      'Glazed aluminium facades for showrooms, offices, new-build retail and industrial frontages, from a single storey to several floors.',
    heroImage: 'service-curtain-walling.webp',
    primaryKeyword: 'curtain walling UK',
    metaTitle: 'Curtain Walling for Commercial Buildings',
    metaDescription:
      'Aluminium curtain walling for showrooms, offices and new commercial buildings. Stick or unitised systems, opening vents and doors built in. Call 07597 630000.',
    description: `Curtain walling is a glazed wall hung on the outside of a building's structure. It carries its own weight and the wind load back to the floors, but does not hold the building up. Car showrooms, office receptions, new retail units and the front of many industrial buildings use it to get big areas of glass.

**Shopfront or curtain wall?**

A shopfront usually fills one storey between a floor and a beam. Curtain walling runs past floor edges and can cover several storeys, so it is designed differently, with more attention to wind, movement and fire between floors. On a single-storey front, either can work; we advise which suits your opening.

**Stick or unitised**

Most jobs we see use a stick system: mullions (upright bars) and transoms (cross bars) are fixed on site, then the glass is added. It suits low-rise buildings and awkward shapes. Unitised systems arrive as factory-made panels and suit larger, taller projects.

**Design work comes first**

Curtain walling must be designed for the wind load at that site, and fixed to a structure that can carry it. We work from the building drawings or the structural engineer's information, and the frame sizes are chosen to suit the spans and loads.

**Glass and panels**

Glass can be clear, tinted, solar-control or obscured. Solid insulated panels can fill areas such as floor edges where glass is not wanted. Doors and opening vents fit into the same grid.

**Fire between floors**

Where a curtain wall passes a floor slab, the gap behind it must be sealed with fire-stopping so fire and smoke cannot travel up behind the glass. We include this in the design and installation.

**Testing and handover**

On larger jobs, sections are water-tested on site. You receive drawings and product information for your building records.`,
    benefits: [
      {
        title: 'Large glazed areas',
        description:
          'Floor-to-ceiling glass across wide spans, ideal for showrooms and receptions.',
      },
      {
        title: 'Designed for the site',
        description:
          'Frames are sized for the wind load and fixings at your building, not chosen from a brochure.',
      },
      {
        title: 'Doors and vents built in',
        description:
          'Entrance doors and opening windows sit in the same grid for a clean finish.',
      },
      {
        title: 'Fire-stopping included',
        description:
          'Gaps at floor edges are sealed so the facade does not become a route for fire.',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between curtain walling and a shopfront?',
        answer:
          'A shopfront fills one storey within the building\'s structure. Curtain walling hangs on the outside of the structure and can run across several floors.',
      },
      {
        question: 'How long does installation take?',
        answer:
          'A single-storey showroom front may take a week or two on site. Larger projects are programmed with the main contractor.',
      },
      {
        question: 'Does curtain walling need Building Regulations approval?',
        answer:
          'Usually, yes, as part of the wider building work. Energy, fire and structural rules all apply. We provide the information your building control body needs.',
      },
      {
        question: 'Can curtain walling include opening windows?',
        answer:
          'Yes. Top-hung or parallel-opening vents and doors are built into the same frame system.',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Brief and drawings',
        description:
          'Send us the building drawings and tell us the look you are after.',
      },
      {
        step: 2,
        title: 'Survey and structure check',
        description:
          'We check the openings and the structure the wall will be fixed to.',
      },
      {
        step: 3,
        title: 'Design and calculations',
        description:
          'Frame sizes, fixings and glass are chosen to suit the loads, and drawings are issued for approval.',
      },
      {
        step: 4,
        title: 'Fabrication and install',
        description:
          'Frames are made, then installed, glazed and sealed on site.',
      },
      {
        step: 5,
        title: 'Test and hand over',
        description:
          'Seals are checked, sections water-tested where specified, and records handed over.',
      },
    ],
    pricingGuide: {
      heading: 'Curtain walling prices',
      content:
        'Curtain walling is priced by area, with extras for glass upgrades and fire-stopping. Typical ranges are below.',
      ranges: [
        { item: 'Built on site (stick), per square metre', price: '£350 – £650' },
        { item: 'Factory-made panels, per square metre', price: '£500 – £900' },
        { item: 'Bonded-glass look, extra per square metre', price: '£80 – £150' },
        { item: 'Fire-stopping, per metre run', price: '£50 – £120' },
      ],
      note: 'Prices are before VAT. Final cost depends on the survey and the structural design.',
    },
    peopleAlsoAsk: [
      {
        question: 'Where is curtain walling used?',
        answer:
          'Showrooms, office entrances, retail parks, schools, hospitals and the front elevations of many industrial buildings.',
      },
      {
        question: 'Does curtain walling hold up the building?',
        answer:
          'No. It carries its own weight and the wind load, but the building\'s frame carries everything else.',
      },
      {
        question: 'Can it be added to an older building?',
        answer:
          'Often, yes, if the structure can take the fixings. A structural check comes first.',
      },
      {
        question: 'Can curtain walling include an entrance door?',
        answer:
          'Yes. Single, double and automatic doors fit into the same frame grid.',
      },
    ],
    relatedServices: ['aluminium-shopfronts', 'aluminium-windows', 'aluminium-doors', 'glass-replacement'],
  },

  {
    slug: 'glass-shopfronts',
    name: 'Glass Shopfronts',
    shortDescription:
      'Frameless and minimal-frame glass fronts for boutiques, salons, galleries and showrooms that want as little metal on view as possible.',
    heroImage: 'service-glass-shopfront.webp',
    primaryKeyword: 'glass shopfronts',
    metaTitle: 'Frameless Glass Shopfronts',
    metaDescription:
      'Frameless glass shopfronts and doors for boutiques, salons and showrooms. Thick toughened glass, patch fittings, minimal frames. Call 07597 630000.',
    description: `A frameless glass front shows off the inside of the shop with almost nothing in the way. There are no thick frames, only large panes of thick toughened glass held in slim channels top and bottom and joined with clear silicone. It is a popular choice for salons, jewellers, opticians, galleries and fashion shops.

**How it is built**

Each fixed pane sits in a channel at the floor and ceiling. Neighbouring panes are joined edge to edge with clear silicone, and where the glass is tall, glass fins can be set behind the joints to stiffen it. The door is usually a single pane of glass on patch fittings (metal clamps at the corners) with a floor spring that closes it.

**Doors**

Frameless glass doors can be single or double, with pull handles in steel, brass or black. Floor springs can be set to hold the door open in warm weather. Locks are fitted into the bottom patch so they are almost invisible.

**Safety**

All the glass is toughened safety glass, usually 10 or 12 mm thick for fronts and doors. Large clear panes must carry markings at eye level so people do not walk into them. Logos or frosted bands do the job and can double as branding.

**Security**

Toughened glass is strong, but if security matters at night, pair the front with an internal shutter or choose laminated toughened glass, which stays in place when broken.

**Heat**

Single-glazed frameless fronts lose more heat than framed double glazing. That suits shops where the door is often open, but if you heat the shop all year, ask us about double-glazed frameless options or a framed front with very slim sightlines.

**Planning**

A frameless front changes the look of the building and usually needs planning permission. In conservation areas, councils may prefer a traditional design. We advise at survey.`,
    benefits: [
      {
        title: 'Nothing blocking the view',
        description:
          'Large panes and hidden fixings put your shop on full show.',
      },
      {
        title: 'A premium look',
        description:
          'Clean, simple glass suits boutiques, salons and high-end retail.',
      },
      {
        title: 'Thick safety glass',
        description:
          'Every pane is toughened and sized for its height and position.',
      },
      {
        title: 'Glass doors to match',
        description:
          'Patch-fitted doors with floor springs keep the look consistent across the front.',
      },
    ],
    faqs: [
      {
        question: 'Are frameless glass fronts secure?',
        answer:
          'Thick toughened glass is very strong, but for night-time security we recommend an internal shutter or laminated toughened glass.',
      },
      {
        question: 'Can a glass shopfront keep the heat in?',
        answer:
          'Single glazing loses more heat than double. Double-glazed options exist, or we can suggest a slim framed front if heating costs matter most.',
      },
      {
        question: 'How do I clean frameless glass?',
        answer:
          'Like any window: squeegee and mild detergent. Avoid abrasive pads on the silicone joints.',
      },
      {
        question: 'What if a pane breaks?',
        answer:
          'We make the opening safe, then measure and order a new toughened pane to the exact size.',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Design chat',
        description:
          'Tell us the look you want, how the door should open and any branding for the glass.',
      },
      {
        step: 2,
        title: 'Survey',
        description:
          'We measure precisely and check the floor and ceiling can take the channels and door spring.',
      },
      {
        step: 3,
        title: 'Drawing and price',
        description:
          'You get a drawing and fixed price for the glass, fittings and door.',
      },
      {
        step: 4,
        title: 'Install',
        description:
          'Channels are fixed, panes lifted in, joints sealed and the door hung and adjusted.',
      },
    ],
    pricingGuide: {
      heading: 'Glass shopfront prices',
      content:
        'Glass size and door type are the main cost drivers. Typical figures are below.',
      ranges: [
        { item: 'Frameless front, one unit', price: '£3,500 – £7,000' },
        { item: 'Glass door on patch fittings', price: '£1,500 – £3,000' },
        { item: 'Point-fixed glass, per m²', price: '£400 – £800' },
        { item: 'Safety markings or frosted bands', price: '£150 – £400' },
      ],
      note: 'Prices are before VAT. We confirm the exact figure in writing after the survey.',
    },
    peopleAlsoAsk: [
      {
        question: 'Glass or aluminium shopfront: which should I choose?',
        answer:
          'Glass gives the cleanest look; aluminium gives better insulation, more locking options and lower cost on big openings.',
      },
      {
        question: 'Does every shop suit a frameless front?',
        answer:
          'Not always. Very exposed sites, shops with heavy stock to protect or tight budgets may be better with a framed front.',
      },
      {
        question: 'How thick is frameless shopfront glass?',
        answer:
          'Usually 10 to 12 mm toughened glass, sometimes thicker for tall panes.',
      },
      {
        question: 'Can logos be added to the glass?',
        answer:
          'Yes. Frosted or printed vinyl can carry your branding and also act as the safety marking large panes need.',
      },
    ],
    relatedServices: ['aluminium-shopfronts', 'glass-replacement', 'automatic-doors', 'shopfront-repairs'],
  },
];
