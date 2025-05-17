'use client';
import React, {useState} from 'react';
import TopBar from '@/components/layout/topBar';
import NavBar from '@/components/layout/navbar';
import Container from '@/components/layout/container';
import LandingSideBar from '@/components/layout/landingSidebar/SideBar';
import {LandingBannerProps} from '@/interfaces/general';

export default function LandingBanner({pageLabel}: LandingBannerProps) {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);

  return (
    <>
      <LandingSideBar
        setOpenSideBar={setOpenSideBar}
        openSideBar={openSideBar}
      />

      <div className="bg-[url('/images/solar-sheets.jpg')] bg-cover h-auto relative">
        <div className="bg-black h-auto w-full opacity-40 absolute top-0 left-0"></div>
        <div className="relative z-10">
          <TopBar />
          <NavBar setOpenSideBar={setOpenSideBar} />
          <div className="sm:pt-25 pt-15 sm:pb-25 pb-15">
            <Container>
              <p className="text-white text-6xl font-bold text-center">
                {pageLabel}
              </p>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
