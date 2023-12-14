import React from 'react';
import {
  Navbar,
  Image,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar
} from '@nextui-org/react';

type Props = {
  user: any
};
const Header = ({ user }: Props) => {
  return (
    <Navbar position="sticky" maxWidth="full">
      <NavbarBrand>
        <Image width={50} height={50} src={'/logo.png'} alt="Logo Image" />
        <h1 className="text=lg font-semibold">Kyoku</h1>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Link color="foreground" href="#">
          Home
        </Link>
        <Link color="foreground" href="#">
          Your List
        </Link>
        <Link color="foreground" href="#">
          Newly added
        </Link>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              as="button"
              className="transition-transform"
              color="secondary"
              name={user?.username || 'user'}
              size="sm"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile actions" variant="flat">
            <DropdownItem key="logout">Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
