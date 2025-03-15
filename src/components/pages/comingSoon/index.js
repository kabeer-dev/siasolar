import React from 'react';
import Image from 'next/image';
import CountdownTimer from '@/components/shared/countdownTimer';
import {getCurrentYear} from '@/components/shared/utils/general';

export default function ComingSoon() {
  const currentYear = getCurrentYear();
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="sm:col-span-5 col-span-12 p-5 h-100 sm:h-screen">
        <Image
          src="/images/landing-img.jpg"
          alt="coming-soon"
          width={200}
          height={500}
          className="sm:h-full h-100 w-full object-fit rounded-3xl"
        />
      </div>
      <div className="sm:col-span-7 col-span-12 p-5 mt-10">
        <Image
          src="/images/logo.png"
          alt="coming-soon"
          width={70}
          height={70}
        />
        <div className="mt-4 text-xl text-black">COMING SOON</div>
        <div className="text-3xl font-bold mt-5">
          Stay tuned!{' '}
          <span className="text-green-700">We are Launching Soon.</span>
        </div>

        <CountdownTimer />

        <div className="mt-50">
          <p className="text-black">
            Copyright &copy; {currentYear} SIA Solar. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
