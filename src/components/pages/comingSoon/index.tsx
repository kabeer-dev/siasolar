'use client';
import Image from 'next/image';
import CountdownTimer from '@/components/shared/countdownTimer';
import {getCurrentYear} from '@/utils/general';
import {SITE_DATA} from '@/constants/general';

const features = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-7 h-7"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    label: 'CLEAN\nENERGY',
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-7 h-7"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    label: 'LOWER\nBILLS',
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-7 h-7"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    label: 'ECO\nFRIENDLY',
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-7 h-7"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: 'RELIABLE\nSOLUTIONS',
  },
];

export default function ComingSoon() {
  const currentYear = getCurrentYear();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #f0fdf4 0%, #fefce8 50%, #f0fdf4 100%)',
      }}
    >
      {/* Decorative background circles */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #16a34a, transparent)',
          transform: 'translate(-40%, -40%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #16a34a, transparent)',
          transform: 'translate(40%, 40%)',
        }}
      />
      <div
        className="absolute top-1/2 left-0 w-64 h-64 rounded-full opacity-5"
        style={{
          background: 'radial-gradient(circle, #ca8a04, transparent)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-10 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-4">
          <Image
            src="/images/logo.png"
            alt="SIA Solar Logo"
            width={130}
            height={130}
            className="object-contain drop-shadow-md"
          />
        </div>

        {/* Brand Name */}
        <h1
          className="text-3xl font-extrabold tracking-wide mb-1"
          style={{color: '#15803d'}}
        >
          SIA SOLAR &amp; ELECTRIC
        </h1>

        {/* Tagline */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10 bg-brand" />
          <p className="text-xs tracking-[0.2em] font-semibold text-brand-dark uppercase">
            Solar Today Saving Forever
          </p>
          <div className="h-px w-10 bg-brand" />
        </div>

        {/* Coming Soon heading */}
        <p className="text-sm tracking-[0.3em] text-gray-500 uppercase font-medium mb-1">
          Website
        </p>
        <h2
          className="text-5xl font-black tracking-wide mb-4"
          style={{
            color: '#15803d',
            textShadow: '0 2px 8px rgba(21,128,61,0.15)',
          }}
        >
          COMING SOON
        </h2>

        {/* Sun icon */}
        <div className="text-yellow-500 mb-3">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <circle cx="12" cy="12" r="5" />
            <path
              d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          We are working hard to launch something{' '}
          <span className="text-yellow-500 font-semibold">bright</span> and{' '}
          <span className="text-brand font-semibold">sustainable</span> for
          you.
        </p>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Feature Icons */}
        <div className="flex justify-center gap-0 mt-8 w-full border border-gray-200 rounded-2xl bg-white/60 backdrop-blur-sm overflow-hidden divide-x divide-gray-200">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex-1 flex flex-col items-center py-4 px-2 gap-2"
            >
              <div className="text-brand">{f.icon}</div>
              <p className="text-xs font-bold text-gray-700 tracking-wide whitespace-pre-line leading-tight">
                {f.label}
              </p>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-5 w-full flex items-center gap-3 border border-brand rounded-full px-5 py-3">
          <div className="text-brand shrink-0">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 h-6"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
              <path d="M8 12s1.5 3 4 3 4-3 4-3" strokeLinecap="round" />
              <path
                d="M9 9h.01M15 9h.01"
                strokeLinecap="round"
                strokeWidth={2}
              />
            </svg>
          </div>
          <p className="text-sm text-gray-700">
            Powering a greener tomorrow with{' '}
            <span className="text-brand font-semibold">
              smart solar solutions.
            </span>
          </p>
        </div>

        {/* Stay Connected */}
        <div className="mt-8 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gray-300" />
            <p className="text-xs tracking-[0.2em] font-bold text-gray-600 uppercase">
              Stay Connected
            </p>
            <div className="h-px flex-1 bg-gray-300" />
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
            <a
              href={`tel:${SITE_DATA.phone}`}
              className="flex items-center gap-2 hover:text-brand transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
              </div>
              {SITE_DATA.phone}
            </a>
            <a
              href={`mailto:${SITE_DATA.email}`}
              className="flex items-center gap-2 hover:text-brand transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              {SITE_DATA.email}
            </a>
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              www.siasolar.pk
            </span>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-xs text-gray-500">
          &copy; {currentYear} SIA Solar &amp; Electric. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
