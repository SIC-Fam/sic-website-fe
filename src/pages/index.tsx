import Banner from '@components/Banner';
import SICButton from '@components/Button';
import FAQ from '@components/Faq';
import HeadTitle from '@components/HeaderTitle';
import Leader from '@components/Leader';
import News from '@components/News';
import Partner from '@components/Partner';
import Ques from '@components/Ques';
import AboutSection from '@containers/sections/homepage/about';
import ActivitySection from '@containers/sections/homepage/activity';
import LayoutDefault from '@layouts/LayoutDefault';
import { Typography } from '@material-tailwind/react';
import postsAtom from '@state/posts';
import { useRecoilState } from 'recoil';

export default function Home() {
  const [postList] = useRecoilState(postsAtom);

  return (
    <div className="h-screen">
      <LayoutDefault>
        <Banner width="100%" height={'100%'} />
        <div className="w-full px-32 bg-transparent border-b shadow-glove border-primary">
          <div className="py-14">
            <div className="flex justify-between mb-8 items-center">
              <HeadTitle>news</HeadTitle>
              <SICButton variant="text" color="inherit">
                SEE ALL --&gt;
              </SICButton>
            </div>
            <News posts={postList} limit={3} />
          </div>
        </div>
        <AboutSection />
        <ActivitySection />
        <Ques />
        <div className="w-full px-32 bg-transparent py-14">
          <HeadTitle>our leader</HeadTitle>
          <Typography className="font-mono text-sm text-text pb-10">
            Sic&#39;s leaders are passionate people and have a strong long-term attachment to SIC. They always do their
            best for the members.
          </Typography>
          <Leader />
        </div>
        <div className="w-full px-32 bg-transparent py-14">
          <HeadTitle>our partner</HeadTitle>
          <Typography className="font-mono text-sm text-text pb-10">{`For a long time, SIC always maintain a cooperative relationship with partners because they are the important people who contribute to promoting the club's activities.`}</Typography>
          <Partner />
        </div>
        <div className="w-full border-t font-mono border-b border-primary bg-transparent">
          <FAQ />
        </div>
      </LayoutDefault>
    </div>
  );
}
