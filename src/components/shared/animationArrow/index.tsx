import {AnimationArrowProps} from '@/interfaces/general';
import React from 'react';

export default function AnimationArrow({
  arrowImage,
}: Readonly<AnimationArrowProps>) {
  return (
    <div
      className="absolute w-[100px] h-[40px] lg:bg-gradient-to-r bg-gradient-to-b from-[var(--primary)] via-[#ffffff] to-[var(--primary-foreground)] lg:bg-[length:300%_100%] bg-[length:100%_300%] lg:animate-[colorRun_4s_linear_infinite] animate-[colorRunVertical_4s_linear_infinite]"
      style={{
        maskImage: `url(${arrowImage})`,
        WebkitMaskImage: `url(${arrowImage})`,
        maskPosition: 'center',
        maskRepeat: 'no-repeat',
        maskSize: 'contain',
      }}
    >
      <style>
        {`
          @keyframes colorRun {
            0% { background-position: 300% 50%;  }
            100% { background-position: 0% 50%; }
          }

          @keyframes colorRunVertical {
            0% { background-position: 50% 300%; }
            100% { background-position: 50% 0%; }
          }
        `}
      </style>
    </div>
  );
}
