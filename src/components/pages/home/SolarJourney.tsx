import React from 'react';
import AnimationArrow from '@/components/shared/animationArrow';
import Image from 'next/image';
import {SOLAR_JOURNEY} from '@/constants/home';
import Container from '@/components/layout/container';

export default function SolarJourney() {
  return (
    <div className="bg-[#eff1ed]">
      <Container>
        <div className="pt-10 pb-10">
          <p className="text-center sm:text-xl font-semibold">
            *__ End-to-End Services __*
          </p>
          <p className="text-center sm:text-5xl text-3xl font-bold mt-5">
            The Solar Journey
          </p>

          <div className="grid grid-cols-12 lg:gap-20 gap-4 lg:mt-20">
            {SOLAR_JOURNEY.map((journey, index) => (
              <div
                key={journey.name}
                className="lg:col-span-3 col-span-12 lg:flex block lg:mt-0 mt-10 group"
              >
                <div className="relative">
                  <div className="absolute -top-2 left-40 bg-primary group-hover:bg-primary-foreground px-3 py-2 rounded-full">
                    <p className="text-primary-foreground group-hover:text-primary transition-all duration-500">
                      0{index + 1}
                    </p>
                  </div>
                  <Image
                    src={journey.img}
                    alt={journey.name}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto border-10 border-transparent group-hover:border-primary transition-all duration-500"
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
      </Container>
    </div>
  );
}
