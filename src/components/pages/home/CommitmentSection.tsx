export default function CommitmentSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden h-[480px] bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80)',
              }}
            />
            {/* Badge */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-subtle flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-brand">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-black text-gray-900">15+</p>
                <p className="text-xs text-gray-500 font-medium">
                  Years of Excellence
                </p>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <p className="text-xs font-bold text-brand tracking-[0.2em] uppercase mb-3">
              Our Commitment
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-6">
              Innovative Energy For A{' '}
              <span className="text-brand">Sustainable World</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              At SIA Solar &amp; Electric, our way of work is defined by precision
              and integrity. We don&apos;t just install panels; we engineer custom
              energy ecosystems tailored to your specific architectural and
              consumption needs.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: 'Tier-1 Quality Only',
                  desc: 'We partner exclusively with industry-leading manufacturers for maximum efficiency.',
                },
                {
                  title: 'Master Engineering',
                  desc: 'Every project is signed off by certified master electricians and solar engineers.',
                },
                {
                  title: 'Full Lifecycle Support',
                  desc: 'From consultation to installation, monitoring, and maintenance — we cover it all.',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-subtle flex items-center justify-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4 text-brand">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
