import Envolop from '@components/icons/Envolop';
import Facebook from '@components/icons/Facebook';
import Location from '@components/icons/Location';
import Github from '@components/icons/Github';
import { Avatar, Typography } from '@material-tailwind/react';

const Footer = () => {
  return (
    <footer className="border-primary flex w-full flex-row flex-wrap items-end justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 p-20 text-center md:justify-between">
      <div className="flex flex-col">
        <Avatar src={'/images/logo.png'} />
        <Typography className="font-normal font-mono">&copy; 2023 | All right reserved</Typography>
      </div>
      <div className="flex flex-col items-end gap-2">
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Facebook fill="#F57930" strokeWidth={0} />
          </li>
          <li>
            <Envolop fill="#F57930" strokeWidth={0} />
          </li>
          <li>
            <Location fill="#F57930" strokeWidth={0} />
          </li>
          <li>
            <Github fill="#F57930" strokeWidth={0} />
          </li>
        </ul>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography as="a" href="#" className="font-bold text-sm text-text hover:text-primary uppercase font-mono">
              About Us
            </Typography>
          </li>
          <li>
            <Typography as="a" href="#" className="font-bold text-sm text-text hover:text-primary uppercase font-mono">
              License
            </Typography>
          </li>
          <li>
            <Typography as="a" href="#" className="font-bold text-sm text-text hover:text-primary uppercase font-mono">
              Contribute
            </Typography>
          </li>
          <li>
            <Typography as="a" href="#" className="font-bold text-sm text-text hover:text-primary uppercase font-mono">
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
