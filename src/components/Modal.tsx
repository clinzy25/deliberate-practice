import React from 'react';
import { useDispatch } from 'react-redux';
import { GrFormClose } from 'react-icons/gr';
import { showModal } from '../actions/list_actions';

interface ModalProps {
  id: string;
}

export const Modal: React.FC<ModalProps> = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <div className='absolute top-0 right-0 w-screen h-screen bg-black z-30 bg-opacity-50'>
      <GrFormClose className='cursor-pointer' onClick={() => dispatch(showModal(id))} />
      
      <h1 className='z-50'>Modal</h1>
    </div>
  );
};
