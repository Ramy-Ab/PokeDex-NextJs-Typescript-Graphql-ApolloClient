import { useEffect, useState } from 'react';
import { pokeInstance } from '../helpers/Axios';
import { pokemon, pokemonListType } from '../interfaces/cardInterfaces';

interface returnObject {
  pokemons: pokemonListType | undefined;
  loading: boolean | null;
  error: boolean | null;
}

export const useFetch = (url: string): returnObject => {
  const [result, setResult] = useState<[] | undefined>();
  const [pokemons, setPokemons] = useState<pokemonListType | undefined>();
  const [loading, setLoading] = useState<boolean | null>(false);
  const [error, setError] = useState<boolean | null>(false);

  const getPokemons = async (
    result: [] | undefined,
    pokemonsAll: pokemonListType
  ) => {
    if (result) {
      await Promise.all(
        result.map((pokemon: pokemon) => {
          return pokeInstance
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then((result) => {
              pokemonsAll.push(result.data);
            });
        })
      );
    }
    return pokemonsAll;
  };

  const showPokemons = async (pokemonsAll: pokemonListType) => {
    try {
      const data: pokemonListType = await getPokemons(result, pokemonsAll);
      await setPokemons(data);
      await setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    pokeInstance
      .get(url)
      .then((res) => {
        setResult(res.data.results);
        console.log('result :>> ', res.data.results);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [url]);

  useEffect(() => {
    if (result) {
      var pokemonsAll: pokemonListType = [];
      showPokemons(pokemonsAll);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  return { pokemons, loading, error };
};
