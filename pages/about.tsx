import type { NextPage } from 'next';
import { MainLayout } from '../layouts';

const About: NextPage = () => {
  return (
    <MainLayout>
      <h1 className='text-3xl'>About page</h1>
    </MainLayout>
  );
};

export default About;
