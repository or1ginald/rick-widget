import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { charactersReducer, charactersFilterReducer } from './reducers';

export const rootReducer = combineReducers({
  charactersFilter: charactersFilterReducer,
  characters: charactersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});
