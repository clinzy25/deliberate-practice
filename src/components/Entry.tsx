import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEntry } from '../actions/list_actions';

interface EntryProps {
  key: string;
  id: string;
  title: string;
}

export const Entry: React.FC<EntryProps> = ({id}: {id: string}) => {
  const dispatch = useDispatch();

  return (
    <div className='flex justify-between'>
      <input className='title ' type='text' value={id}/>
      <button
        onClick={() => dispatch(deleteEntry(id))}
        className='bg-red-700 text-gray-100 px-3 py-2 border border-black hover:bg-red-500 focus:outline-none'
        type='button'
      >
        Delete
      </button>
    </div>
  );
};
