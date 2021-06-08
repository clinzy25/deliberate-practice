import React, { useState } from 'react';
import { AppState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEntry, editTitle, showModal } from '../actions/list_actions';
import { ProgressBar } from './ProgressBar';
import { IoOpenOutline } from 'react-icons/io5';
import { Modal } from './Modal';
import { EntryArray } from '../types/interfaces';

interface EntryProps {
  key: string;
  id: string;
  title: string;
  content: string;
  tags: [];
  progress: number;
  link: string;
  modalView: boolean;
}

export const Entry: React.FC<EntryProps> = ({
  id,
  title,
  progress,
  modalView,
}) => {
  const dispatch = useDispatch();
  
  return (
    <div className='flex items-center border-t border-gray-600 h-11 hover:bg-gray-100 '>
      <IoOpenOutline
        className='text-2xl cursor-pointer'
        onClick={() => dispatch(showModal(id))}
      />
      {modalView ? <Modal id={id} /> : null}
      <input
        className='title h-full w-80 focus:outline-none focus:bg-gray-100 bg-gray-200'
        type='text'
        onChange={(e) => dispatch(editTitle(e.target.value, id))}
        value={title}
      />
      <div className='tags w-36'>Tas</div>
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
