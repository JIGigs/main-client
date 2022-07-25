import Link from 'next/link';

interface Props {
  label: string;
  url: string;
}

export const SpecialButton = ({ label, url }: Props) => {
  return (
    <Link href={url}>
      <a className='flex items-center btn btn-outline btn-primary normal-case w-full mb-5'>
        <span className='mr-5'>{label}</span>
        <span className='grow'></span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </a>
    </Link>
  );
};
