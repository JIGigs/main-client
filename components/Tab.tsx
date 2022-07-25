import React, { useState } from 'react';
import { TabItem } from '../types';

interface Props {
  tabItems: TabItem[];
}

export const Tab = ({ tabItems }: Props) => {
  const [isActive, setIsActive] = useState<number>(0);
  const [currentTabItem, setCurrentTabItem] = useState(tabItems[0]);

  const handleClick = (item: TabItem, idx: number) => {
    setIsActive(idx);
    setCurrentTabItem(item);
  };

  return (
    <>
      <div className='tabs w-full'>
        {tabItems?.map((item, i) => (
          <button
            key={i}
            className={
              isActive === i
                ? 'tab tab-bordered tab-active text-loya-500 font-medium'
                : 'tab tab-bordered'
            }
            onClick={() => handleClick(item, i)}
          >
            {item.label}
          </button>
        ))}
        {/* <li className='tab tab-bordered flex-1 cursor-default' /> */}
      </div>
      <div className='mt-6 mx-4'>{currentTabItem?.component}</div>
    </>
  );
};
