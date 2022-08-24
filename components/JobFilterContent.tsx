import { useState } from 'react';
import { FilterCard } from './Cards';
import { Checkbox } from './Checkbox';

export const JobFilterContent = () => {
  const [datePosted, setDatePosted] = useState<string[]>([]);
  const [jobType, setJobType] = useState<string[]>([]);
  const [salaryFrom, setSalaryFrom] = useState('');
  const [salaryTo, setSalaryTo] = useState('');

  return (
    <>
      <FilterCard title='Date Posted'>
        <Checkbox name='anytime' label='Anytime' />
        <Checkbox name='today' label='Today' />
        <Checkbox name='last14days' label='Last 14 days' />
        <Checkbox name='last30days' label='Last 30 days' />
      </FilterCard>
      <FilterCard title='Type'>
        <Checkbox name='all' label='All' />
        <Checkbox name='remote' label='Remote' />
        <Checkbox name='parttime' label='Part-time' />
        <Checkbox name='fulltime' label='Full-time' />
        <Checkbox name='contruct' label='Contract' />
      </FilterCard>
      <FilterCard title='Salary (monthly)'>
        <div className='form-control w-full max-w-xs flex-row'>
          <label className='label'>
            <span className='label-text mr-3'>From</span>
          </label>
          <input
            type='text'
            placeholder=''
            className='input input-bordered w-full max-w-xs'
            value={salaryFrom}
            onChange={(e) => setSalaryFrom(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs flex-row'>
          <label className='label'>
            <span className='label-text mr-7'>To</span>
          </label>
          <input
            type='text'
            placeholder=''
            className='input input-bordered w-full max-w-xs'
            value={salaryTo}
            onChange={(e) => setSalaryTo(e.target.value)}
          />
        </div>
      </FilterCard>
    </>
  );
};
