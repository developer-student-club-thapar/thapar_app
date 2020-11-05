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
    padding: '15px',
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 'fit-content',
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
      <Grid container justify="space-between" spacing={6}>
        <Grid item xs={6} className={classes.mainHeader}>
          <Paper elevation={3} className={classes.headingContainer}>
            <div className={classes.headingText}>My Courses&nbsp;&nbsp;</div>
            <div style={{ margin: 'auto' }}>
              <ArrowForwardIcon />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={2} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
          <img src={lightning} alt=" " />
        </Grid>
      </Grid>
      <Paper elevation={3} className={classes.paperGrid}>
        <Flip top cascade>
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
        </Flip>
        <div className={classes.seemoreContainer}>
          <div className={classes.seemoreText}>See More</div>
          <div>
            <ExpandMoreIcon />
          </div>
        </div>
      </Paper>
    </>
  );
};

export default TimeTable;
