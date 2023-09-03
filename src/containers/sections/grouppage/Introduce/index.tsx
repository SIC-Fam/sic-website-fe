import { SICProfileCard } from '@components/atoms/Card';
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
        <h1 className="text-primary text-xl md:text-2xl lg:text-3xl font-medium">{shortDescription}</h1>
        <p className="mt-4 text-xs sm:text-sm ">{parse(longDescription)}</p>
      </div>

      <div className="mt-14">
        <h1 className="text-primary text-xl md:text-2xl lg:text-3xl font-medium">{leaderTitle}</h1>
        <div className="flex flex-col-reverse md:flex-row md:mt-10">
          <div className="flex-1">
            <SICProfileCard
              image={leaderInfo.image}
              name={leaderInfo.name}
              description={leaderInfo.description}
              social={leaderInfo.social}
            />
          </div>
          <p className="text-xs sm:text-sm flex-1 grid place-items-center py-6 md:p-10">{parse(leaderDescription)}</p>
        </div>
      </div>
    </>
  );
};

export default IntroduceSection;
