import { useEffect, useState } from 'react';
import { pokeInstance } from '../helpers/Axios';

interface returnObject {
  pokemons: object[] | undefined;
  loading: boolean | null;
  error: boolean | null;
}

interface pokemon {
  name: string;
}

export const useFetch = (url: string): returnObject => {
  const [result, setResult] = useState<[] | undefined>();
  const [pokemons, setPokemons] = useState<object[] | undefined>();
  const [loading, setLoading] = useState<boolean | null>(false);
  const [error, setError] = useState<boolean | null>(false);

  const getPokemons = async (result: [] | undefined, pokemonsAll: object[]) => {
    if (result) {
      await Promise.all(
        result.map((pokemon: pokemon) => {
          null;
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

  const showPokemons = async (pokemonsAll: object[]) => {
    try {
      const data = await getPokemons(result, pokemonsAll);
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
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [url]);

  useEffect(() => {
    if (result) {
      var pokemonsAll: object[] = [];
      showPokemons(pokemonsAll);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  return { pokemons, loading, error };
};
