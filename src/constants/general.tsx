import {BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs';

const SITE_COMMON_DESCRIPTION =
  'SIA Solar specializes in commercial solar installations, offering expert electrical inspections, consultancy, wiring test reports, earthing systems, and net metering with full verification.';

export const SITE_METADATA = {
  homePage: {
    title: 'Home',
    description: SITE_COMMON_DESCRIPTION,
  },
  notFoundPage: {
    title: 'Not Founded',
    description: SITE_COMMON_DESCRIPTION,
  },
};

export const SITE_DATA = {
  name: 'SIA SOLAR',
  email: 'info@siasolar.pk',
  phone: '0300-000000',
  address: 'ABC Street XYZ Road, Lahore, Pakistan',
  description: SITE_COMMON_DESCRIPTION,
};

export const DEVELOPER_DATA = {
  name: 'Kabeer Ahmed',
};

export const SOCIAL_ICONS = {
  facebook: {
    label: 'Facebook',
    icon: <BsFacebook />,
    redirectLink: '/#',
  },
  instagram: {
    label: 'Instagram',
    icon: <BsInstagram />,
    redirectLink: '/#',
  },
  youtube: {
    label: 'Youtube',
    icon: <BsYoutube />,
    redirectLink: '/#',
  },
};

export const PAGES = {
  home: {
    name: 'home',
    label: 'Home',
  },
  about: {
    name: 'about',
    label: 'About Us',
  },
  services: {
    name: 'services',
    label: 'Services',
  },
  projects: {
    name: 'projects',
    label: 'Projects',
  },
  contact: {
    name: 'contact',
    label: 'Contact Us',
  },
};

export const BRANDING = async () => {
  return {
    websiteName: 'SIA Solar',
    websiteDescription:
      'SIA Solar specializes in commercial solar installations, offering expert electrical inspections, consultancy, wiring test reports, earthing systems, and net metering with full verification.',
    logoPath: '/images/logo.png',
    faviconPath: '/images/logo.png',
  };
};
