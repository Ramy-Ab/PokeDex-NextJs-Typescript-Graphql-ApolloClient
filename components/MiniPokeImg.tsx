import { Theme, Tooltip, Zoom } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { colorTypeGradients } from '../helpers/colors';
import { styleProps } from '../interfaces/cardInterfaces';

interface Props {
  idx: number;
  pokeTypes: string;
}

export default function MiniPokeImg({ idx, pokeTypes }: Props) {
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    setColors(colorTypeGradients(pokeTypes, pokeTypes, 2));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const classes = useStyle({ colors });
  const img = `https://pokedex-react-mui.netlify.app/${pokeTypes}.png`;
  return (
    <>
      {pokeTypes && (
        <Tooltip TransitionComponent={Zoom} key={idx} title={pokeTypes} arrow>
          <div className={classes.outer}>
            <Image
              className={classes.img}
              src={img}
              alt="Logo"
              width={20}
              height={20}
            />
          </div>
        </Tooltip>
      )}
    </>
  );
}

const useStyle = makeStyles<Theme, styleProps>(() => ({
  img: {},
  outer: {
    background: (props) => props.colors[0],
    boxShadow: (props) => `0 0 20px ${props.colors[0]} `,
    borderRadius: '100%',
    height: '40px',
    width: '40px',
    marginRight: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
