import { EntryArray } from '../types/interfaces';
import { ActionTypes } from '../types/list_action_types';

const listDefaultState = {
  entries: [],
};

const listReducer = (
  state: EntryArray = listDefaultState,
  action: ActionTypes
): EntryArray => {
  switch (action.type) {
    case 'ADD_ENTRY':
      return { ...state, entries: [action.entry, ...state.entries] };
    case 'DELETE_ENTRY':
      return {
        ...state,
        entries: [...state.entries.filter((entry) => entry.id !== action.id)],
      };
    case 'ON_DRAG_END':
      return {
        ...state,
        entries: [...action.newEntries],
      };
    case 'EDIT_TITLE':
      const editTitleEntry = state.entries.find(
        (entry) => entry.id === action.id
      );
      if (editTitleEntry) {
        editTitleEntry.title = action.newTitle;
      } else {
        throw new Error('could not find');
      }
      return {
        ...state,
        entries: [...state.entries],
      };
    case 'EDIT_CONTENT':
      const editContentEntry = state.entries.find(
        (entry) => entry.id === action.id
      );
      if (editContentEntry) {
        editContentEntry.content = action.newContent;
      } else {
        throw new Error('could not find');
      }
      return {
        ...state,
        entries: [...state.entries],
      };
    case 'SHOW_MODAL':
      const showModalEntry = state.entries.find(
        (entry) => entry.id === action.id
      );
      if (showModalEntry) {
        showModalEntry.modalView = !showModalEntry.modalView;
      } else {
        throw new Error('could not find');
      }
      return {
        ...state,
        entries: [...state.entries],
      };
    default:
      return state;
  }
};

export default listReducer;
