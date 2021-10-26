import Filters from '../components/Filters';
import Header from '../components/Header';
import PokemonContainer from '../components/PokemonContainer';
import Loader from '../components/Loader';
import { useFetch } from '../hooks/useFetch';
import { useState } from 'react';
import { regions } from '../helpers/filters';
import { Alert } from '@mui/material';
import { region } from '../interfaces/cardInterfaces';
import { useThemeMode } from '../contexts/ThemeModeContext';

export const Home: React.FC<{}> = ({}) => {
  const test = useThemeMode();
  console.log('theme in index: ', test);

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

          <PokemonContainer pokemons={pokemons} />
        </>
      )}
    </>
  );
};

export default Home;
