import React from 'react';
import { Grid, Divider, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { secondaryColor, textColor } from '../../theme/theme';
import Announcement from './Announcement';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import lightning from '../../assets/Home/Announcements/lightning.svg';
import { Flip } from 'react-reveal';

const useStyles = makeStyles(() => ({
  papergrid: {
    borderRadius: '20px',
    // textAlign: 'center',
    height: '500px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
  },
  headingContainer: {
    borderRadius: '20px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    padding: '15px',
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 'fit-content',
  },
  headingText: {
    fontSize: '24px',
    letterSpacing: '1px',
    lineHeight: '36px',
    fontWeight: '900',
  },
  team: {
    borderRadius: '40px',
    height: '270px',
    background: '#f0f0f3',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
  },
  body: {
    padding: '5px 20px',
  },
  title: {
    fontSize: '20px',
    display: 'inline-block',
  },
}));

const CoursesCard = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={10}>
          <Paper elevation={3} className={classes.headingContainer}>
            <div className={classes.headingText}>Announcements&nbsp;</div>
            <div style={{ margin: 'auto' }}>
              <ArrowForwardIcon />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={2} container justify="flex-end">
          <img src={lightning} alt=" " />
        </Grid>
      </Grid>
      <Paper elevation={3} className={classes.papergrid}>
        <Flip top cascade>
          <Grid container spacing={0} className={classes.body}>
            <Announcement />
            <Announcement />
            <Announcement />
            <Announcement />
          </Grid>
        </Flip>
      </Paper>
    </>
  );
};

export default CoursesCard;
