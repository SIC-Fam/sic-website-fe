import SICModal, { SICModalProps } from '@components/Modal';
import Video from '@components/Video';

interface VideoProps extends Omit<SICModalProps, 'children'> {}

const VideoModal = (props: VideoProps) => {
  return (
    <SICModal style={{ width: '995px' }} className="border border-primary shadow-primary" {...props}>
      <Video src={'/videos/intro.mp4'} />
    </SICModal>
  );
};

export default VideoModal;
