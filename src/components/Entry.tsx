import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteEntry } from '../actions/list_actions';
import { ProgressBar } from './ProgressBar';
import { AiOutlineExpandAlt } from 'react-icons/ai';

interface EntryProps {
  key: string;
  id: string;
  title: string;
  content: string;
  tags: [];
  progress: number;
  link: string;
}

export const Entry: React.FC<EntryProps> = ({ id, title, progress }) => {
  const dispatch = useDispatch();

  return (
    <div className='flex items-center border-t border-gray-600 h-11 hover:bg-gray-100 '>
      <AiOutlineExpandAlt className='text-2xl cursor-pointer' />
      <input
        className='title h-full w-80 focus:outline-none focus:bg-gray-100 bg-gray-200'
        type='text'
        value={title}
      />
      <div className='tags w-36'>Tags</div>
      <div className='link w-36'>Links</div>
      <ProgressBar progress={progress} />
      <button
        onClick={() => dispatch(deleteEntry(id))}
        className='bg-red-700 text-gray-100 px-3 m-2 border border-gray-600 hover:bg-red-500 focus:outline-none rounded-full'
        type='button'
      >
        Delete
      </button>
    </div>
  );
};
