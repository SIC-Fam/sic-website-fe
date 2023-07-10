import LayoutDefault from '@layouts/LayoutDefault';
import React, { useMemo } from 'react';
import Banner from '@components/Banner';
import Ques from '@components/Ques';

import groupsAtom from '@state/group';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import leadersAtom from '@state/leaders';
import IntroduceSection from '@containers/sections/grouppage/Introduce';
import MissionSection from '@containers/sections/grouppage/Mission';
import AdvantageSection from '@containers/sections/grouppage/Advantage';

const GroupPage = () => {
  const router = useRouter();

  const [groups] = useRecoilState(groupsAtom);
  const [leaders] = useRecoilState(leadersAtom);

  const { group: query } = router.query;

  const data = useMemo(() => groups.find((item) => item.title.toLowerCase().includes(query + '')), [groups, query]);

  const leader = useMemo(() => leaders.find((item) => item.key.toLowerCase().includes(query + '')), [leaders, query]);

  if (!data || !leader) {
    return <></>;
  }

  return (
    <LayoutDefault>
      <Banner
        width="100%"
        height="100%"
        title={data.title}
        description={data.mainDescription}
        buttonLabel={`Become a member of ${data.title.toLowerCase()}`}
      />
      <div className="wrapper mb-20">
        <IntroduceSection
          leaderDescription={data.leaderInfo.description}
          leaderTitle={data.leaderInfo.title}
          longDescription={data.longDescription}
          shortDescription={data.shortDescription}
          leaderInfo={leader}
        />
        <MissionSection title={data.title} data={data.data} />
        <AdvantageSection />
      </div>
      <Ques />
    </LayoutDefault>
  );
};

export default GroupPage;
