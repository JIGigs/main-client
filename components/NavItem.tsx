import React from 'react';

interface Props {
  children?: React.ReactNode;
  selected?: Boolean;
  nestedLink?: Boolean;
}

export const NavItem: React.FC<Props> = ({ selected = false, nestedLink }) => {
  if (selected) {
    return (
      <li>
        <button>Item 1</button>
      </li>
    );
  } else {
    return (
      <li tabIndex={0}>
        <button>Item 1</button>
        <ul className='p-2 bg-jig-500'>
          <li>
            <a>Submenu 1</a>
          </li>
          <li>
            <a>Submenu 2</a>
          </li>
        </ul>
      </li>
    );
  }
};
