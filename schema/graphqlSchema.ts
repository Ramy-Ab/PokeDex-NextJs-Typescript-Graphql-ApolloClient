import { gql } from '@apollo/client';
export const GET_POKEMONS = gql`
  query getpokemonsList($limit: Int!, $offset: Int!) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        url
        name
      }
    }
  }
`;

export const GET_POKEMONS_INFO = gql`
  query getpokemonsInfo($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
    }
  }
`;
