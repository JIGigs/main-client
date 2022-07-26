import { Children, ReactNode } from 'react';
import styles from '../styles/card.module.css';

interface Props {
  classes?: string;
  children?: ReactNode;
  title?: string;
  link?: string;
}

interface JobCard extends Props {
  image?: ReactNode;
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

export const JobCard = ({ classes, image, children, title, link }: JobCard) => {
  return (
    <div
      className={`card card-side w-full bg-base-100 ${styles.mycard} ${classes}`}
    >
      <figure>{image}</figure>
      <div className='card-body'>
        <h2 className='card-title text-jig-300'>New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Watch</button>
        </div>
      </div>
    </div>
  );
};
