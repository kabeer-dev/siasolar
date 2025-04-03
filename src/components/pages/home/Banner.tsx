'use client';
import React, {useState} from 'react';
import TopBar from '@/components/layout/topBar';
import NavBar from '@/components/layout/navbar';
import Image from 'next/image';
import Container from '@/components/layout/container';
import {SITE_DATA} from '@/constants/general';
import ThemeButton from '@/components/shared/buttons/ThemeButton';
import SideBar from './SideBar';

export default function Banner() {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);

  return (
    <>
      <SideBar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />

      <div className="bg-[url('/images/slider-test.jpg')] bg-cover h-auto relative">
        <div className="bg-black h-auto w-full opacity-40 absolute top-0 left-0"></div>
        <div className="relative z-10">
          <TopBar />
          <NavBar setOpenSideBar={setOpenSideBar} />
          <div className="mt-25">
            <Container>
              <div className="md:w-[60%] w-[100%]">
                <div className="flex">
                  <Image
                    src={'/images/electricity.svg'}
                    alt="electricity"
                    height={13}
                    width={13}
                    className="mt-[2px]"
                  />
                  <p className="text-primary text-sm font-semibold pl-2">
                    WELCOME TO SIA SOLAR
                  </p>
                </div>
                <p className="text-6xl text-white font-extrabold mt-2 leading-tight">
                  Your Energy, Your <br />
                  <span className="text-primary">Independence.</span>
                </p>

                <p className="mt-5 text-white text-md font-semibold leading-7">
                  {SITE_DATA.description}
                </p>

                <div className="flex mt-15 pb-10">
                  <ThemeButton
                    btnText="Our Services"
                    onClick={() => console.log('ok')}
                    className="bg-primary text-black hover:bg-transparent hover:text-primary transition-all text-md font-semibold border-primary border-3 py-6 px-10 rounded-3xl"
                  />
                  <ThemeButton
                    btnText="Contact Now"
                    onClick={() => console.log('ok')}
                    className="bg-transparent hover:bg-primary text-primary transition-all text-md font-semibold border-primary border-3 py-6 px-10 rounded-3xl ml-4"
                  />
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
