import { FilterCard } from './Cards';
import { RadioBtn } from './RadioBtn';

export const JobFilterContent = () => {
  return (
    <>
      <FilterCard title='Date Posted'>
        <RadioBtn name='anytime' label='Anytime' />
        <RadioBtn name='today' label='Today' />
        <RadioBtn name='last14days' label='Last 14 days' />
        <RadioBtn name='last30days' label='Last 30 days' />
      </FilterCard>
      <FilterCard title='Type'>
        <RadioBtn name='all' label='All' />
        <RadioBtn name='remote' label='Remote' />
        <RadioBtn name='parttime' label='Part-time' />
        <RadioBtn name='fulltime' label='Full-time' />
        <RadioBtn name='contruct' label='Contract' />
      </FilterCard>
      <FilterCard title='Salaray (monthly)'>
        <div className='form-control w-full max-w-xs flex-row'>
          <label className='label'>
            <span className='label-text mr-3'>From</span>
          </label>
          <input
            type='text'
            placeholder=''
            className='input input-bordered w-full max-w-xs'
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
          />
        </div>
      </FilterCard>
    </>
  );
};
