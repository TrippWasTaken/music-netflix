import React from 'react';
import { Navbar, Image, Text, Avatar, Dropdown } from '@nextui-org/react';

const Header = () => {
  const { Brand, Content, Item, Link, Toggle, Collapse, CollapseItem } = Navbar;
  return (
    <Navbar variant="sticky" maxWidth="fluid">
      <Brand>
        <Image width={50} height={50} src={'/logo.png'} alt="Logo Image" objectFit="contain" />
        <Text b color="primary" hideIn="xs">
          KYOKU
        </Text>
      </Brand>

      <Content activeColor="primary" hideIn="xs" variant="underline">
        <Link href="#">Home</Link>
        <Link href="#">Your List</Link>
        <Link href="#">Newly added</Link>
      </Content>

      <Dropdown>
        <Dropdown.Trigger>
          <Avatar size="lg" bordered color="primary" src="" text="user"></Avatar>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
  );
};

export default Header;
