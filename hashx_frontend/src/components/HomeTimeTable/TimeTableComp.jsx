import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { secondaryColor, textColor } from '../../theme/theme';
import live from '../../assets/Home/TimeTable/live.svg';
import open from '../../assets/Home/TimeTable/open.svg';

const useStyles = makeStyles((theme) => ({
  paperGrid: {
    borderRadius: '20px',
    textAlign: 'center',
    width: '90%',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    marginBottom: '15px',
    padding: '20px 10px',
  },
  lastGrid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const TimeTable = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={3} className={classes.paperGrid}>
        <Grid container justify="space-between" alignItems="center" spacing={2}>
          <Grid item xs={2}>
            <p style={{ fontSize: '13px' }}>8:00-8:40</p>
          </Grid>
          <Grid item xs={3}>
            <p>UCS301</p>
          </Grid>
          <Grid item xs={1}>
            <p>L</p>
          </Grid>
          <Grid item xs={2} className={classes.lastGrid}>
            <p>Zoom</p>
            <div style={{ position: 'relative', top: '-6px', left: '4px' }}>
              <img src={open} />
            </div>
          </Grid>
          <Grid item xs={3} className={classes.lastGrid}>
            <p>Live</p>
            <div style={{ position: 'relative', top: '-4px' }}>
              <img src={live} />
            </div>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default TimeTable;
