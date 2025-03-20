import React from 'react';
import TopBar from '../../shared/topBar';
import ComingSoon from '../comingSoon';
import SolarJourney from './SolarJourney';
import Footer from '@/components/shared/footer';

export default function Home() {
  return (
    <div>
      <TopBar />
      <SolarJourney />
      <Footer />
      {/* <ComingSoon /> */}
    </div>
  );
}
