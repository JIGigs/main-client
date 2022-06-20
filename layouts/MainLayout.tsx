import React from 'react';
import { NavLinks, User } from '../types';
import { Header, Navbar, SideNav } from '../components';

interface Props {
  children: React.ReactNode;
  user?: User;
  navLinks?: NavLinks;
  pageTitle?: string;
}

export const MainLayout: React.FC<Props> = ({
  children,
  pageTitle,
  user,
  navLinks,
}) => {
  return (
    <div>
      <Header pageTitle={pageTitle} />
      <div className='drawer drawer-end'>
        <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content'>
          <Navbar user={user} />
        </div>
        <div className='drawer-side'>
          <SideNav user={user} />
        </div>
      </div>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};
