import * as React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import PokemonCard from './PokemonCard';
import { Container } from '@mui/material';

const PokemonContainer: React.FC<{ pokemons: object[] }> = ({ pokemons }) => {
  const classes = useStyle();
  return (
    <Container fixed>
      <Grid className={classes.container} container spacing={{ xs: 5, md: 5 }}>
        {pokemons.map((pokemon: object, index: number) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </Grid>
    </Container>
  );
};

export default PokemonContainer;

const useStyle = makeStyles(() => ({
  container: {
    paddingTop: '3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    height: '50vh',
  },
}));
