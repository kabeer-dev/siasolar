import React from 'react';
import ContainerComponent from '@/components/shared/container';
import Image from 'next/image';

export default function CallSolution() {
  return (
    <div className="py-15">
      <ContainerComponent>
        <div className="grid grid-cols-12 relative">
          {/* <div className="absolute top-20 left-66 bg-primary p-4 border-white border-7 rounded-full">
            <Image
              src="/images/telephone.png"
              alt="telephone"
              height={40}
              width={40}
            />
          </div> */}
          <div className="col-span-3">
            <Image
              src="/images/man-working.jpg"
              alt="man-working"
              height={100}
              width={100}
              className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl"
            />
          </div>

          <div className="col-span-9 bg-[#eff1ed] rounded-tr-3xl rounded-br-3xl p-15">
            <p className="text-4xl font-bold">
              Have Questions? <span className="text-primary">Call Us</span>{' '}
              800-001-658
            </p>
            <p className="pt-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </ContainerComponent>
    </div>
  );
}
