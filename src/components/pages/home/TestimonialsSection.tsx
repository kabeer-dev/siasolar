const testimonials = [
  {
    name: 'Robin Zhan',
    role: 'Homeowner, New Jersey',
    avatar: 'R',
    rating: 5,
    text: 'SIA Solar completely transformed how we view energy. The installation was seamless and the savings were immediate. Highly recommended!',
  },
  {
    name: 'Amanda Millar',
    role: 'Operations Manager, Industrial Hub',
    avatar: 'A',
    rating: 5,
    text: 'The professionalism of the engineering team is unmatched. They designed a custom system that perfectly fits our factory\'s high demand.',
  },
  {
    name: 'David Solomon',
    role: 'CEO, Solomon Foods',
    avatar: 'D',
    rating: 5,
    text: 'A top-tier investment for our commercial plans. The ROI was better than projected and the app makes monitoring easy.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-bold text-brand tracking-[0.2em] uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
            What Our Clients Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`rounded-2xl p-8 border transition-all ${
                i === 1
                  ? 'bg-brand border-brand text-white shadow-xl shadow-brand/20'
                  : 'bg-white border-gray-100 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({length: t.rating}).map((_, j) => (
                  <svg key={j} viewBox="0 0 24 24" fill="currentColor" className={`w-4 h-4 ${i === 1 ? 'text-yellow-300' : 'text-yellow-400'}`}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className={`text-sm leading-relaxed mb-6 ${i === 1 ? 'text-brand-subtle' : 'text-gray-600'}`}>
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${i === 1 ? 'bg-white/20 text-white' : 'bg-brand-subtle text-brand-dark'}`}>
                  {t.avatar}
                </div>
                <div>
                  <p className={`font-bold text-sm ${i === 1 ? 'text-white' : 'text-gray-900'}`}>
                    {t.name}
                  </p>
                  <p className={`text-xs ${i === 1 ? 'text-brand-pale' : 'text-gray-400'}`}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
