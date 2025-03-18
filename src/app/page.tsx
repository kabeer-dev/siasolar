import HomePage from '@/components/pages/home';
import {generateMetadata} from '@/utils/metadataUtils';
import {SITE_METADATA} from '@/constants/general';

export default function Home() {
  return <HomePage />;
}

export const metadata = async () =>
  await generateMetadata({
    pageName: SITE_METADATA.homePage.title,
    description: SITE_METADATA.homePage.description,
  });
