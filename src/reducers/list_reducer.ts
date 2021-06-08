import { EntryType } from '../types/interfaces';
import { ActionTypes } from '../types/list_action_types';


export interface EntryArray {
  entries: EntryType[];
}

const listDefaultState = {
  entries: [],
};

const listReducer = (
  state: EntryArray = listDefaultState,
  action: ActionTypes
): EntryArray => {
  switch (action.type) {
    case 'ADD_ENTRY':
      return { ...state, entries: [...state.entries, action.entry] };
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
    default:
      return state;
  }
};

export default listReducer;
