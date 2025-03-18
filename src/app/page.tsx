import HomePage from '@/components/pages/home';
import {generateMetadata} from '@/utils/metadataUtils';

export default function Home() {
  return <HomePage />;
}

export const metadata = async () =>
  await generateMetadata({pageName: 'Home', description: 'Home Page'});
