import SICAccordion from '@components/atoms/Accordion';
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
      href: '/images/laptopAZ.jpeg',
    },
    {
      value: 2,
      href: '/images/bit.jpeg',
    },
  ];
  const handleChange = (value: number) => {
    setImage(value);
  };
  return (
    <div className="lg:flex">
      <div className="flex-1 h-full items-center justify-center flex flex-col lg:pr-14">
        <SICAccordion data={partners} onChange={handleChange} />
      </div>
      <div className="flex-1 relative my-8 h-[360px]">
        <Image
          className="object-contain"
          fill
          sizes="100%"
          src={listImage.find((_v) => _v.value === image)?.href || ''}
          alt="#"
        />
      </div>
    </div>
  );
};

export default Partner;
