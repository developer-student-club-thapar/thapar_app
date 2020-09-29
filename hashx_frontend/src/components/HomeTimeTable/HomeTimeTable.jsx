import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Flip from 'react-reveal/Flip';
import { secondaryColor, textColor } from '../../theme/theme';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import lightning from '../../assets/Home/Announcements/lightning.svg';
import TimeTableComponent from './TimeTableComp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'inline-block',
    [theme.breakpoints.only('xs')]: {
      fontSize: '30px',
    },
  },
  paperGrid: {
    borderRadius: '20px',
    textAlign: 'center',
    height: '500px',
    width: '100%',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
  },
  headingContainer: {
    borderRadius: '20px',
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    paddingTop: '15px',
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '5px',
      paddingRight: '15px',
      paddingLeft: '15px',
    },
  },
  headingText: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  tableHeader: {
    display: 'grid',
  },
  arrowContainer: {
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      top: '30px',
    },
  },
}));

const TimeTable = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={10}>
          <Paper elevation={3} className={classes.headingContainer}>
            <p className={classes.headingText}>Classes Today</p>
            <Grid item className={classes.arrowContainer}>
              <ArrowForwardIcon />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={2} container justify="flex-end">
          <img src={lightning} alt=" " />
        </Grid>
      </Grid>
      <Paper elevation={3} className={classes.paperGrid}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: '40px 10px',
          }}
        >
          <p style={{ fontWeight: 'bold' }}>Time</p>
          <p style={{ fontWeight: 'bold' }}>Subject</p>
          <p style={{ fontWeight: 'bold' }}>Type</p>
          <p style={{ fontWeight: 'bold' }}>Venue</p>
          <p style={{ fontWeight: 'bold' }}>Status</p>
        </div>
        <Flip top cascade>
          <Grid container justify="center" alignItems="center" spacing={3}>
            <TimeTableComponent />
            <TimeTableComponent />
            <TimeTableComponent />
            <TimeTableComponent />
          </Grid>
        </Flip>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10px',
          }}
        >
          <p>SEE MORE</p>
          <ExpandMoreIcon />
        </div>
      </Paper>
    </>
  );
};

export default TimeTable;
