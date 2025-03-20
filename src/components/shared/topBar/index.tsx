import React from 'react';
import {MdOutlineLocationOn, MdOutlineMailOutline} from 'react-icons/md';
import {SITE_DATA, SOCIAL_ICONS} from '@/constants/general';
import ContainerComponent from '@/components/shared/abc';

export default function TopBar() {
  return (
    <div className="sm:h-12 h-auto w-full bg-primary flex items-center sm:pb-0 pb-3 sm:pt-0 pt-3">
      <ContainerComponent>
        <div className="grid grid-cols-12 gap-4">
          <div className="sm:col-span-9 col-span-12 sm:flex block items-center">
            <div className="flex items-center sm:justify-start justify-center">
              <MdOutlineLocationOn className="mt-0.5" />
              <p className="ml-1 font-semibold">{SITE_DATA.address}</p>
            </div>

            <div className="flex items-center lg:ml-5 ml-3 sm:justify-start justify-center">
              <MdOutlineMailOutline className="mt-0.5" />
              <p className="ml-1 font-semibold">{SITE_DATA.email}</p>
            </div>
          </div>

          <div className="sm:col-span-3 col-span-12 flex items-center sm:justify-end justify-center space-x-5">
            {Object.entries(SOCIAL_ICONS).map(
              ([key, {label, icon, redirectLink}]) => (
                <a
                  key={key}
                  href={redirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl transition cursor-pointer"
                >
                  {icon}
                </a>
              )
            )}
          </div>
        </div>
      </ContainerComponent>
    </div>
  );
}
