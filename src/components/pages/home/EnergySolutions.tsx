import React from 'react';
import Container from '@/components/layout/container';
import Image from 'next/image';
import {ENERGY_SOLUTIONS} from '@/constants/home';

export default function EnergySolutions() {
  return (
    <div className="bg-[#eff1ed] pt-20 pb-20">
      <Container>
        <div className="flex justify-center">
          <Image
            src={'/images/electricity.svg'}
            alt="electricity"
            height={13}
            width={13}
            className="mt-[2px]"
          />
          <p className="text-primary font-semibold pl-2">WHY CHOOSE US</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-center">
            Providing Solar Energy Solutions
          </p>
        </div>
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 mt-20">
          {ENERGY_SOLUTIONS.map((energySolution) => (
            <div
              key={energySolution.name}
              className="relative bg-white hover:bg-[url('/images/efficiency-power.jpg')] bg-cover bg-center bg-no-repeat transition-all duration-500 rounded-4xl p-7 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white group-hover:bg-black opacity-70 transition-opacity duration-500 group-hover:opacity-70"></div>

              <div className="relative z-10">
                <div>
                  <Image
                    src={energySolution.img}
                    alt="solar-house"
                    height={60}
                    width={60}
                  />
                </div>
                <div className="mt-6">
                  <p className="text-xl font-bold text-black group-hover:text-white">
                    {energySolution.title}
                  </p>
                  <p className="mt-2 text-gray-400 group-hover:text-white">
                    {energySolution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
