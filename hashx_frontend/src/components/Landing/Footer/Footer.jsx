import React from 'react';
import { Grid, Paper, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import { Typography } from '@material-ui/core';
import './styles.css';
import Clock from 'react-digital-clock';
import Button from '@material-ui/core/Button';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#a4c9d8',
    borderRadius: '0px',
    width: '100%',
  },
  heading: {
    color: '#000000',
    fontWeight: '700',
  },
  box: {
    marginTop: '60px',
  },
  socialLinks: {
    color: '#000000',
    fontWeight: '700',
    textDecoration: 'none',
  },
  bottomBox: {
    marginTop: '200px',
    marginBottom: '50px',
  },
  copyrightText: {
    color: '#171313',
    fontWeight: '500',
    display: 'inline-block',
    marginRight: '10px',
    [theme.breakpoints.only('xs')]: {
      fontSize: '14px',
    },
  },
  clock: {
    marginLeft: '60%',
    [theme.breakpoints.down('md')]: {
      marginLeft: '0px',
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
    <>
      <Grid container spacing={2}>
        <Paper elevation={0} className={classes.paper}>
          <Box mx={5} className={classes.box}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={4}>
                <h2 className={classes.heading}>Vexio</h2>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Grid container spacing={2}>
                  <Grid item xs={12} lg={6}>
                    {' '}
                    <h2 className="socialLink">Instagram</h2>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <h2 className="socialLink">Twitter</h2>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} lg={6}>
                    <h2 className="socialLink">Facebook</h2>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    {' '}
                    <h2 className="socialLink">Reddit</h2>
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
          <Box mx={5} className={classes.bottomBox}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6} style={{ margin: 'auto' }}>
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
                >
                  <ExpandLessIcon fontSize="large" />
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default Footer;
