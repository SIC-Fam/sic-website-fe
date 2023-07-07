import { atom } from 'recoil';

const leadersAtom = atom({
  key: 'leaders',
  default: [
    {
      image: '/images/club-leader.png',
      name: 'Do Ngoc Minh',
      description: 'Club leader',
      social: 'https://www.facebook.com/profile.php?id=100011256225680',
    },
    {
      image: '/images/vice-leader-1.png',
      name: 'Nguyen Xuan Hoang',
      description: 'Club vice leader',
      social: 'https://www.facebook.com/profile.php?id=100007788300860',
    },
    {
      image: '/images/vice-leader-2.png',
      name: 'Bui Thuy Ngoc',
      description: 'Club vice leader',
      social: 'https://www.facebook.com/Bui.Ngoc.1302',
    },
    {
      image: '/images/tech-leader.png',
      name: 'Vu Minh Quan',
      description: 'Technical leader',
      social: 'https://www.facebook.com/toilawuanvu',
    },
    {
      image: '/images/vice-tech-leader.png',
      name: 'Vu Cao Duong',
      description: 'Technical vice leader',
      social: 'https://www.facebook.com/Duonggvu27',
    },
    {
      image: '/images/media-leader.png',
      name: 'Nguyen Tuan Ngoc',
      description: 'Media leader',
      social: 'https://www.facebook.com/profile.php?id=100052063921095',
    },
  ],
});

export default leadersAtom;
