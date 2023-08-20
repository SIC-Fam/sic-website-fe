import { atom } from 'recoil';

const navAtom = atom({
  key: 'menu/navList',
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
          href: '/group/technical',
        },
        {
          label: 'media group',
          href: '/group/media',
        },
        {
          label: 'study group',
          href: '/group/study',
        },
      ],
    },
    {
      name: 'posts',
      href: '/posts',
    },
  ],
});

export default navAtom;
