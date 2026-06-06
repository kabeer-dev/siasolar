'use client';
import {useState} from 'react';

export default function ImpactSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-mid blur-[120px] translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content side */}
          <div>
            <p className="text-xs font-bold text-brand-light tracking-[0.2em] uppercase mb-3">
              Real Results
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-6">
              See Our Impact{' '}
              <span className="text-brand-light">In Action</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Watch how we transformed this multi-acre industrial site into a 5MW
              power-generating hub. Our testimonials speak to the reliability of
              our installations.
            </p>

            {/* Testimonial quote */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-brand-mid mb-4 opacity-60">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-300 text-sm leading-relaxed italic mb-4">
                &ldquo;SIA Solar delivered ahead of schedule and our energy bills dropped by 80% immediately. The system quality and team professionalism were exceptional.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center text-white font-bold text-sm">
                  S
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Samir J.</p>
                  <p className="text-gray-500 text-xs">Operations Director</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({length: 5}).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Video side */}
          <div className="relative">
            <div
              className="relative rounded-2xl overflow-hidden aspect-video bg-cover bg-center cursor-pointer group"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80)',
              }}
              onClick={() => setPlaying(true)}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              {!playing ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-brand flex items-center justify-center shadow-2xl shadow-brand/40 group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-white ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                  <p className="text-white text-sm">Video coming soon</p>
                </div>
              )}
              <div className="absolute bottom-4 left-4 bg-black/60 rounded-full px-4 py-1.5 text-xs text-white font-medium">
                ▶ Project Showcase — 3:42
              </div>
            </div>

            {/* Stats below video */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[
                {value: '5 MW', label: 'Capacity'},
                {value: '80%', label: 'Bill Reduction'},
                {value: '25yr', label: 'Warranty'},
              ].map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <p className="text-brand-light font-black text-xl">{s.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
