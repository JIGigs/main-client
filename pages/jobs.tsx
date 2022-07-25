import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { Card } from '../components';
import { MainLayout } from '../layouts';

const Jobs: NextPage = () => {
  const [sortValue, setSortValue] = useState('Date');
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
        <div className='max-w-7xl mx-auto p-5 mb-5'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='md:col-span-1'>
              <div className='flex'>
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
                    d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z'
                  />
                </svg>
                <span className='ml-2'>Filter jobs</span>
              </div>
              <div className='mt-5'>
                <Card />
              </div>
            </div>
            <div className='md:col-span-2'>
              <div className='flex justify-end'>
                <div className='dropdown md:dropdown-hover dropdown-end'>
                  <label tabIndex={0} className='flex items-center'>
                    <span>
                      Sort by: <span className='text-jig-400'>{sortValue}</span>{' '}
                    </span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex={0}
                    className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40 text-xs'
                  >
                    <li>
                      <button onClick={() => setSortValue('Date')}>Date</button>
                    </li>
                    <li>
                      <button
                        onClick={() => setSortValue('Salary (high to low)')}
                      >
                        Salary - high to low
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setSortValue('Salary (low to high)')}
                      >
                        Salary - low to high
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='mt-5'>
                <Card />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Jobs;
