import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { secondaryColor, textColor } from '../../theme/theme';
import sponsor from '../../assets/Home/Sponsor/sponsor.svg';

const useStyles = makeStyles((theme) => ({
  paperGrid: {
    borderRadius: '20px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    padding: '10px 20px',
    marginRight: '30px',
    marginTop: '30px',
    width: '100%',
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
        <Grid container spacing={3} justify="flex-start">
          <Grid item xs={8}>
            <p className={classes.headingText}>Sponsored</p>
          </Grid>
        </Grid>
        <div style={{ padding: '10px 50px' }}>
          <img
            style={{
              borderRadius: '10px',
              height: '100%',
              width: '100%',
            }}
            src={sponsor}
          />
        </div>
      </Paper>
    </>
  );
};

export default TimeTable;
