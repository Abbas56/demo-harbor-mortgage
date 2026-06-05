export const site = {
  name: 'Harbor Mortgage Advice',
  legalName: 'Harbor Mortgage Advice Ltd',
  tagline: 'Mortgage advice in Norwich',
  description: 'FCA-authorised independent mortgage broker in Norwich. Whole-of-market advice for first-time buyers, remortgages and buy-to-let across Norfolk.',
  phone: '01603 882 410',
  phoneTel: '+441603882410',
  email: 'hello@harbormortgage-demo.co.uk',
  address: {
    street: '8 Tombland',
    city: 'Norwich',
    region: 'Norfolk',
    postcode: 'NR3 1HF',
  },
  primaryCtaHref: '/book-appointment/',
  primaryCtaLabel: 'Book appointment',
  formAction: 'https://formspree.io/f/demo-harbor',
  nav: [
  {
    "label": "Mortgages",
    "href": "/mortgages/first-time-buyers/"
  },
  {
    "label": "Guides",
    "href": "/guides/first-time-buyer-mortgage-guide/"
  },
  {
    "label": "About",
    "href": "/about/"
  },
  {
    "label": "Fees",
    "href": "/fees/"
  },
  {
    "label": "Contact",
    "href": "/contact/"
  }
],
  footerLinks: [
  {
    "label": "First-time buyers",
    "href": "/mortgages/first-time-buyers/"
  },
  {
    "label": "Remortgaging",
    "href": "/mortgages/remortgaging/"
  },
  {
    "label": "Fees",
    "href": "/fees/"
  },
  {
    "label": "FAQ",
    "href": "/faq/"
  }
],
  trustItems: [{"label":"FCA","text":"Authorised & regulated"},{"label":"Whole of market","text":"Independent advice"},{"label":"Local","text":"Norwich & Norfolk"}],
} as const;
