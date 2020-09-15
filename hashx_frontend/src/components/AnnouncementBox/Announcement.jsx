import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import image from '../../assets/Home/Announcements/image.svg';
import ReadMore from './ReadMore';
import { secondaryColor, textColor } from '../../theme/theme';

const useStyles = makeStyles(() => ({
  firstCont: {
    flexDirection: 'row',
  },
  text: {
    fontSize: '9px',
    lineHeight: '11px',
    fontWeight: 'bold',
  },
  mainContainer: {
    marginTop: '30px',
    marginBottom: '30px',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const CoursesCard = (props) => {
  const classes = useStyles();
  return (
    <Grid container item xs={12} className={classes.mainContainer}>
      <Grid item xs={10}>
        <Grid container direction="row">
          <img src={image} />
          <Grid container item xs={8} alignItems="center">
            <p className={classes.text}>
              Perfect for Small & Medium Businesses in India ,Samsung Launches
              New Range of UHD Business TVs
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2} className={classes.btnContainer}>
        <ReadMore />
      </Grid>
    </Grid>
  );
};

export default CoursesCard;
