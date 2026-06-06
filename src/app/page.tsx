import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HomePage from '@/components/pages/home';

export const metadata = {
  title: 'SIA Solar & Electric — Solar Energy Solutions in Pakistan',
  description:
    'SIA Solar specializes in commercial and residential solar installations, electrical inspections, net metering, and sustainable energy solutions across Pakistan.',
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
}
