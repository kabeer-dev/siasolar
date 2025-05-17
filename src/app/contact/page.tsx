import ContactPage from '@/components/pages/contact';
import {generateMetadata} from '@/utils/metadataUtils';
import {SITE_METADATA} from '@/constants/general';

export default function Home() {
  return <ContactPage />;
}

export const metadata = async () =>
  await generateMetadata({
    pageName: SITE_METADATA.contactPage.title,
    description: SITE_METADATA.contactPage.description,
  });
