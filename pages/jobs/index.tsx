import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { JobCard, JobFilterContent } from '../../components';
import { MainLayout } from '../../layouts';

const Jobs: NextPage = () => {
  const [sortValue, setSortValue] = useState('Date');
  const [showFilterForm, setShowFilterForm] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  const showFilter = () => {
    setShowFilterForm(!showFilterForm);
  };

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
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
            <input
              type='text'
              placeholder='Location'
              className='input input-bordered w-full bg-jig-300 sm:mr-0 md:mr-16'
              name='keywords'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
            <div className='hidden md:block md:col-span-1'>
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
                    d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                  />
                </svg>
                <span className='ml-2'>Filter jobs</span>
              </div>
              <div className='grid grid-flow-row mt-5 gap-4'>
                <JobFilterContent />
              </div>
            </div>

            <div className='md:col-span-2'>
              <div className='flex justify-between md:justify-end items-center'>
                <button
                  className='md:hidden btn btn-ghost normal-case'
                  onClick={() => showFilter()}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 stroke-jig-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                    />
                  </svg>
                  <span className='ml-2'>Filter jobs</span>
                </button>
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
              <div
                className={`${
                  showFilterForm ? 'block' : 'hidden'
                } md:hidden md:col-span-1`}
              >
                <div className='grid grid-flow-row mt-5 gap-4'>
                  <JobFilterContent />
                </div>
                <hr className='mt-6 border border-jig-100' />
              </div>
              <div className='mt-5'>
                <JobCard
                  id='t9ady1245texpw5'
                  type='Contract'
                  location='Dodowa'
                  datePosted='05-Aug-2022'
                  expectedSalary='4000'
                  dateExpires='01-Sep-2022'
                  description='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
                  title='Procurement Officer'
                  image={
                    'https://africaneyereport.com/wp-content/uploads/2016/11/ecg-ghana-300x300.jpg'
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Jobs;
