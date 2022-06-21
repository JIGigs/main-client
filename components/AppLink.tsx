import React from 'react';
import { NavLink } from '../utilities';

interface Props {
  nav: NavLink;
}

export const AppLink: React.FC<Props> = ({ nav }) => {
  return (
    <a>
      {nav.icon && <span>{nav.icon}</span>}
      {nav.label}
      {nav.nested && (
        <svg
          className='fill-current'
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
        >
          <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
        </svg>
      )}
    </a>
  );
};
