import SICAccordion from '@components/Accordion';
import partnersAtom from '@state/partners';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import Image from 'next/image';

const Partner = () => {
  const [partners] = useRecoilState(partnersAtom);
  const [image, setImage] = useState<number>(0);
  const listImage = [
    {
      value: 0,
      href: '/images/icdl.png',
    },
    {
      value: 1,
      href: '',
    },
    {
      value: 2,
      href: '',
    },
  ];
  const handleChange = (value: number) => {
    setImage(value);
  };
  return (
    <div className="flex">
      <div className="flex-1 h-full items-center justify-center flex flex-col pr-14">
        <SICAccordion data={partners} onChange={handleChange} />
      </div>
      <div className="flex-1 relative h-[360px]">
        <Image fill sizes="100%" src={listImage.find((_v) => _v.value === image)?.href || ''} alt="#" />
      </div>
    </div>
  );
};

export default Partner;
