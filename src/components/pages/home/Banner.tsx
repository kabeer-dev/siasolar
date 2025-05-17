'use client';
import React, {useState} from 'react';
import TopBar from '@/components/layout/topBar';
import NavBar from '@/components/layout/navbar';
import Image from 'next/image';
import Container from '@/components/layout/container';
import {SITE_DATA} from '@/constants/general';
import ThemeButton from '@/components/shared/buttons/ThemeButton';
import LandingSideBar from '@/components/layout/landingSidebar/SideBar';
import {useRouter} from 'next/navigation';
import {UNDER_DEVELOPMENT_ROUTE} from '@/utils/path';

export default function Banner() {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      <LandingSideBar
        setOpenSideBar={setOpenSideBar}
        openSideBar={openSideBar}
      />

      <div className="bg-[url('/images/slider-test.jpg')] bg-cover h-auto relative">
        <div className="bg-black h-auto w-full opacity-40 absolute top-0 left-0"></div>
        <div className="relative z-10">
          <TopBar />
          <NavBar setOpenSideBar={setOpenSideBar} />
          <div className="sm:mt-25 mt-15">
            <Container>
              <div className="lg:w-[60%] w-[100%]">
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
                <p className="sm:text-6xl text-3xl text-white font-extrabold mt-2 leading-tight">
                  Your Energy, Your <br />
                  <span className="text-primary">Independence.</span>
                </p>

                <p className="mt-5 text-white md:text-md text-sm font-semibold leading-7">
                  {SITE_DATA.description}
                </p>

                <div className="flex sm:mt-15 mt-10 pb-10">
                  <ThemeButton
                    btnText="Our Services"
                    onClick={() => router.push(`${UNDER_DEVELOPMENT_ROUTE}`)}
                    className="bg-primary text-black hover:bg-transparent hover:text-primary transition-all sm:text-md sm:font-semibold border-primary border-3 sm:py-6 py-4 sm:px-10 px-5 rounded-3xl cursor-pointer"
                  />
                  <ThemeButton
                    btnText="Contact Now"
                    onClick={() => router.push(`${UNDER_DEVELOPMENT_ROUTE}`)}
                    className="bg-transparent hover:bg-primary text-primary transition-all sm:text-md sm:font-semibold border-primary border-3 sm:py-6 py-4 sm:px-10 px-5 rounded-3xl ml-4 cursor-pointer"
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
