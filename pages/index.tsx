import Filters from '../components/Filters';
import Header from '../components/Header';
import PokemonContainer from '../components/PokemonContainer';
import Loader from '../components/Loader';
import { useFetch } from '../hooks/useFetch';
import { useState } from 'react';
import { regions } from '../helpers/filters';
import { Alert } from '@mui/material';
import { region } from '../interfaces/cardInterfaces';
import { client } from '../lib/apolloSSR';
import { GET_POKEMONS, GET_POKEMONS_INFO } from '../schema/graphqlSchema';
import { getPokemons } from '../api/SSRetcher';

export const Home: React.FC<{
  PokemonsList: [];
  Pokemon: {};
  pokemonsAll: [];
}> = ({ PokemonsList, Pokemon, pokemonsAll }) => {
  console.log('PokemonsList  :>> ', PokemonsList);
  console.log('PokemonsINfo  :>> ', Pokemon);
  console.log('PokemonsAll  :>> ', pokemonsAll);
  const [regionFiler, setRegionFilter] = useState<region>(regions[0]);

  const { pokemons, loading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${regionFiler.limit}&offset=${regionFiler.offset}`
  );

  return (
    <>
      {loading && <Loader />}
      {error && !pokemons && (
        <Alert severity="error">there is an error refresh your page </Alert>
      )}
      {pokemons && !loading && !error && (
        <>
          {console.log('pokemons :>> ', pokemons)}
          <Header />
          <Filters
            regionFiler={regionFiler}
            setRegionFilter={setRegionFilter}
          />

          <PokemonContainer pokemons={pokemonsAll} />
        </>
      )}
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data, error, loading } = await client.query({
    query: GET_POKEMONS,
    variables: {
      limit: 5,
      offset: 1,
    },
  });

  const result = await client.query({
    query: GET_POKEMONS_INFO,
    variables: {
      name: 'caterpie',
    },
  });
  const pokemonsAll = await getPokemons(data);

  return {
    props: {
      PokemonsList: data,
      Pokemon: result.data,
      pokemonsAll: pokemonsAll,
    },
  };
};
