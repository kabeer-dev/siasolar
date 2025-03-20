import React from 'react';
import AnimationArrow from '@/components/shared/animationArrow';
import Image from 'next/image';
import {SOLAR_JOURNEY} from '@/constants/home';
import ContainerComponent from '@/components/shared/container';

export default function SolarJourney() {
  return (
    <div className="bg-[#f2f8f5]">
      <ContainerComponent>
        <div className="pt-10 pb-10">
          <p className="text-center sm:text-xl font-semibold">
            *__ End-to-End Services __*
          </p>
          <p className="text-center sm:text-5xl text-3xl font-bold mt-5">
            The Solar Journey
          </p>

          <div className="grid grid-cols-12 lg:gap-20 gap-4 lg:mt-20">
            {SOLAR_JOURNEY.map((journey) => (
              <div
                key={journey.name}
                className="lg:col-span-3 col-span-12 lg:flex block lg:mt-0 mt-10"
              >
                <div>
                  <Image
                    src={journey.img}
                    alt={journey.name}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto"
                  />
                  <p className="text-center text-2xl font-semibold mt-5">
                    {journey.label}
                  </p>
                  <p className="text-center mt-3">{journey.description}</p>
                </div>
                {journey.showArrow && (
                  <>
                    {/* Small screen arrow */}
                    <div className="relative lg:hidden flex justify-center mt-5">
                      <AnimationArrow arrowImage="/images/down-arrow.svg" />
                    </div>

                    {/* Large screen arrow */}
                    <div className="relative hidden lg:block mt-25">
                      <AnimationArrow arrowImage="/images/right-arrow.svg" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </ContainerComponent>
    </div>
  );
}
