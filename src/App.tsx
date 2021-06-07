import React from 'react';
import './index.css';
import './App.css';
import { EntryContainer } from './components/EntryContainer';

export const App: React.FC = () => {
  return (
    <div className='app-container flex flex-col place-items-center'>
      <header>
        <h1 className='font-bold text-4xl'>Deliberate Practice</h1>
      </header>
      <EntryContainer />
    </div>
  );
};
