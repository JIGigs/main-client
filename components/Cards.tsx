import Image from 'next/image';
import { Children, ReactNode } from 'react';
import styles from '../styles/card.module.css';
import { Text } from './Text';

interface Props {
  classes?: string;
  children?: ReactNode;
  title?: string;
  link?: string;
}

interface JobCard extends Props {
  image?: string;
  salary?: string;
  location?: string;
}

export const FilterCard = ({ classes, children, title, link }: Props) => {
  return (
    <div className={`card w-full bg-base-100 ${styles.mycard} ${classes}`}>
      <div className='card-body'>
        <h2 className='card-title text-jig-300'>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export const JobCard = ({
  classes,
  image,
  children,
  title,
  salary,
  location,
  link,
}: JobCard) => {
  return (
    <div
      className={`card card-side w-full bg-base-100 flex-col sm:flex-row ${styles.mycard} ${classes}`}
    >
      {image && (
        <figure className='pt-5 sm:pt-0 ml-5'>
          <Image
            alt='Company logo'
            layout='intrinsic'
            width={100}
            height={100}
            src={image}
          />
        </figure>
      )}
      <div className='card-body'>
        <div className='card-title justify-between'>
          <h2 className='text-jig-300'>
            Chief Technology Officer and Project Manager
          </h2>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10 fill-gray-300 hover:cursor-pointer'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
            </svg>
            {/* <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10 fill-yellow-500 hover:cursor-pointer'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
            </svg> */}
          </div>
        </div>
        <p className='-mt-2 text-sm text-gray-400 flex justify-between'>
          <span>Posted on 26-May-2022</span>
          <span className='ml-1 text-right'>Full-time</span>
        </p>
        <p className='text-sm flex flex-col sm:flex-row justify-between'>
          <span>
            <span className='text-gray-400'>Location : </span> Takoradi
          </span>
          <span className='sm:text-right'>
            <span className='text-gray-400 sm:ml-1'>Expected Salary : </span>{' '}
            Ghc 3000
          </span>
        </p>
        <p className='mt-5'>
          <Text
            truncate={true}
            charaterLimit={100}
            text='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
          />
          <button className='btn btn-link normal-case'>Read more</button>
        </p>
        <div className='card-actions text-sm text-gray-400 -mt-3'>
          Expires on 01-Sep-2022
        </div>
      </div>
    </div>
  );
};
