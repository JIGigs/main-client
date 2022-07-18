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
        <div className='hidden max-w-7xl m-auto md:flex justify-between'>
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
            <Link href='#'>
              <a className='p-2 m-1' target='_blank' rel='noopener noreferrer'>
                {/* <img src='/icons/facebook.svg' alt='Facebook' /> */}
                {/* <Image src={facebookIcon} alt='Facebook icon' /> */}
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z'
                    stroke='#fff'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
            </Link>
            <Link href='#'>
              <a className='p-2 m-1' target='_blank' rel='noopener noreferrer'>
                {/* <img src='/icons/facebook.svg' alt='Facebook' /> */}
                {/* <Image src={facebookIcon} alt='Facebook icon' /> */}
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z'
                    stroke='#fff'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
        <div className='md:hidden container mx-auto w-max'>
          <div className='flex justify-center'>
            <Link href='#'>
              <a className='p-2 m-1' target='_blank' rel='noopener noreferrer'>
                {/* <img src='/icons/facebook.svg' alt='Facebook' /> */}
                {/* <Image src={facebookIcon} alt='Facebook icon' /> */}
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z'
                    stroke='#fff'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
            </Link>
            <Link href='#'>
              <a className='p-2 m-1' target='_blank' rel='noopener noreferrer'>
                {/* <img src='/icons/facebook.svg' alt='Facebook' /> */}
                {/* <Image src={facebookIcon} alt='Facebook icon' /> */}
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z'
                    stroke='#fff'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
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
          <p className='text-sm p-1'>
            <div className='flex justify-center'>
              &copy; 2005 - {new Date().getFullYear()}{' '}
              <Link href='/'>
                <a className='ml-2 hover:text-gray-400'>Jobsinghana.com,</a>
              </Link>
            </div>
            <div className='flex justify-center'>LLC. All rights reserved.</div>
          </p>
        </div>
      </div>
    </footer>
  );
};
