import Banner from '@components/Banner';
import SICButton from '@components/Button';
import { SICCard } from '@components/Card';
import News from '@components/News';
import LayoutDefault from '@layouts/LayoutDefault';
import { Typography } from '@material-tailwind/react';
import postsAtom from '@state/posts';
import moment from 'moment';
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
              <Typography className="font-mono text-primary uppercase text-4xl font-bold">News</Typography>
              <SICButton variant="text" color="inherit">
                See all
              </SICButton>
            </div>
            <News posts={postList} limit={3} />
          </div>
        </div>
        <div className="w-full px-32 bg-transparent border-b border-primary">
          <div className="py-14">
            <Typography className="font-mono text-primary mb-8 text-center uppercase text-4xl font-bold">
              about us
            </Typography>
            <div className="flex justify-between gap-72">
              <SICCard
                symbol="/images/About-1.png"
                title="Student Informatic Club"
                content="SIC belongs to the Youth Union - Student Union, head office is located at room 204 on the 2nd floor of the Library of Thuy Loi University."
              />
              <SICCard
                symbol="/images/About-2.png"
                title={`${liveYear} years of learning and development`}
                content={`Established on 18/10/2001,
after nearly ${liveYear} years of establishment and development, SIC has made a significant contribution to the organization of large and small events of the school.`}
              />
              <SICCard
                symbol="/images/About-3.png"
                title="SIC - A place to connect passions"
                content="SIC is not only a place where you can improve your computer knowledge and exchange skills in using software, it is also a friendly, fun, positive  environment for students."
              />
            </div>
          </div>
        </div>
      </LayoutDefault>
    </div>
  );
}
