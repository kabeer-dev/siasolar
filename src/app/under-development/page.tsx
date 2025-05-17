import UnderDevelopmentPage from '@/components/pages/underDevelopment';
import {generateMetadata} from '@/utils/metadataUtils';
import {SITE_METADATA} from '@/constants/general';

export default function UnderDevelopment() {
  return <UnderDevelopmentPage />;
}

export const metadata = async () =>
  await generateMetadata({
    pageName: SITE_METADATA.underDevelopmentPage.title,
    description: SITE_METADATA.underDevelopmentPage.description,
  });
