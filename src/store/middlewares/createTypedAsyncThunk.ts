import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppDispatch, RootStateType } from '../types';

export const createTypedAsyncThunk = createAsyncThunk.withTypes<{
  state: RootStateType;
  dispatch: AppDispatch;
  rejectValue: unknown;
  extra: unknown;
}>();
