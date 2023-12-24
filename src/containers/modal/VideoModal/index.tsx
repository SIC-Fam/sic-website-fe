import SICModal, { SICModalProps } from '@components/atoms/Modal';
import Video from '@components/atoms/Video';

interface VideoProps extends Omit<SICModalProps, 'children'> {}

const VideoModal = (props: VideoProps) => {
  return (
    <SICModal style={{ maxWidth: 700 }} className="border border-primary shadow-primary aspect-video w-full" {...props}>
      <Video src={'https://youtu.be/EG_zVF2tWFQ'} />
    </SICModal>
  );
};

export default VideoModal;
