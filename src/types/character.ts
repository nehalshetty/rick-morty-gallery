export interface CharacterBasicInfo {
  name: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: { name: string; url: string };
  origin: { name: string; url: string };
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface CharactersResp {
  status: number;
  data: {
    results: CharacterBasicInfo[];
  } | null;
}

export interface CharLocation{
  residents:string[];
  name: string;
  type: string;
  dimension: string
}