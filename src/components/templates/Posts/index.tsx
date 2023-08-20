import SICButton from '@components/atoms/Button';
import HeadTitle from '@components/atoms/HeaderTitle';
import News from '@components/atoms/News';
import Ques from '@components/atoms/Ques';
import LayoutDefault from '@layouts/LayoutDefault';
import moment from 'moment';
import { toast } from 'react-toastify';

const Posts = () => {
  const postList = [
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
  ];
  return (
    <div className="relative h-screen">
      <LayoutDefault>
        <div className="pt-8">
          <div className="w-full px-32 bg-transparent border-b shadow-glove border-primary">
            <div className="py-14">
              <div className="flex justify-between mb-8 items-center">
                <HeadTitle>news</HeadTitle>
                <SICButton variant="text" color="inherit" onClick={() => toast('success')}>
                  More --&gt;
                </SICButton>
              </div>
              <News posts={postList} limit={6} />
            </div>
          </div>
          <div className="w-full px-32 bg-transparent border-b shadow-glove border-primary">
            <div className="py-14">
              <div className="flex justify-between mb-8 items-center">
                <HeadTitle>technologies</HeadTitle>
                <SICButton variant="text" color="inherit" onClick={() => toast('success')}>
                  More --&gt;
                </SICButton>
              </div>
              <News posts={postList} limit={6} />
            </div>
          </div>
          <Ques />
        </div>
      </LayoutDefault>
    </div>
  );
};

export default Posts;
