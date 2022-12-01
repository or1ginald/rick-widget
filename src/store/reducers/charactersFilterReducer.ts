import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { CharactersFilterType } from 'api';

const initialState: CharactersFilterType = {
  page: 1,
  status: '',
  name: '',
  species: '',
  type: '',
  gender: '',
};

const charactersFilterSlice = createSlice({
  name: 'charactersFilter',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    resetFilters: () => initialState,
    setStatus: (state, action: PayloadAction<CharactersFilterType['status']>) => {
      state.status = action.payload;
    },
    setGender: (state, action: PayloadAction<CharactersFilterType['gender']>) => {
      state.gender = action.payload;
    },
    setStringTypeFilter: (
      state,
      action: PayloadAction<{
        filter: 'name' | 'species' | 'type';
        newValue: string;
      }>,
    ) => {
      state[action.payload.filter] = action.payload.newValue;
    },
  },
});

export const charactersFilterReducer = charactersFilterSlice.reducer;

export const { setStatus, setStringTypeFilter, setGender, setPage, resetFilters } =
  charactersFilterSlice.actions;
