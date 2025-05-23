import React from 'react';
import ComingSoon from '../comingSoon';
import Banner from './Banner';
import CallSolution from './CallSolution';
import MainVideo from './MainVideo';
import EnergySolutions from './EnergySolutions';
import BusinessStatics from './BusinessStatics';
import SolarJourney from './SolarJourney';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div>
      <Banner />
      <CallSolution />
      <MainVideo />
      <EnergySolutions />
      <BusinessStatics />
      <SolarJourney />
      <Footer />
      {/* <ComingSoon /> */}
    </div>
  );
}
