import { Entry } from '../types/Entry';
import { AppActions } from '../types/actions';

export const addEntry = (entry: Entry[]): AppActions => ({
  type: 'ADD_ENTRY',
  entry,
});

export const deleteEntry = (id: string): AppActions => ({
  type: 'DELETE_ENTRY',
  id,
});
