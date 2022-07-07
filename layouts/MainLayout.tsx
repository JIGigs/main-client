import React from 'react';
import { Header, Navbar, MobileNav } from '../components';
import { NavLink, User } from '../utilities';

interface Props {
  children: React.ReactNode;
  user?: User;
  navLinks?: NavLink[];
  pageTitle?: string;
}

export const MainLayout: React.FC<Props> = ({
  children,
  pageTitle,
  user,
  navLinks,
}) => {
  return (
    <div className='font-body'>
      <Header pageTitle={pageTitle} />
      <div className='drawer drawer-end'>
        <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content'>
          <Navbar user={user} />
          <main>{children}</main>
          <footer></footer>
        </div>
        <div className='drawer-side'>
          <MobileNav user={user} />
        </div>
      </div>
    </div>
  );
};
