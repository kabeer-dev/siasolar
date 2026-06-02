import ContactPage from '@/components/pages/contact';
import {generateMetadata as buildMetadata} from '@/utils/metadataUtils';
import {SITE_METADATA} from '@/constants/general';

export default function Home() {
  return <ContactPage />;
}

export async function generateMetadata() {
  return await buildMetadata({
    pageName: SITE_METADATA.contactPage.title,
    description: SITE_METADATA.contactPage.description,
  });
}
