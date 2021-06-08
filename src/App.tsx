import React from 'react';
import './index.css';
import './App.css';
import { EntryContainer } from './components/EntryContainer';

export const App: React.FC = () => {
  return (
    <>
      <header>
        <h1 className='font-bold text-4xl justify-self-start mx-32 my-8'>
          Deliberate Practice
        </h1>
      </header>
      <div className='app-container flex flex-col place-items-center'>
        <EntryContainer />
      </div>
    </>
  );
};
