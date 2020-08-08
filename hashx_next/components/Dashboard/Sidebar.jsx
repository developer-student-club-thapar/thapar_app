import React from 'react';
import { Grid, Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import Link from 'next/link'

const useStyles = makeStyles(() => ({
  box: {
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  logo: {
    fontSize: '36px',
    fontWeight: 'bolder',
    color: '#C4C5D1',
  },
  listItemPrimary: {
    display: 'grid',
    placeItems: 'center',
    height: '150px',
  },
  listItem: {
    display: 'grid',
    placeItems: 'center',
    height: '150px',
    fontFamily: 'Lato',
    '&:hover': {
      backgroundColor: '#F0F0F3',
      cursor: 'pointer',
    },
  },
  logoIcons: {
    height: '70px',
    width: '70px',
    backgroundImage:
      'linear-gradient(224.38deg, #E9E9E9 5.75%, #E9E9E9 93.61%)',
    borderRadius: '20px',
    textAlign: 'center',
    display: 'grid',
    placeItems: 'center',
  },
  listText: {
    fontSize: '17px',
    color: '#ffffff',
    '&:hover': {
      color: '#00293B',
    },
  },
  listItemActive: {
    display: 'grid',
    placeItems: 'center',
    height: '150px',
    backgroundColor: '#F0F0F3',
    fontFamily: 'Lato',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  logoIconsActive: {
    height: '70px',
    width: '70px',
    backgroundImage:
      'linear-gradient(224.38deg, #E9E9E9 5.75%, #E9E9E9 93.61%)',
    borderRadius: '20px',
    textAlign: 'center',
    display: 'grid',
    placeItems: 'center',
    boxShadow:
      '10px 10px 30px rgba(174, 174, 192, 0.4), -10px -10px 30px #FFFFFF',
  },
  listTextActive: {
    fontSize: '17px',
    color: '#00293B',
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const router = useRouter();
  const path = router.pathname;
  return (
    <>
      <Box className={classes.box}>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.listItemPrimary}>
            <h1 className={classes.logo}>Vexio</h1>
          </Grid>
          <Grid
            item
            xs={12}
            className={
              path === '/dashboard/home'
                ? classes.listItemActive
                : classes.listItem
            }
            onClick={() => {
              router.push('/dashboard');
            }}
          >
            <Paper
              elevation={0}
              className={
                path === '/dashboard'
                  ? classes.logoIconsActive
                  : classes.logoIcons
              }
            >
              <i className="fas fa-book fa-2x" style={{ color: '#00293B' }} />
            </Paper>
            <h2
              className={
                path === '/dashboard/home'
                  ? classes.listTextActive
                  : classes.listText
              }
            >
              Home
            </h2>
          </Grid>
          <Grid item xs={12} className={classes.listItem}>
            <Paper elevation={0} className={classes.logoIcons}>
              <i className="fas fa-book fa-2x" style={{ color: '#00293B' }} />
            </Paper>
            <h2 className={classes.listText}>Courses</h2>
          </Grid>
          <Grid item xs={12} className={classes.listItem}>
            <Paper elevation={0} className={classes.logoIcons}>
              <i className="fas fa-book fa-2x" style={{ color: '#00293B' }} />
            </Paper>
            <Link href="/dashboard/timetable">
              <h2 className={classes.listText}>TimeTable</h2>
            </Link>
          </Grid>
          <Grid item xs={12} className={classes.listItem}>
            <Paper elevation={0} className={classes.logoIcons}>
              <i className="fas fa-book fa-2x" style={{ color: '#00293B' }} />
            </Paper>
            <h2 className={classes.listText}>Forums</h2>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Sidebar;
