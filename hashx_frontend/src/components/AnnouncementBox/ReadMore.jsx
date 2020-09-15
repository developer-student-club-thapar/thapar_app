import React from 'react';
import { Grid, Divider, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles(() => ({
  btn: {
    borderRadius: '25px',
    height: '20px',
    width: '100%',
    background: '#FFFFFF',
    // boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
  },
  btnText: {
    fontSize: '8px',
    fontWeight: 'bold',
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '2px 10px',
  },
  arrowContainer: {
    marginBottom: '14px',
    marginLeft: '5px',
  },
}));

const CoursesCard = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.btn}>
      <Grid item xs={12} className={classes.btnContainer}>
        <p className={classes.btnText}>Explore</p>
        <div className={classes.arrowContainer}>
          <ArrowForwardIcon fontSize="inherit" className={classes.arrow} />
        </div>
      </Grid>
    </Grid>
  );
};

export default CoursesCard;
