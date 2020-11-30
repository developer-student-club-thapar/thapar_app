import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { secondaryColor, textColor } from '../../theme/theme';
import lightning from '../../assets/lightning.svg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { motion } from 'framer-motion';
import { Grow } from '@material-ui/core';

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
    lineHeight: '36px',
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.2rem',
      letterSpacing: 0,
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
  },
  coursesCard: {
    borderRadius: '17px',
    marginBottom: '10px',
    height: '130px',
  },
  mainContainer: {
    padding: '10px 10px',
  },
  mainHeader: {
    marginBottom: '0',
  },
  subjects: {
    color: 'white',
    fontWeight: '900',
    fontSize: '20px',
  },
  seemoreText: {
    fontWeight: 900,
    fontSize: '20px',
  },
  seemoreContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
  },
  main: {
    [theme.breakpoints.only('xs')]: {
      justifyContent: 'stretch',
    },
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

const TimeTable = () => {
  const classes = useStyles();
  const data = [
    {
      subject: 'OPERATING SYSTEMS',
      color: '#4378DB',
    },
    {
      subject: 'COMPUTER NETWORKS',
      color: '#FDCD55',
    },
    {
      subject: 'NUMERICAL ANALYSIS',
      color: '#F35555',
    },
    {
      subject: 'ENGINEERING MATERIALS',
      color: '#A12828',
    },
  ];
  return (
    <>
      <Grid
        container
        justify="space-between"
        spacing={6}
        className={classes.main}
      >
        <Grid item xs={8} lg={6} xl={6} className={classes.mainHeader}>
          <Paper elevation={3} className={classes.headingContainer}>
            <div className={classes.headingText}>My Courses&nbsp;&nbsp;</div>
            <div style={{ margin: 'auto' }}>
              <ArrowForwardIcon />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={2} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
          <motion.img
            src={lightning}
            alt=" "
            className={classes.lightningIcon}
            whileHover={{ rotate: 360 }}
          />
        </Grid>
      </Grid>
      <Grow in timeout={4000}>
        <Paper elevation={3} className={classes.paperGrid}>
          <Grid container spacing={4} className={classes.mainContainer}>
            {data.map((ele, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={12}
                  style={{ backgroundColor: ele.color }}
                  className={classes.coursesCard}
                >
                  <p className={classes.subjects}>{ele.subject}</p>
                </Grid>
              );
            })}
          </Grid>

          <div className={classes.seemoreContainer}>
            <div className={classes.seemoreText}>See More</div>
            <div>
              <ExpandMoreIcon />
            </div>
          </div>
        </Paper>
      </Grow>
    </>
  );
};

export default TimeTable;
