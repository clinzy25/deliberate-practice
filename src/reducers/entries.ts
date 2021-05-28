import { ADD_ENTRY, DELETE_ENTRY, EntryActionTypes } from '../types/actions';
import { Entry } from '../types/Entry';

const entriesInitialState: Entry[] = [];

const entriesReducer = (
  state = entriesInitialState,
  action: EntryActionTypes
): Entry[] => {
  switch (action.type) {
    case ADD_ENTRY:
      return {
        ...state,
      };
    case DELETE_ENTRY:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default entriesReducer;
