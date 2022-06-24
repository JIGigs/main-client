import Link from 'next/link';
import React from 'react';
import { NavLink, User } from '../utilities';
import { AppLink } from './AppLink';
import { Avatar } from './Avatar';

interface Props {
  user?: User;
  navLinks?: NavLink[];
}

export const MobileNav: React.FC<Props> = ({ user, navLinks }) => {
  return (
    <>
      <label htmlFor='my-drawer-4' className='drawer-overlay'></label>
      <ul className='menu p-4 overflow-y-auto w-80 bg-jig-200 text-white'>
        {user && (
          <div className='p-2 bg-jig-400 rounded-3xl mb-3'>
            <Avatar user={user && user} />
          </div>
        )}
        {navLinks &&
          navLinks.map((link, i) => (
            <li key={i}>
              <Link href={link.link}>
                <AppLink nav={link} />
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
