import React, { useContext } from 'react';
import { Avatar, Grid, Hidden, makeStyles, Paper } from '@material-ui/core';
import { secondaryColor } from '../../theme/theme';
import { ReactComponent as BellIcon } from '../../assets/bell.svg';
import { ReactComponent as MessageIcon } from '../../assets/message.svg';
import { getSidebarTrigger } from '@mui-treasury/layout';
import styled from 'styled-components';
import { UserContext } from '../../context/UserProvider';

const SidebarTrigger = getSidebarTrigger(styled);

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: 30,
    backgroundColor: `${secondaryColor}`,
    padding: '1rem 1.6rem 1rem 1.6rem',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    fontSize: '24px',
    lineHeight: '36px',
    fontWeight: 'bolder',
    display: 'grid',
    placeItems: 'center',
    width: 'fit-content',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-around',
    },
  },
  input: {
    backgroundColor: `${secondaryColor}`,
    border: 'none',
    borderRadius: '98px',
    boxShadow: '-6px -6px 16px #fff, 6px 6px 16px #d1cdc7',
    padding: '1rem',
    transition: 'all 0.1s ease-in',
    width: '260px',
    '&:focus': {
      outline: 'none',
      width: '300px',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      width: '50%',
      '&:focus': {
        width: 'calc(50% + 40px)',
      },
    },
  },
  navIcons: {
    margin: 'auto 0 auto 0',
  },
  drawer: {
    [theme.breakpoints.only('lg', 'xl')]: {
      display: 'none',
    },
  },
}));

const Nav = () => {
  const classes = useStyles();
  const { user } = useContext(UserContext);

  return (
    <>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          style={{
            marginTop: '1.4rem',
            backgroundColor: `${secondaryColor}`,
          }}
        >
          <Grid container spacing={2} justify="space-between">
            <Grid item xs={3}>
              <Paper elevation={2} className={classes.paper}>
                <div>
                  <span style={{ color: '#A3A3A3' }}>Welcome</span>{' '}
                  {user.username}
                </div>
              </Paper>
              <SidebarTrigger sidebarId="primarySidebar" />
            </Grid>
            <Grid item xs={6} lg={4}>
              <div className={classes.flexRow}>
                <input
                  type="search"
                  className={classes.input}
                  placeholder="Search"
                  name="search"
                  id="search"
                />

                <span className={classes.navIcons}>
                  <BellIcon />
                </span>
                <span className={classes.navIcons}>
                  <MessageIcon />
                </span>
                <span className={classes.navIcons}>
                  <Avatar alt="profile" />
                </span>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Nav;
