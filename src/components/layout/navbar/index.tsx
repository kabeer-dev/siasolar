'use client';
import React from 'react';
import Container from '@/components/layout/container';
import {PAGES} from '@/constants/general';
import Image from 'next/image';
import {NavbarProps} from '@/interfaces/general';

export default function NavBar({setOpenSideBar}: NavbarProps) {
  return (
    <div className="mt-2">
      <Container>
        <div className="bg-white rounded-3xl p-3">
          <div className="grid grid-cols-12 gap-4 py-3 lg:px-3 px-0">
            <div className="col-span-3">
              <Image
                src={'/images/logo.png'}
                alt="logo"
                height={60}
                width={60}
              />
            </div>
            <div className="col-span-9 flex justify-end items-center">
              <div className="lg:flex hidden space-x-18">
                {Object.keys(PAGES).map((key) => (
                  <div key={key}>
                    <a
                      href={PAGES[key].redirectUrl}
                      className={`text-black text-md font-semibold hover:text-primary ${
                        PAGES[key].name === PAGES.contact.name &&
                        'bg-primary py-3 px-6 rounded-2xl hover:text-white'
                      }`}
                    >
                      {PAGES[key].label}
                    </a>
                  </div>
                ))}
              </div>
              <div
                className="lg:hidden flex pointer bg-primary p-2 rounded-xl"
                onClick={() => setOpenSideBar(true)}
              >
                <Image
                  src="/images/menu.png"
                  alt="menu"
                  height={20}
                  width={20}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
