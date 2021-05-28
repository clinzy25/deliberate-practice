import { Entry } from './Entry';

export const ADD_ENTRY = 'ADD_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';

export interface AddEntryAction {
  type: typeof ADD_ENTRY;
  entry: Entry[];
}

export interface DeleteEntryAction {
  type: typeof DELETE_ENTRY;
  id: string;
}

export type EntryActionTypes = AddEntryAction | DeleteEntryAction;

export type AppActions = EntryActionTypes;
