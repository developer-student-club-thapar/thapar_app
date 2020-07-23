import React, { Fragment, useRef } from 'react';
import { Container, CssBaseline, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Courses from '../components/home/Courses';
import Announcements from '../components/home/Announcements';
import Events from '../components/home/Events';
import MessMenu from '../components/home/MessMenu';
import TimeTable from '../components/home/TimeTable';
import Nav from '../components/Nav';
import { secondaryColor, tertiaryColor } from '../theme/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    marginTop: '-100px',
    [theme.breakpoints.down('md')]: {
      marginTop: '0px',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const eventsRef = useRef(null);
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
              height: '160px',
              backgroundImage: `${tertiaryColor}`,
              color: '#FFFFFF',
            }}
          >
            <Container fixed>
              <h1
                style={{
                  paddingTop: '10px',
                  paddingLeft: '10px',
                  fontWeight: 'bold',
                }}
              >
                Hey Lorem, Welcome Back!
              </h1>
            </Container>
          </Paper>
        </Grid>
      </Grid>
      <Hidden mdDown>
        <Container fixed>
          <Grid
            container
            spacing={4}
            style={{ position: 'relative', bottom: '100px' }}
          >
            <Grid item lg={3} xl={3}>
              <Paper
                elevation={0}
                style={{
                  height: '160px',
                  backgroundColor: `${secondaryColor}`,
                  borderRadius: '20px',
                }}
              >
                <Paper
                  elevation={0}
                  style={{
                    height: '70px',
                    width: '70px',
                    backgroundImage:
                      'linear-gradient(to bottom right, #7C73F0, #405AF9)',
                    borderRadius: '20px',
                    marginTop: '40px',
                    marginLeft: '20px',
                    display: 'inline-block',
                    textAlign: 'center',
                  }}
                >
                  <i
                    className="fas fa-book fa-2x"
                    style={{ color: '#FBF9FF', marginTop: '20px' }}
                  />
                </Paper>
                <h4
                  style={{
                    marginLeft: '120px',
                    marginTop: '-50px',
                    color: '#FBF9FF',
                    fontWeight: 'bold',
                  }}
                >
                  Courses
                </h4>
              </Paper>
            </Grid>
            <Grid item lg={3} xl={3}>
              <a href="#events">
                <Paper
                  elevation={0}
                  style={{
                    height: '160px',
                    backgroundColor: `${secondaryColor}`,
                    borderRadius: '20px',
                  }}
                >
                  <Paper
                    elevation={0}
                    style={{
                      height: '70px',
                      width: '70px',
                      backgroundImage:
                        'linear-gradient(to bottom right, #FA7087, #F5405F)',
                      borderRadius: '20px',
                      marginTop: '40px',
                      marginLeft: '20px',
                      display: 'inline-block',
                      textAlign: 'center',
                    }}
                  >
                    <i
                      className="fas fa-calendar-day fa-2x"
                      style={{ color: '#FBF9FF', marginTop: '20px' }}
                    />
                  </Paper>
                  <h4
                    style={{
                      marginLeft: '100px',
                      marginTop: '-50px',
                      color: '#FBF9FF',
                      fontWeight: 'bold',
                    }}
                  >
                    Today's Events
                  </h4>
                </Paper>
              </a>
            </Grid>
            <Grid item lg={3} xl={3}>
              <Paper
                elevation={0}
                style={{
                  height: '160px',
                  backgroundColor: `${secondaryColor}`,
                  borderRadius: '20px',
                }}
              >
                {' '}
                <Paper
                  elevation={0}
                  style={{
                    height: '70px',
                    width: '70px',
                    backgroundImage:
                      'linear-gradient(to bottom right, #37B88F, #12A767)',
                    borderRadius: '20px',
                    marginTop: '40px',
                    marginLeft: '20px',
                    display: 'inline-block',
                    textAlign: 'center',
                  }}
                >
                  <i
                    className="fas fa-utensils fa-2x"
                    style={{ color: '#FBF9FF', marginTop: '20px' }}
                  />
                </Paper>
                <h4
                  style={{
                    marginLeft: '100px',
                    marginTop: '-50px',
                    color: '#FBF9FF',
                    fontWeight: 'bold',
                  }}
                >
                  Mess Menu
                </h4>
              </Paper>
            </Grid>
            <Grid item lg={3} xl={3}>
              <Paper
                elevation={0}
                style={{
                  height: '160px',
                  backgroundColor: `${secondaryColor}`,
                  borderRadius: '20px',
                }}
              >
                <Paper
                  elevation={0}
                  style={{
                    height: '70px',
                    width: '70px',
                    backgroundImage:
                      'linear-gradient(to bottom right, #F2931F, #FF5E54)',
                    borderRadius: '20px',
                    marginTop: '40px',
                    marginLeft: '20px',
                    display: 'inline-block',
                    textAlign: 'center',
                  }}
                >
                  <i
                    className="fas fa-calendar-alt fa-2x"
                    style={{ color: '#FBF9FF', marginTop: '20px' }}
                  />
                </Paper>
                <h4
                  style={{
                    marginLeft: '100px',
                    marginTop: '-50px',
                    color: '#FBF9FF',
                    fontWeight: 'bold',
                  }}
                >
                  Time Table
                </h4>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Hidden>
      <Container fixed className={classes.container}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6} xl={6}>
            <TimeTable />
          </Grid>
          <Grid item xs={12} lg={6} xl={6}>
            <Courses />
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6} xl={6}>
            <Announcements />
          </Grid>
          <Grid item lg={6} xl={6} md={12}>
            <MessMenu />
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container spacing={4} ref={eventsRef}>
          <Grid item xs={12} lg={12} xl={12}>
            <Events />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
