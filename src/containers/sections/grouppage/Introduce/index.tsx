import { SICProfileCard } from '@components/Card';
import React from 'react';
import parse from 'html-react-parser';

interface IntroduceSectionProps {
  shortDescription: string;
  longDescription: string;
  leaderTitle: string;
  leaderDescription: string;
  leaderInfo: {
    image: string;
    name: string;
    description: string;
    social: string;
  };
}

const IntroduceSection = ({
  shortDescription,
  longDescription,
  leaderTitle,
  leaderDescription,
  leaderInfo,
}: IntroduceSectionProps) => {
  return (
    <>
      <div className="mt-14">
        <h1 className="text-primary text-4xl font-medium">{shortDescription}</h1>
        <p className="mt-4 ">{parse(longDescription)}</p>
      </div>

      <div className="mt-14">
        <h1 className="text-primary text-4xl font-medium">{leaderTitle}</h1>
        <p className="my-4">{parse(leaderDescription)}</p>
        <SICProfileCard
          image={leaderInfo.image}
          name={leaderInfo.name}
          description={leaderInfo.description}
          social={leaderInfo.social}
        />
      </div>
    </>
  );
};

export default IntroduceSection;
