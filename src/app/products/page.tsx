import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ProductsPage from '@/components/pages/products';

export const metadata = {
  title: 'Products — SIA Solar & Electric',
  description:
    'Browse our range of premium solar panels, inverters, batteries, and accessories. Contact us on WhatsApp for pricing and availability.',
};

export default function Products() {
  return (
    <>
      <Header />
      <main>
        <ProductsPage />
      </main>
      <Footer />
    </>
  );
}
