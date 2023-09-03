import style from '../../../styles/button.module.scss';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import SICButton from '@components/atoms/Button';
import { useRecoilState } from 'recoil';
import { authAtom } from '@state/auth';
import { logout } from '@services/auth';
import { Avatar, Navbar, Typography } from '@material-tailwind/react';
import { useState } from 'react';
import SICMenu, { MenuType } from '../Menu';
import Sidebar from '@layouts/LayoutDefault/Sidebar';
import BarsIcon from '../icons/Bars';

export type NavbarType = {
  logo?: string;
  list: Array<NavbarListType>;
};

export type NavbarListType = {
  name: string;
  href: string;
  menus?: Array<MenuType>;
};

const NavList = (props: { list: Array<NavbarListType> }) => {
  const { list } = props;
  const router = useRouter();

  return (
    <>
      <ul className="flex-col gap-1 lg:flex-row lg:items-center lg:gap-6 hidden lg:flex">
        {list.length > 0 &&
          list.map((_l, _i) =>
            _l.menus ? (
              <SICMenu className="py-6" name={_l.name} menus={_l.menus} key={_i} />
            ) : (
              <Typography
                onClick={() => {
                  router.push(_l.href);
                }}
                key={`header ${_l.name}`}
                as="li"
                variant="small"
                color="blue-gray"
                className={clsx(
                  style['navbar-name'],
                  [
                    'p-1 cursor-pointer font-light py-6 px-8 border-b-2 hover:border-primary border-transparent flex   items-center text-white uppercase transition-colors',
                  ],
                  {
                    'border-primary text-primary': router.pathname === _l.href,
                  },
                )}
              >
                {_l.name}
              </Typography>
            ),
          )}
      </ul>
    </>
  );
};

const SICNavbar = (props: NavbarType) => {
  const router = useRouter();
  const { logo, list } = props;
  const [user, setUser] = useRecoilState(authAtom);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleNavigateAuthPage = () => {
    router.push('/auth/login');
  };

  const handleLogOut = () => {
    logout();
    setUser(null);
  };

  return (
    <Navbar
      fullWidth
      color="transparent"
      shadow
      className="fixed mx-auto bg-dark-main py-0 border-b border-b-[rgba(0,0,0,0.2)] z-[11] "
    >
      <div className="flex items-center justify-between text-white   w-5/6 mx-auto wrapper">
        <Avatar src={logo || '/images/logo.png'} onClick={() => router.push('/')} className="my-3" />
        <div className="lg:flex">
          <NavList list={list} />
          <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} list={list} />
          <div className="hidden lg:grid place-items-center ml-12">
            <div
              className="py-2 px-4 border border-primary hover:rounded-full cursor-pointer text-primary transition hover:text-white hover:bg-primary"
              onClick={!user ? handleNavigateAuthPage : handleLogOut}
            >
              <div className="hidden md:block">{!user ? 'LOG-IN' : 'LOG-OUT'}</div>
            </div>
          </div>
        </div>
        <div className="lg:hidden cursor-pointer" onClick={() => setShowSidebar(true)}>
          <BarsIcon />
        </div>
      </div>
    </Navbar>
  );
};

export default SICNavbar;
