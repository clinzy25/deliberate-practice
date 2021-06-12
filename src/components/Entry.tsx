import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEntry, editTitle, showModal } from '../actions/list_actions';
import { ProgressBar } from './ProgressBar';
import { IoOpenOutline } from 'react-icons/io5';
import { Modal } from './Modal';
import { useFirebase } from 'react-redux-firebase';
import { AppState } from '../store/store';

interface EntryProps {
  key: string;
  id: string;
  title: string;
  content: string;
  tags: string[];
  progress: number;
  link: string;
  modalView: boolean;
}

export const Entry: React.FC<EntryProps> = ({
  id,
  title,
  progress,
  // modalView,
}) => {
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const modalView = useSelector((state: AppState) => state.firebase.data.entries[id].showModal)
  return (
    <div className='flex items-center border-t border-gray-600 h-11 hover:bg-gray-100 '>
      <IoOpenOutline
        className='text-2xl cursor-pointer'
        onClick={() => {
          // dispatch(showModal(id));
          firebase.update(`entries/${id}`, { showModal: true });
        }}
      />
      {modalView ? <Modal id={id} /> : null}
      <input
        className='title h-full w-80 focus:outline-none focus:bg-gray-100 bg-gray-200'
        type='text'
        onChange={(e) => {
          // dispatch(editTitle(e.target.value, id));
          firebase.update(`entries/${id}`, { title: e.target.value });
        }}
        value={title}
      />
      <div className='tags w-36'>Task</div>
      <div className='link w-36'>Links</div>
      <ProgressBar progress={progress} />
      <button
        onClick={() => {
          dispatch(deleteEntry(id));
          firebase.remove(`entries/${id}`);
        }}
        className='bg-red-700 text-gray-100 px-3 m-2 border border-gray-600 hover:bg-red-500 focus:outline-none rounded-full'
        type='button'
      >
        Delete
      </button>
    </div>
  );
};
