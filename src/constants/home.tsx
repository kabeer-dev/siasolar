import {MdSolarPower, MdOutlineThumbUpOffAlt} from 'react-icons/md';
import {HiOutlineEmojiHappy} from 'react-icons/hi';
import {BsAward} from 'react-icons/bs';

export const SOLAR_JOURNEY = [
  {
    name: 'assessment',
    img: '/images/site-assessment.jpg',
    label: 'Site Assessment',
    description: 'Suspend temporarily the gateway to the silent mountains.',
    showArrow: true,
  },
  {
    name: 'agreement',
    img: '/images/agreement.jpg',
    label: 'Agreement',
    description:
      'Nor does the silent web (or network) bear the weight of the price in a suitable manner.',
    showArrow: true,
  },
  {
    name: 'installation',
    img: '/images/installation.jpg',
    label: 'Installation',
    description:
      'Great support tomorrow; the pure tongue is positioned neither here nor there.',
    showArrow: true,
  },
  {
    name: 'quality-assurance.',
    img: '/images/quality-assurance.jpg',
    label: 'Quality Assurance',
    description:
      'Body should be in a dignified arrangement; adjust the seasoning.',
    showArrow: false,
  },
];

export const BUSINESS_STATICS = [
  {
    name: 'project',
    icon: <MdSolarPower />,
    label: '1,000+',
    text: 'Project Done',
  },
  {
    name: 'client',
    icon: <HiOutlineEmojiHappy />,
    label: '1,200+',
    text: 'Happy Clients',
  },
  {
    name: 'award',
    icon: <BsAward />,
    label: '850+',
    text: 'Award Winning',
  },
  {
    name: 'rating',
    icon: <MdOutlineThumbUpOffAlt />,
    label: '1,100+',
    text: 'Rating Customer',
  },
];
