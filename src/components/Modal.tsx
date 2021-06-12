import React from 'react';
import { GrFormClose } from 'react-icons/gr';
import { showModal } from '../actions/list_actions';
import { useDispatch, useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { AppState } from '../store/store';

interface ModalProps {
  id: string;
}

export const Modal: React.FC<ModalProps> = ({ id }) => {
  const dispatch = useDispatch();
  const firebase = useFirebase();

  const modalView = useSelector(
    (state: AppState) => state.firebase.data.entries[id].showModal
  );

  return (
    <div className='absolute top-0 right-0 w-screen h-screen bg-black z-30 bg-opacity-50'>
      <GrFormClose
        className='cursor-pointer'
        onClick={() => firebase.update(`entries/${id}`, { showModal: false })}
      />
      <h1 className='z-50'>Modal</h1>
    </div>
  );
};
