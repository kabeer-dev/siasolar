import React from 'react';
import TopBar from '../../shared/topBar';
import ComingSoon from '../comingSoon';
import BusinessStatics from './BusinessStatics';
import SolarJourney from './SolarJourney';
import Footer from '@/components/shared/footer';

export default function Home() {
  return (
    <div>
      <TopBar />
      <BusinessStatics />
      <SolarJourney />
      <Footer />
      {/* <ComingSoon /> */}
    </div>
  );
}
