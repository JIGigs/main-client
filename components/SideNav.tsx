import React from 'react';
import { User } from '../utilities';
import { Avatar } from './Avatar';

interface Props {
  user?: User;
}

export const SideNav: React.FC<Props> = ({ user }) => {
  return (
    <>
      <label htmlFor='my-drawer-4' className='drawer-overlay'></label>
      <ul className='menu p-4 overflow-y-auto w-80 bg-jig-200 text-white'>
        <div className='p-2 bg-jig-400 rounded-3xl mb-3'>
          <Avatar user={user && user} />
        </div>
        <li>
          <a>Sidebar Item 1</a>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </ul>
    </>
  );
};
