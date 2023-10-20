import { SITE } from './utils/config';
import { getPermalink } from './utils/permalinks';
/*
const links = [
  {
    text: 'About us',
    href: getPermalink('/about'),
  },
  {
    text: 'Personal',
    href: getPermalink('/homes/personal'),
  },
  {
    text: 'Contact',
    href: getPermalink('/contact'),
  },
  {
    text: 'Terms',
    href: getPermalink('/terms'),
  },
  {
    text: 'Privacy policy',
    href: getPermalink('/privacy'),
  },
  {
    text: 'Blog',
    href: getBlogPermalink(),
  },
  {
    text: 'Widgets',
    href: '#',
  },
];*/

export const headerData = {
  links: [],
  actions: [
    {
      text: 'Text Me',
      href: `https://web.whatsapp.com/send?phone=${SITE.contactPhone}&text=Hi%20Julio%20Cesar%20Torres%20Moreno%20I%20want%20to%20talk%20with%20you%20about%20[Your%20Subject]`,
      target: '_blank',
    },
    {
      text: 'Contact Me',
      href: `mailto:${SITE.contactEmail}?subject=Inquiry%20About%20[Your%20Subject]`,
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    {
      ariaLabel: 'Linkedin',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/in/julio-cesar-torres-moreno/',
    },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/juliotorresmoreno' },
  ],
  footNote: `Made by ${SITE?.name}· All rights reserved.`,
};
