'use client';

import {Provider} from 'react-redux';
import {store} from '@/redux/store';
import {RootLayoutProps} from '@/interfaces/general';

const ReduxProvider = ({children}: RootLayoutProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
