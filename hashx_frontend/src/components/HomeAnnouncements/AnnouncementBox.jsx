import React from 'react';
import { Grid, Paper, Grow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { secondaryColor, textColor } from '../../theme/theme';
import Announcement from './Announcement';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import lightning from '../../assets/lightning.svg';
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  papergrid: {
    borderRadius: '20px',
    height: 'fit-content',
    padding: '0 0 2rem 0',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    [theme.breakpoints.only('xs')]: {
      height: 'fit-content',
      padding: '0 0 1rem 0',
    },
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
    [theme.breakpoints.down('sm')]: {
      padding: 'auto',
    },
  },
  headingText: {
    fontSize: '24px',
    letterSpacing: '1px',
    lineHeight: '36px',
    fontWeight: '900',
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.2rem',
      letterSpacing: 0,
    },
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
  lightningIcon: {
    height: 'auto',
    width: '1.9rem',
    objectFit: 'contain',
    '&:hover': {
      cursor: 'pointer',
    },
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
          <motion.img
            src={lightning}
            alt=" "
            className={classes.lightningIcon}
            whileHover={{ rotate: 360 }}
          />
        </Grid>
      </Grid>
      <Grow in timeout={2000}>
        <Paper elevation={3} className={classes.papergrid}>
          <Grid container spacing={0} className={classes.body}>
            <Announcement />
            <Announcement />
            <Announcement />
            <Announcement />
          </Grid>
        </Paper>
      </Grow>
    </>
  );
};

export default CoursesCard;
