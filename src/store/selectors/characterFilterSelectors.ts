import { RootStateType } from '../types';

import { CharactersFilterType } from 'api';

export const getPageFilterSelector = (
  state: RootStateType,
): CharactersFilterType['page'] => state.charactersFilter.page;

export const getStatusSelector = (state: RootStateType): CharactersFilterType['status'] =>
  state.charactersFilter.status;

export const getNameSelector = (state: RootStateType): CharactersFilterType['name'] =>
  state.charactersFilter.name;

export const getSpeciesSelector = (
  state: RootStateType,
): CharactersFilterType['species'] => state.charactersFilter.species;

export const getGenderSelector = (state: RootStateType): CharactersFilterType['gender'] =>
  state.charactersFilter.gender;
