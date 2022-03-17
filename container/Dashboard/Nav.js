import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { MdFavorite, MdHomeWork } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';

const Nav = ({ current }) => {
  return (
    <Menu selectedKeys={[current]} mode="horizontal" >
      <Menu.Item key="profile" icon={<CgProfile size={18} />}>
        <Link href='/dashboard' >
          Profile
        </Link>
      </Menu.Item>
      <Menu.Item key="bookings" icon={<MdHomeWork size={18} />}>
        <Link href='/bookings' >
          My Bookings
        </Link>
      </Menu.Item>
      <Menu.Item key="favorites" icon={<MdFavorite size={18} />}>
        Favorites
      </Menu.Item>
      <Menu.Item key="referral" icon={<FaUsers size={18} />}>
        Referral
      </Menu.Item>
    </Menu>
  )
}

export default Nav;




