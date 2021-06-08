import { ActionTypes } from '../types/list_action_types';
import { EntryType } from '../types/interfaces';
import { DropResult } from 'react-beautiful-dnd';

export const addEntry = (entry: EntryType): ActionTypes => ({
  type: 'ADD_ENTRY',
  entry,
});

export const deleteEntry = (id: string): ActionTypes => ({
  type: 'DELETE_ENTRY',
  id,
});

export const onDragEnd = (newEntries: EntryType[]): ActionTypes => ({
  type: 'ON_DRAG_END',
  newEntries,
});

