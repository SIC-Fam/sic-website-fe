import Envolop from '@components/atoms/icons/Envolop';
import Facebook from '@components/atoms/icons/Facebook';
import Location from '@components/atoms/icons/Location';
import Github from '@components/atoms/icons/Github';
import { Avatar, Typography } from '@material-tailwind/react';
import navAtom from '@state/nav';
import { useRecoilState } from 'recoil';

const CONTACT_INFORMATION = [
  {
    icon: <Facebook fill="#F57930" strokeWidth={0} />,
    href: 'https://www.facebook.com/clbtinhocsinhvien',
  },
  {
    icon: <Envolop fill="#F57930" strokeWidth={0} />,
    href: 'mailto:clbtinhocsinhvien@gmail.com',
  },
  {
    icon: <Location fill="#F57930" strokeWidth={0} />,
    href: 'https://goo.gl/maps/TBMxB7gdwWadNPgi7',
  },
  {
    icon: <Github fill="#F57930" strokeWidth={0} />,
    href: 'https://github.com/SIC-Fam',
  },
];

const Footer = () => {
  const [navListItemFooter] = useRecoilState(navAtom);

  return (
    <footer className="flex wrapper flex-row flex-wrap items-end gap-y-6 gap-x-12 py-20 text-center md:justify-between">
      <div className="flex flex-col">
        <Avatar src={'/images/logo.png'} />
        <Typography className="font-normal   mt-2">&copy; 2023 | All right reserved</Typography>
      </div>
      <div className="md:flex flex-col items-end">
        <ul className="flex flex-wrap items-center">
          {CONTACT_INFORMATION.map((item) => (
            <li className="mr-8 md:mr-0 md:ml-8" key={item.href}>
              <a href={item.href} target="_blank">
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center mt-4">
          {navListItemFooter.map((item) => (
            <>
              {!item?.menus && (
                <li key={`footer ${item.name}`}>
                  <Typography
                    as="a"
                    href={item.href}
                    className="font-normal text-sm text-text hover:text-primary uppercase   md:ml-8 mr-8 md:mr-0"
                  >
                    {item.name}
                  </Typography>
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
