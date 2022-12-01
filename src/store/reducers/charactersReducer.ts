import { createSlice } from '@reduxjs/toolkit';

import { getCharacters } from '../middlewares';

import { Characters } from 'api';

export type charactersReducerInitialStateType = Characters & {
  isLoading: boolean;
  errorMessage: string | null;
};

const initialState: charactersReducerInitialStateType = {
  info: {
    pages: null,
    count: 1,
    next: null,
    prev: null,
  },
  results: [],
  isLoading: false,
  errorMessage: null,
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCharacters.pending, state => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(getCharacters.rejected, state => {
        state.info = initialState.info;
        state.errorMessage = 'Unable to get list of characters';
        state.results = [];
        state.isLoading = false;
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.errorMessage = null;
        state.info = action.payload.info;
        state.results = action.payload.results;
        state.isLoading = false;
      });
  },
});

export const charactersReducer = charactersSlice.reducer;
