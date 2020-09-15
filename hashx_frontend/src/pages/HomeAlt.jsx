import React, { useRef } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Announcements from '../components/HomeAnnouncements/HomeAnnouncements';
import Events from '../components/HomeEvents/HomeEvents';
import MessMenu from '../components/HomeMessMenu/HomeMessMenu';
import TimeTable from '../components/HomeTimeTable/HomeTimeTable';
import CoursesCard from '../components/CoursesCard/CoursesCard';
import AnnouncementCard from '../components/HomeAnnouncementBox/AnnouncementBox';
import kid from '../assets/Home/kid.svg';
import Sponsor from '../components/Sponsor/Sponsor';

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
    [theme.breakpoints.down('md')]: {
      marginTop: '0px',
    },
  },
  introductoryText: {
    fontSize: '45px',
    fontWeight: 'bolder',
  },
  imageContainer: {
    padding: '10px',
    height: '100%',
  },
  kidImg: {
    height: '370px',
    width: '150px',
    position: 'relative',
    top: '160px',
  },
}));

const Home = () => {
  const classes = useStyles();
  const eventsRef = useRef(null);
  return (
    <>
      <CssBaseline />
      <Container fixed className={classes.container}>
        <br />
        <br />
        <h1 className={classes.introductoryText}>
          Hey <span style={{ color: '#898989' }}>Lorem</span>
        </h1>
        <br />
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6} xl={6}>
            <TimeTable />
          </Grid>
          <Grid container item xs={12} lg={6} xl={6}>
            <Grid item xs={9}>
              <AnnouncementCard />
            </Grid>
            <Grid item xs={3} className={classes.imageContainer}>
              <img className={classes.kidImg} src={kid} />
            </Grid>
          </Grid>
        </Grid>
        <br />
        <br />
        {/* <Grid container spacing={4}>
          <Grid item xs={12} lg={6} xl={6}>
            <Announcements />
          </Grid>
          <Grid item lg={6} xl={6} md={12}>
            <MessMenu />
          </Grid>
        </Grid> */}
        <Grid container spacing={4}>
          <Grid container item xs={6}>
            <Grid item xs={6} lg={6} xl={6}>
              <Sponsor />
            </Grid>
            <Grid item xs={6} lg={6} xl={6}>
              <MessMenu />
            </Grid>
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
