import React from 'react';
import ContainerComponent from '@/components/shared/container';
import {BUSINESS_STATICS} from '@/constants/home';

export default function BusinessStatics() {
  return (
    <div className="bg-primary bg-cover bg-center w-full relative flex items-center sm:pt-12 pt-7 sm:pb-15 pb-10">
      <div className="bg-black w-full opacity-80 absolute top-0 left-0 h-full"></div>
      <div className="relative w-full">
        <ContainerComponent>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            {BUSINESS_STATICS.map((item) => (
              <div
                key={item.name}
                className="flex sx:justify-start justify-center items-center mt-5"
              >
                <div>
                  <div className="w-20 h-18 bg-primary flex justify-center items-center rounded-3xl">
                    <p className="text-5xl text-white">{item.icon}</p>
                  </div>
                </div>
                <div className="pl-4">
                  <p className="text-white text-3xl font-bold">{item.label}</p>
                  <p className="text-primary">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </ContainerComponent>
      </div>
    </div>
  );
}
