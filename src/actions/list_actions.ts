import { ActionTypes } from '../types/list_action_types';
import { EntryType } from '../types/interfaces';

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

export const editTitle = (newTitle: string, id: string): ActionTypes => ({
  type: 'EDIT_TITLE',
  newTitle,
  id,
});

export const editContent = (newContent: string, id: string): ActionTypes => ({
  type: 'EDIT_CONTENT',
  newContent,
  id,
});

export const addTag = (tag: string, id: string): ActionTypes => ({
  type: 'ADD_TAG',
  tag,
  id,
});

export const addLink = (link: string, id: string): ActionTypes => ({
  type: 'ADD_LINK',
  link,
  id,
});

export const updateProgress = (
  newProgress: number,
  id: string
): ActionTypes => ({
  type: 'UPDATE_PROGRESS',
  newProgress,
  id,
});

export const showModal = (id: string): ActionTypes => ({
  type: 'SHOW_MODAL',
  id
});
