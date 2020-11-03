import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { secondaryColor, textColor } from '../../theme/theme';
import live from '../../assets/Home/TimeTable/live.svg';
import open from '../../assets/Home/TimeTable/open.svg';
import { motion } from 'framer-motion';

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
    transition: 'box-shadow 0.2s ease-in',
    '&:hover': {
      boxShadow: '-6px -6px 16px #fff, 15px 15px 16px #d1cdc7',
    },
  },
  tableText: {
    fontSize: '16px',
  },
  tableItemFlex: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  zoomIcon: {},
}));

const TimeTable = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={3} className={classes.paperGrid}>
        <Grid container justify="space-between" alignItems="center" spacing={2}>
          <Grid item xs={2}>
            <span className={classes.tableText}>8:00-8:40</span>
          </Grid>
          <Grid item xs={3}>
            <span className={classes.tableText}>UCS301</span>
          </Grid>
          <Grid item xs={2}>
            <span className={classes.tableText}>L</span>
          </Grid>
          <Grid item xs={2}>
            <div className={classes.tableItemFlex}>
              <div className={classes.tableText}>Zoom&nbsp;</div>
              <div>
                <img src={open} />
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.tableItemFlex}>
              <div className={classes.tableText}>Live&nbsp;</div>
              <div>
                <img src={live} />
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default TimeTable;
