import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Lottie from 'react-lottie';
import ErrorAnimation from '../../assets/error.json';
import { motion } from 'framer-motion';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((themes) => ({
  container: {
    display: 'grid',
    placeItems: 'center',
    minHeight: '80vh',
    height: '80vh',
  },
  errorText: {
    fontWeight: 'bolder',
    [themes.breakpoints.only('xs')]: {
      fontSize: '1.6rem',
    },
  },
  button: {
    backgroundColor: '#00293B',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#00293B',
      color: '#ffffff',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  textContainer: {
    marginTop: '-100px',
    [themes.breakpoints.only('xs')]: {
      marginTop: 0,
    },
  },
}));

const Error = () => {
  const classes = useStyles();
  const history = useHistory();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ErrorAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <>
      <Grid container spacing={0} className={classes.container}>
        <Grid item xs={12}>
          <Lottie options={defaultOptions} height={300} width={300} />
        </Grid>
        <Grid item xs={12} className={classes.textContainer}>
          <h2 className={classes.errorText}>
            Something went <span style={{ color: '#898989' }}>wrong!</span>
          </h2>
        </Grid>
        <Grid item xs={12} className={classes.textContainer}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<HomeIcon />}
              onClick={() => {
                history.push('/dashboard/home');
              }}
            >
              Back to Dashboard
            </Button>
          </motion.div>
        </Grid>
      </Grid>
    </>
  );
};

export default Error;
