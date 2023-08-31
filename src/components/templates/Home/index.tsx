import Banner from '@components/atoms/Banner';
import SICButton from '@components/atoms/Button';
import HeadTitle from '@components/atoms/HeaderTitle';
import Leader from '@components/atoms/Leader';
import News from '@components/atoms/News';
import Partner from '@components/atoms/Partner';
import Ques from '@components/atoms/Ques';
import AboutSection from '@containers/sections/homepage/about';
import ActivitySection from '@containers/sections/homepage/activity';
import LayoutDefault from '@layouts/LayoutDefault/LayoutDefault';
import { Typography } from '@material-tailwind/react';
import postsAtom from '@state/posts';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';

export default function Home() {
  const [postList] = useRecoilState(postsAtom);

  return (
    <LayoutDefault>
      <Banner width="100%" height="100%" />
      <div className="wrapper bg-transparent border-b shadow-glove border-primary">
        <div className="py-14">
          <div className="flex justify-between mb-16 items-center">
            <HeadTitle>news</HeadTitle>
            <SICButton className="" variant="text" color="inherit" onClick={() => toast('success')}>
              SEE ALL --&gt;
            </SICButton>
          </div>
          <News posts={postList} limit={3} />
        </div>
      </div>
      <AboutSection />
      <ActivitySection />
      <Ques />
      <div className="wrapper bg-transparent py-14">
        <HeadTitle>our leader</HeadTitle>
        <Typography className="font-mono text-sm text-text pb-10">
          Sic&#39;s leaders are passionate people and have a strong long-term attachment to SIC. They always do their
          best for the members.
        </Typography>
        <Leader />
      </div>
      <div className="wrapper bg-transparent py-14">
        <HeadTitle>our partner</HeadTitle>
        <Typography className="font-mono text-sm text-text pb-10">{`For a long time, SIC always maintain a cooperative relationship with partners because they are the important people who contribute to promoting the club's activities.`}</Typography>
        <Partner />
      </div>
    </LayoutDefault>
  );
}
