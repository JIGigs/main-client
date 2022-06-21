import Link from 'next/link';
import React from 'react';
import { Url } from 'url';
import { NavLink, User } from '../utilities';
import { AppLink } from './AppLink';
import { Logo } from './Logo';
import { NavItem } from './NavItem';

interface Props {
  user?: User;
  navLinks?: NavLink[];
}

export const Navbar: React.FC<Props> = ({ user, navLinks }) => {
  return (
    <nav className='navbar bg-jig-500 text-gray-200'>
      <div className='flex-1'>
        <Logo />
      </div>
      <div className='flex-none'>
        <label
          htmlFor='my-drawer-4'
          className='drawer-button btn btn-ghost lg:hidden'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-5 h-5 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </label>
        {navLinks && <NavItem navLinks={navLinks} />}
      </div>
    </nav>
  );
};
