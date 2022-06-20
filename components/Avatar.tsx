import React from 'react';
import { User } from '../utilities';

interface Props {
  user?: User;
}

export const Avatar: React.FC<Props> = ({ user }) => {
  if (user?.photoUrl) {
    return (
      <div className='avatar placeholder'>
        <div className='bg-neutral-focus text-neutral-content rounded-full w-16 h-16'>
          <span className='text-xl'>AS</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className='avatar placeholder'>
        <div className='bg-neutral-focus text-neutral-content rounded-full w-16 h-16'>
          <span className='text-xl'>AS</span>
        </div>
      </div>
    );
  }
};
