import { Typography } from '@material-tailwind/react';

const Video = ({ src }) => {
  return (
    <video className="h-full w-full rounded-lg" controls autoPlay loop>
      <source src={src} type="video/mp4" />
      <Typography className="font-mono font-sm">Your browser does support the video tag</Typography>
    </video>
  );
};

export default Video;
