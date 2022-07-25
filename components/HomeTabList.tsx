import Link from 'next/link';
import { HomeTabListItem } from '../types';

interface Props {
  contentList: HomeTabListItem[];
}

export const HomeTabList = ({ contentList }: Props) => {
  return (
    <div>
      <ul>
        {contentList.map(({ label, link }, i) => {
          return (
            <li key={i}>
              <Link href={link}>
                <a>{label}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
