export interface CityFaq {
  question: string;
  answer: string;
}

/**
 * How far a city is from our Exhall base, which decides what we honestly offer
 * there:
 *   local    – on our doorstep; installs, repairs and emergency call-outs
 *   regional – within the repair area (about 100 miles of Birmingham)
 *   project  – planned installation work by arrangement only; too far for
 *              repairs or emergencies to be a fair promise
 */
export type Reach = 'local' | 'regional' | 'project';

export interface City {
  slug: string;
  name: string;
  region: string;
  reach: Reach;
  areas: string[];
  postcodeAreas: string[];
  description: string;
  faqs: CityFaq[];
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
}

/*
 * Written for this site alone. No customer quotes appear here: none have been
 * supplied, and invented ones are both misleading and unlawful. Run
 * `npm run gate` after a build to check nothing overlaps another site.
 */
export const cities: City[] = [
  {
    slug: 'london',
    name: 'London',
    region: 'Greater London',
    reach: 'project',
    areas: ['Brixton', 'Canary Wharf', 'Covent Garden', 'Croydon', 'Hackney', 'Islington', 'Oxford Street', 'Peckham', 'Shoreditch', 'Stratford'],
    postcodeAreas: ['E1', 'E14', 'E15', 'EC1', 'EC2', 'N1', 'SE1', 'SE15', 'SW1', 'W1', 'WC2', 'CR0'],
    primaryKeyword: 'shopfronts London',
    metaTitle: 'Shopfront Installation Projects in London',
    metaDescription:
      'Planned shopfront, shutter and door installations in London from our Midlands workshop. Drawings for borough planning, out-of-hours fitting. 07597 630000.',
    description: `London is a long way from our base in Exhall, so we treat work there as planned projects rather than call-outs. That suits most London shopfront jobs anyway: they need drawings, borough approval and careful timing long before anyone picks up a drill.

Every London borough runs its own planning department, and many publish their own shopfront design guidance. Westminster, Camden, Islington and Hackney are known for detailed rules on fascia depth, stallrisers, shutter types and signage. Expect a solid external shutter to be refused on many high streets; perforated, lattice or internal shutters are the usual compromise.

Getting materials to the door is half the job. Red routes, loading bays with strict time limits, the Congestion Charge and the Ultra Low Emission Zone all shape when and how we deliver. Large glass panes may need a lifting team and a pavement licence. We plan this into the programme and the price, so it is not a surprise on the day.

Many London units trade from early morning until late at night, so we often fit outside opening hours or in a single long day, leaving the premises locked and secure before we go. For managed estates such as Canary Wharf or larger shopping centres, the landlord's own design code and permit rules apply on top of planning.

For repairs, breakdowns and emergencies in London, a local firm will reach you faster than we can. We are happy to quote new fronts, shutters and doors where you want a team that does the whole job from survey to handover.`,
    faqs: [
      {
        question: 'Can you fit a shopfront in London if you are based in the Midlands?',
        answer:
          'Yes, as a planned job. We survey, prepare drawings, book the fitting days and bring everything in one or two deliveries. We do not offer emergency or repair call-outs in London because a local firm will always be quicker.',
      },
      {
        question: 'Which London councils are strictest about shutters?',
        answer:
          'Central boroughs such as Westminster, Camden and the City of London, and many conservation areas in Islington and Hackney, discourage solid external shutters. Perforated, lattice or internal shutters are more likely to be approved.',
      },
      {
        question: 'Do you fit at night to avoid closing the shop?',
        answer:
          'Where the borough allows working hours that suit, yes. We plan noisy work for permitted times and leave the shop secure at the end of every shift.',
      },
    ],
  },
  {
    slug: 'birmingham',
    name: 'Birmingham',
    region: 'West Midlands',
    reach: 'local',
    areas: ['Bournville', 'Broad Street', 'Bullring', 'Digbeth', 'Erdington', 'Handsworth', 'Harborne', 'Jewellery Quarter', 'Solihull', 'Sutton Coldfield'],
    postcodeAreas: ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B11', 'B13', 'B15', 'B72', 'B91'],
    primaryKeyword: 'shopfronts Birmingham',
    metaTitle: 'Shopfronts and Shutters in Birmingham',
    metaDescription:
      'Shopfronts, roller shutters, security doors and repairs across Birmingham, from the city centre to Sutton Coldfield and Solihull. Call 07597 630000.',
    description: `Birmingham is our home patch along with Coventry. From our yard in Exhall we can reach most of the city in well under an hour, which is why so much of our repair and shutter work is here, as well as new fronts.

The city's high streets are a mix of Victorian parades, 1960s precincts and new developments. Soho Road in Handsworth, Stratford Road, Ladypool Road and Alum Rock Road are lined with busy independent shops where the front and shutter take a battering every day. We see a lot of worn springs, bent laths and dropped doors on these streets, and many fronts that are better repaired than replaced.

Birmingham City Council has conservation areas that matter for shopfronts, including the Jewellery Quarter, parts of Digbeth and Deritend, and several suburban centres such as Harborne and Moseley. In those areas, solid external shutters and oversized fascias are usually refused. Elsewhere the rules are lighter, but a change to how the front looks normally still needs planning permission.

The city centre sits inside the Clean Air Zone and has busy loading restrictions, so we time deliveries carefully. Sutton Coldfield falls under Birmingham City Council, but Solihull has its own council with its own planning team, which can matter if your shop sits near the boundary.

For emergencies, such as a smashed window or a shutter stuck open overnight, Birmingham is one of the areas where we can usually reach you quickly. Call the emergency line and we will tell you an honest arrival time.`,
    faqs: [
      {
        question: 'Do I need planning permission for a shutter on my Birmingham shop?',
        answer:
          'Often, yes. Birmingham City Council generally expects external shutters on shopfronts to need planning permission, and in conservation areas such as the Jewellery Quarter it prefers perforated or internal shutters. We check your address during the survey.',
      },
      {
        question: 'How quickly can you get to a Birmingham shop in an emergency?',
        answer:
          'Birmingham is close to our base, so most of the city is a short drive. Ring the emergency line and we will give you a realistic arrival time based on where you are and the time of day.',
      },
      {
        question: 'My shop is in Solihull. Is that the same council as Birmingham?',
        answer:
          'No. Solihull Metropolitan Borough Council handles planning there, including Shirley and Knowle. Sutton Coldfield, however, is part of Birmingham City Council.',
      },
    ],
  },
  {
    slug: 'manchester',
    name: 'Manchester',
    region: 'Greater Manchester',
    reach: 'regional',
    areas: ['Ancoats', 'Castlefield', 'Chorlton', 'Deansgate', 'Didsbury', 'Northern Quarter', 'Piccadilly', 'Salford Quays', 'Spinningfields', 'Trafford Centre'],
    postcodeAreas: ['M1', 'M2', 'M3', 'M4', 'M5', 'M12', 'M14', 'M15', 'M16', 'M21'],
    primaryKeyword: 'shopfronts Manchester',
    metaTitle: 'Shopfronts and Shutters in Manchester',
    metaDescription:
      'New shopfronts, shutters and commercial doors in Manchester and Salford, plus planned repair visits. Drawings for council planning. Call 07597 630000.',
    description: `Manchester sits at the northern edge of the area we cover for repairs. New fronts, shutters and doors are planned jobs here, and we can book repair visits too, but for a same-night emergency a firm based in the city will reach you sooner.

The city centre is a patchwork of very different streets. The Northern Quarter's independent shops, bars and cafés sit in converted warehouses, and parts of it fall inside a conservation area, so frontages there are expected to suit the old buildings. Deansgate and Spinningfields lean towards large glazed fronts for national brands and restaurants, often inside a landlord's design rules.

Greater Manchester is several councils, not one. Salford Quays belongs to Salford City Council, the Trafford Centre to Trafford Council, and Didsbury and Chorlton to Manchester City Council. Each runs its own planning process, so the first thing we confirm is exactly who your application goes to.

Wet weather is part of life on the western side of the Pennines. That makes drainage at thresholds, good seals around frames and stainless or coated fixings more important than usual, especially on exposed corners and bi-fold fronts that open onto the street.

Our usual approach is a survey visit, drawings and a fixed price, then a fitting date planned around your trading. Large or awkward jobs are delivered and fitted in one trip where we can, so you are not waiting on a second visit.`,
    faqs: [
      {
        question: 'Can you do emergency repairs in Manchester?',
        answer:
          'Manchester is at the edge of our repair area. We can book repair visits, but for a same-night emergency a local firm will usually get there faster. New installations are no problem.',
      },
      {
        question: 'Is Salford Quays covered by Manchester City Council?',
        answer:
          'No. Salford Quays is in Salford, so planning goes to Salford City Council. The Trafford Centre is Trafford Council. We confirm the right council at survey.',
      },
      {
        question: 'What shutters are allowed in the Northern Quarter?',
        answer:
          'Where a building is in a conservation area, the council usually prefers internal or open-mesh shutters over solid ones. We check the specific street before quoting.',
      },
    ],
  },
  {
    slug: 'leeds',
    name: 'Leeds',
    region: 'West Yorkshire',
    reach: 'project',
    areas: ['Chapel Allerton', 'Garforth', 'Headingley', 'Holbeck', 'Horsforth', 'Kirkgate Market', 'Leeds City Centre', 'Meanwood', 'Morley', 'Roundhay'],
    postcodeAreas: ['LS1', 'LS2', 'LS3', 'LS6', 'LS7', 'LS8', 'LS10', 'LS11', 'LS13', 'LS26', 'LS27'],
    primaryKeyword: 'shopfronts Leeds',
    metaTitle: 'Shopfront Installation Projects in Leeds',
    metaDescription:
      'Planned shopfront, shutter and door installations in Leeds, with drawings for planning and careful work on historic arcades. Call 07597 630000.',
    description: `Leeds is beyond our regular repair area, so we take on work there as planned installation projects: new shopfronts, shutters, security doors and automatic entrances, surveyed, drawn and fitted on booked dates.

The city centre has some of the finest shopping arcades in the country, including the Victoria Quarter and the streets around Kirkgate Market. Many of these buildings are listed, and any change to a listed front, even a new sign or lock, can need listed building consent as well as planning permission. Timber, painted finishes and traditional proportions are often expected.

Outside the centre, Leeds City Council covers a huge area, from Headingley and Chapel Allerton to Morley, Garforth and Horsforth. Many of these district high streets are ordinary parades where a modern aluminium front is perfectly acceptable, as long as the design suits the street.

Holbeck and the South Bank are changing fast, with new-build commercial units being fitted out for the first time. These are often straightforward jobs: a clean opening, a landlord's specification and no old front to remove.

For breakdowns and urgent call-outs in Leeds, a West Yorkshire firm will reach you faster than we can. For a new front, we offer one team handling the survey, design, planning drawings and fitting.`,
    faqs: [
      {
        question: 'Do you cover shutter repairs in Leeds?',
        answer:
          'Leeds is outside our regular repair area, so we do not promise repair or emergency visits there. We do take on new installations as planned projects.',
      },
      {
        question: 'Is consent needed to change a shopfront in a Leeds arcade?',
        answer:
          'Very often. Many arcade buildings are listed, so changes can need listed building consent as well as planning permission. The arcade landlord may also have design rules.',
      },
      {
        question: 'Is Morley part of Leeds for planning?',
        answer:
          'Yes. Morley, Garforth, Horsforth and Otley all come under Leeds City Council.',
      },
    ],
  },
  {
    slug: 'liverpool',
    name: 'Liverpool',
    region: 'Merseyside',
    reach: 'regional',
    areas: ['Allerton', 'Baltic Triangle', 'Bold Street', 'Bootle', 'Crosby', 'Kensington', 'Kirkby', 'Liverpool ONE', 'Ropewalks', 'Wavertree'],
    postcodeAreas: ['L1', 'L2', 'L3', 'L4', 'L6', 'L7', 'L8', 'L15', 'L18', 'L20', 'L22', 'L32'],
    primaryKeyword: 'shopfronts Liverpool',
    metaTitle: 'Shopfronts and Shutters in Liverpool',
    metaDescription:
      'Shopfronts, shutters and doors for Liverpool businesses, from Bold Street to Bootle. Planned installs and booked repair visits. Call 07597 630000.',
    description: `Liverpool is towards the far edge of the area where we offer repairs. We plan new installations here and can book repair visits, but for an overnight emergency a Merseyside firm will reach you first.

Bold Street and the Ropewalks are full of independent cafés, restaurants and shops in older buildings, and much of this area is a conservation area. The council tends to want fronts that respect the original shape of the building, with sensible fascia sizes and shutters that do not hide the whole frontage at night.

Liverpool ONE is a managed estate with its own landlord's rules, and tenants there need approvals from the estate as well as the usual consents. The Baltic Triangle has a growing number of creative businesses in converted warehouses, where large openings and industrial-style roller doors are common.

Merseyside is more than one council. Bootle and Crosby belong to Sefton, Kirkby belongs to Knowsley, and Allerton, Wavertree and Kensington are Liverpool City Council. Planning applications must go to the right one.

Being close to the coast means wind-driven rain is common, so we take care with seals, drainage and fixings, particularly on corner units and exposed parades.`,
    faqs: [
      {
        question: 'Will you come out to repair a shutter in Liverpool?',
        answer:
          'We can book repair visits in Liverpool, but it is near the limit of our repair area. For a shutter stuck open tonight, a local firm is the faster option.',
      },
      {
        question: 'Which council covers Bootle and Kirkby?',
        answer:
          'Bootle is in Sefton and Kirkby is in Knowsley. Both have their own planning departments, separate from Liverpool City Council.',
      },
      {
        question: 'Can I have a solid shutter on Bold Street?',
        answer:
          'Bold Street is in a conservation area, so a solid external shutter is unlikely to be approved. Internal or open-mesh shutters are more realistic.',
      },
    ],
  },
  {
    slug: 'bristol',
    name: 'Bristol',
    region: 'South West England',
    reach: 'regional',
    areas: ['Bedminster', 'Broadmead', 'Clifton', 'Fishponds', 'Harbourside', 'Keynsham', 'Montpelier', 'Redland', 'Stokes Croft', 'Westbury-on-Trym'],
    postcodeAreas: ['BS1', 'BS2', 'BS3', 'BS4', 'BS6', 'BS7', 'BS8', 'BS9', 'BS13', 'BS15', 'BS30'],
    primaryKeyword: 'shopfronts Bristol',
    metaTitle: 'Shopfronts and Shutters in Bristol',
    metaDescription:
      'Shopfronts, roller shutters and doors for Bristol shops and cafés, from Clifton to Bedminster. Planned installs and repair visits. Call 07597 630000.',
    description: `Bristol is a straight run down the M5 from us and sits at the southern edge of our repair area. New fronts and shutters are planned jobs, and repair visits can be booked, though a local firm will be quicker for an overnight emergency.

Clifton Village, with its Georgian terraces and listed buildings, is one of the most sensitive shopping areas in the region. Painted timber fronts, traditional lettering and internal shutters are the norm there, and any change usually needs both planning permission and listed building consent.

Stokes Croft, Gloucester Road and North Street in Bedminster have a very different feel: long lines of independent shops, cafés and bars with a strong local character. Shutters on these streets are often painted with murals, and the council pays attention to how a closed shopfront looks at night as well as during the day.

Broadmead and Cabot Circus are the main shopping centre areas, with national brands and managed malls that have their own landlord rules. Harbourside is mostly restaurants and bars in converted dock buildings, where bi-fold fronts that open onto the waterside work well.

Keynsham belongs to Bath and North East Somerset Council, not Bristol, so check which authority covers your premises before applying for consent.`,
    faqs: [
      {
        question: 'Do you cover Bristol for shutter repairs?',
        answer:
          'Bristol is at the edge of our repair area. We can book repair visits, but for urgent same-night help a Bristol-based firm will be faster.',
      },
      {
        question: 'Can I fit a modern front to a listed building in Clifton?',
        answer:
          'It is difficult. Listed buildings in Clifton usually need traditional designs and materials, and any change needs listed building consent. We can advise on what is likely to be accepted.',
      },
      {
        question: 'Is Keynsham covered by Bristol City Council?',
        answer:
          'No. Keynsham is in Bath and North East Somerset, which has its own planning department.',
      },
    ],
  },
  {
    slug: 'sheffield',
    name: 'Sheffield',
    region: 'South Yorkshire',
    reach: 'regional',
    areas: ['Attercliffe', 'Broomhill', 'Chapeltown', 'Crystal Peaks', 'Ecclesall Road', 'Fargate', 'Hillsborough', 'Kelham Island', 'Meadowhall', 'Woodseats'],
    postcodeAreas: ['S1', 'S2', 'S3', 'S5', 'S6', 'S7', 'S8', 'S10', 'S11', 'S13', 'S35'],
    primaryKeyword: 'shopfronts Sheffield',
    metaTitle: 'Shopfronts and Shutters in Sheffield',
    metaDescription:
      'Shopfronts, shutters, industrial doors and repairs in Sheffield, from Fargate to Attercliffe. Planned installs and booked repairs. Call 07597 630000.',
    description: `Sheffield is reachable up the M1 and falls inside our repair area, though at the far end of it. We plan new installations here and book repair visits; for an overnight emergency, ring us and we will be honest about whether we can get there in time.

The city has a real mix of commercial work. Fargate and the city centre have high-street retail, Ecclesall Road and Broomhill are lined with cafés, restaurants and independent shops, and Attercliffe and the Don Valley still have plenty of industrial units that need heavy roller doors and steel security doors.

Kelham Island is a former industrial area now full of bars, breweries and flats, with a conservation area covering much of it. Fronts there are often fitted into old workshop openings, so the design needs to respect the brick and steel of the original buildings.

Meadowhall and Crystal Peaks are managed shopping centres with their own landlord specifications. Tenants need landlord approval for shopfront designs and fitting times, alongside any council consents.

Sheffield's hills mean deliveries to some streets need careful planning, and steep thresholds can make level access tricky. We check slopes and drainage during the survey so doors open freely and water runs away from the entrance.`,
    faqs: [
      {
        question: 'Can you fit an industrial roller door in Attercliffe?',
        answer:
          'Yes. We supply and fit insulated and solid industrial doors for warehouses and workshops, with motors and safety edges as needed.',
      },
      {
        question: 'Do Meadowhall units have their own shopfront rules?',
        answer:
          'Yes. Managed centres such as Meadowhall set their own design and fitting rules, and tenants need landlord approval before work starts.',
      },
      {
        question: 'Is level access possible on a sloping Sheffield street?',
        answer:
          'Often, with a ramped threshold, a recessed entrance or a carefully set door height. We measure the slope at survey and suggest the best option.',
      },
    ],
  },
  {
    slug: 'glasgow',
    name: 'Glasgow',
    region: 'Scotland',
    reach: 'project',
    areas: ['Buchanan Street', 'Byres Road', 'Finnieston', 'Govan', 'Merchant City', 'Parkhead', 'Partick', 'Shawlands', 'Springburn', 'West End'],
    postcodeAreas: ['G1', 'G2', 'G3', 'G4', 'G11', 'G12', 'G41', 'G42', 'G43', 'G51', 'G69'],
    primaryKeyword: 'shopfronts Glasgow',
    metaTitle: 'Shopfront Projects in Glasgow',
    metaDescription:
      'Larger shopfront and shutter installation projects in Glasgow by arrangement, with drawings for Scottish planning. Call 07597 630000 to discuss.',
    description: `Glasgow is a long way outside our usual working area, which centres on the Midlands and England. We consider larger installation projects in Glasgow by arrangement, such as several units at once or a full fit-out, but we cannot offer repairs or emergency call-outs there.

Scotland has its own planning system, run by Glasgow City Council for the city, with listed buildings overseen by Historic Environment Scotland. Many of the city centre's Victorian commercial buildings are listed or sit in conservation areas, including large parts of the Merchant City and the West End.

The Merchant City and Buchanan Street area have grand sandstone buildings where shopfronts are expected to fit within the original stone openings. Byres Road and Finnieston in the West End have more independent cafés and bars, while Shawlands and Partick have busy local high streets.

Rain and wind off the Clyde mean seals and drainage need close attention, and shutters on exposed corners take a real beating from the weather.

If you have a Glasgow project in mind, get in touch with drawings or photos and we will tell you honestly whether it makes sense for us to take it on, or whether a Scottish firm would serve you better.`,
    faqs: [
      {
        question: 'Do you cover Glasgow for shutter repairs?',
        answer:
          'No. Glasgow is too far from our Midlands base for repairs or emergencies to be a fair promise. We consider larger installation projects by arrangement only.',
      },
      {
        question: 'Is planning different in Scotland?',
        answer:
          'Yes. Scotland has its own planning law and listed building system. Glasgow City Council handles applications, with Historic Environment Scotland involved for listed buildings.',
      },
      {
        question: 'What kind of Glasgow projects will you take on?',
        answer:
          'Usually multi-unit or larger fit-outs where a single planned trip makes sense. Send us details and we will give you a straight answer.',
      },
    ],
  },
  {
    slug: 'cardiff',
    name: 'Cardiff',
    region: 'Wales',
    reach: 'project',
    areas: ['Canton', 'Cardiff Bay', 'Cardiff Gate', 'Cathays', 'Llandaff', 'Penarth', 'Pontcanna', 'Roath', 'St Mary Street', 'Whitchurch'],
    postcodeAreas: ['CF3', 'CF5', 'CF10', 'CF11', 'CF14', 'CF15', 'CF23', 'CF24', 'CF64'],
    primaryKeyword: 'shopfronts Cardiff',
    metaTitle: 'Shopfront Installation Projects in Cardiff',
    metaDescription:
      'Planned shopfront, shutter and door installations in Cardiff, with drawings for Welsh planning and Cadw-listed buildings. Call 07597 630000.',
    description: `Cardiff is outside our regular repair area, so we take on work there as planned installation projects: new fronts, shutters and doors, surveyed and fitted on agreed dates.

Wales has its own planning policy, and Cardiff Council handles applications for the city. Listed buildings come under Cadw, the Welsh Government's historic environment service. The Victorian and Edwardian arcades around St Mary Street and the Hayes are among the most recognisable in Britain, and changes there are tightly controlled.

Away from the centre, Albany Road in Roath, Cowbridge Road in Canton and the shops in Pontcanna are busy local high streets, mostly independent businesses. Cardiff Bay has restaurants and leisure units in newer developments, often with a landlord's design code.

Penarth is a separate authority, the Vale of Glamorgan Council, which matters for consents if your premises sit just outside the city boundary.

For breakdowns and urgent jobs in Cardiff, a South Wales firm will reach you much faster. For a new shopfront or a set of shutters planned in advance, we can provide one team from survey to handover.`,
    faqs: [
      {
        question: 'Do you offer emergency repairs in Cardiff?',
        answer:
          'No. Cardiff is outside our repair area. We take on planned installation projects there by arrangement.',
      },
      {
        question: 'Who handles listed building consent in Cardiff?',
        answer:
          'Cardiff Council processes the application, and Cadw, the Welsh historic environment service, is involved for listed buildings.',
      },
      {
        question: 'Is Penarth covered by Cardiff Council?',
        answer:
          'No. Penarth is in the Vale of Glamorgan, which has its own planning department.',
      },
    ],
  },
  {
    slug: 'newcastle',
    name: 'Newcastle',
    region: 'Tyne and Wear',
    reach: 'project',
    areas: ['Byker', 'Eldon Square', 'Fenham', 'Gateshead Quays', 'Gosforth', 'Grainger Town', 'Heaton', 'Jesmond', 'Ouseburn', 'Wallsend'],
    postcodeAreas: ['NE1', 'NE2', 'NE3', 'NE4', 'NE6', 'NE7', 'NE8', 'NE10', 'NE12', 'NE28'],
    primaryKeyword: 'shopfronts Newcastle',
    metaTitle: 'Shopfront Installation Projects in Newcastle',
    metaDescription:
      'Planned shopfront and shutter installations in Newcastle and Gateshead, including listed Grainger Town buildings. Call 07597 630000.',
    description: `Newcastle is well beyond our repair area, so we handle work there as planned installation projects rather than call-outs.

Grainger Town, the heart of the city centre, is built from classical stone streets laid out in the 1830s, and many of its buildings are listed. Grey Street, Grainger Street and Clayton Street are protected, and new shopfronts there are expected to suit the original stonework, with traditional proportions and discreet signs.

Jesmond's Osborne Road and Gosforth High Street are popular for bars, restaurants and independent shops. The Ouseburn Valley is home to creative businesses in old industrial buildings, where large doors and simple steel-framed glazing fit the character.

Gateshead is a separate council across the river, and Wallsend falls under North Tyneside. Planning applications must go to the correct authority, which we confirm during the survey.

For repairs or emergencies, a North East firm will reach you much faster than we can. For a new front planned in advance, we offer a single team that handles drawings, consents and fitting.`,
    faqs: [
      {
        question: 'Can you repair shutters in Newcastle?',
        answer:
          'No. Newcastle is outside our repair area. We take on planned installations there by arrangement.',
      },
      {
        question: 'Are Grainger Town buildings listed?',
        answer:
          'Many are. Changes to a listed shopfront need listed building consent, and the council expects traditional designs in Grainger Town.',
      },
      {
        question: 'Which council covers Gateshead Quays?',
        answer:
          'Gateshead Council, which is separate from Newcastle City Council.',
      },
    ],
  },
  {
    slug: 'nottingham',
    name: 'Nottingham',
    region: 'East Midlands',
    reach: 'regional',
    areas: ['Arnold', 'Beeston', 'Broadmarsh', 'Bulwell', 'Carlton', 'Hockley', 'Lace Market', 'Long Eaton', 'Sherwood', 'West Bridgford'],
    postcodeAreas: ['NG1', 'NG2', 'NG3', 'NG5', 'NG6', 'NG7', 'NG8', 'NG9', 'NG10', 'NG17'],
    primaryKeyword: 'shopfronts Nottingham',
    metaTitle: 'Shopfronts and Shutters in Nottingham',
    metaDescription:
      'Shopfronts, roller shutters, doors and repairs in Nottingham, from Hockley to West Bridgford. Installs and booked repair visits. Call 07597 630000.',
    description: `Nottingham is about an hour up the M1 and A52 from our base, so it sits comfortably within our repair area. We fit new shopfronts and shutters here and book repair visits, and we can often help with urgent problems too.

The Lace Market and Hockley form one of the most characterful parts of the East Midlands: tall red-brick warehouses converted into bars, boutiques, studios and flats. Much of the area is a conservation area, so fronts need to respect the old buildings, and the council tends to prefer internal shutters to solid external ones.

The Broadmarsh area is being redeveloped, and the city centre around Old Market Square has many national brands alongside independent shops.

The Nottingham area covers several councils. West Bridgford is in Rushcliffe, Beeston in Broxtowe, and Arnold and Carlton in Gedling. Long Eaton is across the county boundary in Derbyshire, under Erewash. Each has its own planning team.

Sherwood, Bulwell and Mapperley have busy local high streets with takeaways, salons and convenience shops, where tough, simple fronts and dependable shutters matter more than fancy design.`,
    faqs: [
      {
        question: 'Do you cover Nottingham for shutter repairs?',
        answer:
          'Yes. Nottingham is within our repair area. Call us with the fault and we will book a visit or tell you how soon we can get there.',
      },
      {
        question: 'Is West Bridgford part of Nottingham City Council?',
        answer:
          'No. West Bridgford is in Rushcliffe Borough Council, Beeston is in Broxtowe and Arnold is in Gedling.',
      },
      {
        question: 'Will I get permission for a shutter in the Lace Market?',
        answer:
          'Probably only an internal or open-mesh one. The Lace Market is a conservation area, and the council resists solid external shutters there.',
      },
    ],
  },
  {
    slug: 'leicester',
    name: 'Leicester',
    region: 'East Midlands',
    reach: 'local',
    areas: ['Belgrave', 'Birstall', 'Evington', 'Golden Mile', 'Highcross Quarter', 'Hinckley Road', 'Humberstone Gate', 'Narborough Road', 'Oadby', 'Wigston'],
    postcodeAreas: ['LE1', 'LE2', 'LE3', 'LE4', 'LE5', 'LE7', 'LE8', 'LE10', 'LE18', 'LE19'],
    primaryKeyword: 'shopfronts Leicester',
    metaTitle: 'Shopfronts and Shutters in Leicester',
    metaDescription:
      'Shopfronts, shutters, doors and repairs in Leicester, from the Golden Mile to Narborough Road. Close to our base for fast visits. Call 07597 630000.',
    description: `Leicester is a short trip along the M69 from our base in Exhall, so it is one of the cities where we offer the full service: new shopfronts, shutters, doors, repairs and emergency call-outs.

Belgrave Road, known as the Golden Mile, is famous for jewellers, sari shops and sweet centres. Shops here hold valuable stock and trade long hours, so laminated glass, strong shutters and good locks are standard requests. Fronts are often wide and fully glazed to show off window displays.

Narborough Road is one of the most varied high streets in the country, lined with independent shops and restaurants run by many different communities. It is a street of hard-working fronts and shutters, and repairs are as common as new installations.

The city centre has the Highcross shopping centre, and the older streets near the Cathedral and the Market include conservation areas, where the council expects shopfronts to suit the building.

Oadby and Wigston have their own borough council, separate from Leicester City Council, and Birstall falls under Charnwood. If your shop is near the city boundary, we check which council handles planning before drawings go in.`,
    faqs: [
      {
        question: 'Can you reach a Leicester shop quickly in an emergency?',
        answer:
          'Leicester is close to our base, so we can usually get there quickly. Call the emergency line and we will give you a realistic arrival time.',
      },
      {
        question: 'What security is best for a jeweller on the Golden Mile?',
        answer:
          'A combination usually works best: laminated glass, a rated security door at the back, and a strong roller shutter or internal grille. Your insurer may set specific requirements.',
      },
      {
        question: 'Is Oadby covered by Leicester City Council?',
        answer:
          'No. Oadby and Wigston have their own borough council with a separate planning department.',
      },
    ],
  },
  {
    slug: 'edinburgh',
    name: 'Edinburgh',
    region: 'Scotland',
    reach: 'project',
    areas: ['Bruntsfield', 'Corstorphine', 'Gorgie', 'Leith', 'Morningside', 'New Town', 'Newington', 'Old Town', 'Portobello', 'Stockbridge'],
    postcodeAreas: ['EH1', 'EH2', 'EH3', 'EH4', 'EH6', 'EH7', 'EH9', 'EH10', 'EH11', 'EH12', 'EH15'],
    primaryKeyword: 'shopfronts Edinburgh',
    metaTitle: 'Shopfront Projects in Edinburgh',
    metaDescription:
      'Larger shopfront installation projects in Edinburgh by arrangement, with drawings for World Heritage Site planning. Call 07597 630000 to discuss.',
    description: `Edinburgh is far outside our usual working area in the Midlands and England. We consider larger installation projects there by arrangement, but we do not offer repairs or emergency call-outs.

The Old Town and New Town together form a World Heritage Site, and a large share of the buildings are listed. The City of Edinburgh Council has some of the most detailed shopfront guidance in Britain, with strong preferences for traditional timber fronts, painted signs and internal security. Any work here needs careful drawings and usually several consents.

Outside the centre, Leith, Stockbridge, Bruntsfield and Morningside have lively local high streets with cafés, delis and independent shops, many still in Victorian and Georgian buildings with conservation area controls.

Scotland has its own planning and listed building system, with Historic Environment Scotland involved for listed properties.

If you are planning a significant project in Edinburgh, send us the details. We will tell you honestly whether we are the right firm or whether a Scottish specialist in heritage shopfronts would suit you better.`,
    faqs: [
      {
        question: 'Do you do shopfront repairs in Edinburgh?',
        answer:
          'No. Edinburgh is too far from our base for repair work. We consider larger installation projects by arrangement only.',
      },
      {
        question: 'Why is shopfront planning so strict in central Edinburgh?',
        answer:
          'The Old and New Towns are a World Heritage Site, with many listed buildings. The council protects their character with detailed shopfront rules.',
      },
      {
        question: 'Are external shutters allowed in the New Town?',
        answer:
          'Rarely. The council strongly prefers internal security measures behind the glass in the historic centre.',
      },
    ],
  },
  {
    slug: 'southampton',
    name: 'Southampton',
    region: 'South East England',
    reach: 'project',
    areas: ['Above Bar Street', 'Bedford Place', 'Bitterne', 'Eastleigh', 'Hedge End', 'Ocean Village', 'Portswood', 'Shirley', 'Totton', 'Westquay'],
    postcodeAreas: ['SO14', 'SO15', 'SO16', 'SO17', 'SO18', 'SO19', 'SO30', 'SO40', 'SO50'],
    primaryKeyword: 'shopfronts Southampton',
    metaTitle: 'Shopfront Installation Projects in Southampton',
    metaDescription:
      'Planned shopfront, shutter and door installations in Southampton and nearby towns, with planning drawings included. Call 07597 630000.',
    description: `Southampton is beyond our repair area, so we offer planned installation projects there: new shopfronts, shutters, doors and automatic entrances, surveyed and fitted on booked dates.

The city centre has Westquay and Above Bar Street for national retail, while Bedford Place and London Road have independent bars, restaurants and shops. Portswood, near the university, and Shirley High Street are busy local centres with plenty of takeaways, salons and convenience stores.

Parts of the old town around the medieval walls and Bargate are protected, and Southampton City Council expects shopfronts in those areas to respect the historic setting.

Several nearby towns have their own councils. Eastleigh and Hedge End come under Eastleigh Borough Council, and Totton is in the New Forest District. The correct council for any consent is something we confirm at survey.

Being near the sea, salt air can attack cheap fixings and poorly finished metal. We use suitable fixings and quality powder-coat finishes so the front keeps its looks.`,
    faqs: [
      {
        question: 'Do you repair shutters in Southampton?',
        answer:
          'No. Southampton is outside our repair area. We take on planned installations there by arrangement.',
      },
      {
        question: 'Is Eastleigh part of Southampton City Council?',
        answer:
          'No. Eastleigh and Hedge End are in Eastleigh Borough, and Totton is in the New Forest District.',
      },
      {
        question: 'Does sea air damage aluminium shopfronts?',
        answer:
          'Good powder coating and the right fixings resist it well. Washing the frames a few times a year helps keep salt from building up.',
      },
    ],
  },
  {
    slug: 'brighton',
    name: 'Brighton',
    region: 'East Sussex',
    reach: 'project',
    areas: ['Hove', 'Kemptown', 'Lewes Road', 'London Road', 'North Laine', 'Portslade', 'Seven Dials', 'Shoreham-by-Sea', 'The Lanes', 'Worthing'],
    postcodeAreas: ['BN1', 'BN2', 'BN3', 'BN41', 'BN42', 'BN43'],
    primaryKeyword: 'shopfronts Brighton',
    metaTitle: 'Shopfront Installation Projects in Brighton',
    metaDescription:
      'Planned shopfront and shutter installations in Brighton and Hove, including conservation areas such as The Lanes. Call 07597 630000.',
    description: `Brighton is a long way from our Midlands base, so we take on work there only as planned installation projects, not repairs or emergencies.

The Lanes and the North Laine are conservation areas full of small independent shops in old buildings. Brighton and Hove City Council has clear guidance on shopfronts here, favouring traditional proportions, timber or slim frames, and security behind the glass rather than solid shutters outside.

Kemptown and Seven Dials have a similar mix of character buildings and independent businesses. London Road and Lewes Road are busier, more everyday shopping streets.

Shoreham-by-Sea and Worthing come under Adur and Worthing councils, which have their own planning teams.

The coast brings salt air and strong winds, so the finish, fixings and glazing seals all need care, especially on seafront premises and tall glazed fronts.`,
    faqs: [
      {
        question: 'Can you come out to repair a shopfront in Brighton?',
        answer:
          'No. Brighton is outside our repair area. We take on planned installation work there only.',
      },
      {
        question: 'Are shutters allowed in The Lanes?',
        answer:
          'External solid shutters are generally resisted in The Lanes conservation area. Internal grilles or laminated glass are the usual alternatives.',
      },
      {
        question: 'Is Worthing covered by Brighton and Hove City Council?',
        answer:
          'No. Worthing and Shoreham come under Adur and Worthing councils.',
      },
    ],
  },
  {
    slug: 'coventry',
    name: 'Coventry',
    region: 'West Midlands',
    reach: 'local',
    areas: ['Binley', 'Canley', 'Cheylesmore', 'City Centre', 'Coundon', 'Earlsdon', 'Foleshill', 'Stoke', 'Tile Hill', 'Walsgrave'],
    postcodeAreas: ['CV1', 'CV2', 'CV3', 'CV4', 'CV5', 'CV6'],
    primaryKeyword: 'shopfronts Coventry',
    metaTitle: 'Shopfronts and Shutters in Coventry',
    metaDescription:
      'Coventry shopfronts, roller shutters, doors and repairs from our base in Exhall, just north of the city. Fast local call-outs. Call 07597 630000.',
    description: `Coventry is home. Our base is in Exhall, just north of the city near junction 3 of the M6, so most Coventry addresses are only a short drive away. That makes the city our quickest area for repairs and emergencies, as well as new installations.

The city centre was rebuilt after the Second World War around a pedestrian precinct, so many shopfronts sit in post-war concrete frames with deep fascias and canopies. Spon Street is different: a street of timber-framed medieval buildings, some moved there from elsewhere in the city, and changes there are tightly controlled.

Foleshill Road is one of the busiest independent shopping streets in the area, with grocers, jewellers, clothing shops and restaurants. Earlsdon has cafés, bars and boutiques on its main streets, while Tile Hill, Canley, Binley and Walsgrave have local parades with takeaways, pharmacies and convenience shops.

Coventry City Council handles planning for the city. Our own base in Exhall falls under Nuneaton and Bedworth Borough Council, as do Bedworth and Nuneaton, both of which we also cover regularly.

Because we are so close, Coventry customers can usually get a survey or a repair visit within days, and emergencies the same day in most cases.`,
    faqs: [
      {
        question: 'Where exactly are you based?',
        answer:
          'In Exhall, just north of Coventry near junction 3 of the M6. It is a few minutes from the city and from Bedworth and Nuneaton.',
      },
      {
        question: 'How fast can you get to a Coventry shop in an emergency?',
        answer:
          'Coventry is our closest city, so it is usually our fastest response. Ring the emergency line and we will tell you when we can be there.',
      },
      {
        question: 'Do you also cover Bedworth and Nuneaton?',
        answer:
          'Yes. Both are close to our base and are covered for installations, repairs and emergencies.',
      },
    ],
  },
  {
    slug: 'reading',
    name: 'Reading',
    region: 'Berkshire',
    reach: 'regional',
    areas: ['Calcot', 'Caversham', 'Earley', 'Shinfield', 'Southcote', 'Tilehurst', 'Town Centre', 'Whitley', 'Wokingham', 'Woodley'],
    postcodeAreas: ['RG1', 'RG2', 'RG4', 'RG5', 'RG6', 'RG30', 'RG31'],
    primaryKeyword: 'shopfronts Reading',
    metaTitle: 'Shopfronts and Shutters in Reading',
    metaDescription:
      'Shopfronts, shutters and commercial doors in Reading and Wokingham. Planned installations and booked repair visits. Call 07597 630000.',
    description: `Reading is at the southern edge of our repair area, reached down the M40 and A34. We plan new fronts, shutters and doors here and can book repair visits, though a local firm will be faster for an overnight emergency.

Broad Street and the Oracle form the main shopping area, with national retailers and a riverside of restaurants. Market Place and the streets around the old Abbey ruins are more historic, and conservation area rules apply to parts of the centre.

Caversham, across the river, has a small high street of independent shops and cafés. Tilehurst, Whitley and Southcote have local parades serving their neighbourhoods.

Reading Borough Council covers the town itself, but Woodley, Earley and Wokingham are in Wokingham Borough, and Calcot falls under West Berkshire. These are separate planning authorities.

Many Reading premises are offices and business-park units as well as shops, and we fit aluminium doors, automatic entrances and security doors for those too.`,
    faqs: [
      {
        question: 'Do you offer shutter repairs in Reading?',
        answer:
          'Reading is at the edge of our repair area. We can book visits; for an urgent same-night repair, a local firm will reach you first.',
      },
      {
        question: 'Is Woodley part of Reading Borough Council?',
        answer:
          'No. Woodley, Earley and Wokingham are in Wokingham Borough, and Calcot is in West Berkshire.',
      },
      {
        question: 'Do you fit automatic doors for offices in Reading?',
        answer:
          'Yes. We fit sliding and swing automatic entrances for offices and business units as well as shops.',
      },
    ],
  },
  {
    slug: 'wolverhampton',
    name: 'Wolverhampton',
    region: 'West Midlands',
    reach: 'local',
    areas: ['Bilston', 'Blakenhall', 'Bushbury', 'City Centre', 'Fordhouses', 'Heath Town', 'Penn', 'Tettenhall', 'Wednesfield', 'Whitmore Reans'],
    postcodeAreas: ['WV1', 'WV2', 'WV3', 'WV4', 'WV6', 'WV10', 'WV11', 'WV14'],
    primaryKeyword: 'shopfronts Wolverhampton',
    metaTitle: 'Shopfronts and Shutters in Wolverhampton',
    metaDescription:
      'Shop and industrial roller shutters, shopfronts, fire doors and repairs across Wolverhampton. Local call-outs from the West Midlands. 07597 630000.',
    description: `Wolverhampton is part of our core West Midlands area, reached along the M6, so we offer the full service here: new fronts, shutters, doors, repairs and emergency call-outs.

A lot of our Wolverhampton work is industrial. Units on the estates around Bilston, Fordhouses and the ring road need heavy roller doors, insulated loading-bay doors and steel security doors, and these see hard daily use that wears motors and springs.

The city centre has Queen Square, Dudley Street and the Mander Centre, alongside older streets where conservation area controls apply. Tettenhall has its own conservation areas around the Greens and the old village centre.

Local high streets in Bilston, Wednesfield, Penn and Blakenhall have independent shops, takeaways and convenience stores, where solid shutters and tough entrance doors take daily wear.

The City of Wolverhampton Council handles planning for all of these areas. For industrial premises, fire-rated shutters and fire doors are often required by the fire risk assessment, and we provide the records your assessor needs.`,
    faqs: [
      {
        question: 'Do you fit industrial roller doors in Wolverhampton?',
        answer:
          'Yes. We supply and fit solid and insulated industrial doors, motorised with safety edges, and service them afterwards.',
      },
      {
        question: 'Can you respond to an emergency in Wolverhampton?',
        answer:
          'Yes. Wolverhampton is within our local area. Ring the emergency line and we will give you an arrival time.',
      },
      {
        question: 'Does my fire risk assessment cover shutters?',
        answer:
          'It may. Shutters in fire-separating walls need to be fire rated and serviced. We can check against your assessment and fix or replace them.',
      },
    ],
  },
  {
    slug: 'derby',
    name: 'Derby',
    region: 'Derbyshire',
    reach: 'regional',
    areas: ['Allestree', 'Cathedral Quarter', 'Chaddesden', 'Chellaston', 'City Centre', 'Littleover', 'Mickleover', 'Normanton', 'Sadler Gate', 'Spondon'],
    postcodeAreas: ['DE1', 'DE3', 'DE21', 'DE22', 'DE23', 'DE24', 'DE65', 'DE73'],
    primaryKeyword: 'shopfronts Derby',
    metaTitle: 'Shopfronts and Shutters in Derby',
    metaDescription:
      'Shopfronts, shutters, doors and repairs in Derby, from Sadler Gate to Normanton. Within our regular repair area. Call 07597 630000.',
    description: `Derby is within easy reach up the A38, so it falls well inside our repair area. We fit new fronts and shutters and book repair visits here, and can usually help with urgent problems.

The Cathedral Quarter and Sadler Gate are the historic heart of the city, with independent shops, cafés and pubs in Georgian and older buildings. Conservation area rules apply, and Derby City Council expects shopfronts to respect the character of these streets.

Normanton Road is a busy, varied high street with grocers, restaurants and family businesses, where we see a lot of repair work on doors, shutters and glass. The Derbion shopping centre and the retail parks on the ring road house the national chains.

Suburban centres such as Allestree, Littleover, Mickleover and Chellaston have small parades with pharmacies, takeaways and salons.

Industrial units around the city's engineering firms also need roller doors, security doors and fire doors, and we supply and service all three.`,
    faqs: [
      {
        question: 'Do you cover Derby for repairs?',
        answer:
          'Yes. Derby is within our repair area, and we can often reach you within a day or two for non-urgent repairs.',
      },
      {
        question: 'Do I need consent for a new front on Sadler Gate?',
        answer:
          'Very likely. Sadler Gate is in a conservation area, and changes to how the front looks normally need planning permission.',
      },
      {
        question: 'Can you service industrial roller doors in Derby?',
        answer:
          'Yes. We service and repair industrial doors, including motors, springs and safety edges.',
      },
    ],
  },
  {
    slug: 'northampton',
    name: 'Northampton',
    region: 'Northamptonshire',
    reach: 'local',
    areas: ['Abington', 'Billing', 'Duston', 'Ecton Brook', 'Far Cotton', 'Kingsthorpe', 'Moulton', 'Northampton Gateway', 'Town Centre', 'Weston Favell'],
    postcodeAreas: ['NN1', 'NN2', 'NN3', 'NN4', 'NN5', 'NN6', 'NN7'],
    primaryKeyword: 'shopfronts Northampton',
    metaTitle: 'Shopfronts and Shutters in Northampton',
    metaDescription:
      'Shopfronts, shutters, doors and repairs in Northampton, a short trip down the M1 from us. Installs, repairs and call-outs. Call 07597 630000.',
    description: `Northampton is a short run down the M1 from our base, so we cover it for everything: new installations, repairs and emergencies.

The town centre is built around the Market Square and Abington Street, with a mix of national names, independent shops and empty units being brought back into use. Parts of the centre, including the area around All Saints Church and the Market Square, sit in conservation areas.

Wellingborough Road in Abington is a long, lively street of bars, restaurants and independent shops. Kingsthorpe, Far Cotton, Duston and Weston Favell have local centres with everyday shops.

Northampton is also a major logistics hub, with large warehouses around the M1 junctions and Northampton Gateway. These need industrial roller doors, fast-acting doors and security doors that can cope with constant use.

Since 2021, planning for Northampton has been handled by West Northamptonshire Council, which replaced the old borough council.`,
    faqs: [
      {
        question: 'Which council handles planning in Northampton now?',
        answer:
          'West Northamptonshire Council, which took over from Northampton Borough Council in 2021.',
      },
      {
        question: 'Do you fit doors for warehouses near the M1?',
        answer:
          'Yes. We supply and fit industrial roller doors and steel security doors for warehouses and logistics units.',
      },
      {
        question: 'Can you reach Northampton for an emergency?',
        answer:
          'Yes. It is a short trip from our base, so we can usually get there quickly.',
      },
    ],
  },
  {
    slug: 'luton',
    name: 'Luton',
    region: 'Bedfordshire',
    reach: 'regional',
    areas: ['Bury Park', 'Dunstable', 'Farley Hill', 'Houghton Regis', 'Leagrave', 'Limbury', 'Marsh Farm', 'Stopsley', 'Sundon Park', 'Town Centre'],
    postcodeAreas: ['LU1', 'LU2', 'LU3', 'LU4', 'LU5', 'LU6', 'LU7'],
    primaryKeyword: 'shopfronts Luton',
    metaTitle: 'Shopfronts and Shutters in Luton',
    metaDescription:
      'Shopfronts, shutters, doors and repairs in Luton and Dunstable, straight down the M1 from us. Installs and repair visits. Call 07597 630000.',
    description: `Luton is straight down the M1 from our base and inside our repair area. We fit new shopfronts and shutters and book repair visits here.

Bury Park, centred on Dunstable Road, is one of Luton's busiest shopping districts, with grocers, clothing shops, jewellers and restaurants trading long hours. Fronts and shutters here work hard, and we see a lot of repair and upgrade work alongside new installations.

The town centre has The Mall and the streets around George Street. Leagrave, Stopsley, Limbury and Marsh Farm have local parades with takeaways, pharmacies and convenience stores.

Luton Borough Council handles planning for the town. Dunstable and Houghton Regis, though they feel like part of the same urban area, are in Central Bedfordshire, which has its own planning department.

Industrial units around the airport and the M1 junctions also need roller doors, security doors and fire doors, which we supply, fit and service.`,
    faqs: [
      {
        question: 'Do you repair shutters in Bury Park?',
        answer:
          'Yes. Luton is within our repair area, and Bury Park is one of the streets where we see the most shutter work.',
      },
      {
        question: 'Is Dunstable covered by Luton Borough Council?',
        answer:
          'No. Dunstable and Houghton Regis are in Central Bedfordshire.',
      },
      {
        question: 'Can you fit security for a jeweller in Luton?',
        answer:
          'Yes. Laminated glass, rated security doors and strong shutters can be combined. Check your insurance policy for any required rating.',
      },
    ],
  },
  {
    slug: 'swindon',
    name: 'Swindon',
    region: 'Wiltshire',
    reach: 'regional',
    areas: ['Gorse Hill', 'Highworth', 'North Swindon', 'Old Town', 'Rodbourne', 'South Marston', 'Stratton', 'Town Centre', 'West Swindon', 'Wroughton'],
    postcodeAreas: ['SN1', 'SN2', 'SN3', 'SN4', 'SN5', 'SN6', 'SN25', 'SN26'],
    primaryKeyword: 'shopfronts Swindon',
    metaTitle: 'Shopfronts and Shutters in Swindon',
    metaDescription:
      'Shopfronts, shutters, industrial doors and repairs in Swindon. Within our repair area, reached via the A34 and M4. Call 07597 630000.',
    description: `Swindon sits inside our repair area, reached down the A34 and M4. We fit new fronts, shutters and doors here and book repair visits.

The town centre around Regent Street and the Brunel Centre has seen many changes, with some units empty and others being refitted for new uses. The Designer Outlet in the old railway works has its own landlord rules.

Old Town, on the hill, is a conservation area with independent shops, cafés and bars on Wood Street and Devizes Road. Swindon Borough Council expects fronts there to suit the older buildings.

North Swindon and West Swindon have large modern district centres and retail parks, where fit-outs are often straightforward. Highworth and Wroughton have small traditional high streets.

Swindon is also a big distribution and manufacturing centre, with industrial units needing heavy roller doors and security doors that we supply and service.`,
    faqs: [
      {
        question: 'Do you offer repairs in Swindon?',
        answer:
          'Yes. Swindon is within our repair area. Call with the fault and we will arrange a visit.',
      },
      {
        question: 'Is Swindon Old Town a conservation area?',
        answer:
          'Yes. Shopfront changes there normally need planning permission and should suit the historic buildings.',
      },
      {
        question: 'Do you fit roller doors for distribution units?',
        answer:
          'Yes. Solid and insulated industrial doors, motorised, with safety devices and servicing.',
      },
    ],
  },
  {
    slug: 'stoke-on-trent',
    name: 'Stoke-on-Trent',
    region: 'Staffordshire',
    reach: 'regional',
    areas: ['Burslem', 'Fenton', 'Hanley', 'Kidsgrove', 'Longton', 'Meir', 'Newcastle-under-Lyme', 'Stoke', 'Trentham', 'Tunstall'],
    postcodeAreas: ['ST1', 'ST2', 'ST3', 'ST4', 'ST5', 'ST6', 'ST7'],
    primaryKeyword: 'shopfronts Stoke-on-Trent',
    metaTitle: 'Shopfronts and Shutters in Stoke-on-Trent',
    metaDescription:
      'Shopfronts, shutters, doors and repairs across the six towns of Stoke-on-Trent and Newcastle-under-Lyme. Call 07597 630000.',
    description: `Stoke-on-Trent is up the M6 from us and comfortably inside our repair area. We fit new fronts and shutters and book repair visits across the city.

Stoke is really six towns joined together, each with a centre of its own: Burslem, Fenton, Hanley, Longton, Stoke and Tunstall. Hanley is the main shopping area, with the Potteries Centre. The other five have smaller high streets, many with Victorian buildings linked to the pottery industry.

Burslem and Longton in particular have conservation areas and listed buildings, including former pottery works, and the city council expects fronts there to respect that heritage.

Newcastle-under-Lyme, next door, is a separate borough with its own council and planning department, as is Kidsgrove, which is in Newcastle-under-Lyme borough too.

Many local shops in the six towns are independent, and we see plenty of repair work on shutters and doors as well as new installations.`,
    faqs: [
      {
        question: 'Is Newcastle-under-Lyme part of Stoke-on-Trent?',
        answer:
          'No. It is a separate borough with its own council, which also covers Kidsgrove.',
      },
      {
        question: 'Do you cover all six towns of Stoke?',
        answer:
          'Yes. Hanley, Stoke, Burslem, Tunstall, Longton and Fenton are all within our repair area.',
      },
      {
        question: 'Are there conservation areas in Burslem?',
        answer:
          'Yes. Burslem town centre is a conservation area with several listed buildings, so front changes need careful design.',
      },
    ],
  },
  {
    slug: 'plymouth',
    name: 'Plymouth',
    region: 'Devon',
    reach: 'project',
    areas: ['Barbican', 'City Centre', 'Devonport', 'Efford', 'Estover', 'Mutley Plain', 'Plympton', 'Plymstock', 'Saltash', 'Stonehouse'],
    postcodeAreas: ['PL1', 'PL2', 'PL3', 'PL4', 'PL5', 'PL6', 'PL7', 'PL9'],
    primaryKeyword: 'shopfronts Plymouth',
    metaTitle: 'Shopfront Installation Projects in Plymouth',
    metaDescription:
      'Planned shopfront and shutter installation projects in Plymouth by arrangement. Drawings for planning included. Call 07597 630000.',
    description: `Plymouth is a long way from our base, so we only take on planned installation projects there, not repairs or emergencies.

The city centre was rebuilt after wartime bombing to a single plan, with wide streets such as Armada Way and Royal Parade and a consistent style of post-war buildings. Many of these are now protected, and Plymouth City Council takes care over changes to their frontages.

The Barbican is the oldest part of Plymouth, with narrow streets, historic buildings and many listed properties. It is a conservation area, and shopfronts there are expected to be traditional.

Mutley Plain, near the university, has a busy strip of takeaways, cafés and convenience stores. Plympton and Plymstock have local centres.

Saltash, across the Tamar, is in Cornwall and comes under Cornwall Council, which has its own planning rules.`,
    faqs: [
      {
        question: 'Do you do repairs in Plymouth?',
        answer:
          'No. Plymouth is too far for repairs. We take on planned installations by arrangement.',
      },
      {
        question: 'Is the Barbican a conservation area?',
        answer:
          'Yes. Shopfronts there are expected to be traditional, and many buildings are listed.',
      },
      {
        question: 'Is Saltash covered by Plymouth City Council?',
        answer:
          'No. Saltash is in Cornwall, under Cornwall Council.',
      },
    ],
  },
  {
    slug: 'bradford',
    name: 'Bradford',
    region: 'West Yorkshire',
    reach: 'project',
    areas: ['Bingley', 'Bradford City Centre', 'Great Horton', 'Idle', 'Keighley', 'Manningham', 'Queensbury', 'Saltaire', 'Shipley', 'Thornton'],
    postcodeAreas: ['BD1', 'BD2', 'BD3', 'BD4', 'BD5', 'BD7', 'BD8', 'BD9', 'BD17', 'BD18', 'BD20', 'BD21'],
    primaryKeyword: 'shopfronts Bradford',
    metaTitle: 'Shopfront Installation Projects in Bradford',
    metaDescription:
      'Planned shopfront, shutter and door installations in Bradford, Shipley and Keighley, with drawings for planning. Call 07597 630000.',
    description: `Bradford is beyond our repair area, so we take on work there as planned installation projects: new fronts, shutters and doors, fitted on agreed dates.

The city centre has Victorian commercial buildings in local stone, the Broadway shopping centre and the Little Germany area of former wool warehouses, which is a conservation area with many listed buildings.

Manningham, along Oak Lane and Lumb Lane, and Great Horton have busy independent shopping streets with grocers, clothing shops, jewellers and restaurants. Security and strong shutters are high priorities for these businesses.

Saltaire, the model village built for mill workers, is a World Heritage Site, and any change to a shopfront there is closely controlled. Bradford Council handles planning across the whole district, including Shipley, Bingley, Keighley and Queensbury.

For urgent repairs in Bradford, a West Yorkshire firm will reach you faster. For a planned new front, we can take care of everything from survey to handover.`,
    faqs: [
      {
        question: 'Can you fix my shutter in Bradford?',
        answer:
          'Bradford is outside our repair area. We take on new installations there as planned projects.',
      },
      {
        question: 'Is Keighley covered by Bradford Council?',
        answer:
          'Yes. Bradford Council covers the whole district, including Keighley, Bingley, Shipley and Saltaire.',
      },
      {
        question: 'Can I change a shopfront in Saltaire?',
        answer:
          'Only with careful design and the right consents. Saltaire is a World Heritage Site with many listed buildings.',
      },
    ],
  },
  {
    slug: 'swansea',
    name: 'Swansea',
    region: 'Wales',
    reach: 'project',
    areas: ['Gorseinon', 'Llansamlet', 'Morriston', 'Mumbles', 'Neath', 'Port Talbot', 'Sketty', 'Swansea City Centre', 'The Marina', 'Uplands'],
    postcodeAreas: ['SA1', 'SA2', 'SA3', 'SA4', 'SA5', 'SA6', 'SA7', 'SA8', 'SA10', 'SA11', 'SA12', 'SA13'],
    primaryKeyword: 'shopfronts Swansea',
    metaTitle: 'Shopfront Projects in Swansea',
    metaDescription:
      'Larger shopfront installation projects in Swansea by arrangement, with drawings for Welsh planning. Call 07597 630000 to discuss.',
    description: `Swansea is far outside our usual area, so we consider only larger planned installation projects there by arrangement, not repairs or emergencies.

The city centre was largely rebuilt after the war, with Oxford Street, the Quadrant and the indoor Swansea Market at its heart. Wind Street is known for bars and restaurants, while the Marina has a mix of leisure and residential units.

Uplands and Sketty have independent shops and cafés, and Mumbles has a seafront village feel, with conservation area controls in places. Morriston has a traditional high street.

Wales has its own planning policy, and Swansea Council handles applications for the city. Neath and Port Talbot are in Neath Port Talbot, a separate council.

If you are planning a significant project in Swansea, send us the details and we will tell you honestly whether we are the right firm to take it on.`,
    faqs: [
      {
        question: 'Do you repair shutters in Swansea?',
        answer:
          'No. Swansea is too far for repairs. We consider larger installation projects by arrangement.',
      },
      {
        question: 'Is Neath covered by Swansea Council?',
        answer:
          'No. Neath and Port Talbot are in Neath Port Talbot County Borough.',
      },
      {
        question: 'Is Mumbles a conservation area?',
        answer:
          'Parts of it are, so shopfront changes need care and usually planning permission.',
      },
    ],
  },
  {
    slug: 'oxford',
    name: 'Oxford',
    region: 'South East England',
    reach: 'regional',
    areas: ['Abingdon', 'Botley', 'City Centre', 'Cornmarket Street', 'Cowley', 'East Oxford', 'Headington', 'Iffley Road', 'Jericho', 'Summertown'],
    postcodeAreas: ['OX1', 'OX2', 'OX3', 'OX4', 'OX5', 'OX14', 'OX16', 'OX26'],
    primaryKeyword: 'shopfronts Oxford',
    metaTitle: 'Shopfronts and Shutters in Oxford',
    metaDescription:
      'Shopfronts, shutters, doors and repairs in Oxford, including listed buildings in the historic centre. Within our repair area. Call 07597 630000.',
    description: `Oxford is straight down the M40 from us and inside our repair area. We fit new fronts and shutters here and book repair visits.

The historic centre is one of the most protected townscapes in England. Many buildings on Cornmarket, the High Street and Broad Street are listed, and Oxford City Council has firm expectations for shopfronts: traditional proportions, quality materials, modest signs and internal security rather than solid external shutters.

Cowley Road in East Oxford is a lively, varied street of restaurants, cafés and independent shops. Summertown, on Banbury Road, has upmarket shops and cafés. Headington and Jericho have their own village-like centres.

Abingdon and Botley come under the Vale of White Horse District Council, not Oxford City Council. Kidlington is in Cherwell.

For listed buildings, we can work alongside your architect or heritage adviser, or prepare drawings for straightforward consents ourselves.`,
    faqs: [
      {
        question: 'Can I fit a roller shutter in central Oxford?',
        answer:
          'Solid external shutters are unlikely to be approved in the historic centre. Internal grilles or laminated glass are the usual answer.',
      },
      {
        question: 'Is Abingdon covered by Oxford City Council?',
        answer:
          'No. Abingdon and Botley are in the Vale of White Horse District.',
      },
      {
        question: 'Do you cover Oxford for repairs?',
        answer:
          'Yes. Oxford is within our repair area. Call with the fault and we will arrange a visit.',
      },
    ],
  },
  {
    slug: 'cambridge',
    name: 'Cambridge',
    region: 'East of England',
    reach: 'regional',
    areas: ['Cherry Hinton', 'Chesterton', 'City Centre', 'Fen Ditton', "King's Parade", 'Market Square', 'Mill Road', 'Newnham', 'Sidney Street', 'Trumpington'],
    postcodeAreas: ['CB1', 'CB2', 'CB3', 'CB4', 'CB5', 'CB21', 'CB22', 'CB23'],
    primaryKeyword: 'shopfronts Cambridge',
    metaTitle: 'Shopfronts and Shutters in Cambridge',
    metaDescription:
      'Shopfronts, shutters and doors in Cambridge, including listed buildings near the colleges. At the edge of our repair area. Call 07597 630000.',
    description: `Cambridge sits at the eastern edge of our repair area. We plan new installations here and can book repair visits, though for urgent help a local firm will be quicker.

The historic core around King's Parade, Trinity Street and the Market Square is packed with listed buildings, and Cambridge City Council expects shopfronts there to be traditional and understated. Internal security, painted timber and hand-lettered signs are common requirements.

Mill Road is the city's best-known independent shopping street, with a huge variety of food shops, cafés and small businesses. Cherry Hinton, Chesterton and Trumpington have local centres.

Fen Ditton and many surrounding villages fall under South Cambridgeshire District Council, which handles planning separately from the city.

Science parks and business units on the city's edge also need automatic doors, security doors and fire doors, which we supply and fit.`,
    faqs: [
      {
        question: 'Do you cover Cambridge for repairs?',
        answer:
          'Cambridge is at the edge of our repair area. We can book visits; urgent same-day help is better from a local firm.',
      },
      {
        question: 'Are shopfronts near the colleges listed?',
        answer:
          'Many are. Changes to a listed shopfront need listed building consent as well as planning permission.',
      },
      {
        question: 'Who handles planning for villages around Cambridge?',
        answer:
          'Most surrounding villages, including Fen Ditton, are in South Cambridgeshire District.',
      },
    ],
  },
  {
    slug: 'york',
    name: 'York',
    region: 'Yorkshire and the Humber',
    reach: 'project',
    areas: ['Acomb', 'Bishopthorpe', 'City Centre', 'Clifton', 'Coppergate', 'Fossgate', 'Fulford', 'Micklegate', 'Stonegate', 'The Shambles'],
    postcodeAreas: ['YO1', 'YO10', 'YO23', 'YO24', 'YO26', 'YO30', 'YO31', 'YO32'],
    primaryKeyword: 'shopfronts York',
    metaTitle: 'Shopfront Installation Projects in York',
    metaDescription:
      'Planned shopfront and shutter installations in York, with care for listed buildings inside the city walls. Call 07597 630000.',
    description: `York is beyond our repair area, so we take on work there as planned installation projects rather than repairs.

Inside the city walls, almost every shopping street is historic. The Shambles, Stonegate, Petergate and Fossgate are lined with timber-framed and Georgian buildings, many of them listed. The City of York Council expects shopfronts in the centre to be traditional, with modest signs and security kept behind the glass.

Micklegate and Fossgate have independent shops, bars and restaurants, while the Coppergate area includes larger modern units.

Acomb and the suburbs outside the walls have ordinary local parades where modern aluminium fronts are perfectly acceptable.

Narrow streets and pedestrian zones mean deliveries need careful timing, often early in the morning, which we plan into the programme.`,
    faqs: [
      {
        question: 'Do you do shopfront repairs in York?',
        answer:
          'No. York is outside our repair area. We take on planned installations by arrangement.',
      },
      {
        question: 'Are shutters allowed in central York?',
        answer:
          'External shutters are generally resisted inside the walls. Internal grilles or laminated glass are the usual solutions.',
      },
      {
        question: 'How do deliveries work in pedestrian streets?',
        answer:
          'Most central streets allow vehicles only at certain times, usually early morning, so we schedule deliveries and lifting for those hours.',
      },
    ],
  },
  {
    slug: 'bath',
    name: 'Bath',
    region: 'South West England',
    reach: 'regional',
    areas: ['Bathwick', 'City Centre', 'Combe Down', 'Larkhall', 'Milsom Street', 'Oldfield Park', 'Pulteney Bridge', 'Southgate', 'Weston', 'Widcombe'],
    postcodeAreas: ['BA1', 'BA2'],
    primaryKeyword: 'shopfronts Bath',
    metaTitle: 'Shopfronts in Bath, Listed Buildings Included',
    metaDescription:
      'Shopfront work in Bath, where the whole city is a World Heritage Site. Careful designs for listed Georgian buildings. Call 07597 630000.',
    description: `Bath is at the southern edge of our repair area. We plan installations here and can book repair visits.

The whole city is a World Heritage Site, and a very high share of its buildings are listed, especially in the Georgian centre around Milsom Street, Pulteney Bridge and the Circus. Bath and North East Somerset Council has detailed shopfront guidance, and changes almost always need listed building consent.

That means traditional designs, painted timber, slim glazing bars and internal security are the norm. Modern aluminium fronts are mainly found in Southgate, the newer shopping area, and in suburban parades.

Larkhall, Widcombe, Oldfield Park and Weston have small local centres, often in older buildings with conservation controls.

If you are taking on a listed shopfront in Bath, we recommend involving a heritage adviser early. We can work with them to make and fit what is approved.`,
    faqs: [
      {
        question: 'Can I put an aluminium shopfront on a listed building in Bath?',
        answer:
          'It is unlikely to be approved on a listed Georgian building. Traditional timber designs are normally expected.',
      },
      {
        question: 'Do you cover Bath for repairs?',
        answer:
          'Bath is at the edge of our repair area. We can book visits for non-urgent repairs.',
      },
      {
        question: 'Who handles planning in Bath?',
        answer:
          'Bath and North East Somerset Council, which also covers Keynsham and the surrounding area.',
      },
    ],
  },
  {
    slug: 'aberdeen',
    name: 'Aberdeen',
    region: 'Scotland',
    reach: 'project',
    areas: ['Bridge of Don', 'City Centre', 'Cults', 'Dyce', 'George Street', 'Northfield', 'Rosemount', 'Torry', 'Union Street', 'Woodside'],
    postcodeAreas: ['AB10', 'AB11', 'AB15', 'AB16', 'AB21', 'AB22', 'AB23', 'AB24', 'AB25'],
    primaryKeyword: 'shopfronts Aberdeen',
    metaTitle: 'Shopfront Projects in Aberdeen',
    metaDescription:
      'Larger shopfront projects in Aberdeen considered by arrangement. We are a Midlands firm; ask us honestly whether we are the right fit. 07597 630000.',
    description: `Aberdeen is a very long way from our base in the Midlands. We only consider larger installation projects there by arrangement, and we do not offer repairs or emergencies.

Union Street, the main shopping street, is built from the city's famous grey granite, and much of the centre sits in conservation areas. Aberdeen City Council expects shopfronts to suit the stone buildings.

George Street and Rosemount have independent shops and cafés. Dyce, near the airport, has industrial and business units serving the energy sector.

Scotland has its own planning law, and Historic Environment Scotland is involved for listed buildings.

For most Aberdeen jobs, a Scottish firm will be better placed. If you have a large project and want to talk it through, send us the details and we will tell you honestly whether it makes sense for us.`,
    faqs: [
      {
        question: 'Do you work in Aberdeen?',
        answer:
          'Only on larger projects by arrangement. For repairs and most jobs, a local Scottish firm will serve you better.',
      },
      {
        question: 'Is Union Street a conservation area?',
        answer:
          'Much of the city centre, including Union Street, is in a conservation area with many listed granite buildings.',
      },
      {
        question: 'Do you fit industrial doors in Dyce?',
        answer:
          'Only as part of a larger planned project. For single doors and servicing, a local firm is the practical choice.',
      },
    ],
  },
  {
    slug: 'belfast',
    name: 'Belfast',
    region: 'Northern Ireland',
    reach: 'project',
    areas: ['Cathedral Quarter', 'City Centre', 'Falls Road', 'Holywood', 'Lisburn Road', 'Ormeau Road', 'Shankill', 'Stranmillis', 'Titanic Quarter', 'Victoria Square'],
    postcodeAreas: ['BT1', 'BT2', 'BT7', 'BT9', 'BT12', 'BT13', 'BT15'],
    primaryKeyword: 'shopfronts Belfast',
    metaTitle: 'Shopfront Projects in Belfast',
    metaDescription:
      'Larger shopfront projects in Belfast considered by arrangement. We are based in England; ask us whether we are the right fit. 07597 630000.',
    description: `Belfast is across the Irish Sea from our base in England. We only consider larger installation projects there by arrangement, and we cannot offer repairs or emergency call-outs.

Northern Ireland has its own planning system. Since 2015, Belfast City Council has handled most planning applications for the city, with the Department for Communities responsible for listed buildings.

The Cathedral Quarter has bars, restaurants and creative businesses in historic buildings, and is a conservation area. Victoria Square is a modern shopping centre with its own landlord rules. Lisburn Road and Ormeau Road have independent shops, cafés and restaurants.

Holywood, just outside the city, comes under Ards and North Down Borough Council.

For most Belfast jobs, a local firm will be quicker and better value. If you have a large project and want to discuss it, send us the details.`,
    faqs: [
      {
        question: 'Do you fit shopfronts in Belfast?',
        answer:
          'Only larger projects by arrangement. For repairs and most jobs, a firm based in Northern Ireland will serve you better.',
      },
      {
        question: 'Who handles planning in Belfast?',
        answer:
          'Belfast City Council handles most applications. Listed buildings involve the Department for Communities.',
      },
      {
        question: 'Is the Cathedral Quarter a conservation area?',
        answer:
          'Yes. Shopfront changes there need careful design and usually planning permission.',
      },
    ],
  },
  {
    slug: 'milton-keynes',
    name: 'Milton Keynes',
    region: 'South East England',
    reach: 'regional',
    areas: ['Bletchley', 'Central Milton Keynes', 'City Centre', 'Kingston', 'Newport Pagnell', 'Oldbrook', 'Stony Stratford', 'Westcroft', 'Wolverton', 'centre:mk'],
    postcodeAreas: ['MK1', 'MK2', 'MK3', 'MK9', 'MK10', 'MK11', 'MK12', 'MK14', 'MK16'],
    primaryKeyword: 'shopfronts Milton Keynes',
    metaTitle: 'Shopfronts and Shutters in Milton Keynes',
    metaDescription:
      'Shopfronts, shutters, doors and repairs in Milton Keynes, from centre:mk to Stony Stratford. Within our repair area. Call 07597 630000.',
    description: `Milton Keynes is down the M1 from us and well inside our repair area. We fit new fronts, shutters and doors here and book repair visits.

As a new town, much of Milton Keynes was planned from scratch, with shopping concentrated in centre:mk and local centres such as Kingston, Westcroft and Oldbrook. Units in these centres are generally modern, with straightforward openings and landlord specifications to follow.

The older towns that became part of Milton Keynes are different. Stony Stratford's High Street is a conservation area with many historic buildings, and Newport Pagnell, Wolverton and Bletchley have traditional high streets.

Milton Keynes City Council handles planning for the whole area.

Large warehouses and logistics units around the city need industrial roller doors and security doors, which we supply, fit and service.`,
    faqs: [
      {
        question: 'Do units in centre:mk have landlord rules?',
        answer:
          'Yes. Managed shopping centres set their own design and fitting rules, alongside any planning consent.',
      },
      {
        question: 'Is Stony Stratford a conservation area?',
        answer:
          'Yes. The High Street is protected, so front changes need care and usually permission.',
      },
      {
        question: 'Do you cover Milton Keynes for repairs?',
        answer:
          'Yes. Milton Keynes is within our repair area.',
      },
    ],
  },
  {
    slug: 'middlesbrough',
    name: 'Middlesbrough',
    region: 'North East England',
    reach: 'project',
    areas: ['Acklam', 'Ayresome', 'Baker Street', 'Berwick Hills', 'Centre Square', 'Linthorpe', 'Linthorpe Road', 'Marton', 'North Ormesby', 'Town Centre'],
    postcodeAreas: ['TS1', 'TS3', 'TS4', 'TS5', 'TS6', 'TS7', 'TS8'],
    primaryKeyword: 'shopfronts Middlesbrough',
    metaTitle: 'Shopfront Installation Projects in Middlesbrough',
    metaDescription:
      'Planned shopfront and shutter installations in Middlesbrough by arrangement, with drawings for planning. Call 07597 630000.',
    description: `Middlesbrough is well beyond our repair area, so we take on work there only as planned installation projects.

The town centre is focused on Linthorpe Road and the shopping centres around it. Baker Street and Bedford Street have become a small independent quarter of cafés, bars and shops.

Linthorpe, Acklam and Marton have local centres with everyday shops, and North Ormesby has a traditional market area.

Middlesbrough Council handles planning for the town. Nearby areas such as Redcar and Stockton have their own councils.

For repairs and emergencies in Teesside, a local firm will always reach you faster than we can. For a planned new front, we can manage the whole job.`,
    faqs: [
      {
        question: 'Do you do repairs in Middlesbrough?',
        answer:
          'No. It is outside our repair area. We take on planned installations by arrangement.',
      },
      {
        question: 'Which council covers Stockton?',
        answer:
          'Stockton-on-Tees Borough Council, separate from Middlesbrough Council.',
      },
      {
        question: 'Is Baker Street a good spot for a café front?',
        answer:
          'It has become a popular independent street. A glazed or folding front suits cafés there, subject to planning.',
      },
    ],
  },
  {
    slug: 'bournemouth',
    name: 'Bournemouth',
    region: 'South West England',
    reach: 'project',
    areas: ['Boscombe', 'Charminster', 'Christchurch', 'Old Christchurch Road', 'Pokesdown', 'Poole', 'Southbourne', 'Town Centre', 'Westbourne', 'Winton'],
    postcodeAreas: ['BH1', 'BH2', 'BH3', 'BH4', 'BH5', 'BH6', 'BH7', 'BH9'],
    primaryKeyword: 'shopfronts Bournemouth',
    metaTitle: 'Shopfront Installation Projects in Bournemouth',
    metaDescription:
      'Planned shopfront and shutter installations in Bournemouth, Christchurch and Poole by arrangement. Call 07597 630000.',
    description: `Bournemouth is well outside our repair area, so we take on work there only as planned installation projects.

Since 2019, Bournemouth, Christchurch and Poole have shared one council, BCP Council, which handles planning across all three towns.

The town centre has Old Christchurch Road and the arcades, with a mix of national names and independent shops. Westbourne has an upmarket Victorian arcade and boutique shops, and parts of it are a conservation area.

Boscombe, Southbourne, Pokesdown and Charminster each have their own local high streets, with antique shops, cafés and restaurants.

Sea air and wind are factors along the coast, so finishes and fixings need to be chosen to last.`,
    faqs: [
      {
        question: 'Do you cover Bournemouth for shutter repairs?',
        answer:
          'No. Bournemouth is outside our repair area. We take on planned installation projects by arrangement.',
      },
      {
        question: 'Which council handles planning in Poole?',
        answer:
          'BCP Council, which covers Bournemouth, Christchurch and Poole together.',
      },
      {
        question: 'Is Westbourne a conservation area?',
        answer:
          'Parts of it are, including the area around the Victorian arcade.',
      },
    ],
  },
  {
    slug: 'portsmouth',
    name: 'Portsmouth',
    region: 'South East England',
    reach: 'project',
    areas: ['City Centre', 'Commercial Road', 'Copnor', 'Cosham', 'Eastney', 'Fratton', 'Gunwharf Quays', 'Hilsea', 'North End', 'Southsea'],
    postcodeAreas: ['PO1', 'PO2', 'PO3', 'PO4', 'PO5', 'PO6'],
    primaryKeyword: 'shopfronts Portsmouth',
    metaTitle: 'Shopfront Installation Projects in Portsmouth',
    metaDescription:
      'Planned shopfront and shutter installations in Portsmouth and Southsea by arrangement, with drawings for planning. Call 07597 630000.',
    description: `Portsmouth is beyond our repair area, so we offer planned installation projects there rather than repairs.

Most of the city sits on Portsea Island, reached by only a few roads, so delivery timing matters. Commercial Road is the main shopping street, and Gunwharf Quays is an outlet centre with its own landlord rules.

Southsea has a lively mix of independent shops, cafés and bars along Albert Road, Marmion Road and Osborne Road, with conservation areas covering several streets.

Fratton, North End and Cosham have busy local high streets with everyday shops.

Portsmouth City Council handles planning for the city. Coastal weather means good seals and corrosion-resistant fixings are important.`,
    faqs: [
      {
        question: 'Do you do repairs in Portsmouth?',
        answer:
          'No. Portsmouth is outside our repair area. We take on planned installations only.',
      },
      {
        question: 'Does Gunwharf Quays have its own rules?',
        answer:
          'Yes. Units there follow the centre\'s landlord rules as well as planning.',
      },
      {
        question: 'Are there conservation areas in Southsea?',
        answer:
          'Yes, several. Shopfront changes in those streets need careful design.',
      },
    ],
  },
  {
    slug: 'norwich',
    name: 'Norwich',
    region: 'East of England',
    reach: 'project',
    areas: ['Castle Mall', 'City Centre', 'Costessey', 'Golden Triangle', 'London Street', 'Magdalen Street', 'Mile Cross', 'Norwich Lanes', 'Norwich Market', 'Thorpe Hamlet'],
    postcodeAreas: ['NR1', 'NR2', 'NR3', 'NR4', 'NR5', 'NR6', 'NR7'],
    primaryKeyword: 'shopfronts Norwich',
    metaTitle: 'Shopfront Installation Projects in Norwich',
    metaDescription:
      'Planned shopfront and shutter installations in Norwich, including the historic Lanes. By arrangement from the Midlands. Call 07597 630000.',
    description: `Norwich is outside our repair area, so we take on work there as planned installation projects.

The city centre is one of the best-preserved medieval centres in England. The Norwich Lanes, London Street and Elm Hill area are full of independent shops in historic buildings, and much of the centre is a conservation area with many listed buildings. Norwich City Council expects traditional shopfront designs here.

The large open-air market sits beside City Hall, and the Castle Quarter and Chantry Place are the main shopping centres. Magdalen Street has a mix of independent businesses.

The Golden Triangle, Mile Cross and Thorpe Hamlet have local centres. Costessey, on the edge of the city, falls under South Norfolk Council.

For repairs and emergencies, a Norfolk firm will reach you sooner. For a planned new front, we can take care of the whole job.`,
    faqs: [
      {
        question: 'Do you do shopfront repairs in Norwich?',
        answer:
          'No. Norwich is outside our repair area. We take on planned installations by arrangement.',
      },
      {
        question: 'Are shutters allowed in the Norwich Lanes?',
        answer:
          'Solid external shutters are generally resisted in the historic centre. Internal options are usually preferred.',
      },
      {
        question: 'Is Costessey covered by Norwich City Council?',
        answer:
          'No. Costessey is in South Norfolk.',
      },
    ],
  },
  {
    slug: 'exeter',
    name: 'Exeter',
    region: 'South West England',
    reach: 'project',
    areas: ['Cathedral Quarter', 'City Centre', 'Exwick', 'Fore Street', 'Heavitree', 'High Street', 'Pinhoe', 'Princesshay', 'St Thomas', 'Topsham'],
    postcodeAreas: ['EX1', 'EX2', 'EX3', 'EX4'],
    primaryKeyword: 'shopfronts Exeter',
    metaTitle: 'Shopfront Installation Projects in Exeter',
    metaDescription:
      'Planned shopfront and shutter installations in Exeter by arrangement, including the Cathedral Quarter. Call 07597 630000.',
    description: `Exeter is a long way down the M5 from us, so we only take on planned installation projects there.

The High Street and Princesshay form the main shopping area, with Princesshay a modern development with its own landlord rules. The Cathedral Quarter has historic buildings around the Cathedral Green, many listed.

Fore Street and Gandy Street have independent shops and cafés in older buildings, with conservation controls in place.

Heavitree and St Thomas have local high streets. Topsham, though part of the city, has its own historic village character and conservation area.

Exeter City Council handles planning for the city, including Topsham.`,
    faqs: [
      {
        question: 'Do you repair shutters in Exeter?',
        answer:
          'No. Exeter is too far for repairs. We take on planned installations by arrangement.',
      },
      {
        question: 'Is Topsham part of Exeter City Council?',
        answer:
          'Yes. Topsham is within the city boundary, though it has its own conservation area.',
      },
      {
        question: 'Does Princesshay have its own design rules?',
        answer:
          'Yes. Tenants follow the centre\'s landlord rules alongside planning requirements.',
      },
    ],
  },
  {
    slug: 'chester',
    name: 'Chester',
    region: 'North West England',
    reach: 'regional',
    areas: ['Blacon', 'Boughton', 'City Centre', 'Eastgate', 'Handbridge', 'Hoole', 'Northgate Street', 'Saltney', 'The Cross', 'The Rows'],
    postcodeAreas: ['CH1', 'CH2', 'CH3', 'CH4'],
    primaryKeyword: 'shopfronts Chester',
    metaTitle: 'Shopfronts and Shutters in Chester',
    metaDescription:
      'Shopfront work in Chester, including the listed medieval Rows, and repairs within our area. Call 07597 630000.',
    description: `Chester is inside our repair area, reached up the M6 and M56. We fit new fronts and shutters here and book repair visits.

The Rows are unique: two levels of shops along Eastgate, Watergate, Northgate and Bridge Streets, with covered walkways at first-floor level. They date back to medieval times, and almost all of the buildings are listed. Any change to a shopfront on the Rows needs listed building consent and very careful design.

Outside the walls, Hoole and Boughton have local high streets with independent shops and cafés, and Handbridge, across the river, has a small village-style centre.

Cheshire West and Chester Council handles planning for the city. Saltney straddles the border with Wales, with part of it in Flintshire, so it is worth checking which side your premises sit on.

Industrial and trade units on the city's edge also need roller doors and security doors, which we supply and service.`,
    faqs: [
      {
        question: 'Can I change a shopfront on the Chester Rows?',
        answer:
          'Only with listed building consent and a design that respects the medieval buildings. We can advise and work with your heritage adviser.',
      },
      {
        question: 'Is Saltney in England or Wales?',
        answer:
          'Both. Part of Saltney is in Cheshire West and Chester and part is in Flintshire, Wales.',
      },
      {
        question: 'Do you cover Chester for repairs?',
        answer:
          'Yes. Chester is within our repair area.',
      },
    ],
  },
  {
    slug: 'gloucester',
    name: 'Gloucester',
    region: 'South West England',
    reach: 'regional',
    areas: ['Barton', 'City Centre', 'Eastgate Street', 'Gloucester Quays', 'Kingsholm', 'Longlevens', 'Northgate Street', 'Southgate Street', 'Tuffley', 'Westgate Street'],
    postcodeAreas: ['GL1', 'GL2', 'GL3', 'GL4'],
    primaryKeyword: 'shopfronts Gloucester',
    metaTitle: 'Shopfronts and Shutters in Gloucester',
    metaDescription:
      'Shopfronts, shutters, doors and repairs in Gloucester, from the four Gate streets to the Quays. Within our repair area. Call 07597 630000.',
    description: `Gloucester is down the M5 from us and inside our repair area. We fit new fronts and shutters and book repair visits here.

The city centre is laid out around four Gate streets, Northgate, Southgate, Eastgate and Westgate, meeting at the Cross. Many buildings are historic and listed, and the centre has conservation areas where Gloucester City Council expects shopfronts to respect the older buildings.

Gloucester Quays is an outlet and leisure area beside the historic docks, with its own landlord rules. The docks themselves are a conservation area with listed warehouses.

Barton Street is a varied, independent shopping street, and Kingsholm, Tuffley and Longlevens have local centres.

Industrial units around the city also need roller doors, security doors and fire doors, which we supply and fit.`,
    faqs: [
      {
        question: 'Do you cover Gloucester for repairs?',
        answer:
          'Yes. Gloucester is within our repair area.',
      },
      {
        question: 'Are the Gate streets listed?',
        answer:
          'Many buildings on them are listed, and the centre has conservation areas, so changes need careful design.',
      },
      {
        question: 'Does Gloucester Quays have its own design rules?',
        answer:
          'Yes. Tenants follow the centre\'s landlord rules as well as planning.',
      },
    ],
  },
  {
    slug: 'peterborough',
    name: 'Peterborough',
    region: 'East of England',
    reach: 'regional',
    areas: ['Bridge Street', 'Cathedral Square', 'City Centre', 'Dogsthorpe', 'Fletton', 'Orton', 'Queensgate', 'Werrington', 'Westgate', 'Woodston'],
    postcodeAreas: ['PE1', 'PE2', 'PE3', 'PE4', 'PE6', 'PE7'],
    primaryKeyword: 'shopfronts Peterborough',
    metaTitle: 'Shopfronts and Shutters in Peterborough',
    metaDescription:
      'Shopfronts, shutters, doors and repairs in Peterborough, from Cathedral Square to Orton. Within our repair area. Call 07597 630000.',
    description: `Peterborough is reached along the A14 and A1 and sits within our repair area. We fit new fronts and shutters here and book repair visits.

Cathedral Square and Bridge Street form the historic centre, with listed buildings and a conservation area around the Cathedral. Peterborough City Council expects shopfronts there to suit the setting.

Queensgate is the main shopping centre, with its own landlord rules for tenants.

Lincoln Road, near Millfield, is a busy independent shopping street with food shops, restaurants and clothing stores. Orton and Werrington were built as new town townships, and their local centres have modern units with fewer planning constraints.

Peterborough is also a major logistics centre, and we supply industrial roller doors and security doors for warehouses and distribution units.`,
    faqs: [
      {
        question: 'Do you cover Peterborough for repairs?',
        answer:
          'Yes. Peterborough is within our repair area.',
      },
      {
        question: 'Is Cathedral Square a conservation area?',
        answer:
          'Yes. Changes there need careful design, and several buildings are listed.',
      },
      {
        question: 'Do you fit doors for warehouses in Peterborough?',
        answer:
          'Yes. Industrial roller doors and steel security doors, fitted and serviced.',
      },
    ],
  },
];
