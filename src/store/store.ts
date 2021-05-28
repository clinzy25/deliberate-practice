import { createStore, combineReducers } from 'redux';
import entriesReducer from '../reducers/entries';

export const rootReducer = combineReducers({
  entries: entriesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
