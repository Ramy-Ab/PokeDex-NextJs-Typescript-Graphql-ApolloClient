import { GitHub } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import logo from '../assets/images/pokeapi_256.png';
import CustomizedSwitches from '../components/SwitchTheme';
import React from 'react';

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3} className={classes.container}>
        <Grid className={classes.item} item xs={2}>
          <CustomizedSwitches />
        </Grid>
        <Grid className={classes.item} item xs={8}>
          <Image src={logo} alt="Logo" width={204} height={65} />
        </Grid>
        <Grid className={classes.item} item xs={2}>
          <GitHub fontSize="large" />
        </Grid>
      </Grid>
    </>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: '4rem',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  git: {
    height: '35px',
  },
}));
