import { useState } from 'react';
import { FilterCard } from './Cards';
import { Checkbox } from './Checkbox';

export const JobFilterContent = () => {
  const [datePosted, setDatePosted] = useState<string[]>([]);
  const [jobType, setJobType] = useState<string[]>([]);
  const [salaryFrom, setSalaryFrom] = useState('');
  const [salaryTo, setSalaryTo] = useState('');

  const handleJobTypeChecks = (_event: React.ChangeEvent<HTMLInputElement>) => {
    const index = jobType.indexOf(_event.target.value);
    if (index === -1) {
      setJobType([...jobType, _event.target.value]);
    } else {
      setJobType(
        jobType.filter((checkbox) => checkbox !== _event.target.value)
      );
    }
  };

  const handleDateChecks = (_event: React.ChangeEvent<HTMLInputElement>) => {
    const index = datePosted.indexOf(_event.target.value);
    if (index === -1) {
      setDatePosted([...datePosted, _event.target.value]);
    } else {
      setDatePosted(
        datePosted.filter((checkbox) => checkbox !== _event.target.value)
      );
    }
  };

  return (
    <>
      <FilterCard title='Date Posted'>
        <Checkbox
          name='anytime'
          label='Anytime'
          value='anytime'
          checked={datePosted.includes('anytime')}
          onChange={handleDateChecks}
        />
        <Checkbox
          name='today'
          label='Today'
          value='today'
          checked={datePosted.includes('today')}
          onChange={handleDateChecks}
        />
        <Checkbox
          name='last14days'
          label='Last 14 days'
          value='last14days'
          checked={datePosted.includes('last14days')}
          onChange={handleDateChecks}
        />
        <Checkbox
          name='last30days'
          label='Last 30 days'
          value='last30days'
          checked={datePosted.includes('last30days')}
          onChange={handleDateChecks}
        />
      </FilterCard>
      <FilterCard title='Type'>
        <Checkbox
          name='all'
          label='All'
          value='all'
          checked={jobType.includes('all')}
          onChange={handleJobTypeChecks}
        />
        <Checkbox
          name='remote'
          label='Remote'
          value='remote'
          checked={jobType.includes('remote')}
          onChange={handleJobTypeChecks}
        />
        <Checkbox
          name='parttime'
          label='Part-time'
          value='parttime'
          checked={jobType.includes('parttime')}
          onChange={handleJobTypeChecks}
        />
        <Checkbox
          name='fulltime'
          label='Full-time'
          value='fulltime'
          checked={jobType.includes('fulltime')}
          onChange={handleJobTypeChecks}
        />
        <Checkbox
          name='contract'
          label='Contract'
          value='contract'
          checked={jobType.includes('contract')}
          onChange={handleJobTypeChecks}
        />
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
