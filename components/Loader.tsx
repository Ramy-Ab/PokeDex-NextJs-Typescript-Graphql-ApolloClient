import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';

export default function Loader() {
  const classes = useStyle();
  return (
    <>
      <Grid className={classes.container} container>
        <Grid className={classes.item} item xs={12} md={12}>
          <Image
            width={100}
            height={100}
            src="https://leonidasesteban.github.io/maps-pair-programming/pikachu.gif"
            alt="loading-gif"
          ></Image>
        </Grid>
        <Grid className={classes.item} item xs={12} md={12}>
          <Typography> ...loading </Typography>
        </Grid>
      </Grid>
    </>
  );
}

const useStyle = makeStyles(() => ({
  container: {
    position: 'fixed',
    top: '40%',
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
