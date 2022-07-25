import { ReactNode } from 'react';
import styles from '../styles/card.module.css';

interface Props {
  classes?: string;
  contents?: ReactNode;
  headind?: string;
  link?: string;
}

export const Card = ({ classes, contents, headind, link }: Props) => {
  return (
    <div className={`card w-full bg-base-100 ${styles.mycard} ${classes}`}>
      <div className='card-body'>
        <h2 className='card-title'>Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  );
};
