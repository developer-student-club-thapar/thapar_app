import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Maps from './Maps';
import { secondaryColor, textColor } from '../../theme/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridItem: {
    width: 'auto',
  },
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

const Events = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={3} className={classes.paperGrid}>
        <br />
        <h1 className={classes.title}>
          <i
            className="fas fa-calendar-day fa-sm"
            style={{ display: 'inline-block' }}
          />{' '}
          Today's Events
        </h1>
        <Maps />
      </Paper>
    </>
  );
};

export default Events;
