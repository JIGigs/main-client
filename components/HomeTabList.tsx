import Link from 'next/link';
import { HomeTabListItem } from '../types';

interface Props {
  contentList: HomeTabListItem[];
}

export const HomeTabList = ({ contentList }: Props) => {
  return (
    <div className='border border-jig-400 p-10 rounded-2xl'>
      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-xs sm:text-sm'>
        {contentList.map(({ label, link }, i) => {
          return (
            <li key={i}>
              <Link href={link}>
                <a className='hover:text-jig-400'>{label}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
