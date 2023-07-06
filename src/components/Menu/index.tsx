import ChevronDown from '@components/icons/ChevronDown';
import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

export type MenuListType = {
  name: string;
  menus: Array<MenuType>;
};

export type MenuType = {
  label: string;
  href: string;
  subMenu?: Array<MenuType>;
};

const SICMenu = (props: MenuListType) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { name, menus } = props;
  const router = useRouter();

  const triggers = {
    onMouseEnter: () => setOpenMenu(true),
    onMouseLeave: () => setOpenMenu(false),
  };

  return (
    <Menu open={openMenu} handler={setOpenMenu} placement="bottom-end">
      <MenuHandler
        className={` ${
          openMenu ? 'border-primary text-primary shadow-glove' : 'border-transparent text-white'
        } gap-2 flex items-center border-b font-mono rounded-none text-sm hover:bg-transparent font-light uppercase`}
      >
        <Button {...triggers} variant="text" ripple={false}>
          {name}
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openMenu ? 'rotate-180' : ''}`} />
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
