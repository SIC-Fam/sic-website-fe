import SICButton from '@components/Button';
import SICModal, { SICModalProps } from '@components/Modal';
import { Typography } from '@material-tailwind/react';

interface CloseConfirmModalProps extends Omit<SICModalProps, 'children'> {
  onSubmit: () => void;
}
const CloseConfirmModal = (props: CloseConfirmModalProps) => {
  const handleSubmit = () => {
    props?.onSubmit();
    props?.onClose();
  };
  return (
    <SICModal {...props} style={{ zIndex: 99 }} className="border border-primary rounded-lg shadow-primary">
      <div className="flex flex-col p-14 gap-10">
        <Typography className="font-mono text-xl text-center text-primary">Are you sure to cancel?</Typography>
        <div className="flex justify-between">
          <SICButton variant="text" color="inherit" onClick={props?.onClose}>
            Cancel
          </SICButton>
          <SICButton color="primary" onClick={handleSubmit}>
            Confirm
          </SICButton>
        </div>
      </div>
    </SICModal>
  );
};

export default CloseConfirmModal;
