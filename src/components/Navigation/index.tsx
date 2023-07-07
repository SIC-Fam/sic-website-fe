import SICMenu, { MenuType } from '@components/Menu';
import { Avatar, Navbar, Typography } from '@material-tailwind/react';
import style from './style.module.scss';
import clsx from 'clsx';
import { useRouter } from 'next/router';

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
    <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-6">
      {list.length > 0 &&
        list.map((_l, _i) =>
          _l.menus ? (
            <SICMenu className="py-6" name={_l.name} menus={_l.menus} key={_i} />
          ) : (
            <Typography
              onClick={() => {
                router.push(_l.href);
              }}
              key={_i}
              as="li"
              variant="small"
              color="blue-gray"
              className={clsx(
                style['navbar-name'],
                [
                  'p-1 cursor-pointer font-light py-6 px-8 border-b-2 hover:border-primary border-transparent flex font-mono items-center text-white uppercase transition-colors',
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
  );
};

const SICNavbar = (props: NavbarType) => {
  const { logo, list } = props;

  return (
    <Navbar fullWidth color="transparent" shadow style={{ zIndex: 10 }} className="fixed mx-auto bg-dark-main py-0">
      <div className="flex items-center justify-between text-white font-mono w-5/6 mx-auto">
        <Avatar src={logo || '/images/logo.png'} />
        <div className="hidden lg:block">
          <NavList list={list} />
        </div>
      </div>
    </Navbar>
  );
};

export default SICNavbar;
