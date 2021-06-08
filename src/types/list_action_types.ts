import { EntryType } from './interfaces';

export const ADD_ENTRY = 'ADD_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';
export const ON_DRAG_END = 'ON_DRAG_END';
export const EDIT_TITLE = 'EDIT_TITLE';
export const EDIT_CONTENT = 'EDIT_CONTENT';
export const ADD_TAG = 'ADD_TAG';
export const ADD_LINK = 'ADD_LINK';
export const UPDATE_PROGRESS = 'UPDATE_PROGRESS';
export const SHOW_MODAL = 'SHOW_MODAL';

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
  newEntries: EntryType[];
}

export interface editTitle {
  type: typeof EDIT_TITLE;
  newTitle: string;
  id: string;
}

export interface editContent {
  type: typeof EDIT_CONTENT;
  newContent: string;
  id: string;
}

export interface addTag {
  type: typeof ADD_TAG;
  tag: string;
  id: string;
}

export interface addLink {
  type: typeof ADD_LINK;
  link: string;
  id: string;
}

export interface updateProgress {
  type: typeof UPDATE_PROGRESS;
  newProgress: number;
  id: string;
}

export interface showModal {
  type: typeof SHOW_MODAL;
  id: string;
}

export type ActionTypes =
  | AddEntryAction
  | DeleteEntryAction
  | onDragEnd
  | editTitle
  | editContent
  | addTag
  | addLink
  | updateProgress
  | showModal;
