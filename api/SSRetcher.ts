import { pokeInstance } from '../helpers/Axios';
import { pokemon } from '../interfaces/cardInterfaces';
import { client } from '../lib/apolloSSR';
import { GET_POKEMONS_INFO } from '../schema/graphqlSchema';

export const getPokemons = async (data: [] | undefined) => {
  const pokemonsAll: object[] = [];

  if (data) {
    console.log(`dataaaaaaaaaaaaaaaa`, data);
    await Promise.all(
      data.pokemons.results.map((pokemon: pokemon) => {
        null;
        return client
          .query({
            query: GET_POKEMONS_INFO,
            variables: {
              name: pokemon.name,
            },
          })
          .then((res) => {
            pokemonsAll.push(res.data.pokemon);
          });
        // pokeInstance
        //   .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        //   .then((data) => {
        //     pokemonsAll.push(data.data);
        //   });
      })
    );
  }
  return pokemonsAll;
};
