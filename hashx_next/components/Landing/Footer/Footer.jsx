import React from 'react';
import { Grid, Paper, Box, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import style from './Footer.module.css';
import Clock from 'react-digital-clock';
import Button from '@material-ui/core/Button';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// import svg from '../../../public/Footer/Wavey-Fingerprint.svg';

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    position: 'relative',
    // backgroundImage: `url(${svg})`,
    backgroundColor: '#a4c9d8',
    borderRadius: '0px',
    width: '100%',
  },
  heading: {
    color: '#000000',
    fontWeight: '700',
  },
  box: {
    paddingTop: '60px',
  },
  socialLinks: {
    color: '#000000',
    fontWeight: '700',
    textDecoration: 'none',
  },
  bottomBox: {
    paddingTop: '200px',
    paddingBottom: '50px',
  },
  copyrightText: {
    color: '#171313',
    fontWeight: '500',
    display: 'inline-block',
    paddingRight: '10px',
    [theme.breakpoints.only('xs')]: {
      fontSize: '14px',
    },
  },
  clock: {
    paddingLeft: '60%',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '0px',
    },
  },
  button: {
    borderRadius: '50%',
    height: '80px',
    width: '80px',
    [theme.breakpoints.only('xs')]: {
      height: '60px',
      width: '60px',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Grid container spacing={2}>
      <Paper elevation={0} className={`${classes.paper}`}>
        <Box px={5} className={classes.box}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4}>
              <h2 className={classes.heading}>Vexio</h2>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                  {' '}
                  <h2 className={style.socialLink}>Instagram</h2>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <h2 className={style.socialLink}>Twitter</h2>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                  <h2 className={style.socialLink}>Facebook</h2>
                </Grid>
                <Grid item xs={12} lg={6}>
                  {' '}
                  <h2 className={style.socialLink}>Reddit</h2>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}>
              <h2>
                <div className={classes.clock}>
                  <Clock />
                </div>
              </h2>
            </Grid>
          </Grid>
        </Box>
        <Box px={5} className={classes.bottomBox}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6} style={{ padding: 'auto' }}>
              <h4 className={classes.copyrightText}>© 2020 Vexio</h4>
              <h4 className={classes.copyrightText}>Legal</h4>
              <h4 className={classes.copyrightText}>Privacy</h4>
              <h4 className={classes.copyrightText}>Cookies</h4>
            </Grid>
            <Grid item xs={12} lg={6} style={{ textAlign: 'right' }}>
              <h4 className={classes.copyrightText}>Back To Top</h4>
              <Button
                variant="outlined"
                size="large"
                className={classes.button}
                onClick={scrollTop}
                style={{ outline: 'none' }}
              >
                <ExpandLessIcon fontSize="large" />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Footer;
