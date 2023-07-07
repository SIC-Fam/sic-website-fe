import SICMenu, { MenuType } from '@components/Menu';
import { Avatar, Navbar, Typography } from '@material-tailwind/react';
import style from './style.module.scss';

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
  return (
    <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-6">
      {list.length > 0 &&
        list.map((_l, _i) =>
          _l.menus ? (
            <SICMenu name={_l.name} menus={_l.menus} key={_i} />
          ) : (
            <Typography
              key={_i}
              as="li"
              variant="small"
              color="blue-gray"
              className={`p-1 cursor-pointer font-medium py-6 px-8 hover:shadow-glove border-b hover:border-primary transition-colors border-transparent ${style['navbar-name']}`}
            >
              <a
                href={_l.href}
                className="flex font-mono font-light items-center text-white uppercase transition-colors"
              >
                {_l.name}
              </a>
            </Typography>
          ),
        )}
    </ul>
  );
};

const SICNavbar = (props: NavbarType) => {
  const { logo, list } = props;

  return (
    <Navbar
      fullWidth
      color="transparent"
      shadow
      style={{ zIndex: 10 }}
      className="fixed mx-auto shadow-primary bg-dark-main p-0"
    >
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
