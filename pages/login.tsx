import type { NextPage } from 'next';
import { AuthLayout } from '../layouts';

const Login: NextPage = () => {
  return (
    <AuthLayout>
      <h1 className='text-3xl'>Login page</h1>
    </AuthLayout>
  );
};

export default Login;
