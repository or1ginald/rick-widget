import { createTypedAsyncThunk } from './createTypedAsyncThunk';

import { characterAPI } from 'api';

export const getCharacters = createTypedAsyncThunk(
  'characters/getCharacters',
  async (_, thunkAPI) => {
    const { gender, status, species, name, type, page } =
      thunkAPI.getState().charactersFilter;
    const response = await characterAPI.getCharacters({
      gender,
      page,
      species,
      name,
      status,
      type,
    });
    return response.data;
  },
);
