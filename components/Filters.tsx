import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { regions, types, sortBy } from '../helpers/filters';
import { region } from '../interfaces/cardInterfaces';
import { SetStateAction } from 'react';

interface Props {
  regionFiler: region;
  setRegionFilter: React.Dispatch<SetStateAction<region>>;
}

export const Filters: React.FC<Props> = ({ regionFiler, setRegionFilter }) => {
  const classes = useStyle();
  const changeRegionFilter = (event: React.SyntheticEvent) => {
    const region = regions.find(
      (region) => region.name === (event.target as HTMLInputElement).value
    );
    if (region) {
      setRegionFilter(region);
    }
  };
  return (
    <>
      <Grid
        className={classes.container}
        container
        spacing={0}
        justifyContent="center"
      >
        <Grid className={classes.item} item xs={12} sm={6} md={2}>
          <Typography gutterBottom>REGION</Typography>

          <select
            className={classes.subItem}
            value={regionFiler.name}
            onChange={changeRegionFilter}
          >
            {regions.map((region) => (
              <option key={region.name} value={region.name}>
                {region.name}&nbsp;({region.offset + 1}-
                {region.limit + region.offset})
              </option>
            ))}
          </select>
        </Grid>
        <Grid className={classes.item} item xs={12} sm={6} md={2}>
          <Typography gutterBottom>Type</Typography>

          <select className={classes.subItem} defaultValue={types[0]}>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Grid>
        <Grid className={classes.item} item xs={12} sm={6} md={2}>
          <Typography gutterBottom>SORT BY</Typography>

          <select className={classes.subItem} defaultValue={sortBy[0]}>
            {sortBy.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Grid>
        <Grid className={classes.item} item xs={12} sm={6} md={2}>
          <Typography gutterBottom>Search</Typography>
          <input className={classes.subItem} type="text" />
        </Grid>
      </Grid>
    </>
  );
};

const useStyle = makeStyles((theme: Theme) => ({
  container: {
    paddingTop: '3.1rem',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0 !important',
  },
  subItem: {
    width: '10vw',
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
  },
}));

export default Filters;
