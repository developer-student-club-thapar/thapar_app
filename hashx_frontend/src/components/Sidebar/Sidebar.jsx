import React from 'react';
import { Grid, Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();
  const path = history.location.pathname;
  const pathHead = history.location.pathname.split('/')[1];
  const list = [
    {
      mainText: 'Home',
      path: '/dashboard/home',
      iconClassName: 'fas fa-book fa-2x',
    },
    {
      mainText: 'Courses',
      path: '/courses',
      iconClassName: 'fas fa-book fa-2x',
    },
    {
      mainText: 'TimeTable',
      path: '/dashboard/timetable',
      iconClassName: 'fas fa-book fa-2x',
    },
    {
      mainText: 'Forums',
      path: '/forum/forum-details',
      iconClassName: 'fas fa-book fa-2x',
    },
  ];
  return (
    <>
      {console.log(pathHead)}
      <Box className={classes.box}>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.listItemPrimary}>
            <h1 className={classes.logo}>Vexio</h1>
          </Grid>
          {list.map((item, index) => (
            <Grid
              item
              xs={12}
              className={
                path === `${item.path}`
                  ? classes.listItemActive
                  : classes.listItem
              }
              onClick={() => {
                history.push(`${item.path}`);
              }}
              key={index}
            >
              <Paper
                elevation={0}
                className={
                  path === `${item.path}`
                    ? classes.logoIconsActive
                    : classes.logoIcons
                }
              >
                <i
                  className={item.iconClassName}
                  style={{ color: '#00293B' }}
                />
              </Paper>
              <h2
                className={
                  path === `${item.path}`
                    ? classes.listTextActive
                    : classes.listText
                }
              >
                {item.mainText}
              </h2>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Sidebar;
