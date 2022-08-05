import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { JobCard, JobFilterContent } from '../../components';
import { MainLayout } from '../../layouts';

const JobDetail: NextPage = () => {
  const [sortValue, setSortValue] = useState('Date');
  const [showFilterForm, setShowFilterForm] = useState(false);

  const showFilter = () => {
    setShowFilterForm(!showFilterForm);
    console.log('yess');
  };

  return (
    <MainLayout>
      <div>JOB DETAILS</div>
    </MainLayout>
  );
};

export default JobDetail;
