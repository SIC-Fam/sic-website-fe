import Banner from '@components/Banner';
import SICButton from '@components/Button';
import { SICCard } from '@components/Card';
import HeadTitle from '@components/HeaderTitle';
import Leader from '@components/Leader';
import News from '@components/News';
import Partner from '@components/Partner';
import Ques from '@components/Ques';
import LayoutDefault from '@layouts/LayoutDefault';
import { Typography } from '@material-tailwind/react';
import postsAtom from '@state/posts';
import moment from 'moment';
import Image from 'next/image';
import { useRecoilState } from 'recoil';

export default function Home() {
  const [postList] = useRecoilState(postsAtom);
  const liveYear = moment().diff(moment('2001-10-18'), 'year') + 1;

  return (
    <div className="h-screen">
      <LayoutDefault>
        <Banner width={'100%'} height={'100vh'} />
        <div className="w-full px-32 bg-transparent border-b shadow-glove border-primary">
          <div className="py-14">
            <div className="flex justify-between mb-8 items-center">
              <HeadTitle>news</HeadTitle>
              <SICButton variant="text" color="inherit">
                See all
              </SICButton>
            </div>
            <News posts={postList} limit={3} />
          </div>
        </div>
        <div className="w-full px-32 bg-transparent">
          <div className="py-14">
            <HeadTitle position={'center'}>about us</HeadTitle>
            <div className="flex justify-between gap-96 mt-8">
              <SICCard
                position="center"
                symbol="/images/About-1.png"
                title="Student Informatic Club"
                content="SIC belongs to the Youth Union - Student Union, head office is located at room 204 on the 2nd floor of the Library of Thuy Loi University."
              />
              <SICCard
                position="center"
                symbol="/images/About-2.png"
                title={`${liveYear} years of learning and development`}
                content={`Established on 18/10/2001,
after nearly ${liveYear} years of establishment and development, SIC has made a significant contribution to the organization of large and small events of the school.`}
              />
              <SICCard
                position="center"
                symbol="/images/About-3.png"
                title="SIC - A place to connect passions"
                content="SIC is not only a place where you can improve your computer knowledge and exchange skills in using software, it is also a friendly, fun, positive  environment for students."
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-transparent py-14">
          <HeadTitle position={'center'}>our activities</HeadTitle>
          <div className="mt-8 flex flex-col gap-14">
            <div className="flex">
              <div className="py-16 pl-32 pr-16 flex-1">
                <SICCard
                  title="Repair & Advice Day"
                  content="This is an extremely important activity, which is organized by SIC every year. This activity is for free and aimed at students and lecturers in the school, including practical activities such as: computer cleaning and upgrading support, free computer consultation...At the end of the event, participants will receive valuable gifts from the organizers."
                />
              </div>
              <div className="flex-1 relative">
                <Image fill sizes="100%" src={'/images/Activities-1.png'} alt="#" />
              </div>
            </div>
            <div className="flex">
              <div className="flex-1 relative">
                <Image fill sizes="100%" src={'/images/Activities-1.png'} alt="#" />
              </div>
              <div className="py-16 pr-32 pl-16 flex-1">
                <SICCard
                  title="Repair & Advice Day"
                  content="This is an extremely important activity, which is organized by SIC every year. This activity is for free and aimed at students and lecturers in the school, including practical activities such as: computer cleaning and upgrading support, free computer consultation...At the end of the event, participants will receive valuable gifts from the organizers."
                />
              </div>
            </div>
            <div className="flex">
              <div className="py-16 pl-32 pr-16 flex-1">
                <SICCard
                  title="Repair & Advice Day"
                  content="This is an extremely important activity, which is organized by SIC every year. This activity is for free and aimed at students and lecturers in the school, including practical activities such as: computer cleaning and upgrading support, free computer consultation...At the end of the event, participants will receive valuable gifts from the organizers."
                />
              </div>
              <div className="flex-1 relative">
                <Image fill sizes="100%" src={'/images/Activities-1.png'} alt="#" />
              </div>
            </div>
            <div className="flex">
              <div className="flex-1 relative">
                <Image fill sizes="100%" src={'/images/Activities-1.png'} alt="#" />
              </div>
              <div className="py-16 pr-32 pl-16 flex-1">
                <SICCard
                  title="Repair & Advice Day"
                  content="This is an extremely important activity, which is organized by SIC every year. This activity is for free and aimed at students and lecturers in the school, including practical activities such as: computer cleaning and upgrading support, free computer consultation...At the end of the event, participants will receive valuable gifts from the organizers."
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: '50vh' }}>
          <Ques />
        </div>
        <div className="w-full px-32 bg-transparent py-14">
          <HeadTitle>our leader</HeadTitle>
          <Typography className="font-mono text-sm text-text py-10">{`Sic's leaders are passionate people and have a strong long-term attachment to SIC. They always do their best for the members.`}</Typography>
          <Leader />
        </div>
        <div className="w-full px-32 bg-transparent py-14">
          <HeadTitle>our partner</HeadTitle>
          <Typography className="font-mono text-sm text-text py-10">{`For a long time, SIC always maintain a cooperative relationship with partners because they are the important people who contribute to promoting the club's activities.`}</Typography>
          <Partner />
        </div>
      </LayoutDefault>
    </div>
  );
}
