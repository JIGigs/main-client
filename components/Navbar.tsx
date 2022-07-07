import Link from 'next/link';
import React from 'react';
import { User } from '../utilities';
import { Logo } from './Logo';

interface Props {
  user?: User;
  navLinks?: React.ReactNode;
}

export const Navbar: React.FC<Props> = ({ user, navLinks }) => {
  return (
    <div className='bg-jig-500 text-gray-200'>
      <nav className='max-w-7xl mx-auto navbar'>
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
          <ul className='menu menu-horizontal p-0 hidden lg:flex font-body'>
            <ul className='menu menu-horizontal p-0'>
              <li className='hover:bg-jig-600 font-semibold'>
                <Link href='/jobs'>
                  <a>Jobs</a>
                </Link>
              </li>
              <li className='hover:bg-jig-600 font-semibold'>
                <Link href='/services'>
                  <a>Services</a>
                </Link>
              </li>
              <li className='hover:bg-jig-600 font-semibold'>
                <Link href='/courses'>
                  <a>Courses</a>
                </Link>
              </li>
              <li tabIndex={0}>
                <a className='font-semibold'>
                  Career Resources
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
                <ul className='p-2 bg-jig-500 font-semibold'>
                  <li className='hover:bg-jig-600'>
                    <Link href='/career/advice'>
                      <a>Career Adivce</a>
                    </Link>
                  </li>
                  <li className='hover:bg-jig-600'>
                    <Link href='/career/hr-news'>
                      <a>HR News</a>
                    </Link>
                  </li>
                  <li className='hover:bg-jig-600'>
                    <Link href='/career/training'>
                      <a>Training Events</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='m-1 mx-2'>
                <Link href={'/employers/login'}>
                  <a className='btn btn-outline border-jig-200 hover:border-gray-700 hover:bg-transparent px-6 py-0'>
                    Employers
                  </a>
                </Link>
              </li>
              <li className='m-1 mx-2'>
                <Link href={'/login'}>
                  <a className='btn bg-jig-400 hover:bg-jig-700 px-10 py-0'>
                    Login
                  </a>
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </nav>
    </div>
  );
};
