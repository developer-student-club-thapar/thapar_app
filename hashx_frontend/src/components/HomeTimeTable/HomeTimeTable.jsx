import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Hidden } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';
import { secondaryColor, textColor } from '../../theme/theme';

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
    backgroundColor: `${secondaryColor}`,
    color: `${textColor}`,
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
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
      <Paper elevation={3} className={classes.paperGrid}>
        <IconButton
          color="inherit"
          style={{
            height: '35px',
            float: 'right',
          }}
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Paper elevation={0} style={{ width: '' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <h5 style={{ margin: 'auto' }}>
                <i className="fas fa-eye" /> View More
              </h5>
            </Link>
          </Paper>
        </Popover>
        <br />
        <br />
        <div style={{ textAlign: 'center' }}>
          <h1 className={classes.title}>
            <i
              className="fas fa-calendar-alt fa-sm"
              style={{ display: 'inline-block' }}
            />{' '}
            Timetable
          </h1>
        </div>
        <Flip top cascade>
          <Grid container spacing={3}>
            <Grid item xs={4} style={{ textAlign: 'center' }}>
              <h3
                style={{
                  fontWeight: 'bold',
                }}
              >
                Time
              </h3>
              <Hidden only="xs">
                <h4>8am-9am</h4>
                <h4>9am-10am</h4>
                <h4>10am-11am</h4>
                <h4>11am-12pm</h4>
                <h4>12pm-1pm</h4>
                <h4>1pm-2pm</h4>
                <h4>2pm-3pm</h4>
                <h4>3pm-4pm</h4>
                <h4>4pm-5pm</h4>
              </Hidden>
              <Hidden smUp>
                <h5>8am-9am</h5>
                <h5>9am-10am</h5>
                <h5>10am-11am</h5>
                <h5>11am-12pm</h5>
                <h5>12pm-1pm</h5>
                <h5>1pm-2pm</h5>
                <h5>2pm-3pm</h5>
                <h5>3pm-4pm</h5>
                <h5>4pm-5pm</h5>
              </Hidden>
            </Grid>

            <Grid item xs={4} style={{ textAlign: 'center' }}>
              <h3
                style={{
                  fontWeight: 'bold',
                }}
              >
                Subject
              </h3>
              <Hidden only="xs">
                <h4>UCS101 L</h4>
                <h4>UCS101 L</h4>
                <h4>UCS101 L</h4>
                <h4>UCS101 L</h4>
                <h4>UCS101 L</h4>
                <h4>UCS101 L</h4>
                <h4>UCS101 L</h4>
                <h4>UCS101 L</h4>
                <h4>UCS101 L</h4>
              </Hidden>
              <Hidden smUp>
                <h5>UCS101 L</h5>
                <h5>UCS101 L</h5>
                <h5>UCS101 L</h5>
                <h5>UCS101 L</h5>
                <h5>UCS101 L</h5>
                <h5>UCS101 L</h5>
                <h5>UCS101 L</h5>
                <h5>UCS101 L</h5>
                <h5>UCS101 L</h5>
              </Hidden>
            </Grid>
            <Grid item xs={4} style={{ textAlign: 'center' }}>
              <h3
                style={{
                  fontWeight: 'bold',
                }}
              >
                Venue
              </h3>
              <Hidden only="xs">
                <h4>LT101</h4>
                <h4>LT101</h4>
                <h4>LT101</h4>
                <h4>LT101</h4>
                <h4>LT101</h4>
                <h4>LT101</h4>
                <h4>LT101</h4>
                <h4>LT101</h4>
                <h4>LT101</h4>
              </Hidden>
              <Hidden smUp>
                <h5>LT101</h5>
                <h5>LT101</h5>
                <h5>LT101</h5>
                <h5>LT101</h5>
                <h5>LT101</h5>
                <h5>LT101</h5>
                <h5>LT101</h5>
                <h5>LT101</h5>
                <h5>LT101</h5>
              </Hidden>
            </Grid>
          </Grid>
        </Flip>
      </Paper>
    </>
  );
};

export default TimeTable;
