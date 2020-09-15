import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { secondaryColor, textColor } from '../../theme/theme';
import lightning from '../../assets/Home/Announcements/lightning.svg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Flip from 'react-reveal/Flip';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
  headingContainer: {
    borderRadius: '20px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    paddingTop: '15px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
  headingText: {
    fontSize: '24px',
    fontWeight: 'bold',
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
    marginBottom: '20px',
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
      <Grid container justify="space-between" spacing={4}>
        <Grid item xs={8} className={classes.mainHeader}>
          <Paper elevation={3} className={classes.headingContainer}>
            <p className={classes.headingText}>My Courses</p>
            <ArrowForwardIcon />
          </Paper>
        </Grid>
        <Grid item xs={2} container justify="flex-end">
          <img
            src={lightning}
            alt=" "
            style={{
              position: 'relative',
              left: '-40px',
            }}
          />
        </Grid>
      </Grid>
      <Paper elevation={3} className={classes.paperGrid}>
        <Flip top cascade>
          <Grid container spacing={3} className={classes.mainContainer}>
            {data.map((ele, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={12}
                  style={{ backgroundColor: ele.color }}
                  className={classes.coursesCard}
                >
                  <p style={{ color: 'white', fontWeight: 'bold' }}>
                    {ele.subject}
                  </p>
                </Grid>
              );
            })}
          </Grid>
        </Flip>
        <Grid container item xs={12} justify="center" alignItems="center">
          <p>See More</p>
          <ExpandMoreIcon
            style={{
              position: 'relative',
              top: '-5px',
              marginLeft: '10px',
            }}
          />
        </Grid>
      </Paper>
    </>
  );
};

export default TimeTable;
