import Image from 'next/image';
import Link from 'next/link';
import { Children, ReactNode, useState } from 'react';
import styles from '../styles/card.module.css';
import { Text } from './Text';

interface Props {
  classes?: string;
  children?: ReactNode;
  title: string;
  link?: string;
}

interface JobCard extends Props {
  id: string;
  type?: string;
  image?: string;
  saved?: boolean;
  location?: string;
  datePosted?: string;
  description: string;
  dateExpires?: string;
  expectedSalary?: string;
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
  id,
  classes,
  image,
  title,
  type,
  description,
  expectedSalary,
  location,
  saved = false,
  datePosted,
  dateExpires,
  link,
}: JobCard) => {
  const [favorite, setFavorite] = useState(saved);
  const handleFavorite = (uuid: string) => {
    console.log(uuid);
  };

  const FavoriteIcon = () => {
    return (
      <>
        <svg
          onClick={() => handleFavorite(id)}
          xmlns='http://www.w3.org/2000/svg'
          className={`h-10 w-10 ${
            favorite ? 'fill-yellow-500' : 'fill-gray-300'
          } hover:cursor-pointer`}
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
        </svg>
      </>
    );
  };

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
          <h2 className='text-jig-300 hover:text-jig-400'>
            <Link href={`/jobs/${id}`}>
              <a>{title}</a>
            </Link>
          </h2>
          <div>{<FavoriteIcon />}</div>
        </div>
        <p className='-mt-2 text-sm text-gray-400 flex justify-between'>
          {datePosted && <span>Posted on {datePosted}</span>}
          {type && (
            <span className='text-right bg-jig-100 px-2 rounded-sm text-jig-700 font-medium border border-gray-300'>
              {type}
            </span>
          )}
        </p>
        <p className='text-sm flex flex-col sm:flex-row justify-between'>
          {location && (
            <span>
              <span className='text-gray-400'>Location : </span> {location}
            </span>
          )}
          {expectedSalary && (
            <span className='sm:text-right'>
              <span className='text-gray-400'>Expected Salary : </span> Ghc{' '}
              {expectedSalary}
            </span>
          )}
        </p>
        <p className='mt-5'>
          <Text truncate={true} charaterLimit={100} text={description} />
          <button className='btn btn-link normal-case'>
            <Link href={`/jobs/${id}`}>
              <a>Read more</a>
            </Link>
          </button>
        </p>
        {dateExpires && (
          <div className='card-actions text-sm text-gray-400 -mt-3'>
            Expires on {dateExpires}
          </div>
        )}
      </div>
    </div>
  );
};
