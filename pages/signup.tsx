import type { NextPage } from 'next';
import { MainLayout } from '../layouts';
import { NavLink } from '../utilities';

const Signup: NextPage = () => {
  return (
    <MainLayout>
      <h1 className='text-3xl'>Signup page</h1>
    </MainLayout>
  );
};

export default Signup;
