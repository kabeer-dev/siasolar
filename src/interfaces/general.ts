import {ReactNode} from 'react';

export interface RootLayoutProps {
  readonly children: ReactNode;
}

export interface ThemeButtonProps {
  btnText: string;
  onClick: () => void;
  className?: string;
}

export interface AnimationArrowProps {
  readonly arrowImage: string;
}

export interface CounterAnimationProps {
  readonly number: number;
  readonly title: string;
}
