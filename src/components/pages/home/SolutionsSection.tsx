import Link from 'next/link';

const solutions = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    color: 'bg-brand-faint text-brand',
    title: 'Residential Solar',
    desc: 'Achieve energy independence and lower your utility bills with premium home solar systems. Custom-designed for every roof type.',
    href: '#contact',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    color: 'bg-blue-50 text-blue-600',
    title: 'Commercial Systems',
    desc: 'Optimize your operational costs and meet ESG goals with enterprise-grade solar infrastructure for offices and factories.',
    href: '#contact',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path d="M3 3h18v18H3z" />
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
      </svg>
    ),
    color: 'bg-orange-50 text-orange-600',
    title: 'Industrial Projects',
    desc: 'Massive-scale energy harvesting for factories and manufacturing plants with smart grid integration and net metering.',
    href: '#contact',
  },
];

export default function SolutionsSection() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold text-brand tracking-[0.2em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Our Solar Solutions
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Expert installation services designed for longevity and performance
            across every sector.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all group border border-gray-100 hover:-translate-y-1"
            >
              <div className={`inline-flex p-4 rounded-xl mb-6 ${s.color}`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {s.desc}
              </p>
              <Link
                href={s.href}
                className="inline-flex items-center gap-2 text-brand font-semibold text-sm group-hover:gap-3 transition-all"
              >
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
