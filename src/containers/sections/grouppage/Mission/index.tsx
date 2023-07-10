import React from 'react';
import Image from 'next/image';
import parse from 'html-react-parser';

interface MissionItem {
  title: string;
  description: string;
  image: string;
  imageDes: string;
}
interface MissionSectionProps {
  title: string;
  data: MissionItem[];
}

const MissionSection = ({ title, data }: MissionSectionProps) => {
  return (
    <>
      <div className="mt-14">
        <h1 className="text-primary text-4xl font-medium">What does the {title.toLowerCase()} do?</h1>
        {data.map((item, index) => (
          <div className="py-4" key={item.title}>
            <h1 className="text-primary pb-4 font-medium">
              {index + 1}.{item.title}
            </h1>
            <p className="pb-4">{parse(item.description)}</p>
            <div className="relative h-[500px]">
              <Image fill src={item.image} alt={item.title} className="rounded-lg" />
            </div>
            <p className="text-center my-2 text-xs">{item.imageDes}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MissionSection;
