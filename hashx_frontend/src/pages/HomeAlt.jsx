import React, { useRef } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Announcements from '../components/HomeAnnouncements/HomeAnnouncements';
import Events from '../components/HomeEvents/HomeEvents';
import MessMenu from '../components/HomeMessMenu/HomeMessMenu';
import TimeTable from '../components/HomeTimeTable/HomeTimeTable';
import CoursesCard from '../components/CoursesCard/CoursesCard';
import { useQuery, gql } from '@apollo/client';
import { userDataVar } from '../graphql/Cache';

const FIRSTNAME = gql`
query GetFirstName {
  cachedUserData @client{
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
    [theme.breakpoints.down('md')]: {
      marginTop: '0px',
    },
  },
  introductoryText: {
    fontSize: '45px',
    fontWeight: 'bolder',
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
      <Container fixed className={classes.container}>
        <br />
        <br />
        <h1 className={classes.introductoryText}>
          Hey <span style={{ color: '#898989' }}>{data.cachedUserData.firstName}</span>
        </h1>
        <br />
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6} xl={6}>
            <TimeTable />
          </Grid>
          <Grid item xs={12} lg={6} xl={6}>
            <CoursesCard />
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
