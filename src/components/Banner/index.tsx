import SICButton from '@components/Button';
import Play from '@components/icons/Play';
import RegisterModal from '@containers/modal/RegisterModal';
import VideoModal from '@containers/modal/VideoModal';
import { Typography } from '@material-tailwind/react';
import Image from 'next/image';
import { useState } from 'react';

type BannerType = {
  image?: string;
  width: number | string;
  height: number | string;
  className?: string;
};

const Banner = (props: BannerType) => {
  const [isOpenRegisterModal, setIsOpenRegisterModal] = useState<boolean>(false);
  const [isOpenVideoModal, setIsOpenVideoModal] = useState<boolean>(false);

  const handleOpenVideoModal = () => {
    setIsOpenVideoModal(true);
  };

  const handleCloseVideoModal = () => {
    setIsOpenVideoModal(false);
  };

  const handleOpenRegisterModal = () => {
    setIsOpenRegisterModal(true);
  };

  const handleCloseRegisterModal = () => {
    setIsOpenRegisterModal(false);
  };
  return (
    <figure
      className={`${props.className}`}
      style={{
        width: props.width,
        height: props.height,
      }}
    >
      <RegisterModal open={isOpenRegisterModal} onClose={handleCloseRegisterModal} />
      <VideoModal open={isOpenVideoModal} onClose={handleCloseVideoModal} />

      <Image className="h-full w-full" src={props.image || '/images/banner.png'} alt="nature image" fill />
      <figcaption className="absolute inset-y-1/4 left-40">
        <div>
          <Typography className="text-white text-5xl font-mono">
            Students help students <br /> master{' '}
            <Typography as="span" className="inline-block decoration-solid decoration-primary text-primary font-mono">
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
          <div className="flex items-center">
            <SICButton onClick={handleOpenRegisterModal} color="primary">
              Enroll to become our partner
            </SICButton>
            <Play
              onClick={handleOpenVideoModal}
              color="#F57930"
              className="ml-8 w-12 h-12 hover:shadow-primary rounded-full cursor-pointer transition-shadow duration-150 border border-transparent hover:border-primary"
            />
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default Banner;
