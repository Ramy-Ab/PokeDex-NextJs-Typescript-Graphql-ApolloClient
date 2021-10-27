export interface styleProps {
  colors: string[];
}

export interface region {
  name: string;
  limit: number;
  offset: number;
}
export interface pokemon {
  name: string;
  uurl: string;
}

export interface pokemonType {
  id: number;
  name: string;
  types: poketypes[];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

export interface poketypes {
  slot: string;
  type: {
    name: string;
    url: string;
  };
}

export type pokemonListType = pokemonType[];
