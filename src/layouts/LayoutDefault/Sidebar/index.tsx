import clsx from 'clsx';
import { useRouter } from 'next/router';
import {
  Card,
  Avatar,
  Typography,
  List,
  ListItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import { Dispatch, SetStateAction, useState } from 'react';
import ChevronDown from '@components/icons/ChevronDown';
import CloseIcon from '@components/icons/Close';
import { NavbarListType } from '../Navigation';

interface SidebarItemProps {
  text: string;
  onClick?: () => void;
}

const SidebarItem = ({ text, onClick }: SidebarItemProps) => {
  return (
    <ListItem className="hover:bg-primary capitalize" onClick={onClick}>
      <Typography className="mr-auto font-normal text-white text-sm ">{text}</Typography>
    </ListItem>
  );
};

const Sidebar = (props: {
  list: Array<NavbarListType>;
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}) => {
  const { list, showSidebar, setShowSidebar } = props;
  const router = useRouter();
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleNavigate = (link?: string) => {
    link && router.push(link);
    setOpen(0);
    setShowSidebar(false);
  };

  return (
    <>
      <Card
        className={clsx([
          'lg:hidden h-screen w-full p-4 fixed inset-0 bg-dark-main z-[9999] -translate-y-full duration-300',
          {
            'translate-y-0': showSidebar,
          },
        ])}
      >
        <div className="mb-2 p-4 flex justify-between items-center">
          <Avatar src={'/images/logo.png'} onClick={() => router.push('/')} className="my-3" />
          <div className="cursor-pointer p-2" onClick={() => setShowSidebar(false)}>
            <CloseIcon />
          </div>
        </div>
        <List>
          {list?.length > 0 &&
            list.map((link, _i) =>
              !link.menus?.length ? (
                <SidebarItem key={link.name} text={link.name} onClick={() => handleNavigate(link.href)} />
              ) : (
                <Accordion
                  key={link.name}
                  open={open === _i}
                  icon={
                    <ChevronDown
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4 text-white transition-transform ${open === _i ? 'rotate-180' : ''}`}
                    />
                  }
                >
                  <AccordionHeader onClick={() => handleOpen(_i)} className="border-b-0 p-0">
                    <ListItem
                      className="capitalize hover:bg-transparent active:bg-transparent focus:bg-transparent active:text-white focus:text-white text-white text-sm hover:text-white font-medium"
                      selected={open === _i}
                    >
                      {link.name}
                    </ListItem>
                  </AccordionHeader>
                  <AccordionBody className="py-1">
                    <List className="p-0 ml-3 border-l-dark-light border-l-2 pl-2">
                      {link.menus.map((subLink) => (
                        <SidebarItem
                          key={subLink.label}
                          text={subLink.label}
                          onClick={() => handleNavigate(subLink.href)}
                        />
                      ))}
                    </List>
                  </AccordionBody>
                </Accordion>
              ),
            )}
        </List>
      </Card>
    </>
  );
};

export default Sidebar;
