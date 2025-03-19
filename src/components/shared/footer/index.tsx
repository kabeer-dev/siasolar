'use client';
import React from 'react';
import {PAGES, SITE_DATA, SOCIAL_ICONS} from '@/constants/general';
import {getCurrentYear} from '@/utils/general';
import {
  MdLocalPhone,
  MdOutlineLocationOn,
  MdOutlineMailOutline,
} from 'react-icons/md';

export default function Footer() {
  const currentYear = getCurrentYear();

  return (
    <div className="bg-primary-foreground">
      <div className="container mx-auto sm:pl-20 pl-5 sm:pr-20 pr-5">
        <div className="grid grid-cols-12 gap-4 pt-10">
          {/* This is first description part */}
          <div className="lg:col-span-4 sm:col-span-6 col-span-12 sm:pr-5">
            <p className="text-white text-2xl font-bold sm:text-left text-center">
              Useful Links
            </p>
            <p className="text-white mt-6 sm:text-left text-center">
              {SITE_DATA.description}
            </p>
            <div className="flex space-x-8 mt-8 lg:mb-0 mb-10 sm:justify-start justify-center">
              {Object.entries(SOCIAL_ICONS).map(
                ([key, {label, icon, redirectLink}]) => (
                  <a
                    key={key}
                    href={redirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl transition cursor-pointer"
                  >
                    {icon}
                  </a>
                )
              )}
            </div>
          </div>

          {/* This is second useful links part */}
          <div className="lg:col-span-2 sm:col-span-6  col-span-12 px-5">
            <p className="text-white text-2xl font-bold sm:text-left text-center">
              Useful Links
            </p>
            <div className="mt-5">
              {Object.entries(PAGES).map(([key, {name, label}]) => (
                <p key={key} className="mt-3 sm:text-left text-center">
                  <a
                    href={'/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition cursor-pointer"
                  >
                    {label}
                  </a>
                </p>
              ))}
            </div>
          </div>

          {/* This is third contact part */}
          <div className="lg:col-span-3 sm:col-span-6 col-span-12 px-5">
            <p className="text-white text-2xl font-bold sm:text-left text-center sm:mt-0 mt-5">
              Contact
            </p>
            <div className="mt-5 flex sm:justify-start justify-center">
              <MdLocalPhone className="text-2xl text-white sm:mt-0.5" />
              <p className="ml-2 text-white">{SITE_DATA.phone}</p>
            </div>
            <div className="mt-5 flex sm:justify-start justify-center">
              <MdOutlineMailOutline className="text-2xl text-white sm:mt-0.5" />
              <p className="ml-2 text-white">{SITE_DATA.email}</p>
            </div>
            <div className="mt-5 flex sm:justify-start justify-center">
              <MdOutlineLocationOn className="text-2xl text-white sm:mt-1" />
              <p className="ml-2 text-white">{SITE_DATA.address}</p>
            </div>
          </div>

          {/* This is forth Newsletter part */}
          <div className="lg:col-span-3 sm:col-span-6  col-span-12 px-5">
            <p className="text-white text-2xl font-bold sm:text-left text-center sm:mt-0 mt-5">
              Newsletter
            </p>
            <p className="text-white mt-4 sm:text-left text-center">
              Be the first to get the latest from us
            </p>
          </div>
        </div>

        <div className="gird gird-cols-12 mt-10 border-t-1 border-t-gray-700">
          <p className="text-white text-center pt-7 pb-7">
            Copyright &copy; {currentYear} {SITE_DATA.name}. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
