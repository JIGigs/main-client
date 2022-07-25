import Link from 'next/link';
import React, { useState } from 'react';
import { User } from '../types';
import { AppLink } from './AppLink';
import { Avatar } from './Avatar';

interface Props {
  user?: User;
}

export const MobileNav: React.FC<Props> = ({ user }) => {
  const [hideDropdown, setHideDropdown] = useState(true);
  const handleSubmenu = () => {
    setHideDropdown(!hideDropdown);
  };
  return (
    <>
      <label htmlFor='my-drawer-4' className='drawer-overlay'></label>
      <ul className='menu p-4 overflow-y-auto w-80 bg-jig-500 text-white font-body'>
        {user && (
          <div className='p-2 bg-jig-400 rounded-3xl mb-3'>
            <Avatar user={user && user} />
          </div>
        )}
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/jobs'>
            <a>Jobs</a>
          </Link>
        </li>
        <li>
          <Link href='/services'>
            <a>Services</a>
          </Link>
        </li>
        <li>
          <Link href='/courses'>
            <a>Courses</a>
          </Link>
        </li>
        {/* <a>
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
          </a> */}
        <div className='m-4'>
          <label
            tabIndex={0}
            className='cursor-pointer w-full'
            onClick={handleSubmenu}
          >
            Career Resources
            <svg
              className='fill-current inline ml-2'
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
            >
              {hideDropdown ? (
                <path d='M6.175 7.14999L10 10.975L13.825 7.14999L15 8.33333L10 13.3333L5 8.33333L6.175 7.14999Z' />
              ) : (
                <path d='M6.175 12.85L10 9.02501L13.825 12.85L15 11.6667L10 6.66667L5 11.6667L6.175 12.85Z' />
              )}
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`menu mt-2 p-2 shadow bg-jig-500 border border-jig-200 rounded-box w-52 ${
              hideDropdown && 'hidden'
            }`}
          >
            <li>
              <Link href='/career/advice'>
                <a>Career Adivce</a>
              </Link>
            </li>
            <li>
              <Link href='/career/hr-news'>
                <a>HR News</a>
              </Link>
            </li>
            <li>
              <Link href='/career/training'>
                <a>Training Events</a>
              </Link>
            </li>
          </ul>
        </div>
        <li className='m-3 mx-2'>
          <Link href={'/employers/login'}>
            <a className='btn btn-outline border-jig-200 hover:border-gray-700 hover:bg-transparent px-6 py-0'>
              Employers
            </a>
          </Link>
        </li>
        <li className='m-3 mx-2'>
          <Link href={'/login'}>
            <a className='btn bg-jig-400 hover:bg-jig-700 px-10 py-0'>Login</a>
          </Link>
        </li>
      </ul>
    </>
  );
};
