import ChevronDown from '@components/icons/ChevronDown';
import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { ReactNode, useState } from 'react';

export type MenuListType = {
  name: string | ReactNode;
  menus: Array<MenuType>;
  className?: string;
};

export type MenuType = {
  label: string;
  href: string;
  subMenu?: Array<MenuType>;
};

const SICMenu = ({ name, menus, className = '' }: MenuListType) => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const triggers = {
    onMouseEnter: () => setOpenMenu(true),
    onMouseLeave: () => setOpenMenu(false),
  };

  return (
    <Menu open={openMenu} handler={setOpenMenu} placement="bottom-end">
      <MenuHandler
        className={clsx(
          {
            'border-b-2': typeof name === 'string',
            'border-primary text-primary': openMenu,
            'border-transparent text-white': !openMenu,
          },
          [
            'gap-2 flex items-center  font-mono rounded-none text-sm hover:bg-transparent font-light uppercase outline-none',
          ],
          [className],
        )}
      >
        <Button {...triggers} variant="text" ripple={false}>
          {name}
          {typeof name === 'string' && (
            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openMenu ? 'rotate-180' : ''}`} />
          )}
        </Button>
      </MenuHandler>
      <MenuList {...triggers} className="bg-dark-light px-0 border-none">
        {menus.length > 0 &&
          menus.map((_m, index) =>
            _m.subMenu ? (
              <Menu key={index} placement="right-start" offset={15}>
                <MenuHandler>{_m.label}</MenuHandler>
                <MenuList className="px-0">
                  {_m.subMenu?.map((_sub, i) => (
                    <MenuItem
                      className="font-mono pe-12 rounded-none text-white hover:text-white capitalize hover:bg-primary"
                      key={i}
                      onClick={() => router.push(_sub.href)}
                    >
                      {_sub.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            ) : (
              <MenuItem
                className="font-mono pe-12 text-white rounded-none hover:text-white capitalize hover:bg-primary"
                onClick={() => router.push(_m.href)}
                key={index}
              >
                {_m.label}
              </MenuItem>
            ),
          )}
      </MenuList>
    </Menu>
  );
};

export default SICMenu;
