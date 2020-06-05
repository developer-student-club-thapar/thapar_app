import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, CssBaseline, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchBar from '../components/SearchBar';
import Notifications from '../components/Notifications';
import HomeImg from '../assets/HomeImg.svg';
import Courses from '../components/Courses';
import Announcements from '../components/Announcements';
import Events from '../components/Events';
import MessMenu from '../components/MessMenu';
import TimeTable from '../components/TimeTable';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container fixed style={{ paddingTop: '20px' }}>
        <Grid container spacing={2} style={{}}>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <h1>Home</h1>
          </Grid>
          <Grid item xs={12} lg={3} xl={3} style={{ marginLeft: '200px' }}>
            <SearchBar />
          </Grid>
          <Grid item lg={1} xl={1} style={{ paddingLeft: '20px' }}>
            <Notifications />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          style={{ marginTop: '20px', height: '190px' }}
        >
          <Grid item xs={12} lg={12} xl={12}>
            <Paper
              elevation={3}
              style={{
                height: '160px',
                backgroundColor: '#EFE8FC',
                color: '#4C1AAF',
                borderRadius: '20px',
              }}
            >
              <h1
                style={{
                  paddingTop: '10px',
                  paddingLeft: '10px',
                  fontWeight: 'bold',
                }}
              >
                Hello Lorem!
              </h1>
              <h5 style={{ paddingLeft: '10px', paddingTop: '10px' }}>
                Hope you are having a great day!
              </h5>
            </Paper>
            <Hidden smDown>
              <HomeImg
                style={{
                  position: 'relative',
                  bottom: '180px',
                  left: '1000px',
                }}
              />
            </Hidden>
          </Grid>
        </Grid>
        <br />
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
          <Grid item lg={6} xl={6}>
            <MessMenu />
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container spacing={4}>
          <Grid item xs={12} lg={12} xl={12}>
            <Events />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
