export interface Character {
  id: number;
  name: string;
  status: 'alive' | 'dead' | 'unknown';
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  species: string;
  image: string;
  origin: {
    name: string;
    url: string;
  };
}

export interface CharactersApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}
