import type { NextPage } from 'next';
import { MainLayout } from '../layouts';
import { NavLink } from '../utilities';

const Home: NextPage = () => {
  const navs: NavLink[] = [
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
  return (
    <MainLayout navLinks={navs}>
      <h1 className='text-3xl'>Home</h1>
    </MainLayout>
  );
};

export default Home;
