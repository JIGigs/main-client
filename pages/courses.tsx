import type { NextPage } from 'next';
import { MainLayout } from '../layouts';
import { NavLink } from '../utilities';

const Courses: NextPage = () => {
  return (
    <MainLayout>
      <h1 className='text-3xl'>Courses page</h1>
    </MainLayout>
  );
};

export default Courses;
