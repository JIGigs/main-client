import React from 'react';
import { Header } from '../components';

interface Props {
  children: React.ReactNode;
  pageTitle?: string;
}

export const AuthLayout: React.FC<Props> = ({ children, pageTitle }) => {
  return (
    <div className='font-body absolute w-full h-full flex justify-center content-center'>
      <Header pageTitle={pageTitle} />
      <div className=''>
        <main className='bg-slate-100'>{children}</main>
      </div>
    </div>
  );
};
