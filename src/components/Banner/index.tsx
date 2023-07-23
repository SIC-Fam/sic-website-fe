import SICButton from '@components/Button';
import Play from '@components/icons/Play';
import RegisterModal from '@containers/modal/RegisterModal';
import VideoModal from '@containers/modal/VideoModal';
import { Typography } from '@material-tailwind/react';
import Image from 'next/image';
import { ReactNode, useState } from 'react';
import parse from 'html-react-parser';

type BannerType = {
  image?: string;
  width: number | string;
  height: number | string;
  className?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  buttonLabel?: string;
};

const Banner = ({
  title = "Student help student master <span className='text-primary'>technology</span>",
  description = "Improve students's understanding and proficiency in using various <span className='text-primary'>technology</span>",
  buttonLabel = 'Become our partner',
  ...props
}: BannerType) => {
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
      className={`flex items-center ${props.className}`}
      style={{
        width: props.width,
        height: props.height,
      }}
    >
      <RegisterModal open={isOpenRegisterModal} onClose={handleCloseRegisterModal} />
      <VideoModal open={isOpenVideoModal} onClose={handleCloseVideoModal} />

      <Image className="h-full w-full" src={props.image || '/images/banner.png'} alt="nature image" fill />
      <figcaption className="wrapper z-10">
        <div>
          <Typography className="text-white text-xl sm:text-3xl md:text-5xl  font-mono">
            {parse(title + '')}
          </Typography>
          <Typography className="mt-2 mb-8 font-normal text-text text-xs sm:text-sm font-mono">
            {parse(description + '')}
          </Typography>
          <div className="flex items-center">
            <SICButton onClick={handleOpenRegisterModal} color="primary">
              {buttonLabel}
            </SICButton>
            <Play
              onClick={handleOpenVideoModal}
              color="#F57930"
              className="ml-2 sm:ml-8 w-12 h-12 hover:shadow-primary rounded-full cursor-pointer transition-shadow duration-150 border border-transparent hover:border-primary"
            />
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default Banner;
