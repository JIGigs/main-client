import { NavLink } from '../types';

export const basicNav: NavLink[] = [
  {
    link: '/jobs',
    label: 'Jobs',
    selected: false,
  },
  {
    link: '/services',
    label: 'Services',
    selected: false,
  },
  {
    link: '/courses',
    label: 'Courses',
    selected: false,
  },
  {
    link: '/career',
    label: 'Career Resources',
    selected: false,
    nested: [
      {
        link: '/career/advice',
        label: 'Career Advice',
      },
      {
        link: '/career/hr-news',
        label: 'HR News',
      },
      {
        link: '/career/training',
        label: 'Training Event',
      },
    ],
  },
];
