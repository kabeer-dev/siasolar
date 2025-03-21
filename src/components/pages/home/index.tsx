import React from 'react';
import TopBar from '../../shared/topBar';
import ComingSoon from '../comingSoon';
import EnergySolutions from './EnergySolutions';
import BusinessStatics from './BusinessStatics';
import SolarJourney from './SolarJourney';
import Footer from '@/components/shared/footer';

export default function Home() {
  return (
    <div>
      <TopBar />
      <EnergySolutions />
      <BusinessStatics />
      <SolarJourney />
      <Footer />
      {/* <ComingSoon /> */}
    </div>
  );
}
