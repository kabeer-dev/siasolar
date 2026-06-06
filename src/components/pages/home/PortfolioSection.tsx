'use client';
import {useState} from 'react';

const tabs = ['All Works', 'Residential', 'Commercial'];

const projects = [
  {
    title: 'Gujranwala Industrial Plant',
    category: 'Commercial',
    capacity: '500 kW',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
    span: 'col-span-2 row-span-2',
  },
  {
    title: 'Lahore Residential Complex',
    category: 'Residential',
    capacity: '15 kW',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Faisalabad Factory',
    category: 'Commercial',
    capacity: '1.2 MW',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Islamabad Villa',
    category: 'Residential',
    capacity: '10 kW',
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&q=80',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Sialkot Commercial Hub',
    category: 'Commercial',
    capacity: '250 kW',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    span: 'col-span-1 row-span-1',
  },
];

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('All Works');

  const filtered =
    activeTab === 'All Works'
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold text-brand tracking-[0.2em] uppercase mb-3">
              Our Work
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              Our Portfolio
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              A showcase of recent solar engineering excellence.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 bg-gray-100 p-1 rounded-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-brand text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[220px]">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{backgroundImage: `url(${project.image})`}}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-bold text-brand-light uppercase tracking-wider">
                  {project.category}
                </span>
                <p className="text-white font-bold mt-1">{project.title}</p>
                <p className="text-gray-300 text-xs mt-0.5">
                  {project.capacity} installed
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
