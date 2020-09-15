import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { secondaryColor, textColor } from '../../theme/theme';
import sponsor from '../../assets/Home/Sponsor/sponsor.svg';
import lightning from '../../assets/Home/Announcements/lightning.svg';

const useStyles = makeStyles((theme) => ({
  paperGrid: {
    borderRadius: '20px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    padding: '20px 20px',
    marginRight: '30px',
  },
  headingText: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
}));

const TimeTable = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={3} className={classes.paperGrid}>
        <Grid container alignItems="center" justify="space-around" spacing={3}>
          <Grid item xs={8}>
            <p className={classes.headingText}>Sponsored</p>
          </Grid>
          <Grid item xs={2} container>
            <img
              src={lightning}
              alt=" "
              style={{
                position: 'relative',
                top: '-5px',
              }}
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} alignItems="center" justify="center">
          <img
            style={{
              borderRadius: '10px',
              height: '200px',
              width: '200px',
            }}
            src={sponsor}
          />
        </Grid>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10px',
          }}
        >
          <p>Know More</p>
        </div>
      </Paper>
    </>
  );
};

export default TimeTable;
