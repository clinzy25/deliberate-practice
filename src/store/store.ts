import { createStore } from 'redux';
import { combineReducers } from 'redux';
import listReducer from '../reducers/list_reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// const rootReducer = combineReducers({
//   list: listReducer,
// });

export type AppState = ReturnType<typeof listReducer>;

export const store = createStore(listReducer, composeWithDevTools());
