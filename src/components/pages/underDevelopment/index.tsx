'use client';
import React from 'react';
import ThemeButton from '@/components/shared/buttons/ThemeButton';
import {DEVELOPER_DATA, SITE_DATA} from '@/constants/general';
import {ROOT_ROUTE} from '@/utils/path';
import {getCurrentYear} from '@/utils/general';
import {useRouter} from 'next/navigation';

export default function UnderDevelopment() {
  const currentYear = getCurrentYear();
  const router = useRouter();

  return (
    <div className="bg-[url('/images/solar-sheets.jpg')] bg-cover bg-center h-screen w-full relative flex justify-center items-center">
      <div className="bg-black h-screen w-full opacity-70 absolute top-0 left-0"></div>
      <div className="relative z-10 sm:w-[50%] w-[100%] sm:px-0 px-5">
        <p className="text-white sm:text-[lg] text-6xl font-bold opacity-60 text-center">
          Under Development
        </p>
        <p className="text-white sm:text-3xl text-xl font-bold text-center mt-10">
          Page is Under Development
        </p>
        <p className="text-white sm:text-xl text-center mt-3">
          The page you are trying to access is under development. It will be
          available soon.
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
          Copyright &copy; {currentYear}{' '}
          <span className="text-primary">{SITE_DATA.name}</span>. Built with ❤️
          by{' '}
          <span className="text-primary">
            <a href={DEVELOPER_DATA.portfolioLink} target="_blank">
              {DEVELOPER_DATA.name}
            </a>
          </span>
          .
        </p>
      </div>
    </div>
  );
}
