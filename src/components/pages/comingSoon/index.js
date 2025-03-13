import React from 'react';
import ComingSoonPageHeader from './Header';
import ContainerComponent from '@/components/shared/Container';

export default function ComingSoon() {
  return (
    <div className="flex justify-center items-center w-full">
      <ContainerComponent>
        <div className="px-20">
          <ComingSoonPageHeader />
          <div>ComingSoon Page</div>
        </div>
      </ContainerComponent>
    </div>
  );
}
