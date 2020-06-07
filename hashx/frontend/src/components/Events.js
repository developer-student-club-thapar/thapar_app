import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';
import Maps from './Maps';

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
}));

const Events = () => {
  const classes = useStyles();
  return (
    <>
      <Paper
        elevation={3}
        style={{
          //   width: "550px",
          borderRadius: '20px',
          textAlign: 'center',
          height: '500px',
          backgroundColor: '#2C3055',
          color: '#FBF9FF',
        }}
      >
        <br />
        <h1 style={{ display: 'inline-block' }}>
          <i
            className="fas fa-calendar-day fa-sm"
            style={{ display: 'inline-block' }}
          />
          {` `}
          Todays Events
        </h1>
        <Maps />
      </Paper>
    </>
  );
};

export default Events;
