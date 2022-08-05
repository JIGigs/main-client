import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <footer className='bg-jig-500 text-gray-200 font-body'>
      <div className='p-5'>
        <div className='container m-auto py-5 sm:flex sm:justify-evenly my-5 sm:my-10 md:my-20'>
          <div className='my-8 sm:my-0'>
            <p className='font-semibold py-2'>JOBSEEKERS</p>
            <nav>
              <ul>
                <li className='py-1 hover:text-gray-400 cursor-pointer'>
                  Login / Signup
                </li>
                <li className='py-1 hover:text-gray-400'>
                  <Link href='/jobs'>Jobs</Link>
                </li>
                <li className='py-1 hover:text-gray-400'>
                  <Link href='/courses'>Courses</Link>
                </li>
                <li className='py-1 hover:text-gray-400'>
                  <Link href='/career/advice'>Career advice</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='my-8 sm:my-0'>
            <p className='font-semibold py-2'>EMPLOYERS</p>
            <nav>
              <ul>
                <li className='py-1 hover:text-gray-400'>
                  <Link href='/employer/jobs/add'>Post a job</Link>
                </li>
                <li className='py-1 hover:text-gray-400'>
                  <Link href='/services'>Services</Link>
                </li>
                <li className='py-1 hover:text-gray-400'>
                  <Link href='/disclaimer'>Disclaimer</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='sm:hidden md:block my-8 sm:my-0'>
            <p className='font-semibold py-2'>JOBSINGHANA</p>
            <nav>
              <ul>
                <li className='py-1 hover:text-gray-400'>
                  <Link href='/about'>About us</Link>
                </li>
                <li className='py-1 hover:text-gray-400'>
                  <Link href='/contact'>Contact us</Link>
                </li>
                <li className='py-1 hover:text-gray-400'>
                  <Link href='/corp-responsibility'>
                    Corportate responsibility
                  </Link>
                </li>
                <li className='py-1 hover:text-gray-400'>
                  <Link href='/faqs'>FAQs</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='hidden md:hidden container m-auto py-5 sm:flex justify-evenly my-5 sm:my-10 md:my-20'>
          <div>
            <p className='font-semibold py-2'>JOBSINGHANA</p>
            <nav>
              <ul>
                <li className='py-1 hover:text-gray-400'>
                  <Link href='/about'>About us</Link>
                </li>
                <li className='py-1 hover:text-gray-400'>
                  <Link href='/contact'>Contact us</Link>
                </li>
                <li className='py-1 hover:text-gray-400'>
                  <Link href='/corp-responsibility'>
                    Corportate responsibility
                  </Link>
                </li>
                <li className='py-1 hover:text-gray-400'>
                  <Link href='/faqs'>FAQs</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div></div>
        </div>
      </div>
      <div className='bg-jig-900 p-5 w-full'>
        <div className='hidden max-w-7xl m-auto md:flex justify-between px-5'>
          <p className='text-sm p-1'>
            &copy; 2005 - {new Date().getFullYear()}{' '}
            <Link href='/'>
              <a className=''>Jobsinghana.com,</a>
            </Link>{' '}
            <br />
            LLC. All rights reserved.
          </p>
          <nav>
            <ul className='flex'>
              <li className='hover:text-gray-400'>
                <Link href='/privacy-policies'>
                  <a className=''>Privacy Policies</a>
                </Link>
              </li>
              <li className='ml-5 hover:text-gray-400'>
                <Link href='/terms-conditions'>
                  <a className=''>Term & Conditions</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className='flex'>
            <Link href='https://www.linkedin.com/company/3477984'>
              <a className='p-2 m-1' target='_blank' rel='noopener noreferrer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#fff'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='feather feather-linkedin'
                >
                  <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                  <rect x='2' y='9' width='4' height='12'></rect>
                  <circle cx='4' cy='4' r='2'></circle>
                </svg>
              </a>
            </Link>
            <Link href='https://twitter.com/Jobsinghana_job'>
              <a className='p-2 m-1' target='_blank' rel='noopener noreferrer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#fff'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='feather feather-twitter'
                >
                  <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
        <div className='md:hidden container mx-auto w-max'>
          <div className='flex justify-center'>
            <Link href='#'>
              <a className='p-2 m-1' target='_blank' rel='noopener noreferrer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#fff'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='feather feather-linkedin'
                >
                  <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                  <rect x='2' y='9' width='4' height='12'></rect>
                  <circle cx='4' cy='4' r='2'></circle>
                </svg>
              </a>
            </Link>
            <Link href='#'>
              <a className='p-2 m-1' target='_blank' rel='noopener noreferrer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#fff'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='feather feather-twitter'
                >
                  <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
                </svg>
              </a>
            </Link>
          </div>
          <nav className='my-5'>
            <ul className='flex'>
              <li className='hover:text-gray-400'>
                <Link href='/privacy-policies'>
                  <a className=''>Privacy Policies</a>
                </Link>
              </li>
              <li className='ml-5 hover:text-gray-400'>
                <Link href='/terms-conditions'>
                  <a className=''>Term & Conditions</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className='text-sm p-1'>
            <p className='flex justify-center'>
              &copy; 2005 - {new Date().getFullYear()}{' '}
              <Link href='/'>
                <a className='ml-2 hover:text-gray-400!'>Jobsinghana.com,</a>
              </Link>
            </p>
            <div className='flex justify-center'>LLC. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
