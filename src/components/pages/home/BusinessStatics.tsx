import React from 'react';
import ContainerComponent from '@/components/shared/container';
import {BUSINESS_STATICS} from '@/constants/home';
import Image from 'next/image';
import CounterAnimation from '@/components/shared/counterAnimation';

export default function BusinessStatics() {
  return (
    <div className="bg-primary bg-cover bg-center w-full relative flex items-center sm:pt-12 pt-7 sm:pb-15 pb-10">
      <div className="bg-black w-full opacity-80 absolute top-0 left-0 h-full"></div>
      <div className="relative w-full">
        <ContainerComponent>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            {BUSINESS_STATICS.map((item) => (
              <div key={item.name} className="flex justify-center items-center">
                <div className="grid grid-cols-12 mt-5">
                  <div className="sm:col-span-3 col-span-2 col-start-4">
                    <div className="bg-primary p-3 xl:rounded-3xl rounded-2xl">
                      <Image
                        src={item.img}
                        alt={item.name}
                        height={50}
                        width={50}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-8 col-span-6 pl-4">
                    <CounterAnimation number={item.number} title={item.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ContainerComponent>
      </div>
    </div>
  );
}
