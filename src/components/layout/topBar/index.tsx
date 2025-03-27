import React from 'react';
import {MdEmail} from 'react-icons/md';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {SITE_DATA, SOCIAL_ICONS} from '@/constants/general';
import Container from '@/components/layout/container';

export default function TopBar() {
  return (
    <div className="sm:h-12 h-auto w-full bg-transparent top-0 flex items-center sm:pb-0 pb-3 sm:pt-0 pt-3">
      <Container>
        <div className="p-4 grid grid-cols-12 gap-4">
          <div className="sm:col-span-9 col-span-12 sm:flex block items-center">
            <div className="flex items-center sm:justify-start justify-center">
              <MdEmail className="text-xl text-primary" />
              <p className="ml-2 font-semibold text-white">{SITE_DATA.email}</p>
            </div>

            <div className="flex items-center lg:ml-5 ml-3 sm:justify-start justify-center">
              <BsFillTelephoneFill className="text-xl text-primary" />
              <p className="ml-2 font-semibold text-white">{SITE_DATA.phone}</p>
            </div>
          </div>

          <div className="sm:col-span-3 col-span-12 flex items-center sm:justify-end justify-center space-x-2">
            {Object.entries(SOCIAL_ICONS).map(
              ([key, {label, icon, redirectLink}]) => (
                <div key={key} className="bg-primary p-[5px] rounded-md">
                  <a
                    href={redirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition cursor-pointer text-black"
                  >
                    {icon}
                  </a>
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
