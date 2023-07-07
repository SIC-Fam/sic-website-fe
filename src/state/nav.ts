import { atom } from 'recoil';

const navAtom = atom({
  key: 'navList',
  default: [
    {
      name: 'home',
      href: '/',
    },
    {
      name: 'about us',
      href: '/about-us',
    },
    {
      name: 'groups',
      href: '',
      menus: [
        {
          label: 'technical group',
          href: '',
        },
        {
          label: 'media group',
          href: '',
        },
        {
          label: 'study group',
          href: '',
        },
        {
          label: 'support group',
          href: '',
        },
      ],
    },
    {
      name: 'posts',
      href: '',
    },
  ],
});

export default navAtom;
