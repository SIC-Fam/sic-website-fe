import { atom } from 'recoil';

const navAtom = atom({
  key: 'navList',
  default: [
    {
      name: 'home',
      href: '/',
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
