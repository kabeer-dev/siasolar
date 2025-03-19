import {ReactNode} from 'react';

export interface RootLayoutProps {
  children: ReactNode;
}

export interface ThemeButtonProps {
  btnText: string;
  onClick: () => void;
  className?: string;
}
