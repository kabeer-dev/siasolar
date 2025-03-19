import React from 'react';
import {SITE_METADATA} from '@/constants/general';
import {generateMetadata} from '@/utils/metadataUtils';
import NotFoundedPage from '@/components/pages/notFounded';

export default function NotFound() {
  return <NotFoundedPage />;
}

export const metadata = async () =>
  await generateMetadata({
    pageName: SITE_METADATA.notFoundPage.title,
    description: SITE_METADATA.notFoundPage.description,
  });
