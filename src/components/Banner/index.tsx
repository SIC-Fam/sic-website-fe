import SICButton from '@components/Button';
import Play from '@components/icons/Play';
import { Typography } from '@material-tailwind/react';
import Image from 'next/image';

type BannerType = {
  image?: string;
  width: number | string;
  height: number | string;
  className?: string;
};

const Banner = (props: BannerType) => {
  return (
    <figure
      className={`${props.className}`}
      style={{
        width: props.width,
        height: props.height,
      }}
    >
      <Image className="h-full w-full" src={props.image || '/images/banner.png'} alt="nature image" fill />
      <figcaption className="absolute inset-y-1/4 left-40">
        <div>
          <Typography className="text-white text-5xl font-mono">
            Students help students <br /> master{' '}
            <Typography
              as="span"
              className="inline-block decoration-solid decoration-primary underline text-primary font-mono"
            >
              technology
            </Typography>
            !
          </Typography>
          <Typography className="mt-2 mb-8 font-normal text-white text-sm font-mono">
            {`Improve students's understanding and proficiency in using various `}
            <Typography as="span" className="inline-block font-mono text-primary">
              technology
            </Typography>
            .
          </Typography>
          <div className="flex justify-between items-center" style={{ width: '55%' }}>
            <SICButton color="primary">Enroll to become our partner</SICButton>
            <Play
              color="#F57930"
              className="w-12 h-12 hover:shadow-primary rounded-full cursor-pointer transition-shadow duration-150 border border-transparent hover:border-primary"
            />
          </div>
        </div>
        {/* <Typography variant="h5" color="blue-gray">
                    Growth
                </Typography> */}
      </figcaption>
    </figure>
  );
};

export default Banner;
