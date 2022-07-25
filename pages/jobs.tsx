import type { NextPage } from 'next';
import Link from 'next/link';
import { MainLayout } from '../layouts';

const Jobs: NextPage = () => {
  return (
    <MainLayout>
      <section className='bg-jig-500 py-20 text-gray-100'>
        <div className='max-w-7xl mx-auto p-5'>
          <div className='flex flex-col sm:flex-row mb-5'>
            <input
              type='text'
              placeholder='Job title, skills'
              className='input input-bordered w-full bg-jig-300 mb-5 sm:mb-0 sm:mr-5 md:mr-16'
              name='keywords'
            />
            <input
              type='text'
              placeholder='Location'
              className='input input-bordered w-full bg-jig-300 sm:mr-0 md:mr-16'
              name='keywords'
            />
            <Link href={'#'}>
              <a className='hidden md:flex btn btn-outline text-gray-100 border-jig-200 hover:border-gray-300 hover:bg-transparent px-10 py-0 normal-case'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
                <span className='ml-2'>Search</span>
              </a>
            </Link>
          </div>
          <div className='flex justify-end mb-5'>
            <Link href={'#'}>
              <a className='md:hidden w-fit btn btn-outline text-gray-100 border-jig-200 hover:border-gray-300 hover:bg-transparent px-10 py-0 normal-case'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
                <span className='ml-2'>Search</span>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className='py-20'>
        <div className='max-w-7xl mx-auto p-5 mb-5'>Hello</div>
      </section>
    </MainLayout>
  );
};

export default Jobs;
