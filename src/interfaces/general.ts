import {Dispatch, ReactNode, SetStateAction} from 'react';

export interface RootLayoutProps {
  children: ReactNode;
}

export interface OptionalRootLayoutProps {
  children?: ReactNode;
}

export interface ThemeButtonProps {
  btnText: string;
  onClick: () => void;
  className?: string;
}

export interface AnimationArrowProps {
  arrowImage: string;
}

export interface CounterAnimationProps {
  number: number;
  title: string;
}

export interface NavbarProps {
  setOpenSideBar: Dispatch<SetStateAction<Boolean>>;
  openSideBar?: Boolean;
}
