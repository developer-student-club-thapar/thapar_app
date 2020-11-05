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
  all: {
    marginTop: '30px',
  },
  paperGrid: {
    borderRadius: '20px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    padding: '20px 20px',
    marginRight: '30px',
    marginTop: '5px',
    width: '650px',
  },
  headingText: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  eventsCard: {
    borderRadius: '17px',
    marginBottom: '10px',
    height: '130px',
    width: '400px',
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
      padding: '5px 15px',
    },
  },
  headingText: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  mainContainer: {
    padding: 10,
  },
  mainHeader: {
    marginBottom: '20px',
  },
  arrowContainer: {
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      top: '30px',
    },
  },
  eventHeading: {
    fontSize: '20px',
    fontWeight: '900',
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

const LargeComponent = ({ color }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={12}
      style={{ backgroundColor: color }}
      className={classes.eventsCard}
    >
      <div style={{ padding: '20px 20px', lineHeight: '10px' }}>
        <p className={classes.eventHeading}>DSC Event</p>
        <div style={{ lineHeight: '3px' }}>
          <p style={{ fontSize: '10px' }}>HacktoberFest</p>
          <p style={{ fontSize: '10px' }}>3:00 PM</p>
        </div>
      </div>
    </Grid>
  );
};

const TimeTable = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        justify="space-between"
        spacing={4}
        className={classes.all}
      >
        <Grid item xs={8} className={classes.mainHeader}>
          <Paper elevation={3} className={classes.headingContainer}>
            <div className={classes.headingText}>Events Today&nbsp;&nbsp;</div>
            <div style={{ margin: 'auto' }}>
              <ArrowForwardIcon />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={2} container justify="flex-end">
          <img
            src={lightning}
            alt=" "
            style={{
              position: 'relative',
              left: '-35px',
              top: '-10px',
            }}
          />
        </Grid>
      </Grid>
      <Paper elevation={3} className={classes.paperGrid}>
        <Grid container spacing={3}>
          <LargeComponent color={'#9999F1'} />
          <LargeComponent color={'#F35555'} />
          <LargeComponent color={'#F35555'} />
          <LargeComponent color={'#A12828'} />
        </Grid>

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
