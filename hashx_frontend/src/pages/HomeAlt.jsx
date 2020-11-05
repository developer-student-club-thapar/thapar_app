import React, { useRef } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Events from '../components/HomeEvents/HomeEvents';
import MessMenu from '../components/HomeMessMenu/HomeMessMenu';
import TimeTable from '../components/HomeTimeTable/HomeTimeTable';
import CoursesCard from '../components/HomeMyCourses/Courses';
import AnnouncementCard from '../components/HomeAnnouncements/AnnouncementBox';
import kid from '../assets/Home/kid.svg';
import EventsList from '../components/HomeEvents/HomeEventsList';
import Sponsor from '../components/HomeSponsor/Sponsor';
// import CoursesCard from '../components/CoursesCard/CoursesCard';
import { useQuery, gql } from '@apollo/client';
import { userDataVar } from '../graphql/Cache';
import SponsorBig from '../components/HomeSponsor/SponsorBig';

const FIRSTNAME = gql`
  query GetFirstName {
    cachedUserData @client {
      firstName
    }
  }
`;

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
    padding: 30,
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
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
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
  const { data, loading, error } = useQuery(FIRSTNAME);

  console.log(data, ' userdata');

  return (
    <>
      <CssBaseline />
      <div className={classes.container}>
        <br />
        <br />
        <h1 className={classes.introductoryText}>
          Hey{' '}
          <span style={{ color: '#898989' }}>
            {data.cachedUserData.firstName}
          </span>
        </h1>
        <br />
        <Grid container spacing={4}>
          <Grid item xs={12} lg={3} xl={5}>
            <TimeTable />
          </Grid>
          <Grid container item xs={12} lg={6} xl={7}>
            <Grid item xs={12} md={9}>
              <AnnouncementCard />
            </Grid>
            <Grid item xs={0} md={3} className={classes.imageContainer}>
              <img className={classes.kidImg} src={kid} />
            </Grid>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container spacing={4}>
          <Grid container item xl={5} direction="column">
            <Grid container item xs={12} lg={12} xl={12} spacing={4}>
              <Grid item xl={6}>
                <Sponsor />
              </Grid>
              <Grid item xl={6}>
                <MessMenu />
              </Grid>
            </Grid>
            <Grid item xs={12} lg={12} xl={12} spacing={4}>
              <EventsList />
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Grid container spacing={2} direction="column">
              <Grid item xs={12}>
                <CoursesCard />
              </Grid>
              <Grid item xs={12}>
                <SponsorBig />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <br />
        {/* <Grid container spacing={4} ref={eventsRef}>
          <Grid item xs={12} lg={12} xl={11}>
            <Events />
          </Grid>
        </Grid> */}
      </div>
    </>
  );
};

export default Home;
