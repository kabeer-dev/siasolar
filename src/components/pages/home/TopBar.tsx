import React from 'react';
import {MdOutlineLocationOn, MdOutlineMailOutline} from 'react-icons/md';
import {SITE_DATA, SOCIAL_ICONS} from '@/constants/general';

export default function TopBar() {
  return (
    <div className="sm:h-12 h-auto w-full bg-primary flex items-center">
      <div className="container mx-auto pl-5 pr-5 grid grid-cols-12 gap-4">
        <div className="sm:col-span-8 col-span-12 sm:flex block items-center">
          <div className="flex items-center sm:justify-start justify-center">
            <MdOutlineLocationOn className="mt-0.5" />
            <p className="ml-1">{SITE_DATA.address}</p>
          </div>

          <div className="flex items-center ml-5">
            <MdOutlineMailOutline className="mt-0.5" />
            <p className="ml-1 text-black-700">{SITE_DATA.email}</p>
          </div>
        </div>

        <div className="sm:col-span-4 col-span-12 flex items-center sm:justify-end justify-center">
          {Object.keys(SOCIAL_ICONS).map((key) => (
            <div key={key} className="mr-5">
              {SOCIAL_ICONS[key].icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
