import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { secondaryColor, textColor } from '../../theme/theme';
import sponsor from '../../assets/Home/Sponsor/sponsor.svg';
import { Grow } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paperGrid: {
    borderRadius: '20px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    padding: '10px 20px',
    width: '95%',
  },
  headingText: {
    fontSize: '24px',
    fontWeight: 'bold',
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.2rem',
      letterSpacing: 0,
    },
  },
  rocket: {
    width: '50%',
    objectFit: 'contain',
  },
}));

const SponsorBig = () => {
  const classes = useStyles();
  return (
    <>
      <Grow in timeout={4000}>
        <Paper elevation={3} className={classes.paperGrid}>
          <Grid container spacing={3} justify="flex-start">
            <Grid item xs={8}>
              <p className={classes.headingText}>Sponsored</p>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <img
              style={{
                borderRadius: '10px',
                height: '80%',
                width: '75%',
                objectFit: 'contain',
              }}
              src={sponsor}
              alt="sponsor"
            />
          </Grid>
          <br />
        </Paper>
      </Grow>

      <br />
    </>
  );
};

export default SponsorBig;
