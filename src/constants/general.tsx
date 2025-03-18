import {BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs';

export const SITE_DATA = {
  name: 'SIA SOLAR',
  email: 'info@siasolar.pk',
  address: 'ABC Street XYZ Road, Lahore, Pakistan',
};

export const SOCIAL_ICONS = {
  facebook: {
    label: 'Facebook',
    icon: <BsFacebook />,
  },
  instagram: {
    label: 'Instagram',
    icon: <BsInstagram />,
  },
  youtube: {
    label: 'Youtube',
    icon: <BsYoutube />,
  },
};

export const BRANDING = async () => {
  return {
    websiteName: 'SIA Solar',
    websiteDescription:
      'SIA Solar provides high-quality solar solutions, including panels, inverters, and installation services in Pakistan.',
    logoPath: '/images/logo.png',
    faviconPath: '/images/logo.png',
  };
};
