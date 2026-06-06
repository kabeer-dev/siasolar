export interface ProductCategory {
  id: string;
  label: string;
  subcategories: string[];
}

export interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  popular: boolean;
  image: string;
  specs: string[];
  badge?: string;
  description: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'panels',
    label: 'Solar Panels',
    subcategories: ['Monocrystalline', 'Polycrystalline', 'Bifacial', 'Half-Cut Cell'],
  },
  {
    id: 'inverters',
    label: 'Inverters',
    subcategories: ['On-Grid', 'Off-Grid', 'Hybrid', 'String'],
  },
  {
    id: 'batteries',
    label: 'Batteries',
    subcategories: ['Lithium-Ion', 'Lead-Acid', 'AGM / Deep Cycle'],
  },
  {
    id: 'accessories',
    label: 'Accessories',
    subcategories: ['Mounting Structures', 'Cables & Wiring', 'Charge Controllers', 'Net Metering'],
  },
];

export const PRODUCTS: Product[] = [
  // ── Solar Panels ──────────────────────────────────────────────────────────
  {
    id: 1,
    name: 'Mono PERC Solar Panel 550W',
    category: 'panels',
    subcategory: 'Monocrystalline',
    popular: true,
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
    specs: ['550W Output', '21.5% Efficiency', '25-Year Warranty'],
    badge: 'Best Seller',
    description:
      'High-efficiency monocrystalline panel ideal for residential and commercial installations.',
  },
  {
    id: 2,
    name: 'Bifacial Solar Panel 600W',
    category: 'panels',
    subcategory: 'Bifacial',
    popular: true,
    image:
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80',
    specs: ['600W Output', '22.8% Efficiency', 'Dual-Sided'],
    badge: 'Premium',
    description:
      'Captures sunlight from both sides for maximum energy generation in limited space.',
  },
  {
    id: 3,
    name: 'Half-Cut Cell Panel 545W',
    category: 'panels',
    subcategory: 'Half-Cut Cell',
    popular: false,
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
    specs: ['545W Output', '21.0% Efficiency', 'Shade Tolerant'],
    description:
      'Enhanced shading tolerance with half-cut cell technology for rooftop installations.',
  },
  {
    id: 4,
    name: 'Polycrystalline Panel 400W',
    category: 'panels',
    subcategory: 'Polycrystalline',
    popular: false,
    image:
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80',
    specs: ['400W Output', '18.5% Efficiency', 'Cost Effective'],
    description:
      'Budget-friendly option for large-scale solar farms and utility projects.',
  },

  // ── Inverters ─────────────────────────────────────────────────────────────
  {
    id: 5,
    name: 'Hybrid Inverter 5kW',
    category: 'inverters',
    subcategory: 'Hybrid',
    popular: true,
    image:
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80',
    specs: ['5kW Capacity', 'Battery + Grid', 'Wi-Fi Monitoring'],
    badge: 'Most Popular',
    description:
      'Works with both battery and grid — perfect for areas with frequent load shedding.',
  },
  {
    id: 6,
    name: 'On-Grid Inverter 10kW',
    category: 'inverters',
    subcategory: 'On-Grid',
    popular: true,
    image:
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80',
    specs: ['10kW Capacity', 'Net Metering Ready', '98.4% Efficiency'],
    description:
      'High-efficiency on-grid inverter designed for commercial net metering setups.',
  },
  {
    id: 7,
    name: 'Off-Grid Inverter 3kW',
    category: 'inverters',
    subcategory: 'Off-Grid',
    popular: false,
    image:
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80',
    specs: ['3kW Capacity', 'Pure Sine Wave', 'Battery Backup'],
    description:
      'Standalone inverter for remote locations and areas without grid access.',
  },
  {
    id: 8,
    name: 'String Inverter 20kW',
    category: 'inverters',
    subcategory: 'String',
    popular: false,
    image:
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80',
    specs: ['20kW Capacity', 'Multi-String', 'IP65 Rated'],
    description:
      'Designed for large commercial and industrial solar power systems.',
  },

  // ── Batteries ─────────────────────────────────────────────────────────────
  {
    id: 9,
    name: 'Lithium-Ion Battery 100Ah',
    category: 'batteries',
    subcategory: 'Lithium-Ion',
    popular: true,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    specs: ['100Ah Capacity', '5000+ Cycles', 'BMS Protected'],
    badge: 'Long Life',
    description:
      'Long-lasting lithium battery with built-in battery management system for solar storage.',
  },
  {
    id: 10,
    name: 'AGM Deep Cycle Battery 200Ah',
    category: 'batteries',
    subcategory: 'AGM / Deep Cycle',
    popular: false,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    specs: ['200Ah Capacity', 'Maintenance Free', 'Deep Discharge'],
    description:
      'Sealed AGM battery ideal for frequent deep discharge solar applications.',
  },
  {
    id: 11,
    name: 'Lead-Acid Tubular Battery 150Ah',
    category: 'batteries',
    subcategory: 'Lead-Acid',
    popular: false,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    specs: ['150Ah Capacity', 'Tubular Plate', '3-Year Warranty'],
    description:
      'Affordable tubular battery for standard solar backup systems and UPS.',
  },

  // ── Accessories ───────────────────────────────────────────────────────────
  {
    id: 12,
    name: 'Aluminum Mounting Structure',
    category: 'accessories',
    subcategory: 'Mounting Structures',
    popular: true,
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    specs: ['Anodized Aluminum', 'Roof & Ground', 'Wind Resistant'],
    badge: 'Durable',
    description:
      'Heavy-duty aluminum frames suitable for all roof types and ground-mounted systems.',
  },
  {
    id: 13,
    name: 'Solar DC Cable 6mm²',
    category: 'accessories',
    subcategory: 'Cables & Wiring',
    popular: false,
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    specs: ['6mm² Cross Section', 'UV Resistant', 'TUV Certified'],
    description:
      'High-quality solar-grade DC cable for panel-to-inverter connections.',
  },
  {
    id: 14,
    name: 'MPPT Charge Controller 60A',
    category: 'accessories',
    subcategory: 'Charge Controllers',
    popular: false,
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    specs: ['60A Output', 'MPPT Technology', 'LCD Display'],
    description:
      'Maximum power point tracking controller for optimal battery charging efficiency.',
  },
  {
    id: 15,
    name: 'Net Metering Kit (NEPRA Approved)',
    category: 'accessories',
    subcategory: 'Net Metering',
    popular: false,
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    specs: ['Bi-Directional Meter', 'NEPRA Approved', 'Complete Kit'],
    description:
      'Complete net metering setup package approved for Pakistan grid connection.',
  },
];
