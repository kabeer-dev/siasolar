import {PAGES} from '@/constants/general';
import {NavbarProps} from '@/interfaces/general';
import React from 'react';
import {ImCross} from 'react-icons/im';

export default function LandingSideBar({
  setOpenSideBar,
  openSideBar,
}: NavbarProps) {
  return (
    <div
      className={`bg-white ${
        openSideBar ? 'w-full p-5' : 'w-[0px]'
      } transition-all overflow-hidden h-screen fixed top-0 left-0 z-[999]`}
    >
      <div
        className="flex justify-end cursor-pointer"
        onClick={() => setOpenSideBar(false)}
      >
        <p className="bg-primary p-3 rounded-xl">
          <ImCross />
        </p>
      </div>
      <div className="text-center space-y-7 mt-10">
        {Object.keys(PAGES).map((key) => (
          <div key={key}>
            <a
              href={PAGES[key].redirectUrl}
              className="text-black text-ld font-bold hover:text-primary"
            >
              {PAGES[key].label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
