import { $api, CharactersResponseType, CharactersFilterType } from 'api';

export const characterAPI = {
  getCharacters(params: CharactersFilterType) {
    return $api.get<CharactersResponseType>('character', { params });
  },
};
