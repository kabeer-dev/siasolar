const companies = [
  'NAVEENA',
  'LOWERED',
  'ARTRONICS',
  'GREENTECH',
  'QUANTUM',
  'SOTIECH',
];

export default function CompaniesSection() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-gray-400 tracking-[0.25em] uppercase mb-10">
          Companies We&apos;ve Powered
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {companies.map((name) => (
            <span
              key={name}
              className="text-lg font-black text-gray-300 tracking-widest hover:text-gray-500 transition-colors cursor-default select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
