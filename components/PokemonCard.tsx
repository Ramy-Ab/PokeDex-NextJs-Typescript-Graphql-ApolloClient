import { Grid, Paper, Stack, Theme, Typography } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import { colorTypeGradients } from '../helpers/colors';
import MiniPokeImg from './MiniPokeImg';
import { useEffect, useState } from 'react';
import { styleProps } from '../interfaces/cardInterfaces';

const PokemonCard: React.FC<{ pokemon: any }> = ({ pokemon }) => {
  const [colors, setColors] = useState<string[]>([]);
  const types = pokemon.types.map((type: any) => {
    return type.type.name;
  });

  useEffect(() => {
    setColors(colorTypeGradients(types[0], types[1], 2));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const classes = useStyle({ colors });
  return (
    <>
      <Grid item xs={12} sm={6} md={3} className={classes.container}>
        <Paper className={clsx(classes.item, classes.card)} elevation={8}>
          <Stack spacing={2}>
            <Typography gutterBottom className={classes.id}>
              #{pokemon.id}
            </Typography>
            <Image
              src={pokemon.sprites.other.dream_world.front_default}
              alt="Logo"
              width={120}
              height={120}
            />
            <Stack spacing={1}>
              <Typography className={classes.id} gutterBottom>
                {' '}
                {pokemon.name}{' '}
              </Typography>
              <Grid container className={classes.miniImg}>
                {pokemon?.types.map((el: any, idx: number) => (
                  <Grid item key={idx}>
                    <MiniPokeImg idx={idx} pokeTypes={el.type.name} />
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Stack>
        </Paper>
      </Grid>
    </>
  );
};

export default PokemonCard;

const useStyle = makeStyles<Theme, styleProps>(() => ({
  card: {
    background: (props) =>
      `linear-gradient(${props.colors[0]}, ${props.colors[1]})`,
  },
  item: {
    height: '50vh',
    borderRadius: '20px',
  },
  id: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  miniImg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
}));
