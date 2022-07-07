import Link from 'next/link';
import React from 'react';
import { NavLink } from '../utilities';
import { AppLink } from './AppLink';

interface Links {
  navLinks: NavLink[];
}

export const NavItem: React.FC<Links> = ({ navLinks }) => {
  return (
    <ul className='menu menu-horizontal p-0 hidden lg:flex'>
      {navLinks.length > 0 &&
        navLinks.map((nav, i) => {
          if (nav.nested) {
            return (
              <li key={i}>
                <AppLink nav={nav} />
                <ul className='p-2 bg-jig-500'>
                  {nav.nested.map((nest, i) => (
                    <li key={i}>
                      <Link href={'nest.link'}>
                        <AppLink nav={nest} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          } else {
            return (
              <li key={i}>
                <Link href={nav.link}>
                  <AppLink nav={nav} />
                </Link>
              </li>
            );
          }
        })}
    </ul>
  );
};
