'use client';
import React from 'react';
import ThemeButton from '@/components/shared/buttons/ThemeButton';
import {getCurrentYear} from '@/utils/general';
import {SITE_DATA, DEVELOPER_DATA} from '@/constants/general';
import {useRouter} from 'next/navigation';
import {ROOT_ROUTE} from '@/utils/path';

export default function NotFoundedPage() {
  const currentYear = getCurrentYear();
  const router = useRouter();

  return (
    <div className="bg-[url('/images/solar-sheets.jpg')] bg-cover bg-center h-screen w-full relative flex justify-center items-center">
      <div className="bg-black h-screen w-full opacity-70 absolute top-0 left-0"></div>
      <div className="relative z-10 sm:w-[50%] w-[100%] sm:px-0 px-5">
        <p className="text-white sm:text-[11rem] text-[5rem] font-bold tracking-widest opacity-60 text-center">
          404
        </p>
        <p className="text-white sm:text-3xl text-xl font-bold text-center">
          Page Not Founded
        </p>
        <p className="text-white sm:text-xl text-center mt-3">
          The Page you are trying to access doesn't exist or has been moved. Try
          going back to homepage.
        </p>
        <div className="text-center mt-10">
          <ThemeButton
            btnText={'Back to Home'}
            onClick={() => {
              router.push(ROOT_ROUTE);
            }}
            className="px-7 py-5 cursor-pointer"
          />
        </div>
        <p className="text-white text-center mt-20">
          Copyright &copy; {currentYear} {SITE_DATA.name}. All Rights Reserved |
          Design by {DEVELOPER_DATA.name}.
        </p>
      </div>
    </div>
  );
}
