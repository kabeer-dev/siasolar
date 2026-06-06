import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80)',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand-mid/40 text-brand-light text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-light animate-pulse" />
            Solar Energy Solutions
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Leading the{' '}
            <span className="text-brand-light">Solar</span>{' '}
            Revolution
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
            Harnessing the power of the sun to provide sustainable, cost-effective
            energy solutions for your home and business. Join SIA Solar in building
            a cleaner future.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#services"
              className="bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-brand/30 hover:-translate-y-0.5"
            >
              Explore Solutions
            </Link>
            <Link
              href="#about"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-full transition-all backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 flex flex-wrap gap-8">
          {[
            {value: '15+', label: 'Years of Excellence'},
            {value: '500+', label: 'Projects Completed'},
            {value: '2MW+', label: 'Power Installed'},
            {value: '98%', label: 'Client Satisfaction'},
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-black text-brand-light">{stat.value}</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
