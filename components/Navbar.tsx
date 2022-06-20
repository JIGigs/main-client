import React from 'react';
import { User } from '../types';
import { Logo } from './Logo';

interface Props {
  user?: User;
}

export const Navbar: React.FC<Props> = ({ user }) => {
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
        <ul className='menu menu-horizontal p-0 hidden lg:flex'>
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <a>
              Parent
              <svg
                className='fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
              >
                <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
              </svg>
            </a>
            <ul className='p-2 bg-jig-500'>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
