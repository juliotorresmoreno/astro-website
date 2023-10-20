import { SITE } from './utils/config';
import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About Me',
      href: '#about',
    },
    {
      text: 'Features',
      href: '#features',
    },
    {
      text: 'Insides',
      href: '#insides',
    },
    {
      text: 'Recommends',
      href: '#recommends',
    },
    {
      text: 'FAQS',
      href: '#FAQS',
    },
    {
      text: 'Contact',
      href: '#contact',
    },
    {
      text: 'Blog',
      href: SITE.medium,
    }
  ],
  actions: [],
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
      href: SITE.linkedin,
    },
    {
      ariaLabel: 'Medium',
      icon: 'tabler:brand-medium',
      href: SITE.medium,
    },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: SITE.github },
  ],
  footNote: `Made by ${SITE?.name}· All rights reserved.`,
};
