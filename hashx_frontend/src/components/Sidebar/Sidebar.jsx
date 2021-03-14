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
      position: 'relative',
      '&>h2': {
        color: '#00293B',
      },
    },
    '&:hover::after': {
      content: '""',
      position: 'absolute',
      backgroundColor: 'transparent',
      bottom: '100%',
      right: '0',
      height: '50px',
      width: '50px',
      borderBottomRightRadius: '60px',
      boxShadow: '0 20px 0 0 #F0F0F3',
    },
    '&:hover::before': {
      content: '""',
      position: 'absolute',
      backgroundColor: 'transparent',
      top: '150px',
      right: '0',
      height: '50px',
      width: '50px',
      borderTopRightRadius: '60px',
      boxShadow: '0 -20px 0 0 #F0F0F3',
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
    position: 'relative',
    backgroundColor: '#F0F0F3',
    fontFamily: 'Lato',
    '&:hover': {
      cursor: 'pointer',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      backgroundColor: 'transparent',
      bottom: '100%',
      right: '0',
      height: '50px',
      width: '50px',
      borderBottomRightRadius: '60px',
      boxShadow: '0 20px 0 0 #F0F0F3',
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      backgroundColor: 'transparent',
      top: '150px',
      right: '0',
      height: '50px',
      width: '50px',
      borderTopRightRadius: '60px',
      boxShadow: '0 -20px 0 0 #F0F0F3',
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
      path: '/dashboard',
      iconClassName: 'fas fa-home fa-2x',
    },
    {
      mainText: 'Courses',
      path: '/courses-overview',
      iconClassName: 'fas fa-book fa-2x',
    },
    {
      mainText: 'TimeTable',
      path: '/timetable',
      iconClassName: 'fas fa-calendar-alt fa-2x',
    },
    {
      mainText: 'Forums',
      path:
        '/forum/forum-details/RmlsZU5vZGU6MDAzZDIzZTgtM2QxOC00NGE1LWIwNTEtOWFjN2JhZDY1YWVl',
      iconClassName: 'fas fa-comments fa-2x',
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
