import React from 'react';
import Nav from '../components/Nav';
import { Container, CssBaseline } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Timeline from '../components/Timetable/Timeline';

const useStyles = makeStyles((theme) => ({
  mainTitle: {
    textAlign: 'center',
  },
  mainText: {
    paddingTop: '20px',
    fontWeight: 'bold',
  },
  daysText: {
    backgroundColor: '#2C3055',
    color: '#ffffff',
    height: '50px',
  },
  buttonGrid: {
    marginRight: '0px',
  },
  button: {
    width: '200px',
  },
}));

const TimeTable = () => {
  const classes = useStyles();
  return (
    <>
      <Nav />
      <CssBaseline />
      <Grid
        container
        spacing={2}
        style={{ marginTop: '50px', height: '190px' }}
      >
        <Grid item xs={12} lg={12} xl={12}>
          <Paper
            elevation={0}
            style={{
              height: '200px',
              backgroundImage: 'linear-gradient(to right, #D04682 , #4A55EB)',
              color: '#FFFFFF',
            }}
          >
            <Container fixed>
              <Grid container spacing={2}>
                <Grid item xs={12} className={classes.mainTitle}>
                  <h1 className={classes.mainText}>Timetable</h1>
                </Grid>
                <Grid item xs={12} className={classes.mainTitle}>
                  <h3>Batch</h3>
                </Grid>
              </Grid>
            </Container>
          </Paper>
        </Grid>
      </Grid>
      <Container fixed>
        <Grid
          container
          spacing={4}
          style={{
            position: 'relative',
            bottom: '10px',
            justifyContent: 'space-around',
          }}
        >
          <Grid item xs={2} className={classes.buttonGrid}>
            <Button variant="contained" size="large" className={classes.button}>
              Monday
            </Button>
          </Grid>
          <Grid item xs={2} className={classes.buttonGrid}>
            <Button variant="contained" size="large" className={classes.button}>
              Tuesday
            </Button>
          </Grid>
          <Grid item xs={2} className={classes.buttonGrid}>
            <Button variant="contained" size="large" className={classes.button}>
              Wednesday
            </Button>
          </Grid>
          <Grid item xs={2} className={classes.buttonGrid}>
            <Button variant="contained" size="large" className={classes.button}>
              Thursday
            </Button>
          </Grid>
          <Grid item xs={2} className={classes.buttonGrid}>
            <Button variant="contained" size="large" className={classes.button}>
              Friday
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Timeline />
        </Grid>
      </Container>
    </>
  );
};

export default TimeTable;
