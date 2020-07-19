import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTransition, useSpring, useChain, config } from 'react-spring';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {},
    [theme.breakpoints.up('sm')]: {},
    [theme.breakpoints.up('md')]: {},
    [theme.breakpoints.up('lg')]: {},
    [theme.breakpoints.up('xl')]: {},
  },
}));

const Overlay = () => {
  const [open, set] = useState(false);

  const props = useSpring({
    config: config.slow,
    from: {
      right: '0%',
      top: '0%',
      width: '0%',
      height: '100%',
      background: 'lightgreen',
    },
    to: {
      right: '0%',
      top: '0%',
      width: '100%',
      height: open ? '100%' : '0%',
      background: 'lightblue',
    },
  });
  const classes = userStyle();

  return <div></div>;
};

export default Overlay;
