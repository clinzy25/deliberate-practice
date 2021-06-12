import { createStore } from 'redux';
import { combineReducers } from 'redux';
import listReducer from '../reducers/list_reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  list: listReducer,
  firebase: firebaseReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());
