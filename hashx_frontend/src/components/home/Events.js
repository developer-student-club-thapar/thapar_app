import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Maps from './Maps';
import { secondaryColor } from '../../theme/theme';

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
}));

const Events = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Paper
        elevation={3}
        style={{
          //   width: "550px",
          borderRadius: '20px',
          textAlign: 'center',
          height: '500px',
          backgroundColor: `${secondaryColor}`,
          color: '#FBF9FF',
        }}
      >
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
    </Fragment>
  );
};

export default Events;
