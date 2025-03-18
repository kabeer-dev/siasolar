import {Metadata} from 'next';
import {BRANDING} from '@/constants/general';
import {MetaDataParams} from '@/types/general';

export const generateMetadata = async ({
  pageName,
  description,
}: MetaDataParams): Promise<Metadata> => {
  const {websiteName, websiteDescription, faviconPath} = await BRANDING();

  return {
    title: `${websiteName} - ${pageName ?? ''}`,
    description: description || websiteDescription,
    icons: {
      icon: [
        {
          media: '(prefers-color-scheme: light)',
          url: faviconPath,
          href: faviconPath,
        },
        {
          media: '(prefers-color-scheme: dark)',
          url: faviconPath,
          href: faviconPath,
        },
      ],
    },
  };
};
