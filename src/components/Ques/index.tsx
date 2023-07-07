import SICButton from '@components/Button';
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
    <div className="py-14" style={{ background: "url('/images/banner.png') center center/ cover no-repeat" }}>
      <RegisterModal open={isOpenRegisterModal} onClose={handleCloseRegisterModal} />
      <div className="wrapper">
        <Typography className="text-white text-4xl text-center font-mono">
          Ready to become a member of{' '}
          <Typography as="span" className="inline-block decoration-solid decoration-primary text-primary font-mono">
            Sic
          </Typography>{' '}
          Family?
        </Typography>
        <Typography className="mt-2 mb-8 font-normal text-white text-sm font-mono text-center">
          {`Click the button below to become a member of `}
          <Typography as="span" className="inline-block font-mono text-primary">
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
