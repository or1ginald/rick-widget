import { $api, Characters, CharactersFilterType } from 'api';

export const characterAPI = {
  getCharacters(params: CharactersFilterType) {
    return $api.get<Characters>('character', { params });
  },
};
