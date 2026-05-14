// Single source of truth for the service list — used by Header, Footer,
// the homepage services grid, and the related-services blocks on each
// individual service page.

export type ServiceMeta = {
  slug: string;
  name: string;
  navLabel?: string;
  priceFrom?: string;
  blurb: string;
};

export const SERVICES: ServiceMeta[] = [
  {
    slug: '/driveway-cleaning-kilkenny',
    name: 'Driveway Cleaning',
    priceFrom: '€120',
    blurb: 'Tarmac, concrete, cobblelock and block paving brought back to life. Joint re-sanding included.',
  },
  {
    slug: '/patio-cleaning-kilkenny',
    name: 'Patio Cleaning',
    priceFrom: '€100',
    blurb: 'Lift years of moss, algae and grime from sandstone, slabs and natural stone patios.',
  },
  {
    slug: '/roof-cleaning-kilkenny',
    name: 'Roof Cleaning',
    priceFrom: '€350',
    blurb: 'Safe soft-washing for tiles and slate. No high-pressure damage.',
  },
  {
    slug: '/soft-washing-kilkenny',
    name: 'Soft Washing',
    priceFrom: '€200',
    blurb: 'Low-pressure biocide method for render, roofs, walls and delicate surfaces.',
  },
  {
    slug: '/render-cleaning-kilkenny',
    name: 'Render Cleaning',
    priceFrom: '€250',
    blurb: 'Pebbledash, painted and silicone render — soft-washed, no surface damage.',
  },
  {
    slug: '/decking-cleaning-kilkenny',
    name: 'Decking Restoration',
    priceFrom: '€150',
    blurb: 'Strip back the grey, kill mould and algae, bring the timber back to life.',
  },
  {
    slug: '/commercial-power-washing-kilkenny',
    name: 'Commercial Power Washing',
    navLabel: 'Commercial',
    priceFrom: 'Quoted per site',
    blurb: 'Shopfronts, car parks, forecourts and warehouses. Out-of-hours scheduling available.',
  },
  {
    slug: '/farmyard-cleaning-kilkenny',
    name: 'Farmyard & Agri Cleaning',
    navLabel: 'Farmyard',
    priceFrom: 'Quoted per job',
    blurb: 'Yards, sheds, parlours and slatted units. TB-test ready cleans across Kilkenny.',
  },
  {
    slug: '/gutter-cleaning-kilkenny',
    name: 'Gutter Cleaning',
    priceFrom: '€80',
    blurb: 'Industrial gutter vacuum from the ground. No ladders, no mess, camera inspection.',
  },
];
