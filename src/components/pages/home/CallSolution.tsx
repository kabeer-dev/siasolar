import React from 'react';
import Container from '@/components/layout/container';
import Image from 'next/image';
import {SITE_DATA} from '@/constants/general';

export default function CallSolution() {
  return (
    <div className="py-15">
      <Container>
        <div className="grid grid-cols-12">
          <div className="sm:col-span-3 col-span-12">
            <Image
              src="/images/man-working.jpg"
              alt="man-working"
              height={100}
              width={100}
              className="w-full sm:h-full h-50 object-cover rounded-tl-3xl sm:rounded-bl-3xl rounded-bl-none sm:rounded-tr-none rounded-tr-3xl"
            />
          </div>

          <div className="sm:col-span-9 col-span-12 bg-[#eff1ed] sm:rounded-tr-3xl rounded-tr-none sm:rounded-bl-none rounded-bl-3xl rounded-br-3xl lg:p-15 p-5">
            <p className="lg:text-4xl text-2xl font-bold">
              Have Questions? <span className="text-primary">Call Us</span>{' '}
              {SITE_DATA.phone}
            </p>
            <p className="pt-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
