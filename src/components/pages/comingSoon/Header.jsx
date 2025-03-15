import Image from 'next/image';
import React from 'react';

export default function ComingSoonPageHeader() {
  return (
    <div className="grid grid-cols-2">
      <div className="text-left">
        <Image src="/images/solar-sheets.jpg" width="200" height="200" />
      </div>
      <div className="text-right">
        <h3>Sia Solar</h3>
      </div>
    </div>
  );
}
