export type Characters = {
  info: Info;
  results: Character[];
};

export type Info = {
  count: number;
  next: string;
  pages: number;
  prev: string;
};
export type Character = {
  created: string;
  episode: string[] | string;
  gender: 'female' | 'male' | 'genderless' | 'unknown';
  id: number;
  image: string;
  location: CharacterLocation;
  origin: CharacterOrigin;
  name: string;
  species: string;
  status: 'alive' | 'dead' | 'unknown';
  type: string;
  url: string;
};

export type CharacterLocation = {
  name: string;
  url: string;
};
export type CharacterOrigin = {
  name: string;
  url: string;
};
