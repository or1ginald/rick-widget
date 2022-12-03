import { RootStateType } from '../types';

import { charactersReducerInitialStateType } from 'store';

export const getCharactersSelector = (
  state: RootStateType,
): charactersReducerInitialStateType => state.characters;
