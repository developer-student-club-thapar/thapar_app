import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import image from '../../assets/Home/Announcements/image.svg';
import ReadMore from './ReadMore';
import ReadMoreModal from './ReadMoreModal';

const useStyles = makeStyles(() => ({
  firstCont: {
    flexDirection: 'row',
  },
  text: {
    fontSize: '12px',
    lineHeight: '14px',
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
  const [modal, setModal] = useState(false);
  return (
    <Grid container item xs={12} className={classes.mainContainer}>
      <Grid item xs={10}>
        <Grid container direction="row" spacing={2}>
          <img src={image} />
          <Grid container item xs={8} alignItems="center">
            <span className={classes.text}>
              Perfect for Small & Medium Businesses in India ,Samsung Launches
              New Range of UHD Business TVs
            </span>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2} className={classes.btnContainer}>
        <ReadMore setModal={setModal} />
        <ReadMoreModal modal={modal} setModal={setModal} />
      </Grid>
    </Grid>
  );
};

export default CoursesCard;
