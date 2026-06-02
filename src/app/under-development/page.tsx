import UnderDevelopmentPage from '@/components/pages/underDevelopment';
import {generateMetadata as buildMetadata} from '@/utils/metadataUtils';
import {SITE_METADATA} from '@/constants/general';

export default function UnderDevelopment() {
  return <UnderDevelopmentPage />;
}

export async function generateMetadata() {
  return await buildMetadata({
    pageName: SITE_METADATA.underDevelopmentPage.title,
    description: SITE_METADATA.underDevelopmentPage.description,
  });
}
