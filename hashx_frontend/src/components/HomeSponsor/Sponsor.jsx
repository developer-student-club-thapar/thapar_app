import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { secondaryColor, textColor } from '../../theme/theme';
import sponsor from '../../assets/Home/Sponsor/sponsor.svg';
import rocket from '../../assets/rocket.png';

const useStyles = makeStyles((theme) => ({
  paperGrid: {
    borderRadius: '20px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    padding: '10px 20px',
    marginRight: '30px',
    // marginTop: '30px',
    width: '100%',
  },
  headingText: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  rocket: {
    width: '50%',
    objectFit: 'contain',
  },
}));

const TimeTable = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={3} className={classes.paperGrid}>
        <Grid container spacing={3} justify="flex-start">
          <Grid item xs={8}>
            <p className={classes.headingText}>Sponsored</p>
          </Grid>
        </Grid>
        <img
          style={{
            borderRadius: '10px',
            height: '100%',
            width: '100%',
            objectFit: 'contain',
          }}
          src={sponsor}
        />
      </Paper>
      <br />
      <Grid container spacing={2} justify="flex-end">
        <Grid item xs={10}>
          <img src={rocket} className={classes.rocket} alt="rocket" />
        </Grid>
      </Grid>
    </>
  );
};

export default TimeTable;
