import React from 'react';
import './Scroll.css';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      position: 'absolute',
      right: '60px',
      bottom: '30px',
      width: '24px',
      height: '45px',
      zIndex: '1',
    },
    [theme.breakpoints.up('xl')]: {
      position: 'absolute',
      right: '60px',
      bottom: '80px',
      width: '24px',
      height: '45px',
      zIndex: '1',
    },
  },
}));

const Scroll = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="mousey">
        <div className="scroller"></div>
      </div>
    </div>
  );
};

export default Scroll;
