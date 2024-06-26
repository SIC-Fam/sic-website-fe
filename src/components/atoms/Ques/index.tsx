import SICButton from '@components/atoms/Button';
import RegisterModal from '@containers/modal/RegisterModal';
import { Typography } from '@material-tailwind/react';
import { useState } from 'react';

const Ques = () => {
  const [isOpenRegisterModal, setIsOpenRegisterModal] = useState<boolean>(false);

  const handleOpenRegisterModal = () => {
    setIsOpenRegisterModal(true);
  };

  const handleCloseRegisterModal = () => {
    setIsOpenRegisterModal(false);
  };
  return (
    <div className="py-14 relative" style={{ background: "url('/images/banner.jpg') center center/ cover no-repeat" }}>
      <div className="bg-black/70 absolute inset-0 z-[0]"></div>

      <RegisterModal open={isOpenRegisterModal} onClose={handleCloseRegisterModal} />
      <div className="wrapper z-[1] relative">
        <Typography className="text-white text-xl md:text-2xl lg:text-4xl text-center  ">
          Ready to become a member of{' '}
          <Typography as="span" className="inline-block decoration-solid decoration-primary text-primary  ">
            Sic
          </Typography>{' '}
          Family?
        </Typography>
        <Typography className="mt-2 mb-8 font-normal text-text text-xs md:text-sm   text-center">
          {`Click the button below to become a member of `}
          <Typography as="span" className="inline-block   text-primary">
            SIC GANG
          </Typography>
        </Typography>
        <div className="flex justify-center items-center">
          <SICButton onClick={handleOpenRegisterModal} color="primary">
            Enroll
          </SICButton>
        </div>
      </div>
    </div>
  );
};

export default Ques;
