import {BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs';

const SITE_COMMON_DESCRIPTION =
  'SIA Solar specializes in commercial solar installations, offering expert electrical inspections, consultancy, wiring test reports, earthing systems, and net metering with full verification.';

export const SITE_METADATA = {
  homePage: {
    title: 'Home',
    description: SITE_COMMON_DESCRIPTION,
  },
  contactPage: {
    title: 'Contact Us',
    description: SITE_COMMON_DESCRIPTION,
  },
  underDevelopmentPage: {
    title: 'Under Development',
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
  phone: '+92 3400001069',
  address: 'Madina Colony, Jinnah Road Gujranwala, Pakistan',
  description: SITE_COMMON_DESCRIPTION,
};

export const DEVELOPER_DATA = {
  name: 'Kabeer Ahmed',
  portfolioLink: 'https://kabeer-ahmed.vercel.app',
};

export const SOCIAL_ICONS = {
  facebook: {
    label: 'Facebook',
    icon: <BsFacebook />,
    redirectLink: 'https://www.facebook.com/share/1AL814r3Ha',
  },
  instagram: {
    label: 'Instagram',
    icon: <BsInstagram />,
    redirectLink: 'https://www.instagram.com/sia_solarr',
  },
  youtube: {
    label: 'Youtube',
    icon: <BsYoutube />,
    redirectLink: 'https://www.youtube.com/channel/UCWPjO2BcgdNiC_0qmjPxXwg',
  },
};

export const PAGES = {
  home: {
    name: 'home',
    label: 'Home',
    redirectUrl: '/',
  },
  about: {
    name: 'about',
    label: 'About Us',
    redirectUrl: '/under-development',
  },
  services: {
    name: 'services',
    label: 'Services',
    redirectUrl: '/under-development',
  },
  projects: {
    name: 'projects',
    label: 'Projects',
    redirectUrl: '/under-development',
  },
  contact: {
    name: 'contact',
    label: 'Contact Us',
    redirectUrl: '/under-development',
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
