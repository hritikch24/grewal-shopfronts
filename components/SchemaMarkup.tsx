interface SchemaMarkupProps {
  type: 'LocalBusiness' | 'Service' | 'FAQPage';
  data?: Record<string, unknown>;
}

const defaultLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.grewalshopfrontandshutters.co.uk/#localbusiness',
  name: 'Grewal Shopfront & Shutters',
  legalName: 'Grewal Shopfront & Shutters Limited',
  additionalType: 'https://en.wikipedia.org/wiki/Shopfront',
  description:
    'Professional shop front and shutter installation and repair specialists. We provide security roller shutters, aluminium shopfronts, steel security doors, industrial shutters, automatic sliding doors, toughened glass shopfronts, fire doors, and emergency callout services across the UK.',
  url: 'https://www.grewalshopfrontandshutters.co.uk',
  telephone: '+447597630000',
  email: 'info@grewalshopfrontandshutters.co.uk',
  foundingDate: '2004',
  priceRange: '££',
  image: 'https://www.grewalshopfrontandshutters.co.uk/assets/grewal-logo.png',
  logo: 'https://www.grewalshopfrontandshutters.co.uk/assets/grewal-logo.png',
  hasMap: 'https://maps.google.com/?q=31+Trelawney+Road+Exhall+Coventry+CV7+9FB',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '31 Trelawney Road',
    addressLocality: 'Exhall, Coventry',
    postalCode: 'CV7 9FB',
    addressCountry: 'GB',
    addressRegion: 'West Midlands',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.4651,
    longitude: -1.4823,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '16:00',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+447597630000',
      contactType: 'customer support',
      contactOption: 'TollFree',
      availableLanguage: 'English',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
    {
      '@type': 'ContactPoint',
      telephone: '+447597630000',
      contactType: 'sales',
      availableLanguage: 'English',
    },
  ],
  areaServed: [
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'City', name: 'London' },
    { '@type': 'City', name: 'Birmingham' },
    { '@type': 'City', name: 'Manchester' },
    { '@type': 'City', name: 'Leeds' },
    { '@type': 'City', name: 'Sheffield' },
    { '@type': 'City', name: 'Liverpool' },
    { '@type': 'City', name: 'Glasgow' },
    { '@type': 'City', name: 'Bristol' },
    { '@type': 'City', name: 'Nottingham' },
    { '@type': 'City', name: 'Leicester' },
    { '@type': 'City', name: 'Coventry' },
    { '@type': 'City', name: 'Wolverhampton' },
    { '@type': 'City', name: 'Cardiff' },
    { '@type': 'City', name: 'Newcastle upon Tyne' },
    { '@type': 'City', name: 'Edinburgh' },
    { '@type': 'City', name: 'Southampton' },
    { '@type': 'City', name: 'Brighton' },
    { '@type': 'City', name: 'Aberdeen' },
    { '@type': 'City', name: 'Bath' },
    { '@type': 'City', name: 'Bolton' },
    { '@type': 'City', name: 'Bournemouth' },
    { '@type': 'City', name: 'Bradford' },
    { '@type': 'City', name: 'Cambridge' },
    { '@type': 'City', name: 'Canterbury' },
    { '@type': 'City', name: 'Chelmsford' },
    { '@type': 'City', name: 'Chester' },
    { '@type': 'City', name: 'Colchester' },
    { '@type': 'City', name: 'Derby' },
    { '@type': 'City', name: 'Doncaster' },
    { '@type': 'City', name: 'Dundee' },
    { '@type': 'City', name: 'Exeter' },
    { '@type': 'City', name: 'Gloucester' },
    { '@type': 'City', name: 'Hull' },
    { '@type': 'City', name: 'Ipswich' },
    { '@type': 'City', name: 'Lancaster' },
    { '@type': 'City', name: 'Lincoln' },
    { '@type': 'City', name: 'Luton' },
    { '@type': 'City', name: 'Maidstone' },
    { '@type': 'City', name: 'Milton Keynes' },
    { '@type': 'City', name: 'Northampton' },
    { '@type': 'City', name: 'Norwich' },
    { '@type': 'City', name: 'Oxford' },
    { '@type': 'City', name: 'Peterborough' },
    { '@type': 'City', name: 'Plymouth' },
    { '@type': 'City', name: 'Portsmouth' },
    { '@type': 'City', name: 'Preston' },
    { '@type': 'City', name: 'Reading' },
    { '@type': 'City', name: 'Rotherham' },
    { '@type': 'City', name: 'Salford' },
    { '@type': 'City', name: 'Slough' },
    { '@type': 'City', name: 'Stoke-on-Trent' },
    { '@type': 'City', name: 'Sunderland' },
    { '@type': 'City', name: 'Swansea' },
    { '@type': 'City', name: 'Swindon' },
    { '@type': 'City', name: 'Wakefield' },
    { '@type': 'City', name: 'Worcester' },
    { '@type': 'City', name: 'York' },
    { '@type': 'City', name: 'Belfast' },
    { '@type': 'City', name: 'Middlesbrough' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Shopfront & Shutter Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aluminium Shopfronts', url: 'https://www.grewalshopfrontandshutters.co.uk/services/aluminium-shopfronts' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roller Shutters', url: 'https://www.grewalshopfrontandshutters.co.uk/services/roller-shutters' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Security Doors', url: 'https://www.grewalshopfrontandshutters.co.uk/services/security-doors' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatic Doors', url: 'https://www.grewalshopfrontandshutters.co.uk/services/automatic-doors' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bi-Fold Doors', url: 'https://www.grewalshopfrontandshutters.co.uk/services/bi-fold-doors' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fire Doors', url: 'https://www.grewalshopfrontandshutters.co.uk/services/fire-doors' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopfront Repairs', url: 'https://www.grewalshopfrontandshutters.co.uk/services/shopfront-repairs' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Callout', url: 'https://www.grewalshopfrontandshutters.co.uk/services/emergency-callout' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shutter Repair', url: 'https://www.grewalshopfrontandshutters.co.uk/services/shutter-repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Glass Replacement', url: 'https://www.grewalshopfrontandshutters.co.uk/services/glass-replacement' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aluminium Doors', url: 'https://www.grewalshopfrontandshutters.co.uk/services/aluminium-doors' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aluminium Windows', url: 'https://www.grewalshopfrontandshutters.co.uk/services/aluminium-windows' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Curtain Walling', url: 'https://www.grewalshopfrontandshutters.co.uk/services/curtain-walling' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Glass Shopfronts', url: 'https://www.grewalshopfrontandshutters.co.uk/services/glass-shopfronts' } },
    ],
  },
  sameAs: [
    'https://wa.me/447597630000',
  ],
  knowsAbout: [
    'Security roller shutter installation',
    'Aluminium shopfront installation',
    'Steel security door installation LPS 1175',
    'Industrial shutter installation and maintenance',
    'Automatic sliding door systems BS EN 16005',
    'Toughened glass shopfront installation',
    'Electric roller shutter installation',
    'Fire door installation FD30 FD60',
    'Scissor gate installation',
    'PVC strip curtain installation',
    'Curtain walling systems',
    'Security bollard installation',
    'Shopfront repairs and emergency glazing',
    'Emergency shutter repair',
    'Conservation area shopfront planning',
    'Listed building shopfront consent',
    'Building Regulations Part L compliance',
    'PAS 24 security glazing',
    'DDA compliant entrances',
    'Thermally broken aluminium profiles',
    'Commercial entrance solutions UK',
    'Roller shutter repair and spring replacement',
    'Commercial glass replacement and shopfront glazing',
  ],
  slogan: "UK's Premier Shopfront & Shutter Specialists",
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 15, maxValue: 40 },
  paymentAccepted: 'Cash, Bank Transfer, Card',
  currenciesAccepted: 'GBP',
  isicV4: '4330',
  parentOrganization: {
    '@id': 'https://www.grewalshopfrontandshutters.co.uk/#organization',
  },
};

const defaultOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.grewalshopfrontandshutters.co.uk/#organization',
  name: 'Grewal Shopfront & Shutters',
  legalName: 'Grewal Shopfront & Shutters Limited',
  url: 'https://www.grewalshopfrontandshutters.co.uk',
  logo: 'https://www.grewalshopfrontandshutters.co.uk/assets/grewal-logo.png',
  image: 'https://www.grewalshopfrontandshutters.co.uk/assets/grewal-logo.png',
  telephone: '+447597630000',
  email: 'info@grewalshopfrontandshutters.co.uk',
  foundingDate: '2004',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '31 Trelawney Road',
    addressLocality: 'Exhall, Coventry',
    postalCode: 'CV7 9FB',
    addressCountry: 'GB',
    addressRegion: 'West Midlands',
  },
  sameAs: [
    'https://wa.me/447597630000',
  ],
  knowsAbout: [
    'Security roller shutter installation',
    'Aluminium shopfront installation',
    'Steel security door installation LPS 1175',
    'Industrial shutter installation and maintenance',
    'Automatic sliding door systems BS EN 16005',
    'Toughened glass shopfront installation',
    'Electric roller shutter installation',
    'Fire door installation FD30 FD60',
    'Scissor gate installation',
    'PVC strip curtain installation',
    'Curtain walling systems',
    'Security bollard installation',
    'Shopfront repairs and emergency glazing',
    'Emergency shutter repair',
    'Conservation area shopfront planning',
    'Listed building shopfront consent',
    'Building Regulations Part L compliance',
    'PAS 24 security glazing',
    'DDA compliant entrances',
    'Thermally broken aluminium profiles',
    'Commercial entrance solutions UK',
    'Roller shutter repair and spring replacement',
    'Commercial glass replacement and shopfront glazing',
  ],
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 15, maxValue: 40 },
};

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  if (type === 'LocalBusiness') {
    const localSchema = data || defaultLocalBusiness;
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
        />
        {!data && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(defaultOrganization) }}
          />
        )}
      </>
    );
  }

  let schema: Record<string, unknown>;

  if (type === 'Service') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Grewal Shopfront & Shutters',
        telephone: '+447597630000',
        url: 'https://www.grewalshopfrontandshutters.co.uk',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '31 Trelawney Road',
          addressLocality: 'Exhall, Coventry',
          postalCode: 'CV7 9FB',
          addressCountry: 'GB',
          addressRegion: 'West Midlands',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 52.4651,
          longitude: -1.4823,
        },
      },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      ...data,
    };
  } else {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      ...data,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
