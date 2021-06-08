import { EntryType } from './interfaces';
import { DropResult } from 'react-beautiful-dnd';

export const ADD_ENTRY = 'ADD_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';
export const ON_DRAG_END = 'ON_DRAG_END';

export interface AddEntryAction {
  type: typeof ADD_ENTRY;
  entry: EntryType;
}

export interface DeleteEntryAction {
  type: typeof DELETE_ENTRY;
  id: string;
}

export interface onDragEnd {
  type: typeof ON_DRAG_END;
  result: DropResult;
}

export type ActionTypes = AddEntryAction | DeleteEntryAction | onDragEnd;
