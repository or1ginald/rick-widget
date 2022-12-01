import { RootStateType } from '../types';

import { charactersReducerInitialStateType } from 'store';

export const getCharactersSelector = (
  state: RootStateType,
): charactersReducerInitialStateType => state.characters;

export const getCharactersErrorMessageSelector = (state: RootStateType): string | null =>
  state.characters.errorMessage;
export const getCharactersIsLoadingSelector = (state: RootStateType): string | null =>
  state.characters.errorMessage;
