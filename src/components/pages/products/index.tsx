'use client';
import {useState, useMemo} from 'react';
import Image from 'next/image';
import {PRODUCT_CATEGORIES, PRODUCTS, Product} from '@/constants/products';
import {SITE_DATA} from '@/constants/general';

const WA_NUMBER = SITE_DATA.phone.replace(/\D/g, '');

function waLink(productName?: string) {
  const text = productName
    ? `Hi SIA Solar! I'm interested in "${productName}". Please share the pricing and availability.`
    : `Hi SIA Solar! I'd like to get a custom quote for solar products.`;

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function ProductCard({product}: {product: Product}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group flex flex-col">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {product.badge}
          </span>
        )}
        <span className="absolute top-3 right-3 bg-white/90 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
          {product.subcategory}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1.5">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mb-3 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.specs.map((spec) => (
            <span
              key={spec}
              className="text-xs bg-brand-faint text-brand font-medium px-2.5 py-1 rounded-lg border border-brand-pale"
            >
              {spec}
            </span>
          ))}
        </div>

        <div className="mt-auto space-y-2">
          <p className="text-center text-xs text-gray-400 font-medium">
            Contact us for pricing
          </p>
          <a
            href={waLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-brand hover:bg-brand-dark text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
          >
            <WhatsAppIcon />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeSubcategory, setActiveSubcategory] = useState<string>('all');

  const popularProducts = useMemo(() => PRODUCTS.filter((p) => p.popular), []);

  const currentCategory = PRODUCT_CATEGORIES.find(
    (c) => c.id === activeCategory
  );

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return PRODUCTS;
    if (activeSubcategory === 'all')
      return PRODUCTS.filter((p) => p.category === activeCategory);

    return PRODUCTS.filter(
      (p) =>
        p.category === activeCategory && p.subcategory === activeSubcategory
    );
  }, [activeCategory, activeSubcategory]);

  function handleCategoryChange(catId: string) {
    setActiveCategory(catId);
    setActiveSubcategory('all');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-gray-900 text-white pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-brand/20 text-brand-light text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-brand/30">
            Our Products
          </span>
          <h1 className="text-4xl lg:text-5xl font-black mb-4 leading-tight">
            Quality Solar Products
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Browse our range of premium solar panels, inverters, batteries, and
            accessories. Contact us on WhatsApp for pricing and availability.
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            <WhatsAppIcon />
            {SITE_DATA.phone}
          </a>
        </div>
      </section>

      {/* ── Popular Products ──────────────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-brand rounded-full" />
            <div>
              <h2 className="text-2xl font-black text-gray-900">
                Popular Products
              </h2>
              <p className="text-sm text-gray-500 mt-0.5">
                Our most requested items
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Browse by Category ────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-brand rounded-full" />
            <div>
              <h2 className="text-2xl font-black text-gray-900">
                Browse by Category
              </h2>
              <p className="text-sm text-gray-500 mt-0.5">
                Select a category to filter products
              </p>
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2.5 mb-5">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === 'all'
                  ? 'bg-brand text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Products
            </button>
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-brand text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Subcategory chips */}
          {currentCategory && (
            <div className="flex flex-wrap gap-2 mb-8 p-4 bg-brand-faint rounded-2xl border border-brand-pale">
              <button
                onClick={() => setActiveSubcategory('all')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeSubcategory === 'all'
                    ? 'bg-brand text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                All {currentCategory.label}
              </button>
              {currentCategory.subcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubcategory(sub)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeSubcategory === sub
                      ? 'bg-brand text-white'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

          {/* Products grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              No products found in this category.
            </div>
          )}
        </div>
      </section>

      {/* ── WhatsApp CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-brand">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-3">
            Want a Custom Quote?
          </h2>
          <p className="text-white/80 mb-8 text-base">
            Can&apos;t find what you&apos;re looking for? Contact us directly on
            WhatsApp for pricing, bulk orders, and expert consultation.
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-brand font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-base"
          >
            <WhatsAppIcon />
            {SITE_DATA.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
