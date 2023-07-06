import moment from 'moment';
import { atom } from 'recoil';

const postsAtom = atom({
  key: 'posts',
  default: [
    {
      image: '/images/demo-post.png',
      title: 'Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem',
      summary:
        'Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem, Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem,Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem',
      datePublic: `${moment('2023-07-06').format('DD/MM/yyyy HH:mm:ss')}`,
    },
    {
      image: '/images/demo-post.png',
      title: 'Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem',
      summary:
        'Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem, Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem,Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem',
      datePublic: `${moment('2023-07-06').format('DD/MM/yyyy HH:mm:ss')}`,
    },
    {
      image: '/images/demo-post.png',
      title: 'Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem',
      summary:
        'Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem, Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem,Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem',
      datePublic: `${moment('2023-07-06').format('DD/MM/yyyy HH:mm:ss')}`,
    },
    {
      image: '/images/demo-post.png',
      title: 'Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem',
      summary:
        'Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem, Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem,Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem',
      datePublic: `${moment('2023-07-06').format('DD/MM/yyyy HH:mm:ss')}`,
    },
    {
      image: '/images/demo-post.png',
      title: 'Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem',
      summary:
        'Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem, Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem,Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem',
      datePublic: `${moment('2023-07-06').format('DD/MM/yyyy HH:mm:ss')}`,
    },
    {
      image: '/images/demo-post.png',
      title: 'Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem',
      summary:
        'Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem, Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem,Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem',
      datePublic: `${moment('2023-07-06').format('DD/MM/yyyy HH:mm:ss')}`,
    },
    {
      image: '/images/demo-post.png',
      title: 'Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem',
      summary:
        'Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem, Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem,Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem',
      datePublic: `${moment('2023-07-06').format('DD/MM/yyyy HH:mm:ss')}`,
    },
    {
      image: '/images/demo-post.png',
      title: 'Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem',
      summary:
        'Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem, Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem,Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem',
      datePublic: `${moment('2023-07-06').format('DD/MM/yyyy HH:mm:ss')}`,
    },
    {
      image: '/images/demo-post.png',
      title: 'Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem',
      summary:
        'Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem, Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem,Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem',
      datePublic: `${moment('2023-07-06').format('DD/MM/yyyy HH:mm:ss')}`,
    },
  ],
});

export default postsAtom;
