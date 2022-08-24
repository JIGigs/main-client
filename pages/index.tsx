import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Checkbox, SpecialButton, Tab } from '../components';
import { HomeTabList } from '../components/HomeTabList';
import { MainLayout } from '../layouts';
import { HomeTabListItem, TabItem } from '../types';
import { Categories, Industry } from '../utilities';

const Home: NextPage = () => {
  const [keywords, setKeyword] = useState('');
  const [checkboxes, setCheckboxes] = useState<string[]>([]);

  const handleChecks = (_event: React.ChangeEvent<HTMLInputElement>) => {
    const index = checkboxes.indexOf(_event.target.value);
    if (index === -1) {
      setCheckboxes([...checkboxes, _event.target.value]);
    } else {
      setCheckboxes(
        checkboxes.filter((checkbox) => checkbox !== _event.target.value)
      );
    }
  };

  const tabItems: TabItem[] = [
    {
      label: 'By Category',
      component: <HomeTabList contentList={Categories} />,
    },
    {
      label: 'By Industry',
      component: <HomeTabList contentList={Industry} />,
    },
  ];

  const specialButtons: HomeTabListItem[] = [
    {
      label: 'Get career advice',
      link: '/career/advice',
    },
    {
      label: 'Explore training events',
      link: '/career/training',
    },
    {
      label: 'Take some courses',
      link: '/courses',
    },
    {
      label: 'Entry level jobs',
      link: '/jobs?sort=entry-level',
    },
  ];

  return (
    <MainLayout>
      <>
        <section className='bg-jig-500 py-20 text-gray-100'>
          <div className='max-w-7xl mx-auto p-5'>
            <h1 className='font-semibold text-2xl mb-10'>Find your next job</h1>
            <div className='flex flex-row mb-5'>
              <input
                type='text'
                placeholder='Enter search term here'
                className='input input-bordered w-full bg-jig-300 sm:mr-16'
                name='keywords'
                value={keywords}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <Link href={'#'}>
                <a className='hidden sm:flex btn btn-outline text-gray-100 border-jig-200 hover:border-gray-300 hover:bg-transparent px-10 py-0 normal-case'>
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
            <div className='flex'>
              <div className='form-control flex-row'>
                <Checkbox
                  name='remote'
                  label='Remote'
                  value='remote'
                  classes='mr-4'
                  gray
                  checked={checkboxes.includes('remote')}
                  onChange={handleChecks}
                />
                <Checkbox
                  name='partTime'
                  label='Part-time'
                  value='parttime'
                  classes='mr-4'
                  gray
                  checked={checkboxes.includes('parttime')}
                  onChange={handleChecks}
                />
                <Checkbox
                  name='fullTime'
                  label='Full-time'
                  value='fulltime'
                  classes='mr-4'
                  gray
                  checked={checkboxes.includes('fulltime')}
                  onChange={handleChecks}
                />
              </div>
              <div className='grow'></div>

              <Link href={'/jobs'}>
                <a className='hidden sm:flex items-center btn btn-link normal-case text-gray-100 -mr-3 md:mr-12'>
                  <span className='mr-2'>Browse all jobs</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              </Link>
              <a className='hidden md:flex md:invisible btn btn-outline text-gray-100 border-jig-200 hover:border-gray-300 hover:bg-transparent px-10 py-0 normal-case'>
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
            </div>
            <div className='sm:hidden mt-10'>
              <div className='flex justify-end'>
                <Link href={'#'}>
                  <a className='btn btn-outline text-gray-100 w-full border-jig-200 hover:border-gray-300 hover:bg-transparent normal-case'>
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
              <div className='flex justify-end'>
                <Link href={'/jobs'}>
                  <a className='items-center btn btn-link normal-case text-gray-100 -mr-4 text-xs'>
                    <span className='mr-2'>Browse all jobs</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-jig-100 py-20'>
          <div className='max-w-7xl mx-auto p-5 mb-5'>
            <Tab tabItems={tabItems} />
          </div>
        </section>
        <section className='py-20'>
          <div className='max-w-7xl mx-auto p-5 mb-5'>
            <h2>New Graduate? Start here</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <Image
                alt=''
                src={'/images/new-grad.svg'}
                layout='intrinsic'
                width={400}
                height={400}
              />
              <div className='mx-auto w-5/6 mt-16'>
                {specialButtons.map(({ label, link }, i) => (
                  <SpecialButton key={i} label={label} url={link} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    </MainLayout>
  );
};

export default Home;
